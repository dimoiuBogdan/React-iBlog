import Navbar from "../HOMEPAGE/Section Elements/Navbar";
import useClickOutside from "../../HOOKS/useClickOutside";
import { useEffect, useState } from "react";

// Icons
import PhotoIcon from "@material-ui/icons/Photo";
import AddBoxIcon from "@material-ui/icons/AddBox";
import CreateIcon from "@material-ui/icons/Create";
import VisibilityIcon from "@material-ui/icons/Visibility";
import HelpIcon from "@material-ui/icons/Help";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatSizeIcon from "@material-ui/icons/FormatSize";
import CodeIcon from "@material-ui/icons/Code";
import LinkIcon from "@material-ui/icons/Link";
import WritePanel from "./WritePanel";
import PreviewPanel from "./PreviewPanel";
import GuidePanel from "./GuidePanel";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";

const AddPost = ({ user, storage }) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [tags, setTags] = useState([]);
  const [imageCover, setImageCover] = useState("");
  // Preview & publish content. Content after it was parsed (** , **** , ``````)
  const [contentToPublish, setContentToPublish] = useState("");
  const [postDate] = useState(new Date().getTime());
  const [author] = useState(user.displayName);
  const [authorID] = useState(user.uid);

  // Writing section content ( unprocessed )
  const [content, setContent] = useState("");
  // Used id's so I can work with them in writePanel.js
  const [availableTags] = useState([
    { text: "Coding", id: 0 },
    { text: "Tech", id: 1 },
    { text: "Crypto", id: 2 },
    { text: "Stocks", id: 3 },
    { text: "Resources", id: 4 },
  ]);
  const [textareaRef, setTextareaRef] = useState(null);

  const [titleError, setTitleError] = useState("");
  const [subtitleError, setSubtitleError] = useState("");
  const [contentError, setContentError] = useState("");

  const [activePanel, setActivePanel] = useState("Write");

  const {
    ref,
    isVisible: showHeadingMenu,
    setIsVisible: setShowHeadingMenu,
  } = useClickOutside(false);

  const getImageFromInput = async (e) => {
    const selectedFile = e.target.files[0];
    const allowedTypes = ["image/png", "image/jpeg"];

    // Upload files variables
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(selectedFile.name);

    if (selectedFile && allowedTypes.includes(selectedFile.type)) {
      // Upload files function
      await fileRef.put(selectedFile);
      // Get files function
      setImageCover(
        await fileRef.getDownloadURL().catch((err) => console.log(err))
      );
    } else if (!allowedTypes.includes(selectedFile.type))
      alert("File type not supported");
    else if (!selectedFile) alert("Please choose a file");
  };

  const addContentFromBarButtons = (addedContent) => {
    const mouseStartPos = textareaRef.selectionStart;
    const mouseEndPos = textareaRef.selectionEnd;
    // Add text where your mouse is in the textarea
    const updatedContent =
      content.substring(0, mouseStartPos) +
      addedContent +
      content.substring(mouseEndPos, content.length);
    setContent(updatedContent);
    textareaRef.focus();
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const updateTitle = (e) => {
    setTitle(e.target.value);
    title.length < 10 || title.length > 76
      ? setTitleError("Title must be between 10 and 76 characters long")
      : setTitleError("");
  };

  const updateSubtitle = (e) => {
    setSubtitle(e.target.value);
    subtitle.length < 10 || subtitle.length > 76
      ? setSubtitleError("Subtitle must be between 10 and 76 characters long")
      : setSubtitleError("");
  };

  const updateContent = (e) => {
    setContent(e.target.value);
    content.length < 700
      ? setContentError("Content must be at least 700 characters long")
      : setContentError("");
  };

  const replaceCharactersWithTags = () => {
    const htmlText = content
      .replace(/^###(.*$)/gim, "<h3>$1</h3>")
      .replace(/^##(.*$)/gim, "<h2>$1</h2>")
      .replace(/^#(.*$)/gim, "<h1>$1</h1>")
      .replace(/^-(.*$)/gim, "<li>$1</li>")
      .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>")
      // s is to search on new lines too
      .replace(/```(.*)```/gis, "<pre><code>$1</code></pre>")
      .replace(/\*(.*)\*/gim, "<i>$1</i>")
      .replace(/\[(.*?)\]\((.*?)\)/gim, "<a target='_blank' href='$2'>$1</a>");

    setContentToPublish(htmlText);
  };

  const checkForPostData = () => {
    const db = firebase.firestore();
    const randomID = db.collection("all-blogs").doc().id;
    const allPostData = {
      title,
      subtitle,
      tags,
      image: imageCover,
      content: contentToPublish,
      date: postDate,
      author,
      authorID,
      id: randomID,
    };

    // Every data must be different than default
    const isOkay =
      // Check for every item in the allPostData object to have a value
      Object.values(allPostData).every((data) => data) &&
      !titleError &&
      !subtitleError &&
      !contentError &&
      tags.length;
    if (isOkay) {
      // Add Post to DB
      const batch = db.batch();
      const allBlogsRef = db.collection("all-blogs").doc(randomID);
      batch.set(allBlogsRef, allPostData).commit();
      addPostToMyPostsInDB(allPostData);
      // Set fields and data to initial value ( empty )
      setTitle("");
      setSubtitle("");
      setTags([]);
      setImageCover("");
      setContentToPublish("");
      setContent("");
    } else alert("Fill all the fields");
  };

  const addPostToMyPostsInDB = (allPostData) => {
    const db = firebase.firestore();
    const currentUserRef = db.collection("users").doc(user.uid);
    currentUserRef
      .get()
      .then((doc) => {
        currentUserRef.update({
          myPosts: [...doc.data().myPosts, allPostData],
        });
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="w-full min-h-screen bg-blue-50 bg-opacity-75">
      <Navbar solid />
      <div className="lg:max-w-4xl container w-full mx-auto pt-20">
        <div className="flex items-center justify-between mb-8 mt-4">
          <label className="mr-8 font-medium text-lg text-gray-500 hover:bg-gray-200 rounded-md p-1 cursor-pointer transition-all">
            <PhotoIcon />
            <span>Add Cover Photo</span>
            <input
              onChange={getImageFromInput}
              type="file"
              className="hidden"
            />
          </label>
          <button
            onClick={checkForPostData}
            className="font-medium text-xl text-gray-500 shadow-md px-3 py-1 rounded-md transition-all hover:shadow-lg"
          >
            <AddBoxIcon />
            Post
          </button>
        </div>
        {imageCover && (
          <img
            className="w-full object-cover mb-4 relative h-40rem flex flex-col items-center justify-center"
            src={imageCover}
            alt="cover"
          />
        )}
        <input
          type="text"
          className="w-full bg-transparent py-2 font-medium focus:outline-none text-3xl text-gray-600"
          placeholder="Title..."
          onChange={updateTitle}
          value={title}
        />
        <p className="text-red-500">{titleError}</p>
        <input
          type="text"
          className="w-full bg-transparent py-2 focus:outline-none text-2xl text-gray-600"
          placeholder="Enter Subtitle..."
          onChange={updateSubtitle}
          value={subtitle}
        />
        <p className="text-red-500">{subtitleError}</p>
        <div className="my-6 shadow-lg p-2 border-gray-200 border-2 rounded-md flex items-center justify-between">
          <div className="flex items-center font-medium text-gray-500">
            <h3
              onClick={() => {
                setActivePanel("Write");
              }}
              className="mr-2 flex items-center cursor-pointer transition-all hover:bg-gray-200 px-1 rounded-md"
            >
              <CreateIcon fontSize="small" />
              Write
            </h3>
            <h3
              onClick={() => {
                setActivePanel("Preview");
              }}
              className="mr-2 flex items-center cursor-pointer transition-all hover:bg-gray-200 px-1 rounded-md"
            >
              <VisibilityIcon fontSize="small" />
              Preview
            </h3>
            <h3
              onClick={() => {
                setActivePanel("Guide");
              }}
              className="mr-2 flex items-center cursor-pointer transition-all hover:bg-gray-200 px-1 rounded-md"
            >
              <HelpIcon fontSize="small" />
              Guide
            </h3>
          </div>
          {activePanel === "Write" && (
            <div>
              <span className="relative" ref={ref}>
                <FormatSizeIcon
                  onClick={() => setShowHeadingMenu(!showHeadingMenu)}
                  className="text-gray-500 cursor-pointer rounded-md ml-2 hover:bg-gray-200"
                />
                {showHeadingMenu && (
                  <div className="absolute bg-blue-50 z-20 text-lg shadow-lg rounded-sm top-7 overflow-hidden">
                    <h2
                      onClick={() => addContentFromBarButtons("# ")}
                      className="py-1 pl-2 pr-12 transition-all cursor-pointer hover:bg-blue-100"
                    >
                      H1
                    </h2>
                    <h2
                      onClick={() => addContentFromBarButtons("## ")}
                      className="py-1 pl-2 pr-12 transition-all cursor-pointer hover:bg-blue-100"
                    >
                      H2
                    </h2>
                    <h2
                      onClick={() => addContentFromBarButtons("### ")}
                      className="py-1 pl-2 pr-12 transition-all cursor-pointer hover:bg-blue-100"
                    >
                      H3
                    </h2>
                  </div>
                )}
              </span>
              <FormatBoldIcon
                onClick={() => addContentFromBarButtons("**boldText**")}
                className="text-gray-500 cursor-pointer rounded-md ml-2 hover:bg-gray-200"
              />
              <FormatItalicIcon
                onClick={() => addContentFromBarButtons(" *italicText* ")}
                className="text-gray-500 cursor-pointer rounded-md ml-2 hover:bg-gray-200"
              />
              <CodeIcon
                onClick={() => addContentFromBarButtons("```code```")}
                className="text-gray-500 cursor-pointer rounded-md ml-2 hover:bg-gray-200"
              />
              <LinkIcon
                onClick={() => addContentFromBarButtons(" [text](url) ")}
                className="text-gray-500 cursor-pointer rounded-md ml-2 hover:bg-gray-200"
              />
            </div>
          )}
        </div>
        {activePanel === "Write" ? (
          <WritePanel
            tags={tags}
            setTags={setTags}
            availableTags={availableTags}
            updateContent={updateContent}
            contentError={contentError}
            content={content}
            setTextareaRef={setTextareaRef}
            replaceCharactersWithTags={replaceCharactersWithTags}
          />
        ) : activePanel === "Preview" ? (
          <PreviewPanel
            content={content}
            setContentToPublish={setContentToPublish}
            contentToPublish={contentToPublish}
            subtitle={subtitle}
            replaceCharactersWithTags={replaceCharactersWithTags}
          />
        ) : activePanel === "Guide" ? (
          <GuidePanel />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default AddPost;
