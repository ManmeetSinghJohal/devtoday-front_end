import React from "react";

import { mockPosts } from "@/constants/mockposts";

import GroupCard from "../shared/cards/GroupCard";
import PerformanceCard from "../shared/cards/PerformancesCard";
import RecentPosts from "../shared/cards/RecentsCard";
import RightSidebar from "../shared/rightsidebar/RightSidebar";

import ProfileCard from "./ProfileCard";
import ProfileNavbar from "./ProfileNavbar";

const ProfilePage = ({ user, posts }: ProfilePageProps) => {
  console.log(posts, "posts");
  return (
    <div className="flex flex-col gap-5 md:flex-row">
      <ProfileCard user={user} posts={posts} />
      <div className="flex w-full flex-col gap-5 ">
        <ProfileNavbar />
        <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-2">
          {mockPosts.map((post: any) => {
            return (
              <GroupCard
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
      </div>

      <RightSidebar>
        <RecentPosts />
        <PerformanceCard />
      </RightSidebar>
    </div>
  );
};

export default ProfilePage;
