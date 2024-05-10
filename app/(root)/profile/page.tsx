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
  let type = searchParams.postType ?? "standard";
  if (type instanceof Array) type = type[0];

  if (!["standard", "meetup", "podcast", "group"].some((t) => t === type))
    type = "standard";

  // what to do if type is "group"?
  let resPosts;
  if (type !== "group") {
    resPosts = await fetch(
      `http://localhost:3005/api/user/${session?.user.id}/posts?postType=${type}`,
      {
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      }
    );
  } else {
    resPosts = await fetch(
      `http://localhost:3005/api/user/${session?.user.id}/groups`,
      {
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // user/id/groups

  const postsData = await resPosts.json();
  console.log(userData);
  return <ProfilePage user={userData} posts={postsData} type={type} isOwner />;
};

export default Page;
