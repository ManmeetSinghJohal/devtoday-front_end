import Image from "next/image";
import React from "react";

import ShareIcon from "@/components/shared/icons/ShareIcon";

const GroupCard = ({ title, content, liked }: GroupCardProps) => {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl bg-white-100 p-5 dark:bg-dark-800 lg:flex-row lg:gap-5">
      <div className="flex size-full flex-col  gap-[18px]">
        <Image
          alt="profile image"
          src="/assets/group.png"
          width={342}
          height={227}
          className="h-[227px] w-full rounded-2xl"
        />
        <div className="flex w-full flex-col gap-2.5">
          <p className="paragraph-3-bold lg:paragraph-1-bold w-full overflow-hidden  text-dark-800 dark:text-white-100 lg:h-[22px]">
            {title}
          </p>
          <p className="paragraph-3-regular flex h-4 w-full overflow-hidden truncate text-wrap text-white-400 dark:text-white-200">
            {content}
          </p>
        </div>

        <div className="flex w-full  justify-between ">
          <div className="relative">
            <div className="absolute left-0  size-[30px] rounded-full ">
              <Image
                alt="profile image"
                src="/assets/jsmastery.png"
                width={30}
                height={30}
                className="rounded-full"
              />
            </div>
            <div className="absolute left-4  size-[30px] rounded-full ">
              <Image
                alt="profile image"
                src="/assets/jsmastery.png"
                width={30}
                height={30}
                className="mr-[-3] rounded-full"
              />
            </div>
            <div className="absolute left-8  size-[30px] rounded-full ">
              <Image
                alt="profile image"
                src="/assets/jsmastery.png"
                width={30}
                height={30}
                className="rounded-full"
              />
            </div>
            <div className="absolute left-12  size-[30px] rounded-full ">
              <Image
                alt="profile image"
                src="/assets/jsmastery.png"
                width={30}
                height={30}
                className="rounded-full"
              />
            </div>
            <div className="absolute left-16 size-[30px] rounded-full ">
              <div className="caption-cap-8 flex size-[30px] items-center justify-center rounded-full bg-white-200 text-dark-900 dark:bg-dark-700 dark:text-white-200">
                120+
              </div>
            </div>
          </div>
          <div
            className={`flex size-[30px] items-center justify-center rounded-full bg-primary1-100 p-1 ${liked ? "text-primary1-500" : "text-white-300"} dark:bg-dark-700`}
          >
            <ShareIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
