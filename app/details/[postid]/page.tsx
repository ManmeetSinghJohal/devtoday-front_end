import React from "react";

import AuthorInfo from "@/components/post-details/AuthorInfo";
import GroupInfo from "@/components/post-details/GroupInfo";
import GroupMorePosts from "@/components/post-details/GroupMorePosts";
import PostDetails from "@/components/post-details/PostDetails";
import PostStats from "@/components/post-details/PostStats";
import SharePost from "@/components/post-details/SharePost";

interface ParamsProps {
  params: { postid: string };
}

const DetailsPage = async ({ params }: ParamsProps) => {
  const post = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/post/${params.postid}`,
    {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    }
  );
  const postData = await post.json();
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:pb-[86px]">
      <aside className="relative flex shrink-0 flex-col items-end gap-5 border-0 lg:sticky lg:left-0 lg:top-0 lg:min-w-[210px]">
        <div className="hidden lg:flex">
          <PostStats />
        </div>
        <SharePost />
        <AuthorInfo />
      </aside>
      <div className="flex size-full flex-col gap-5 ">
        <PostDetails postData={postData} />
      </div>

      <aside className="relative flex flex-col items-end gap-5 dark:bg-dark-900 lg:sticky lg:right-0 lg:top-0 lg:min-w-[325px]">
        <GroupInfo />
        <GroupMorePosts />
      </aside>
    </div>
  );
};

export default DetailsPage;
