import Navbar from "../HOMEPAGE/Section Elements/Navbar";
import useClickOutside from "../../HOOKS/useClickOutside";
import { useState } from "react";

// Icons
import PhotoIcon from "@material-ui/icons/Photo";
import TitleIcon from "@material-ui/icons/Title";
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

// Titlu - Minim 10 caractere maxim 76
// Subtitlu - Minim 10, maxim 76
// Text - Minim 700
// # H1 , ## H2, ### H3, **text** bold, ** italic, ```text``` code, [text](link)
const AddPost = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");

  const [activePanel, setActivePanel] = useState("Write");

  const {
    ref,
    isVisible: showHeadingMenu,
    setIsVisible: setShowHeadingMenu,
  } = useClickOutside(false);

  return (
    <div className="w-full min-h-screen bg-blue-50 bg-opacity-75">
      <Navbar solid />
      <div className="lg:max-w-4xl container w-full mx-auto pt-20">
        <div className="flex items-center justify-between mb-8 mt-4">
          <button className="mr-8 font-medium text-lg text-gray-500 hover:bg-gray-200 rounded-md p-1 transition-all">
            <PhotoIcon />
            Add Cover Photo
          </button>
          <button className="font-medium text-lg text-gray-500 shadow-md p-1 rounded-md transition-all hover:shadow-lg">
            <AddBoxIcon />
            Post
          </button>
        </div>
        <input
          type="text"
          className="w-full bg-transparent p-2 font-medium focus:outline-none text-3xl text-gray-600"
          placeholder="Title..."
        />
        <input
          type="text"
          className="w-full bg-transparent p-2 focus:outline-none text-2xl text-gray-600"
          placeholder="Enter Subtitle..."
        />
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
          <WritePanel />
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
