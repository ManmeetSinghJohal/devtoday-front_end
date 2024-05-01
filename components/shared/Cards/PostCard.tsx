import Image from "next/image";
import React from "react";

import { timeDifference } from "@/lib/methods";

import LikeIcon from "../Icons/LikeIcon";
import PostTags from "../Tags/PostTags";

const PostCard = ({
  title,
  content,
  tags,
  comments,
  views,
  createdAt,
  liked,
}: PostCardProps) => {
  return (
    <div className="flex flex-col items-start gap-3 rounded-2xl bg-white-100 p-5 dark:bg-dark-800 lg:flex-row lg:gap-5">
      <Image
        alt="post image"
        width={165}
        height={165}
        src="/assets/profile.jpg"
        style={{ borderRadius: "10px" }}
        className="hidden lg:block"
      />
      <div className="flex h-full flex-col gap-3 ">
        <div className="flex gap-2">
          <Image
            alt="post image"
            width={50}
            height={50}
            src="/assets/profile.jpg"
            style={{ borderRadius: "10px" }}
            className="block lg:hidden"
          />
          <div className="flex w-full gap-5 ">
            <p className="paragraph-3-bold lg:paragraph-1-bold h-[40px] w-full overflow-hidden  text-dark-800 dark:text-white-100 lg:h-[22px]">
              {title}
            </p>
            <p
              className={`flex h-[30px] items-center justify-center rounded-full bg-primary1-100 p-1 ${liked ? "text-primary1-500" : "text-white-300"} dark:bg-dark-700`}
            >
              <LikeIcon />
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 lg:gap-6">
          <div className="flex flex-col items-start gap-4">
            <p className="paragraph-3-regular flex h-4 w-full overflow-hidden truncate text-wrap text-white-400 dark:text-white-200">
              {content}
            </p>
            <div className="flex w-full gap-2.5">
              {tags.map((tag: any) => {
                return <PostTags key={tag.id} label={tag.label} />;
              })}
            </div>
          </div>

          <div className="flex w-full flex-col-reverse items-center justify-between gap-4 self-end lg:flex-row">
            <div className="flex w-full  items-center gap-2.5 ">
              <Image
                alt="profile image"
                src="/assets/profile.jpg"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="paragraph-4-bold md:paragraph-3-bold text-dark-700 dark:text-white-300">
                JS Mastery
                <p className="subtitle-small text-dark-700 dark:text-white-300">
                  {timeDifference(createdAt)}
                </p>
              </div>
            </div>
            <div className="paragraph-4-regular lg:paragraph-3-regular flex w-full justify-start gap-8 text-dark-700 dark:text-white-300 lg:justify-end">
              <p className="flex  justify-center text-center capitalize">
                {views} views
              </p>
              <p className="flex  justify-center text-center capitalize">
                36,8888 likes
              </p>
              <p className="flex  justify-center text-center capitalize">
                {comments.length} comments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
