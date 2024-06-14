const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="mx-auto size-full min-h-screen bg-white-200 dark:bg-dark-900 lg:mt-[30px] lg:w-[900px] lg:p-[30px]">
      {children}
    </section>
  );
};

export default Layout;
