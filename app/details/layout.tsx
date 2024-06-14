import Header from "@/components/shared/header/Header";
import { NavigationMobile } from "@/components/shared/NavigationMobile";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <Header />
      <div className="size-full min-h-screen bg-white-100 px-[14px] py-[30px] dark:bg-dark-900 sm:px-10 sm:py-5">
        {children}
      </div>
      <div className="md:hidden">
        <NavigationMobile />
      </div>
    </section>
  );
};
export default Layout;
