"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavIcons } from "@/constants/header";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-2.5">
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
    </nav>
  );
};
