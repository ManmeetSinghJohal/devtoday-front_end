"use client";

import SideCard from "../Cards/SideCard";

const RightSidebar = () => {
  return (
    <aside className="sticky right-0 top-0 flex min-h-screen min-w-[325px] flex-col items-end justify-start gap-5 overflow-y-auto dark:bg-dark-900 max-xl:hidden">
      <SideCard />
    </aside>
  );
};

export default RightSidebar;
