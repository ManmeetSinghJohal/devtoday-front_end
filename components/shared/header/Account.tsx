"use client";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

import MoonIconNav from "@/components/shared/icons/MoonIconNav";
import ProfileIcon from "@/components/shared/icons/ProfileIcon";
import SunIconNav from "@/components/shared/icons/SunIconNav";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Separator } from "@/components/ui/separator";
import { toggleDarkMode } from "@/utils/theme";

import DropdownIcon from "../icons/DropdownIcon";

const Account = () => {
  const { data } = useSession();

  return (
    <div className="flex items-center justify-between ">
      <Menubar className="relative rounded-[6px] bg-transparent shadow-none">
        <MenubarMenu>
          <MenubarTrigger className="paragraph-2-medium cursor-pointer border-white-border p-0 capitalize text-dark-800 focus:bg-transparent dark:border-transparent  dark:text-white-200">
            <div className="flex items-center justify-center gap-2">
              <Image
                width={34}
                height={34}
                className="cursor-pointer rounded-[6px]  border border-primary1-500 p-0.5"
                alt="profile image"
                src="/assets/icons/profilepic.svg"
              />

              <div className="hidden text-white-400 dark:text-white-400 md:flex">
                <p className="text-dark-900 dark:text-white-200">
                  {data?.user && data.user.username}
                </p>
                <DropdownIcon />
              </div>
            </div>
          </MenubarTrigger>
          <MenubarContent className="paragraph-3-medium mr-5 mt-3.5 flex w-[174px] flex-col gap-3.5 border-white-border p-5 shadow-none dark:border-dark-700 dark:bg-dark-800 md:rounded-t-none md:border-t-0">
            <MenubarItem className="cursor-pointer gap-2.5 px-0">
              <Link
                href="/profile"
                className="flex gap-2.5 dark:text-white-200"
              >
                <ProfileIcon />
                <p>Profile</p>
              </Link>
            </MenubarItem>

            <MenubarItem
              className="flex cursor-pointer gap-2.5 px-0 text-primary1-500 hover:text-primary1-500  dark:hover:text-primary1-500"
              onClick={() => signOut()}
            >
              <Image
                alt="Log out"
                src="/assets/icons/logout.svg"
                width={18}
                height={18}
              />
              <p className=" hover:text-primary1-500">Log out</p>
            </MenubarItem>
            <Separator className="p-0 dark:bg-dark-700" />
            <MenubarItem className="flex w-full justify-between p-0 font-semibold dark:text-white-200">
              Interface
              <div className="flex items-center justify-center gap-1.5 rounded-2xl bg-white-200 p-1 dark:bg-transparent">
                <div
                  onClick={() => {
                    toggleDarkMode();
                  }}
                  className="light-toggle rounded-full p-1.5 dark:text-dark-700"
                >
                  <SunIconNav />
                </div>
                <div
                  onClick={() => {
                    toggleDarkMode();
                  }}
                  className="dark-toggle rounded-full p-1.5 text-white-300 dark:text-white-100"
                >
                  <MoonIconNav />
                </div>
              </div>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default Account;
