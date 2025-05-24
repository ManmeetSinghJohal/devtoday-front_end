import Image from "next/image";
import Link from "next/link";
import React from "react";

import DeletePost from "../DeletePost";
import ParseHTML from "../ParseHTML";
import PostTags from "../shared/tags/PostTags";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";

import Comments from "./Comments";
import PostStats from "./PostStats";

const PostDetails = ({ postData }: { postData: PostData }) => {
  const { title, coverImage, tinyContent, interestTechTags } = postData;
  return (
    <div>
      <div className="relative mb-5 h-[270px] overflow-hidden rounded-2xl">
        <Image
          src={coverImage}
          alt="post image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="mb-5 flex items-center justify-between">
        <div className="display-2-bold ">{title}</div>
        <Popover>
          <PopoverTrigger asChild>
            <Image
              src="/assets/more-vertical.svg"
              width={20}
              height={20}
              alt="avatar"
              className="hover:cursor-pointer hover:opacity-70 "
            />
          </PopoverTrigger>
          <PopoverContent className="bg-white-200 mr-[150px] mt-[10px] w-[180px]">
            <div className="space-y-[14px] py-4 pl-5">
              <div className="bg-white-200 flex space-x-2.5">
                <Image
                  src="/assets/edit.svg"
                  alt="update"
                  width={18}
                  height={18}
                />
                <Link
                  href={`/post/${postData.id}`}
                  className="paragraph-3-medium"
                >
                  Edit Post
                </Link>
              </div>
              <DeletePost deletePostId={postData.id} />
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className="mb-5 flex w-full gap-2.5">
        {interestTechTags?.map((tag) => {
          return <PostTags key={tag.name} name={tag.name} />;
        })}
      </div>
      <div className="paragraph-2-regular text-white-400">
        <ParseHTML data={tinyContent} />
      </div>
      <Separator className="bg-white-border dark:bg-dark-700 mb-9 mt-12" />
      <div className="mb-[30px] lg:hidden">
        <PostStats />
      </div>
      <div>
        <Comments />
      </div>
      <Separator className="bg-white-border dark:bg-dark-700 my-[30px] lg:hidden" />
    </div>
  );
};

export default PostDetails;
