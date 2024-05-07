import { getServerSession } from "next-auth";
import React from "react";

import ProfilePage from "@/components/profile";
import { authOptions } from "@/lib/auth";

const Page = async ({ searchParams }: { searchParams: any }) => {
  const session = await getServerSession(authOptions);
  const resUser = await fetch(
    `http://localhost:3005/api/user/${session?.user.id}`, // /api/user/id/info
    {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    }
  );
  const userData = await resUser.json();
  console.log(userData);
  const resPosts = await fetch(
    `http://localhost:3005/api/user/${session?.user.id}/posts?postType=${searchParams}`, // /api/user/id/info
    {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    }
  );

  // back:
  // posts from user, fetch them, query params (different body depending on query params) api/user/id/posts?postype=meetups
  const postsData = await resPosts.json();
  console.log("postsData", postsData);
  return <ProfilePage user={userData} posts={postsData} />;
};

export default Page;
