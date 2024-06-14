import Image from "next/image";
import React from "react";

import { Button } from "../ui/button";

const GroupInfo = () => {
  return (
    <div className="flex w-full flex-col items-center rounded-2xl bg-white-200 px-5 py-[30px]">
      <Image
        src="/assets/jsm.png"
        width={100}
        height={100}
        alt="avatar"
        className="mb-5"
      />
      <div className="display-2-bold mb-0.5 text-dark-800">JS Mastery</div>
      <div className="paragraph-2-medium mb-5 text-white-400">@jsmastery</div>
      <Button className="paragraph-3-bold mb-2.5 w-full bg-white-border/40 text-primary1-500">
        Following
      </Button>
      <Button className="paragraph-3-bold mb-5 w-full bg-white-100 text-dark-700">
        View Profile
      </Button>
      <div className="paragraph-2-regular text-white-400">joined 6 months ago</div>
    </div>
  );
};

export default GroupInfo;
