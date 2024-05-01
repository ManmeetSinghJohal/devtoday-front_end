import LeftNavBar from "@/components/shared/LeftSidebar/LeftSidebar";
import RightNavBar from "@/components/shared/RightSidebar/RightNavbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-5 ">
      <LeftNavBar />
      <section className="flex min-h-screen flex-1 flex-col ">
        {children}
      </section>
      <RightNavBar />
    </div>
  );
};
export default Layout;
