import Image from "next/image";
import React from "react";

const SharePost = () => {
  return (
    <div className="hidden w-full justify-center rounded-md bg-white-border/40 py-2.5 lg:flex">
      <Image
        src="../assets/icons/share-arrow.svg"
        height={18}
        width={18}
        alt="share"
      />
      <div className="ml-[5px]">Share Post</div>
    </div>
  );
};

export default SharePost;
