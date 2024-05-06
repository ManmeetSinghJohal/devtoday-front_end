import React from "react";

import ProfileCard from "@/components/profile/ProfileCard";

const Page = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`http://localhost:3005/api/auth/${params.id}}`, {
    method: "GET",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  });
  const user = await res.json();
  console.log(user);

  return <ProfileCard user={user} />;
};

export default Page;
