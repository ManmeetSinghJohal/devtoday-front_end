import React from "react";

import PostCard from "@/components/shared/Cards/PostCard";
import { mockPosts } from "@/constants/mockposts";

const Page = () => {
  // const session = getSession();

  /*   const userInfo = await fetch(`http://localhost:3005/api/user/${session.id}`, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  }); */
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col gap-5">
        {mockPosts.map(
          ({
            title,
            id,
            content,
            tags,
            comments,
            views,
            createdAt,
            liked,
          }: any) => {
            return (
              <PostCard
                key={id}
                title={title}
                content={content}
                tags={tags}
                comments={comments}
                views={views}
                createdAt={createdAt}
                liked={liked}
              />
            );
          }
        )}
      </div>
    </section>
  );
};

export default Page;
