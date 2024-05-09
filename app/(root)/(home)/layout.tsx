const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex size-full justify-between">{children}</section>
  );
};
export default Layout;
