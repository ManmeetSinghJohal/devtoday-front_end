import Image from "next/image";
import React from "react";

import { timeDifference } from "@/utils/methods";

import LikeIcon from "../icons/LikeIcon";
import PostTags from "../tags/PostTags";

const PodcastCard = ({
  title,
  content,
  tags,

  createdAt,
  liked,
}: PodcastCardProps) => {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl bg-white-100 p-5 dark:bg-dark-800 lg:flex-row lg:gap-5">
      <div className="flex size-full flex-col  gap-[18px]">
        <div className="flex w-full flex-col gap-2.5">
          <p className="paragraph-3-bold lg:paragraph-1-bold w-full overflow-hidden  text-dark-800 dark:text-white-100 lg:h-[22px]">
            {title}
          </p>
          <p className="paragraph-3-regular flex h-4 w-full overflow-hidden truncate text-wrap text-white-400 dark:text-white-200">
            {content}
          </p>
        </div>

        <div className="flex flex-col justify-between gap-[18px]">
          <div className="flex flex-col items-start gap-[18px]">
            <div className="flex w-full gap-2.5">
              {tags.map((tag: any) => {
                return <PostTags key={tag.id} label={tag.label} />;
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
                JS Mastery
                <p className="subtitle-small text-dark-700 dark:text-white-300">
                  {timeDifference(createdAt)}
                </p>
              </div>
            </div>
            <div
              className={`flex h-[30px] items-center justify-center rounded-full bg-primary1-100 p-1 ${liked ? "text-primary1-500" : "text-white-300"} dark:bg-dark-700`}
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