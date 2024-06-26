import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { likePost, timeDifference, unlikePost, removeHtmlTags } from "@/utils/methods";

import LikeIcon from "../icons/LikeIcon";
import PostTags from "../tags/PostTags";

const PodcastCard = ({ post, user }: StandardCardProps) => {
  const { title, tinyContent, interestTechTags, createdAt, likes } = post;
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
    <div className="flex min-h-[205px] flex-col items-center gap-3 rounded-2xl bg-white-100 p-5 dark:bg-dark-800 lg:flex-row lg:gap-5">
      <div className="flex size-full flex-col justify-between gap-[18px]">
        <div className="flex w-full flex-col gap-2.5 overflow-hidden">
          <Link
            href={`/details/${post.id}`}
          >
            <p className="paragraph-3-bold lg:paragraph-1-bold w-full truncate  text-dark-800 dark:text-white-100 lg:h-[22px]">
              {title}
            </p>
          </Link>
          <p className="paragraph-3-regular line-clamp-5 w-full break-all text-white-400 dark:text-white-200">
            {removeHtmlTags(tinyContent)}
          </p>
        </div>

        <div className="flex flex-col justify-between gap-[18px]">
          <div className="flex flex-col items-start gap-[18px]">
            <div className="flex w-full  flex-wrap gap-2.5">
              {interestTechTags &&
                interestTechTags.map((tag: Tag) => {
                  return <PostTags key={tag.name} name={tag.name} />;
                })}
            </div>
          </div>

          <div className="flex w-full items-center justify-between gap-4 self-end lg:flex-row">
            <div className="paragraph-4-bold md:paragraph-3-bold flex gap-2 text-dark-700 dark:text-white-300">
              <Image
                alt="profile image"
                src="/assets/jsmastery.png"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                {user.profile.name}
                <p className="subtitle-small text-dark-700 dark:text-white-300">
                  {timeDifference(createdAt)}
                </p>
              </div>
            </div>
            <div
              className={`flex h-[30px] cursor-pointer items-center justify-center rounded-full bg-primary1-100 p-1 ${liked ? "text-primary1-500" : "text-white-300"} dark:bg-dark-700`}
              onClick={handleLike}
            >
              <LikeIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastCard;
