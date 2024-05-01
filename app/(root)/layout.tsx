import Header from "@/components/shared/Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative bg-white-200 dark:bg-dark-900">
      <Header />
      <div className="flex gap-5 px-10 pt-5">
        <section className="flex min-h-screen flex-1 flex-col ">
          {children}
        </section>
      </div>
    </main>
  );
};
export default Layout;
