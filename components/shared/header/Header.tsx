import Link from "next/link";
import React from "react";

import Account from "@/components/shared/header/Account";
import { Navigation } from "@/components/shared/header/Navigation";
import Logo from "@/components/shared/icons/Logo";

import NotificationModal from "./NotificationModal";
import SearchModal from "./SearchModal";

const Header = () => {
  return (
    <header className="paragraph-2-medium flex w-full items-center justify-between bg-white-100 px-3.5 py-5 dark:bg-dark-800 dark:text-white-200 md:px-10">
      <Link href="/">
        <Logo />
      </Link>
      <div className="hidden md:flex">
      <Navigation />
      </div>
      <div className="flex gap-2.5">
        <SearchModal />
        <NotificationModal />
        <Account />
      </div>
    </header>
  );
};

export default Header;
