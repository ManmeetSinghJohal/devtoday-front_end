import React from "react";

type Tags = {
  key: string;
  label: string;
};

const PostTags = ({ label }: Tags) => {
  return (
    <div className="caption-cap-8 lg:caption-cap-10 rounded-2xl bg-white-200 px-2 py-1 uppercase  text-white-400 dark:bg-dark-700 dark:text-white-300">
      <p className="caption-cap-10">{label}</p>
    </div>
  );
};

export default PostTags;
