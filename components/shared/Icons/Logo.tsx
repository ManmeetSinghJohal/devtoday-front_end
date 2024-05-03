import Image from "next/image";

const Logo = () => {
  return (
    <>
      <div className="hidden md:flex">
        <Image
          src="assets/logos/logo.svg"
          alt="logo"
          width={147}
          height={30}
          className="dark:hidden"
        />
        <Image
          src="assets/logos/logo-dark.svg"
          alt="logo"
          width={147}
          height={30}
          className="hidden dark:block"
        />
      </div>
      <div className="md:hidden">
        <Image
          src="assets/logos/logo.svg"
          alt="logo"
          width={114}
          height={30}
          className="dark:hidden"
        />
        <Image
          src="assets/logos/logo-dark.svg"
          alt="logo"
          width={114}
          height={30}
          className="hidden dark:block"
        />
      </div>
    </>
  );
};

export default Logo;
