import React from "react";

import ProfilePage from "@/components/profile";

const Page = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: string | string[];
}) => {
  const resUser = await fetch(
    `http://localhost:3005/api/user/${params?.id}`, // /api/user/id/info
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
  const postsData = await resPosts.json();
  return <ProfilePage user={userData} posts={postsData} />;
};

export default Page;
