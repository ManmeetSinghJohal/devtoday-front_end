import Image from "next/image";
import React from "react";

import ProfileNavbar from "@/components/profile/ProfileNavbar";
import PerformanceCard from "@/components/shared/Cardss/PerformanceCard";
import PostCard from "@/components/shared/Cardss/PostCard";
import RecentPosts from "@/components/shared/Cardss/RecentsCard";
import RightNavBar from "@/components/shared/RightSidebarr/RightSidebar";
import ProfileTags from "@/components/shared/Tagss/ProfileTags";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { mockPosts } from "@/constants/mockposts";
import { timeDifference } from "@/utils/methods";

const Page = () => {
  // const session = getSession();

  /*   const userInfo = await fetch(`http://localhost:3005/api/user/${session.id}`, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  }); */
  return (
    <div className="flex flex-col gap-5 md:flex-row">
      <div className="flex min-h-full w-full flex-col items-center justify-start gap-6 rounded-2xl bg-white-100 pb-[44px] dark:bg-dark-800 md:w-[210px] md:shrink-0 md:gap-[30px]">
        <div className="flex w-full flex-col items-center justify-center gap-5">
          <div className="flex h-[83px] w-full rounded-t-2xl bg-gradient-to-b from-fuchsia-500 to-violet-500 "></div>
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
                  Js Mastery
                </p>
                <p className="paragraph-3-regular text-center text-white-400">
                  @jsmastery
                </p>
              </div>
            </div>
            <Button className="w-full bg-primary1-500 text-white-100">
              Follow
            </Button>

            <div className="flex flex-col ">
              <p className="paragraph-3-medium text-center text-white-400 dark:text-white-300">
                314 Followers
              </p>
              <p className="paragraph-3-medium text-center text-white-400 dark:text-white-300">
                47 Following
              </p>
            </div>
            <div className="flex w-full flex-wrap items-center justify-center gap-1.5">
              <ProfileTags label="Javascript" />
              <ProfileTags label="Javascript" />
              <ProfileTags label="Javascript" />
              <ProfileTags label="Javascript" />
            </div>
            <Separator className="bg-white-300 dark:bg-dark-700" />
            <p className="paragraph-3-regular text-center text-white-400 dark:text-white-300">
              Tech Student, aspiring to bring ideas to life through side
              projects. Fluent in React.js, Next.js, & TS.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex gap-6">
                <Image
                  src="/assets/icons/linkedin.svg"
                  alt="linkedin"
                  width={24}
                  height={24}
                />
                <Image
                  src="/assets/icons/twitter.svg"
                  alt="twitter"
                  width={24}
                  height={24}
                />
                <Image
                  src="/assets/icons/instagram.svg"
                  alt="instagram"
                  width={24}
                  height={24}
                />
              </div>
              <p className="paragraph-3-medium text-white-300 dark:text-white-400">
                joined {timeDifference(new Date("2024-03-27T10:00:00Z"))}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-5 ">
        <ProfileNavbar />
        {mockPosts.map((post: any) => {
          return (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.content}
              tags={post.tags}
              comments={post.comments}
              views={post.views}
              createdAt={post.createdAt}
              liked={post.liked}
              image={post.image}
            />
          );
        })}
      </div>

      <RightNavBar>
        <RecentPosts />
        <PerformanceCard />
      </RightNavBar>
    </div>
  );
};

export default Page;
