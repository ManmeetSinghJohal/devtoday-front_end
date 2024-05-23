"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import ProfileTags from "@/components/shared/tags/ProfileTags";
import { Separator } from "@/components/ui/separator";
import { timeDifference } from "@/utils/methods";

import FollowButton from "./FollowButton";

const ProfileCard = ({ user, isOwner }: UserProfileProps) => {
  if (!user) return null;
  const {
    username,
    createdAt,
    profile,
    id,
    profile: {
      name,
      githubLink,
      xProfileLink,
      linkedinLink,
      instagramLink,
      bio,
    },
    _count: { following, followers },
    userIsFollowed,
  } = user;
  return (
    <div className="flex  w-full flex-col items-center justify-start gap-6 rounded-2xl bg-white-100 pb-[111px] dark:bg-dark-800 lg:w-[210px] lg:shrink-0 lg:gap-[30px]">
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <div className="flex h-[106px] w-full rounded-t-2xl bg-gradient-to-b from-fuchsia-500 to-violet-500 "></div>
        <div className="flex w-full flex-col items-center gap-5 px-6">
          <div className="mt-[-50px] flex w-full flex-col items-center justify-center gap-2.5 ">
            <Image
              src="/assets/jsmastery.png"
              alt="Profile"
              width={110}
              height={110}
              className="w-[110px] shrink-0
        rounded-full border border-primary1-500"
            />
            <div className="flex flex-col">
              <p className="heading-1-medium text-center text-dark-900 dark:text-white-100">
                {name}
              </p>
              <p className="paragraph-3-regular text-center text-white-400">
                @{username}
              </p>
            </div>
          </div>
          {isOwner ? (
            <Link
              href="/profile/edit"
              className="link-button bg-primary1-500  text-white-100 "
            >
              Edit Profile
            </Link>
          ) : (
            <FollowButton id={id} userIsFollowed={userIsFollowed} />
          )}

          <div className="flex flex-col ">
            <p className="paragraph-3-medium text-center text-white-400 dark:text-white-300">
              {followers} Followers
            </p>
            <p className="paragraph-3-medium text-center text-white-400 dark:text-white-300">
              {following} Following
            </p>
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-1.5">
            {profile.tech.map((tag: any) => (
              <ProfileTags key={tag} label={tag} />
            ))}
          </div>
          <Separator className="bg-white-300 dark:bg-dark-700" />
          <p className="paragraph-3-regular text-center text-white-400 dark:text-white-300">
            {bio}
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex gap-6">
              <Link className="size-[24px]" href={linkedinLink ?? "/profile"}>
                <Image
                  src="/assets/icons/linkedin.svg"
                  alt="linkedin"
                  width={24}
                  height={24}
                  className="size-[24px]"
                />
              </Link>
              <Link className="size-[24px]" href={xProfileLink ?? "/profile"}>
                <Image
                  src="/assets/icons/twitter.svg"
                  alt="twitter"
                  width={24}
                  height={24}
                />
              </Link>
              <Link className="size-[24px]" href={instagramLink ?? "/profile"}>
                <Image
                  src="/assets/icons/instagram.svg"
                  alt="instagram"
                  width={24}
                  height={24}
                />
              </Link>
              <Link className="size-[24px]" href={githubLink ?? "/profile"}>
                <Image
                  src="/assets/icons/github.svg"
                  alt="github"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
            <p className="paragraph-3-medium flex items-center justify-center text-white-300 dark:text-white-400">
              joined {timeDifference(createdAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
