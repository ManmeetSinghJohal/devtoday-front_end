import Header from "@/components/shared/Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative bg-white-200 dark:bg-dark-900">
      <Header />
      <div className="flex min-h-screen flex-1 flex-col gap-5 px-10 pt-5 ">
        {children}
      </div>
    </section>
  );
};
export default Layout;
