"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavIcons } from "@/constants/header";

export const NavigationMobile = () => {
  const pathname = usePathname();

  return (
    <div className="fixed inset-x-0 bottom-0 z-10 mx-auto flex justify-between gap-2.5 bg-white-100 px-5 py-[18px]">
      {NavIcons.map(({ id, href, icon: Icon, exact }) => {
        return (
          <Link
            href={href && href}
            className={`${(exact ? href === pathname : pathname.startsWith(href)) ? "bg-primary1-500 text-white-100" : "bg-transparent text-white-400 dark:text-white-300"} flex items-center justify-center rounded-[7px] p-2.5`}
            key={id}
          >
            <Icon id={id} />
          </Link>
        );
      })}
    </div>
  );
};
