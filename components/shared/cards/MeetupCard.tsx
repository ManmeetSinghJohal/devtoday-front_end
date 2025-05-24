import Image from "next/image";
import Link from "next/link";
import React from "react";

import PostTags from "../tags/PostTags";

import { getMeetDayInfo, removeHtmlTags } from "@/utils/methods";

const MeetUpCard = ({ post }: StandardCardProps) => {
  const { title, tinyContent, interestTechTags, meetupDate } = post;
  const { day, month } = getMeetDayInfo(meetupDate);

  return (
    <div className="bg-white-100 dark:bg-dark-800 flex flex-col items-center gap-3 overflow-hidden rounded-2xl p-5 lg:flex-row lg:gap-5">
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
            <Link href={`/details/${post.id}`}>
              <p className="paragraph-3-bold lg:paragraph-1-bold text-dark-800 dark:text-white-100 h-[40px] w-full truncate lg:h-[22px]">
                {title}
              </p>
            </Link>
            <div className="bg-white-200 text-white-300 dark:bg-dark-700 dark:text-primary1-500 ml-5 flex flex-col items-center justify-center gap-2 rounded-md px-4 py-1.5">
              <p className="text-dark-900 dark:text-white-200 uppercase">
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
            <p className="paragraph-3-regular text-white-400 dark:text-white-200 line-clamp-2 w-full break-all pr-10">
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
