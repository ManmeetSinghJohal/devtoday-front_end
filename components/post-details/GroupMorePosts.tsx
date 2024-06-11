import Image from "next/image";
import React from "react";

const GroupMorePosts = () => {
  return (
    <div className="w-full space-y-5 rounded-2xl bg-white-200 p-5">
      <div className="flex gap-[3px]">
        <div className="paragraph-2-bold text-dark-800">
          More from JS Mastery
        </div>
        <Image
          src="/assets/right-arrow.svg"
          width={12}
          height={10}
          alt="right arrow"
        />
      </div>

      <div className="mb-[15px] flex h-[58px] gap-3.5">
        <Image
          src="/assets/lightbulb.png"
          width={58}
          height={58}
          alt="post image"
        />
        <div className="flex h-[58px] w-full justify-between">
          <div className="mb-1.5 flex flex-col">
            <div className="paragraph-4-medium text-dark-800">
              Showcase Saturday - Unveiling Innovation
            </div>
            <div className="text-[10px] text-white-400">by Sujata Gunale</div>
          </div>
          <div>
            <Image
              src="/assets/right-arrow.svg"
              width={12}
              height={10}
              alt="right arrow"
            />
          </div>
        </div>
      </div>
      
      <div className="mb-[15px] flex h-[58px] gap-3.5">
        <Image
          src="/assets/lightbulb.png"
          width={58}
          height={58}
          alt="post image"
        />
        <div className="flex h-[58px] w-full justify-between">
          <div className="mb-1.5 flex flex-col">
            <div className="paragraph-4-medium text-dark-800">
              Showcase Saturday - Unveiling Innovation
            </div>
            <div className="text-[10px] text-white-400">by Sujata Gunale</div>
          </div>
          <div>
            <Image
              src="/assets/right-arrow.svg"
              width={12}
              height={10}
              alt="right arrow"
            />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default GroupMorePosts;
