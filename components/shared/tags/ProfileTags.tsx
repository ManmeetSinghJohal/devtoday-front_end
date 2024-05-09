import React from "react";

type Tags = {
  key?: string;
  label: string;
};

const ProfileTags = ({ label }: Tags) => {
  return (
    <div className="caption-cap-8 lg:caption-cap-10 rounded bg-white-200 px-2 py-1 capitalize dark:bg-dark-700  ">
      <p className="caption-cap-10 text-white-400 dark:text-white-200">
        {label}
      </p>
    </div>
  );
};

export default ProfileTags;
