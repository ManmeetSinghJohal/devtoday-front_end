import LeftSidebar from "@/components/shared/LeftSidebar/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar/RightSidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex size-full justify-between bg-red-100">
      <LeftSidebar />
      {children}
      <RightSidebar />
    </section>
  );
};
export default Layout;
