import Image from "next/image";
import React from "react";

import Theme from "@/components/navbar/Theme";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="size-full border bg-white-200 pt-11 dark:bg-dark-900">
      <div className="flex flex-col items-center">
        <div className="mb-[52px] flex lg:hidden">
          <Image
            src="assets/logos/logo.svg"
            alt="logo"
            width={147}
            height={30}
            className="dark:hidden"
          />
          <Image
            src="assets/logos/logo-dark.svg"
            alt="logo"
            width={147}
            height={30}
            className="hidden dark:block"
          />
          <Theme />
        </div>
        {children}
      </div>
    </main>
  );
};

export default Layout;
