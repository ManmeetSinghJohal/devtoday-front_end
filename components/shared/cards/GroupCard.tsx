import Image from "next/image";
import { User } from "next-auth";
import React from "react";

import ShareIcon from "@/components/shared/icons/ShareIcon";

const GroupCard = ({ group }: GroupCardProps) => {
  const { name, groupUser, bio, _count } = group;
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
          <p className="paragraph-3-bold lg:paragraph-1-bold w-full overflow-hidden  text-dark-800 dark:text-white-100 ">
            {name}
          </p>
          <p className="paragraph-3-regular line-clamp-3 w-full overflow-hidden truncate text-wrap break-all text-white-400 dark:text-white-200">
            {bio && bio}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {groupUser &&
              groupUser.length > 0 &&
              groupUser.map((user: User, index: number) => {
                const marginClass = index !== 0 ? "-ml-3" : "";
                return (
                  <div
                    key={user.id}
                    className={`relative inline-block ${marginClass}`}
                  >
                    <Image
                      width={30}
                      height={30}
                      src="/assets/emoji.png"
                      alt="user avatar"
                      className="size-[30px] rounded-full"
                    />
                  </div>
                );
              })}
            <div className="relative inline-block">
              <div className="caption-cap-10 -ml-3 flex size-[30px] items-center justify-center rounded-full bg-white-200 text-dark-900 dark:bg-dark-700 dark:text-white-200">
                {_count?.groupUser}+
              </div>
            </div>
          </div>
          <div className="flex size-[30px] items-center justify-center rounded-full bg-primary1-100 p-1  text-white-300 dark:bg-dark-700">
            <ShareIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
