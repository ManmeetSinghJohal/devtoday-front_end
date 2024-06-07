"use client";
import Image from "next/image";
import React, { useState } from "react";

import {
  likePost,
  timeDifference,
  unlikePost,
  removeHtmlTags,
} from "@/utils/methods";

import LikeIcon from "../icons/LikeIcon";
import PostTags from "../tags/PostTags";

const PostCard = ({ post, user }: StandardCardProps) => {
  const {
    title,
    tinyContent,
    interestTechTags,
    comments,
    views,
    createdAt,
    likes,
  } = post;
  const [liked, setLiked] = useState(
    likes?.some((like: Like) => like.userId === user.id)
  );
  const handleLike = () => {
    if (liked) {
      unlikePost(post.id, user.id);
      setLiked(false);
    }
    if (!liked) {
      likePost(post.id, user.id);
      setLiked(true);
    }
  };
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl bg-white-100 p-5 dark:bg-dark-800 lg:flex-row lg:gap-5">
      <Image
        alt="post image"
        width={165}
        height={165}
        src="/assets/meeting-img2.png"
        style={{ borderRadius: "10px", width: "165px", height: "165px" }}
        className="hidden lg:block"
      />
      <div className="flex size-full flex-col justify-between gap-3 overflow-hidden lg:gap-2">
        <div className="flex gap-2">
          <Image
            alt="post image"
            src="/assets/meeting-img2.jpeg"
            width={50}
            height={50}
            style={{ borderRadius: "10px", width: "50px", height: "50px" }}
            className="block lg:hidden"
          />

          <div className="flex w-full items-center overflow-hidden lg:gap-5">
            <p className="paragraph-3-bold lg:paragraph-1-bold inline-block truncate text-dark-800 dark:text-white-100 lg:h-[22px]">
              {title}
            </p>
            <div
              onClick={handleLike}
              className={`flex h-[30px] cursor-pointer items-center justify-center rounded-full bg-primary1-100 p-1 ${liked ? "text-primary1-500" : "text-white-300"} dark:bg-dark-700`}
            >
              <LikeIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 md:gap-6 ">
          <div className="flex flex-col items-start gap-3 overflow-hidden pr-10 md:gap-4">
            <p className="paragraph-3-regular line-clamp-2 max-w-full break-all text-white-400 dark:text-white-200">
              {removeHtmlTags(tinyContent)}
            </p>
            <div className="flex w-full flex-wrap gap-2.5">
              {interestTechTags &&
                interestTechTags.map((tag: Tag) => {
                  return <PostTags key={tag.name} name={tag.name} />;
                })}
            </div>
          </div>

          <div className="flex w-full flex-col-reverse items-center justify-between gap-4 self-end xl:flex-row">
            <div className="flex w-full  items-center gap-2.5 ">
              <Image
                alt="profile image"
                src="/assets/jsmastery.png"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="paragraph-4-bold md:paragraph-3-bold text-dark-700 dark:text-white-300">
                {user.username}
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
                {comments && comments.length} comments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
