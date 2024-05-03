import React from "react";

import ProfileCard from "@/components/profile/ProfileCard";

const Page = ({ params }: { params: { id: string } }) => {
  console.log(params);
  /* const userInfo = await fetch(`http://localhost:3005/api/user/${params.id}`, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  });
  Proile page component props: userInfo
  */
  return <ProfileCard />;
};

export default Page;

// i get the id from the route when i click the profile and put it in the navigation params
