"use client";

import SideCard from "../LeftSidebar/Profile";
const RightNavBar = () => {
  return (
    <section className="sticky right-0 top-0 flex min-h-screen min-w-[290px] flex-col items-start justify-start gap-6 overflow-y-auto  bg-dark-900 pl-7 pt-10 max-lg:hidden">
      <SideCard />
      <SideCard />
    </section>
  );
};

export default RightNavBar;
