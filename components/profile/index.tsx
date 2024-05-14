import React from "react";

import { mockPosts } from "@/constants/mockposts";

import GroupCard from "../shared/cards/GroupCard";
import MeetUpCard from "../shared/cards/MeetupCard";
import PerformanceCard from "../shared/cards/PerformancesCard";
import PodcastCard from "../shared/cards/PodcastCard";
import PostCard from "../shared/cards/PostCard";
import RecentPosts from "../shared/cards/RecentsCard";
import RightSidebar from "../shared/rightsidebar/RightSidebar";

import ProfileCard from "./ProfileCard";
import ProfileNavbar from "./ProfileNavbar";

const ProfilePage = ({ user, type, isOwner }: ProfilePageProps) => {
  // state pages

  return (
    <div className="flex flex-col gap-5 md:flex-row">
      <ProfileCard user={user} isOwner={isOwner} />
      <div className="flex w-full flex-col gap-5 ">
        <ProfileNavbar />
        {type === "standard" && (
          <div className="grid grid-cols-1 gap-3.5">
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
        )}
        {type === "meetup" && (
          <div className="grid grid-cols-1 gap-3.5">
            {mockPosts.map((post: any) => {
              return (
                <MeetUpCard
                  key={post.id}
                  title={post.title}
                  content={post.content}
                  tags={post.tags}
                  createdAt={post.createdAt}
                  meetDay={post.meetDay}
                  image={post.image}
                />
              );
            })}
          </div>
        )}
        {type === "podcast" && (
          <div className="grid grid-cols-1 gap-3.5">
            {mockPosts.map((post: any) => {
              return (
                <PodcastCard
                  key={post.id}
                  title={post.title}
                  content={post.content}
                  tags={post.tags}
                  image={post.image}
                  createdAt={post.createdAt}
                />
              );
            })}
          </div>
        )}
        {type === "group" && (
          <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-2">
            {mockPosts.map((post: any) => {
              return (
                <GroupCard
                  key={post.id}
                  title={post.title}
                  content={post.content}
                  image="/assets/group.png"
                  tags={post.tags}
                  createdAt={post.createdAt}
                />
              );
            })}
            hola;
          </div>
        )}
      </div>

      <RightSidebar>
        <RecentPosts />
        <PerformanceCard />
      </RightSidebar>
    </div>
  );
};

export default ProfilePage;