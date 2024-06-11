import { getServerSession } from "next-auth";
import React from "react";

import CreatePostForm from "@/components/create/CreatePostForm";
import { authOptions } from "@/lib/auth";

interface ParamsProps {
  params: { postid: string };
}


const EditPost = async ({ params }: ParamsProps) => {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  const resGroups = await fetch(
    `http://localhost:3005/api/user/${userId}/groups`,
    {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    }
  );

    const post = await fetch(
      `http://localhost:3005/api/post/${params.postid}`,
      {
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      }
    );
    const postData = await post.json();

  const groupNames = await resGroups.json();

  return (
    <CreatePostForm
      groupNames={resGroups.ok ? groupNames : null}
      authorId={userId}
      postData={postData}
    />
  );
};

export default EditPost;
