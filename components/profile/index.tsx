import React from "react";

import PerformanceCard from "../shared/cards/PerformancesCard";
import RecentPosts from "../shared/cards/RecentsCard";

import InfiniteScroll from "./InfiniteScroll";
import ProfileCard from "./ProfileCard";
import ProfileNavbar from "./ProfileNavbar";

const ProfilePage = ({ user, type, isOwner, posts }: ProfilePageProps) => {
  return (
    <div className="flex flex-col gap-5 lg:flex-row">
      <aside className="relative flex shrink-0 flex-col items-end gap-5 border-0 lg:sticky lg:left-0 lg:top-0 lg:min-w-[210px]">
        <ProfileCard user={user} isOwner={isOwner} />
      </aside>
      <div className="flex size-full flex-col gap-5 ">
        <ProfileNavbar type={type} />
        {posts === null ? (
          <div>
            <p className="text-center text-3xl">No posts found</p>
          </div>
        ) : (
          <InfiniteScroll type={type} user={user} initialPosts={posts} />
        )}
      </div>

      <aside className="relative flex flex-col items-end gap-5 dark:bg-dark-900 lg:sticky lg:right-0 lg:top-0 lg:min-w-[325px]">
        <RecentPosts user={user} />
        <PerformanceCard />
      </aside>
    </div>
  );
};

export default ProfilePage;
