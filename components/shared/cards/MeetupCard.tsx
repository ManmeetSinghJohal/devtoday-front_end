import Image from "next/image";
import Link from "next/link";
import React from "react";

import { getMeetDayInfo, removeHtmlTags } from "@/utils/methods";

import PostTags from "../tags/PostTags";

const MeetUpCard = ({ post }: StandardCardProps) => {
  const { title, tinyContent, interestTechTags, meetupDate } = post;
  const { day, month } = meetupDate
    ? getMeetDayInfo(meetupDate)
    : getMeetDayInfo("");
  return (
    <div className="flex flex-col items-center gap-3 overflow-hidden rounded-2xl bg-white-100 p-5 dark:bg-dark-800 lg:flex-row lg:gap-5">
      <div className="flex size-full flex-col gap-3 lg:gap-2">
        <div className="flex gap-2 overflow-hidden">
          <Image
            alt="post image"
            src="/assets/meeting-img2.jpeg"
            width={72}
            height={72}
            style={{ borderRadius: "10px", width: "72px", height: "72px" }}
          />

          <div className="flex w-full overflow-hidden lg:gap-5">
            <Link
              href={`/details/${post.id}`}
            >
              <p className="paragraph-3-bold lg:paragraph-1-bold h-[40px] w-full truncate text-dark-800 dark:text-white-100 lg:h-[22px]">
                {title}
              </p>
            </Link>
            <div className="ml-5 flex flex-col items-center justify-center gap-2 rounded-md bg-white-200 px-4 py-1.5 text-white-300 dark:bg-dark-700 dark:text-primary1-500">
              <p className="uppercase text-dark-900 dark:text-white-200">
                {meetupDate ? month : "TBD"}
              </p>
              <p className="display-2-bold text-primary1-500">
                {meetupDate ? day : "--"}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 lg:gap-6 ">
          <div className="flex flex-col items-start gap-3  lg:gap-4">
            <p className="paragraph-3-regular line-clamp-2 w-full break-all pr-10 text-white-400 dark:text-white-200">
              {removeHtmlTags(tinyContent)}
            </p>
            <div className="flex w-full gap-2.5">
              {interestTechTags?.map((tag: Tag) => {
                return <PostTags key={tag.name} name={tag.name} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetUpCard;
