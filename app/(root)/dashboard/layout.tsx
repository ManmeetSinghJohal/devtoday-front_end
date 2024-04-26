import Navbar from "@/components/shared/navbar/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" h-screen bg-white-200  dark:bg-dark-900">
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
