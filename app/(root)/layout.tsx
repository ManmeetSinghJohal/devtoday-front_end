import Header from "@/components/shared/header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Header />
      <div className="size-full bg-white-200 px-[14px] py-[30px] dark:bg-dark-900 sm:px-10 sm:py-5">
        {children}
      </div>
    </section>
  );
};
export default Layout;
