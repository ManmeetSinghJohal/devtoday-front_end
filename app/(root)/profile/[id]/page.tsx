import React from "react";

import ProfilePage from "@/components/profile";

const Page = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { postType: string | string[] | undefined };
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

  let type = searchParams.postType ?? "standard";
  if (type instanceof Array) type = type[0];
  if (!["standard", "meetup", "podcast"].some((t) => t === type))
    type = "standard";

  const resPosts = await fetch(
    `http://localhost:3005/api/user/${params?.id}/posts?postType=${type}`, // /api/user/id/info
    {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    }
  );
  const postsData = await resPosts.json();
  return (
    <ProfilePage
      user={userData}
      posts={postsData}
      type={type}
      isOwner={false}
    />
  );
};

export default Page;
