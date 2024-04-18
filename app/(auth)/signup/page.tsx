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
        <div className="hidden w-[1440px] border border-red-500 lg:grid lg:grid-cols-2">
          <div className="border">
            <div className="mb-[52px] flex">
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
          </div>
          <div className="flex justify-center border border-green-500">
            <div className="mb-[174px] ml-[130px] mr-[169px] mt-[160px] flex w-full flex-col gap-2 border">
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
