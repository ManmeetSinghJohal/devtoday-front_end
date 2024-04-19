import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import React from "react";

import CreateUserForm from "@/components/auth/CreateUserForm";
import LoginButton from "@/components/auth/LoginButton";

const SignUp = async () => {
  const session = await getServerSession();
  const providers = await getProviders();

  if (session) {
    redirect("/dashboard");
  }
  return (
    <div className="mb-24 w-full max-w-[400px] lg:mt-[100px]">
      <div className="flex flex-col items-center">
        <div className="hidden w-[1440px] lg:grid lg:grid-cols-2">
          <div className="bg-white-100">
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
                Join our developer community! Sign up now and be part of the
                conversation.
              </div>
              <div className="flex rounded-lg bg-white-200 p-5">
                <div className="mr-5 flex size-[60px] justify-center rounded-lg bg-misc-100">
                  <Image
                    src="assets/icons/briefcase.svg"
                    width={20}
                    height={20}
                    alt="briefcase"
                  />
                </div>
                <div className="paragraph-1-medium w-[322px] pt-2 text-dark-700">
                  Discover the latest trends, tools, and insights shaping the
                  developer world.
                </div>
              </div>
              <div className="mt-5 flex rounded-lg bg-white-200 p-5">
                <div className="mr-5 flex size-[60px] justify-center rounded-lg bg-misc-200">
                  <Image
                    src="assets/icons/feedback.svg"
                    width={20}
                    height={20}
                    alt="briefcase"
                  />
                </div>
                <div className="paragraph-1-medium w-[322px] pt-2 text-dark-700">
                  Forge connections, collaborate on projects, and grow together.
                </div>
              </div>
              <div className="mt-5 flex rounded-lg bg-white-200 p-5">
                <div className="mr-5 flex size-[60px] justify-center rounded-lg bg-misc-300">
                  <Image
                    src="assets/icons/inbox.svg"
                    width={20}
                    height={20}
                    alt="briefcase"
                  />
                </div>
                <div className="paragraph-1-medium w-[322px] pt-2 text-dark-700">
                  Elevate your coding with exclusive content for professional
                  growth
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mb-[174px] ml-[130px] mr-[169px] mt-[160px] flex w-full flex-col gap-2">
              <CreateUserForm />
              <Link
                className="paragraph-3-regular mt-3 text-center text-dark-700 dark:text-white-300"
                href={"/signin"}
              >
                Already have an account?{" "}
                <span className="text-primary1-500">Sign in.</span>
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
        <CreateUserForm />
        <Link
          className="paragraph-3-regular mt-3 text-center text-dark-700 dark:text-white-300"
          href={"/signin"}
        >
          Already have an account?{" "}
          <span className="text-primary1-500">Sign in.</span>
        </Link>
        <div className="paragraph-1-medium my-[30px] text-center text-white-400 dark:text-white-300">
          or
        </div>
        {providers && <LoginButton providers={providers} />}
      </div>
    </div>
  );
};

export default SignUp;
