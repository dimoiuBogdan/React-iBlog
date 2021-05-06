import React, { useEffect, useState } from "react";

import hljs from "highlight.js/lib/core";
import "highlight.js/styles/atom-one-dark.css";

const PreviewPanel = ({
  content,
  setContentToPublish,
  contentToPublish,
  subtitle,
}) => {
  const [htmlError, setHtmlError] = useState(false);

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
    hljs.highlightAll();
  };

  const lookForHtml = () => {
    content.search("</div>" || "</span>") !== -1
      ? setHtmlError(true)
      : setHtmlError(false);
  };

  useEffect(() => {
    replaceCharactersWithTags();
    lookForHtml();
  }, []);

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
      {htmlError && (
        <div className="text-red-500 mb-4 fixed right-10 bottom-10 text-xl shadow-lg p-2 px-8 rounded-md bg-red-100 font-medium">
          HTML is not yet available
        </div>
      )}
    </div>
  );
};

export default PreviewPanel;
