import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import React from "react";

import LoginButton from "@/components/auth/LoginButton";
import LoginForm from "@/components/auth/LoginForm";

const SignIn = async () => {
  const session = await getServerSession();
  const providers = await getProviders();
  console.log("session", session);
  // if (session) {
  //   redirect("/dashboard");
  // }
  return (
    <div className="mb-24 w-full max-w-[400px] lg:mt-[100px]">
      <div className="flex flex-col items-center">
        <div className="hidden w-[1440px] lg:grid lg:grid-cols-2">
          <div className="bg-white-100 dark:bg-dark-800">
            <div className="mb-[52px] ml-10 mt-11 flex">
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
            <div className="ml-[148px] mr-[130px] mt-[86px]">
              <div className="display-1-bold mb-10 text-dark-700 dark:text-white-100">
                Sign in to DevToday.
              </div>
              <div className="flex rounded-lg bg-white-200 p-5 dark:bg-dark-700">
                <div className="mr-5 flex size-[60px] justify-center rounded-lg bg-misc-400 dark:bg-dark-800">
                  <Image
                    src="assets/icons/inbox-green.svg"
                    width={20}
                    height={20}
                    alt="briefcase"
                  />
                </div>
                <div className="paragraph-1-medium w-[322px] pt-2 text-dark-700 dark:text-white-200">
                  Get in the code zone quickly! Swift sign-in for instant access
                  to your hub.
                </div>
              </div>
              <div className="mt-5 flex rounded-lg bg-white-200 p-5 dark:bg-dark-700">
                <div className="mr-5 flex size-[60px] justify-center rounded-lg bg-misc-200 dark:bg-dark-800">
                  <Image
                    src="assets/icons/trouble.svg"
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
          <div className="flex justify-center">
            <div className="mb-[174px] ml-[130px] mr-[169px] mt-[160px] flex w-full flex-col gap-2">
              <LoginForm />
              <Link
                className="paragraph-3-regular mt-3 text-center text-dark-700 dark:text-white-300"
                href={"/signin"}
              >
                Don&apos;t have an account yet?{" "}
                <span className="text-primary1-500">Join the community!</span>
              </Link>
              <div className="paragraph-1-medium my-[30px] text-center text-white-400 dark:text-white-300">
                or
              </div>
              {providers && <LoginButton providers={providers} />}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 lg:hidden">
        <LoginForm />
        <Link
          className="paragraph-3-regular mt-3 text-center text-dark-700 dark:text-white-300"
          href={"/signin"}
        >
          Don&apos;t have an account yet?{" "}
          <span className="text-primary1-500">Join the community!</span>
        </Link>
        <div className="paragraph-1-medium my-[30px] text-center text-white-400 dark:text-white-300">
          or
        </div>
        {providers && <LoginButton providers={providers} />}
      </div>
    </div>
  );
};

export default SignIn;
