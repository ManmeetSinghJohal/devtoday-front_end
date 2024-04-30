import Header from "@/components/shared/Header/Header";
import LeftNavBar from "@/components/shared/LeftSidebar/LeftSidebar";
import RightNavBar from "@/components/shared/RightSidebar/RightNavbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative bg-dark-900">
      <Header />
      <div className="flex  px-10 pt-5">
        <LeftNavBar />
        <section className="flex min-h-screen flex-1 flex-col ">
          {children}
        </section>
        <RightNavBar />
      </div>
    </main>
  );
};
export default Layout;
