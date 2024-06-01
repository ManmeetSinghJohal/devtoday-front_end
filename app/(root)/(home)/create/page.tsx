import { getServerSession } from "next-auth";
import React from 'react';

import CreatePostForm from '@/components/create/CreatePostForm';
import { authOptions } from "@/lib/auth";


const CreatePost = async () => {
    //   const session = await getServerSession(authOptions);
    // const resGroups = await fetch(
    //   `http://localhost:3005/api/group/user/${session?.user.id}`,
    //   {
    //     method: "GET",
    //     mode: "cors",
    //     headers: { "Content-Type": "application/json" },
    //   }
    // );

    // const groupNames = await resGroups.json()
    // console.log("groupNames", groupNames)
    
  return (
    // <CreatePostForm  groupNames={resGroups.ok ? groupNames : null} />
    <CreatePostForm />
  )
}

export default CreatePost;