import React from "react";

import AccountDropdown from "@/components/shared/AccountDropdown";
import { Navigation } from "@/components/shared/Navbar/Navigation";

const Navbar = () => {
  return (
    <div className="paragraph-2-medium flex w-full items-center justify-between bg-white-100 px-10 py-5 dark:bg-dark-700 dark:text-white-200">
      <Navigation />
      <AccountDropdown />
    </div>
  );
};

export default Navbar;
