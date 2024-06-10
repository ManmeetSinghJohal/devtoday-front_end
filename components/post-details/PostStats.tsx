import Image from "next/image";
import React from "react";

const PostStats = () => {
  return (
    <div className="flex w-full flex-col justify-start gap-5 rounded-2xl border bg-white-200 py-5 pl-5 dark:bg-dark-800 lg:w-[210px] lg:shrink-0 ">
      <div className="flex">
        <Image
          src="/assets/icons/like.svg"
          height={18}
          width={18}
          alt="like"
        />
        <div className="paragraph-2-medium ml-2.5 text-white-400">
          24,056 Likes
        </div>
      </div>
      <div className="flex">
        <Image
          src="/assets/icons/comment.svg"
          height={18}
          width={18}
          alt="comment"
        />
        <div className="paragraph-2-medium ml-2.5 text-white-400">
          3086 Comments
        </div>
      </div>
      <div className="flex">
        <Image
          src="/assets/preview.svg"
          height={18}
          width={18}
          alt="preview"
        />
        <div className="paragraph-2-medium ml-2.5 text-white-400">
          51,212 Views
        </div>
      </div>
    </div>
  );
};

export default PostStats;
