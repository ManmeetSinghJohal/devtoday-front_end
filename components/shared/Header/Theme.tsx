"use client";
import React from "react";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { toggleDarkMode } from "@/utils/theme";

import MoonIconNav from "../Icons/MoonIconNav";
import SunIconNav from "../Icons/SunIconNav";

const Theme = () => {
  return (
    <>
      <Menubar className="relative border-none bg-transparent shadow-none">
        <MenubarMenu>
          <MenubarTrigger className="focus:bg-transparent data-[state-open]:bg-white-400 dark:focus:bg-dark-800 dark:data-[state-open]:bg-dark-800">
            <div className="flex gap-3 p-2">
              <span className="text-[#FF5C00] dark:text-white-400">
                <SunIconNav />
              </span>
              <span className="text-white-400 dark:text-[#FF5C00]">
                <MoonIconNav />
              </span>
            </div>
          </MenubarTrigger>
          <MenubarContent className="absolute -right-12 mt-3 min-w-[140px] rounded border py-2 dark:border-dark-700 dark:bg-dark-700">
            <MenubarItem
              className="flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-700"
              onClick={() => {
                toggleDarkMode();
              }}
            >
              <span className="text-[#FF5C00] dark:text-white-400">
                <SunIconNav />
              </span>
              <p className="dark:text-dark100_light900 text-primary1-500">
                Light Mode
              </p>
            </MenubarItem>
            <MenubarItem
              className="flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-700"
              onClick={() => {
                toggleDarkMode();
              }}
            >
              <span className="text-white-400 dark:text-[#FF5C00]">
                <MoonIconNav />
              </span>
              <p className="text-dark100_light900 dark:text-primary1-500">
                Dark Mode
              </p>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
};

export default Theme;
