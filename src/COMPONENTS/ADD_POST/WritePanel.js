import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useRef, useState } from "react";

import useClickOutside from "../../HOOKS/useClickOutside";
// # H1 , ## H2, ### H3, **text** bold, ** italic, ```text``` code, [text](link)
const WritePanel = ({
  contentError,
  updateContent,
  content,
  tags,
  setTags,
  availableTags,
  setTextareaRef,
}) => {
  const [errorModal, setErrorModal] = useState("");

  const {
    ref,
    isVisible: showTagsMenu,
    setIsVisible: setShowTagsMenu,
  } = useClickOutside(false);

  const updateTags = (index) => {
    let clickedTagText = availableTags.filter((tag) => tag.id === index)[0]
      .text;
    if (tags.length < 4)
      tags.some((tag) => tag.text === clickedTagText) === false
        ? setTags([...tags, { text: clickedTagText, id: index }])
        : displayError("You already chose this tag");
    else displayError("Maximum 4 tags");
  };

  // Show the error modal and hide it after 3 seconds
  const displayError = (error) => {
    setErrorModal(error);
    setTimeout(() => {
      setErrorModal("");
    }, 3000);
  };

  const handleTagHover = (id) => {
    const hoveredTag = tags.filter((tag) => tag.id === id)[0];
    setTags(
      tags.map((tag) => {
        tag === hoveredTag
          ? (tag.hovered = !tag.hovered)
          : (tag.hovered = false);
        return tag;
      })
    );
  };

  const deleteTag = (id) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  return (
    <div>
      <div className="flex items-center py-2 mb-4 text-xl font-medium text-gray-400">
        {tags.map((tag) => (
          <p
            key={tag.id}
            className="bg-gray-600 text-center w-28 mr-5 rounded-md text-gray-200 cursor-pointer"
            onClick={() => deleteTag(tag.id)}
            onMouseEnter={() => {
              handleTagHover(tag.id);
            }}
            onMouseLeave={() => {
              handleTagHover(tag.id);
            }}
          >
            {!tag.hovered ? tag.text : "X"}
          </p>
        ))}
        <div ref={ref} className="relative ml-3">
          <div
            onClick={() => setShowTagsMenu(!showTagsMenu)}
            className={`bg-gray-600 select-none px-3 py-1 transition-all text-gray-200 cursor-pointer ${
              showTagsMenu ? "rounded-t-md " : "rounded-md delay-500"
            }`}
          >
            Add Tags
            <KeyboardArrowDownIcon
              className={`transform ${showTagsMenu ? "rotate-180" : ""}`}
            />
          </div>
          <div
            className={` ${
              showTagsMenu ? "max-h-96" : "max-h-0"
            } absolute transform left-1/2 overflow-hidden transition-all duration-500 w-full -translate-x-1/2 bg-gray-600 text-white rounded-b-md`}
          >
            {availableTags.map((availableTags, index) => (
              <p
                onClick={() => {
                  updateTags(index);
                }}
                key={index}
                className="py-1 transition-all cursor-pointer hover:bg-gray-500 px-3"
              >
                {availableTags.text}
              </p>
            ))}
          </div>
        </div>
      </div>
      {errorModal && (
        <p className="text-red-500 mb-4 fixed right-10 bottom-10 text-xl shadow-lg p-2 px-8 rounded-md bg-red-100 font-medium">
          {errorModal}
        </p>
      )}
      <p className="text-red-500 ml-2">{contentError}</p>
      <textarea
        ref={setTextareaRef}
        placeholder="Tell your story..."
        className="w-full min-h-screen bg-transparent resize-none py-2 text-xl leading-10 px-3 text-gray-500 focus:outline-none"
        value={content}
        onChange={updateContent}
      ></textarea>
    </div>
  );
};

export default WritePanel;
