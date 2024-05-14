"use client";
import { useState } from "react";

import GroupCard from "../shared/cards/GroupCard";
import MeetUpCard from "../shared/cards/MeetupCard";
import PodcastCard from "../shared/cards/PodcastCard";
import PostCard from "../shared/cards/PostCard";

const InfiniteScroll = ({ user, type, initialPosts }: InfiniteScrollProps) => {
  const [posts, setPosts] = useState(initialPosts);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchMorePosts = async () => {
    const response = await fetch(
      `http://localhost:3005/api/user/${user.id}/posts?postType=${type.toUpperCase()}&page=${currentPage}`,
      {
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();
    setPosts([...posts, ...data]);
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      {type === "standard" && (
        <div className="grid grid-cols-1 gap-3.5">
          {posts.map((post: Post) => {
            return <PostCard user={user} post={post} key={post.id} />;
          })}
        </div>
      )}

      {type === "meetup" && (
        <div className="grid grid-cols-1 gap-3.5">
          {posts.map((post: Post) => {
            return <MeetUpCard user={user} post={post} key={post.id} />;
          })}
        </div>
      )}
      {type === "podcast" && (
        <div className="grid grid-cols-1 gap-3.5">
          {posts.map((post: Post) => {
            return <PodcastCard user={user} post={post} key={post.id} />;
          })}
        </div>
      )}
      {type === "group" && (
        <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-2">
          {posts.map((post: Post) => {
            return <GroupCard user={user} group={post} key={post.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default InfiniteScroll;
