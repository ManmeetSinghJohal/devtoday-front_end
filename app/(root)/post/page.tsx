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
    <section className="mx-auto size-full min-h-screen bg-white-200 dark:bg-dark-900 lg:mt-[30px] lg:w-[900px] lg:p-[30px]">
      <CreatePostForm
        groupNames={resGroups.ok ? groupNames : null}
        authorId={userId}
      />
    </section>
  );
};

export default CreatePost;
