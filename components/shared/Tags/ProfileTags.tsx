import React from "react";

type Tags = {
  key?: string;
  label: string;
};

const ProfileTags = ({ label }: Tags) => {
  return (
    <div className="caption-cap-8 lg:caption-cap-10 rounded bg-white-200 px-2 py-1 capitalize  text-white-400 dark:bg-dark-700 dark:text-white-200">
      <p className="caption-cap-10">{label}</p>
    </div>
  );
};

export default ProfileTags;
