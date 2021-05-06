import React, { useEffect } from "react";

const PreviewPanel = ({
  content,
  setContentToPublish,
  contentToPublish,
  subtitle,
}) => {
  const replaceCharactersWithTags = () => {
    const htmlText = content
      .replace(/^###(.*$)/gim, "<h3>$1</h3>")
      .replace(/^##(.*$)/gim, "<h2>$1</h2>")
      .replace(/^#(.*$)/gim, "<h1>$1</h1>")
      .replace(/^-(.*$)/gim, "<li>$1</li>")
      .replace(/\*\*(.*)\*\*/gim, "<b>$1</b>")
      .replace(/\*(.*)\*/gim, "<i>$1</i>")
      .replace(/\[(.*?)\]\((.*?)\)/gim, "<a target='_blank' href='$2'>$1</a>")
      .replace(/^\t{N}\*.*/gm, "");
    setContentToPublish(htmlText);
  };

  useEffect(() => {
    replaceCharactersWithTags();
  }, []);

  // Highlight code with highlight.js & list & image

  return (
    <div id="preview" className="px-2 w-full text-gray-500 text-xl leading-10">
      <div className="text-center text-4xl font-medium text-gray-700 mb-3">
        {subtitle || "Subtitle comes here"}
      </div>
      <div
        className="text-justify break-words"
        // Set HTML as DOM
        dangerouslySetInnerHTML={{
          __html: contentToPublish || "Nothing to preview so far...",
        }}
      ></div>
    </div>
  );
};

export default PreviewPanel;
