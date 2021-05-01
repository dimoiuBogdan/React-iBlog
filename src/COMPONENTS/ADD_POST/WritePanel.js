import React from "react";

const WritePanel = () => {
  return (
    <div>
      <textarea
        cols="30"
        rows="10"
        placeholder="Tell your story..."
        className="w-full bg-transparent p-2 text-xl font-medium text-gray-500 focus:outline-none"
      ></textarea>
    </div>
  );
};

export default WritePanel;
