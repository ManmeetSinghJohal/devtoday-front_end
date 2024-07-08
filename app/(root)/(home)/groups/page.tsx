import { getServerSession } from "next-auth";
import React from "react";

import GroupCard from "@/components/shared/cards/GroupCard";
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
  const groups = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/group`,
    {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    }
  );
  const groupsData = await groups.json();

  return (
    <div className="flex size-full flex-col gap-5 ">
      <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-2">
        {groupsData.map((post: Post) => {
          return <GroupCard user={userData} group={post} key={post.id} />;
        })}
      </div>
    </div>
  );
};

export default Page;
