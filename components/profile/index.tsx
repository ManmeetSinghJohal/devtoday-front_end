import React from "react";

import PerformanceCard from "../shared/cards/PerformanceCard";
import PostCard from "../shared/cards/PostCard";
import RecentPosts from "../shared/cards/RecentsCard";
import RightSidebar from "../shared/rightsidebar/RightSidebar";

import ProfileCard from "./ProfileCard";
import ProfileNavbar from "./ProfileNavbar";

const ProfilePage = ({ user, posts }: ProfilePageProps) => {
  console.log(posts, "posts");
  return (
    <div className="flex flex-col gap-5 md:flex-row">
      <ProfileCard user={user} />
      <div className="flex w-full flex-col gap-5 ">
        <ProfileNavbar />
        {posts.length
          ? posts.map((post: any) => {
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
            })
          : null}
      </div>

      <RightSidebar>
        <RecentPosts />
        <PerformanceCard />
      </RightSidebar>
    </div>
  );
};

export default ProfilePage;
