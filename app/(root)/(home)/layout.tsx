import React from "react";

import LeftSidebar from "@/components/shared/leftsidebar/LeftSidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-5 lg:flex-row">
      <aside className="relative flex shrink-0 flex-col items-end gap-5 border lg:sticky lg:left-0 lg:top-0 lg:min-w-[210px]">
        <LeftSidebar />
      </aside>
      <div className="flex size-full flex-col gap-5 border">
        <div>{children}</div>
      </div>

      <aside className="relative flex flex-col items-end gap-5 border dark:bg-dark-900 lg:sticky lg:right-0 lg:top-0 lg:min-w-[325px]">
        RightSidebar
      </aside>
    </div>
  );
};

export default Layout;
