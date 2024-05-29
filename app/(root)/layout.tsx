import Header from "@/components/shared/header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Header />
      <div className="size-full bg-white-200 p-5 dark:bg-dark-900 lg:px-10">
        {children}
      </div>
    </section>
  );
};
export default Layout;
