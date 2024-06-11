import Image from "next/image";
import React from "react";

const Comments = () => {
  return (
    <div>
      <div className="heading-1-medium mb-5 text-dark-800">Comments</div>
      <div className="mb-8 flex gap-2.5">
        <Image src="/assets/avatars.png" width={44} height={44} alt="avatar" />
        <div className="paragraph-3-regular w-full rounded-lg bg-white-200 px-5 py-3 text-white-400">
          Say something nice to Mansurl Haque...
        </div>
      </div>
      <div className="space-y-5">
        <div className=" paragraph-2-regular rounded-xl bg-white-200 p-6 text-dark-700">
          <div className="mb-[15px] flex h-7 items-center justify-between">
            <div className="flex h-7 items-center gap-2">
              <Image
                src="/assets/avatars.png"
                width={28}
                height={28}
                alt="avatar"
              />
              <div className="gap-2 lg:flex">
                <div className="text-sm">Mishacreatrix</div>
                <div className="text-[10px] text-white-400 lg:text-sm">
                  Feb 01 • Edited on Feb 01
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <Image
                src="/assets/icons/like.svg"
                width={16}
                height={16}
                alt="avatar"
              />
              <Image
                src="/assets/more-vertical.svg"
                width={16}
                height={16}
                alt="avatar"
              />
            </div>
          </div>
          <div className="paragraph-3-regular lg:paragraph-2-regular text-dark-700">
            As an ex-dev, I believed nocode to be only useful for small
            prototypes or things like landing pages/portfolio pages etc. After
            tinkering around with Bubble for a bit, I now see that you can
            indeed build fully fledged apps! It is still not ideal, but I reckon
            nocode builders will only get more powerful as time goes.
          </div>
        </div>

        <div className="flex items-center justify-center underline lg:hidden">
          Load more comments
        </div>
      </div>
    </div>
  );
};

export default Comments;
