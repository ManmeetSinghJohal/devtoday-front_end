import Image from "next/image";
import Link from "next/link";
import { getProviders } from "next-auth/react";
import React, { Suspense } from "react";

import LoginButton from "@/components/auth/LoginButton";
import LoginForm from "@/components/auth/LoginForm";
import Theme from "@/components/shared/header/Theme";
import Logo from "@/components/shared/Logo";

const SignIn = async () => {
  const providers = await getProviders();
  console.log(providers);

  return (
    <div className="mx-auto lg:grid lg:grid-cols-2">
      <div className="hidden h-screen bg-white-100 dark:bg-dark-800 lg:block">
        <div className="mb-[86px] ml-[40px] mt-[44px] flex dark:text-white-100">
          <Logo />
          <Theme />
        </div>
        <div className="mx-auto w-[442px]">
          <div className="display-1-bold mb-10 text-dark-700 dark:text-white-100">
            Sign in to DevToday.
          </div>
          <div className="flex rounded-lg bg-white-200 p-5 dark:bg-dark-700">
            <div className="mr-5 flex size-[60px] justify-center rounded-lg bg-misc-400 dark:bg-dark-800">
              <Image
                src="/assets/icons/inbox-green.svg"
                width={20}
                height={20}
                alt="inbox"
              />
            </div>
            <div className="paragraph-1-medium w-[322px] pt-2 text-dark-700 dark:text-white-200">
              Get in the code zone quickly! Swift sign-in for instant access to
              your hub.
            </div>
          </div>
          <div className="mt-5 flex rounded-lg bg-white-200 p-5 dark:bg-dark-700">
            <div className="mr-5 flex size-[60px] justify-center rounded-lg bg-misc-200 dark:bg-dark-800">
              <Image
                src="/assets/icons/trouble.svg"
                width={20}
                height={20}
                alt="trouble"
              />
            </div>
            <div className="paragraph-1-medium w-[322px] pt-2 text-dark-700 dark:text-white-200">
              Trouble logging in? Reset your password.
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-[347px] lg:w-[421px]">
        <div className="mx-auto mb-[52px] flex w-52 pt-11 dark:text-white-100 lg:hidden">
          <Logo />
          <Theme />
        </div>
        <div className="lg:mt-[160px]">
          <Suspense>
            <LoginForm />
          </Suspense>
          <div className="mt-6 text-center">
            <Link
              className="paragraph-3-regular text-dark-700 dark:text-white-300"
              href={"/signup"}
            >
              Don&apos;t have an account yet?{" "}
              <span className="text-primary1-500">Join the community!</span>
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

export default SignIn;
