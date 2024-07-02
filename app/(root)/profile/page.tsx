import { getServerSession } from "next-auth";
import React from "react";

import ProfilePage from "@/components/profile";
import { authOptions } from "@/lib/auth";

const Page = async ({ searchParams }: { searchParams: any }) => {
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

  let type = searchParams.postType ?? "standard";
  if (type instanceof Array) type = type[0];

  if (!["standard", "meetup", "podcast", "group"].some((t) => t === type))
    type = "standard";

  let resPosts;
  if (type !== "group") {
    resPosts = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/${session?.user.id}/posts?postType=${type.toUpperCase()}`,
      {
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      }
    );
  } else {
    resPosts = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/${session?.user.id}/groups`,
      {
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const postsData = await resPosts.json();

  return (
    <ProfilePage
      user={userData}
      posts={resPosts.ok ? postsData : null}
      type={type}
      isOwner
    />
  );
};

export default Page;
