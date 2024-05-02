import Image from "next/image";
import React from "react";

import PostCard from "@/components/shared/Cards/PostCard";
import RightNavBar from "@/components/shared/RightSidebar/RightSidebar";
import ProfileTags from "@/components/shared/Tags/ProfileTags";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { mockPosts } from "@/constants/mockposts";
import { timeDifference } from "@/lib/methods";

const Page = () => {
  // const session = getSession();

  /*   const userInfo = await fetch(`http://localhost:3005/api/user/${session.id}`, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  }); */
  return (
    <div className="flex flex-col gap-5 md:flex-row">
      <div className="flex min-h-full w-full flex-col items-center justify-start gap-[30px] rounded-2xl bg-white-100 px-4 py-[44px] dark:bg-dark-800 md:min-w-[210px] md:max-w-[210px]">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2.5">
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
        </div>
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          <ProfileTags label="Javascript" />
          <ProfileTags label="Javascript" />
          <ProfileTags label="Javascript" />
          <ProfileTags label="Javascript" />
        </div>
        <Separator />
        <p className="paragraph-3-regular text-center text-white-400 dark:text-white-300">
          Tech Student, aspiring to bring ideas to life through side projects.
          Fluent in React.js, Next.js, & TS.
        </p>
        <p className="paragraph-3-medium text-white-300 dark:text-white-400">
          joined {timeDifference(new Date("2024-03-27T10:00:00Z"))}
        </p>
      </div>

      <div className="flex w-full flex-col gap-5 ">
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

      <RightNavBar />
    </div>
  );
};

export default Page;
