import React from "react";

const GuidePanel = () => {
  return (
    <div className="px-3">
      <h3 className="text-2xl text-gray-500 my-6">
        This is a guide to help you understand our writing features
      </h3>
      <div className="my-10">
        <h2 className="text-3xl font-medium text-gray-700 mb-2">Rules</h2>
        <pre className="bg-gray-600 text-white text-lg py-4 px-6 rounded-lg shadow-md">
          <p className="my-4">
            Title must be between 10 and 76 characters long
          </p>
          <p className="my-4">
            Title must be between 10 and 76 characters long
          </p>
          <p className="my-4">Content must have at least 700 characters</p>
        </pre>
      </div>
      <div className="my-10">
        <h2 className="text-3xl font-medium text-gray-700 mb-2">Headers</h2>
        <p className="text-xl mb-4">
          We support Atx-style headers. Use 1-3 hash characters at the start of
          the line, corresponding to header leves 1-3. For example:
        </p>
        <pre className="bg-gray-600 text-white text-lg py-4 px-6 rounded-lg shadow-md">
          <p className="my-4"># This is Heading 1</p>
          <p className="my-4">## This is Heading 2</p>
          <p className="my-4">### This is Heading 3</p>
        </pre>
      </div>
      <div className="my-10">
        <h2 className="text-3xl font-medium text-gray-700 mb-2">
          Code Snippets
        </h2>
        <p className="text-xl mb-4">
          Wrap the code blocks with tripple Grave accent keys. ``` for showing
          big blocks of code in your content. For example:
        </p>
        <pre className="bg-gray-600 text-white text-lg py-4 px-6 rounded-lg shadow-md">
          {"``` if (isServer && user) store.userStore.currentUser = user; ```"}
        </pre>
      </div>
      <div className="my-10">
        <h2 className="text-3xl font-medium text-gray-700 mb-2">
          Text formatting
        </h2>
        <p className="text-xl mb-4">
          <span className="font-semibold">Bold</span> : Wrap the text with
          double astricks <span className="text-yellow-500">**</span> to make it
          bold. We will use{" "}
          <span className="text-yellow-500">{`<strong>`}</span> while parsing.
          For example: <span className="font-semibold">**Bold text**</span>
          <span className="mt-2">
            <span className="italic">Italics</span> : Wrap the text with single
            astricks character <span className="text-yellow-500">*</span> to
            make it italics. For example:{" "}
            <span className="italic">*Italic text*</span> . We will wrap the
            text with <span className="text-yellow-500">{`<em>`}</span> tag
            while parsing.
          </span>
        </p>
      </div>
      <div className="mt-10 pb-10">
        <h2 className="text-3xl font-medium text-gray-700 mb-2">Links</h2>
        <p className="text-xl mb-4">
          "Use [] for what you want to be displayed and () for the link URL:
        </p>
        <div className="bg-gray-600 text-white text-lg py-4 px-6 rounded-lg shadow-md">
          [I'm an inline link](put-link-here)
        </div>
      </div>
    </div>
  );
};

export default GuidePanel;
