import { getServerSession } from "next-auth";
import React from "react";

import PodcastCard from "@/components/shared/cards/PodcastCard";
import { authOptions } from "@/lib/auth";

const Page = async () => {
  const session = await getServerSession(authOptions);
  const resUser = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/${session?.user.id}`,
    {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    }
  );
  const userData = await resUser.json();
  const posts = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/post/type/PODCAST`,
    {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    }
  );
  const postsData = await posts.json();

  return (
    <div className="flex size-full flex-col gap-5 ">
      <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-2">
        {postsData.map((post: Post) => {
          return <PodcastCard user={userData} post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
};

export default Page;
