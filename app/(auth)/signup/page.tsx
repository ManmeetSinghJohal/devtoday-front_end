import Image from "next/image";
import Link from "next/link";
import { getProviders } from "next-auth/react";
import React from "react";

import CreateUserForm from "@/components/auth/CreateUserForm";
import LoginButton from "@/components/auth/LoginButton";
import Logo from "@/components/shared/Logo";
import Theme from "@/components/shared/Navbar/Theme";

const SignUp = async () => {
  const providers = await getProviders();
  return (
    <div className="mx-auto lg:grid lg:grid-cols-2">
      <div className="hidden h-screen bg-white-100 dark:bg-dark-800 lg:block">
        <div className="mb-[86px] ml-[40px] mt-[44px] flex dark:text-white-100">
          <Logo />
          <Theme />
        </div>
        <div className="mx-auto w-[442px]">
          <div className="display-1-bold mb-10 text-dark-700 dark:text-white-100">
            Join our developer community! Sign up now and be part of the
            conversation.
          </div>
          <div className="flex rounded-lg bg-white-200 p-5 dark:bg-dark-700">
            <div className="mr-5 flex size-[60px] justify-center rounded-lg bg-misc-100 dark:bg-dark-800">
              <Image
                src="assets/icons/briefcase.svg"
                width={20}
                height={20}
                alt="briefcase"
              />
            </div>
            <div className="paragraph-1-medium w-[322px] pt-2 text-dark-700 dark:text-white-200">
              Discover the latest trends, tools, and insights shaping the
              developer world.
            </div>
          </div>
          <div className="mt-5 flex rounded-lg bg-white-200 p-5 dark:bg-dark-700">
            <div className="mr-5 flex size-[60px] justify-center rounded-lg bg-misc-200 dark:bg-dark-800">
              <Image
                src="assets/icons/feedback.svg"
                width={20}
                height={20}
                alt="feedback"
              />
            </div>
            <div className="paragraph-1-medium w-[322px] pt-2 text-dark-700 dark:text-white-200">
              Forge connections, collaborate on projects, and grow together.
            </div>
          </div>
          <div className="mt-5 flex rounded-lg bg-white-200 p-5 dark:bg-dark-700">
            <div className="mr-5 flex size-[60px] justify-center rounded-lg bg-misc-300 dark:bg-dark-800">
              <Image
                src="assets/icons/inbox.svg"
                width={20}
                height={20}
                alt="inbox"
              />
            </div>
            <div className="paragraph-1-medium w-[322px] pt-2 text-dark-700 dark:text-white-200">
              Elevate your coding with exclusive content for professional growth
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-[347px] lg:w-[421px]">
        <div className="mx-auto mb-[86px] flex  w-52 pt-11 dark:text-white-100 lg:hidden">
          <Logo />
          <Theme />
        </div>
        <div className="lg:mt-[160px]">
          <CreateUserForm />
          <div className="mt-6 text-center">
            <Link
              className="paragraph-3-regular mt-6 text-center text-dark-700 dark:text-white-300"
              href={"/signin"}
            >
              Already have an account?{" "}
              <span className="text-primary1-500">Sign in.</span>
            </Link>
          </div>
          <div className="paragraph-1-medium my-[30px] text-center text-white-400 dark:text-white-300">
            or
          </div>
          {providers && <LoginButton providers={providers} />}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
