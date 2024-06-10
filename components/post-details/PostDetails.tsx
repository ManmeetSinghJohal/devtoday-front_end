import Image from "next/image";
import React from "react";

import PostTags from "../shared/tags/PostTags";
import { Separator } from "../ui/separator";

const interestTechTags = [{ name: "html" }, { name: "javaScript" }];

const PostDetails = () => {
  return (
    <div>
      <div className="relative mb-5 h-[270px] overflow-hidden rounded-2xl">
        <Image
          src="/assets/coverimg.png"
          alt="post image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="display-2-bold mb-5">
        GitHub: The Heart of Developer Collaboration
      </div>
      <div className="mb-5 flex w-full gap-2.5">
        {interestTechTags?.map((tag: Tag) => {
          return <PostTags key={tag.name} name={tag.name} />;
        })}
      </div>
      <div className="paragraph-2-regular text-white-400">
        In the ever-evolving landscape of software development, collaboration
        and version control stand as the pillars supporting innovation and
        efficiency. GitHub, a platform that needs no introduction in the
        developer world, emerges as the beating heart of this collaborative
        ecosystem.
      </div>
      <Separator className="mb-9 mt-12 bg-white-border dark:bg-dark-700" />
      <div>
        <div>Comments</div>
        <div></div>
      </div>
    </div>
  );
};

export default PostDetails;
