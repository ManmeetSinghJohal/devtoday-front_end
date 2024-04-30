import React from "react";

import Logo from "@/components/shared/Icons/Logo";
import Account from "@/components/shared/Navbar/Account";
import { Navigation } from "@/components/shared/Navbar/Navigation";

import NotificationModal from "./NotificationModal";
import SearchModal from "./SearchModal";

const Navbar = () => {
  return (
    <header className="paragraph-2-medium flex w-full items-center justify-between bg-white-100 px-3.5 py-5 dark:bg-dark-800 dark:text-white-200 md:px-10">
      <Logo />
      <Navigation />
      <div className="flex gap-2.5">
        <SearchModal />
        <NotificationModal />
        <Account />
      </div>
    </header>
  );
};

export default Navbar;
