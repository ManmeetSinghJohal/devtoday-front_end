import Card from "../Cards/SideCard";

const LeftNavbar = () => {
  return (
    <section className="sticky right-0 top-0 flex min-h-screen w-[210px] flex-col items-start justify-start gap-5 overflow-y-auto dark:bg-dark-900 max-xl:hidden">
      <Card />
      <Card />
      <Card />
    </section>
  );
};

export default LeftNavbar;
