"use client";

import SideCard from "../Cards/SideCard";
const RightNavBar = () => {
  return (
    <section className="sticky right-0 top-0 flex min-h-screen min-w-[325px] flex-col items-end justify-start gap-5  overflow-y-auto dark:bg-dark-900 max-xl:hidden">
      <SideCard />
      <SideCard />
    </section>
  );
};

export default RightNavBar;
