"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavIcons } from "@/lib/constants";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="hidden items-center gap-2.5 md:flex">
      {NavIcons.map(({ id, href, icon: Icon }) => {
        return (
          <Link
            href={href && href}
            className={`${href === pathname ? "bg-primary1-500 text-white-100" : "bg-transparent text-white-400 dark:text-white-300"} flex items-center justify-center rounded-[7px] p-2.5`}
            key={id}
          >
            <Icon id={id} />
          </Link>
        );
      })}
    </div>
  );
};
