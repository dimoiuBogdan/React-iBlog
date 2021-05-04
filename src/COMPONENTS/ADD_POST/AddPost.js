import Navbar from "../HOMEPAGE/Section Elements/Navbar";
import useClickOutside from "../../HOOKS/useClickOutside";
import { useState } from "react";

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

// # H1 , ## H2, ### H3, **text** bold, ** italic, ```text``` code, [text](link)
const AddPost = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  // Used id's so I can work with them in writePanel.js
  const [availableTags] = useState([
    { text: "Coding", id: 0 },
    { text: "Tech", id: 1 },
    { text: "Crypto", id: 2 },
    { text: "Stocks", id: 3 },
    { text: "Resources", id: 4 },
  ]);

  const [titleError, setTitleError] = useState("");
  const [subtitleError, setSubtitleError] = useState("");
  const [contentError, setContentError] = useState("");

  const [activePanel, setActivePanel] = useState("Write");

  const {
    ref,
    isVisible: showHeadingMenu,
    setIsVisible: setShowHeadingMenu,
  } = useClickOutside(false);

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

  return (
    <div className="w-full min-h-screen bg-blue-50 bg-opacity-75">
      <Navbar solid />
      <div className="lg:max-w-4xl container w-full mx-auto pt-20">
        <div className="flex items-center justify-between mb-8 mt-4">
          <label className="mr-8 font-medium text-lg text-gray-500 hover:bg-gray-200 rounded-md p-1 cursor-pointer transition-all">
            <PhotoIcon />
            <span>Add Cover Photo</span>
            <input type="file" className="hidden" />
          </label>
          <button className="font-medium text-xl text-gray-500 shadow-md px-3 py-1 rounded-md transition-all hover:shadow-lg">
            <AddBoxIcon />
            Post
          </button>
        </div>
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
          <div>
            <span className="relative">
              <FormatSizeIcon
                ref={ref}
                onClick={() => setShowHeadingMenu(!showHeadingMenu)}
                className="text-gray-500 cursor-pointer rounded-md ml-2 hover:bg-gray-200"
              />
              {showHeadingMenu && (
                <div className="absolute bg-blue-50 z-20 text-lg shadow-lg rounded-sm top-7 overflow-hidden">
                  <h2 className="py-1 pl-2 pr-12 transition-all cursor-pointer hover:bg-blue-100">
                    H1
                  </h2>
                  <h2 className="py-1 pl-2 pr-12 transition-all cursor-pointer hover:bg-blue-100">
                    H2
                  </h2>
                  <h2 className="py-1 pl-2 pr-12 transition-all cursor-pointer hover:bg-blue-100">
                    H3
                  </h2>
                </div>
              )}
            </span>
            <FormatBoldIcon className="text-gray-500 cursor-pointer rounded-md ml-2 hover:bg-gray-200" />
            <FormatItalicIcon className="text-gray-500 cursor-pointer rounded-md ml-2 hover:bg-gray-200" />
            <CodeIcon className="text-gray-500 cursor-pointer rounded-md ml-2 hover:bg-gray-200" />
            <LinkIcon className="text-gray-500 cursor-pointer rounded-md ml-2 hover:bg-gray-200" />
          </div>
        </div>
        {activePanel === "Write" ? (
          <WritePanel
            tags={tags}
            setTags={setTags}
            availableTags={availableTags}
            updateContent={updateContent}
            contentError={contentError}
            content={content}
          />
        ) : activePanel === "Preview" ? (
          <PreviewPanel />
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
