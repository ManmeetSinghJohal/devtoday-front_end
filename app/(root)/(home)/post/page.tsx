import { getServerSession } from "next-auth";
import React from "react";

import CreatePostForm from "@/components/create/CreatePostForm";
import { authOptions } from "@/lib/auth";

const CreatePost = async () => {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  const resGroups = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/${userId}/groups`,
    {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    }
  );

  const groupNames = await resGroups.json();

  return (
    <CreatePostForm
      groupNames={resGroups.ok ? groupNames : null}
      authorId={userId}
    />
  );
};

export default CreatePost;
