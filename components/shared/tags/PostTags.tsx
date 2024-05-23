import React from "react";

const PostTags = ({ name }: TagProps) => {
  return (
    <div className="rounded-2xl bg-white-200 px-2 py-1 uppercase text-white-400 dark:bg-dark-700  dark:text-white-300">
      <p className="lg:caption-cap-10 caption-cap-8">{name}</p>
    </div>
  );
};

export default PostTags;
