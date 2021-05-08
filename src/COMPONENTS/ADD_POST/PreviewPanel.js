import React, { useEffect, useState } from "react";

import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

const PreviewPanel = ({
  content,
  contentToPublish,
  subtitle,
  replaceCharactersWithTags,
}) => {
  const [htmlError, setHtmlError] = useState(false);

  const lookForHtml = () => {
    content.search("</div>" || "</span>") !== -1
      ? setHtmlError(true)
      : setHtmlError(false);
  };

  // Without this function you have to go to preview section twice to parse the ```code```
  useEffect(() => {
    hljs.highlightAll();
  }, [contentToPublish]);

  useEffect(() => {
    replaceCharactersWithTags();
    lookForHtml();
  }, []);

  return (
    <div
      id="preview"
      className="px-2 w-full text-gray-500 text-xl min-h-screen leading-10"
    >
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

/*
# Test
**SalCf**
##Test
 [aeldra](https://aeldra.to/UserCP) 
###Test
 *Manevra*
```  const [htmlError, setHtmlError] = useState(false);```
*/
