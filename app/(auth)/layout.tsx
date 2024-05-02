import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className=" h-screen bg-white-200 dark:bg-dark-900">
      {children}
    </section>
  );
};

export default Layout;
