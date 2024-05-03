import React from "react";

import ProfileCard from "@/components/profile/ProfileCard";
import ProfileNavbar from "@/components/profile/ProfileNavbar";
import PerformanceCard from "@/components/shared/cards/PerformanceCard";
import PostCard from "@/components/shared/cards/PostCard";
import RecentPosts from "@/components/shared/cards/RecentsCard";
import RightNavBar from "@/components/shared/rightsidebar/RightSidebar";
import { mockPosts } from "@/constants/mockposts";

const Page = () => {
  // const session = getSession();

  /*   const userInfo = await fetch(`http://localhost:3005/api/user/${session.id}`, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  }); */
  return (
    <div className="flex flex-col gap-5 md:flex-row">
      <ProfileCard />
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
