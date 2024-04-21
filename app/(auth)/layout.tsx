import React from "react";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" h-screen bg-white-200 dark:bg-dark-900">
        {children}
    </main>
  );
};

export default Layout;
