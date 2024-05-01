import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  console.log(params);
  /* const userInfo = await fetch(`http://localhost:3005/api/user/${params.id}`, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  }); */
  return <div>Proile page component props: userInfo</div>;
};

export default Page;

// i get the id from the route when i click the profile and put it in the navigation params
