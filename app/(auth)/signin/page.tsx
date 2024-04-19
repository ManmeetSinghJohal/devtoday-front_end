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

  if (session) {
    redirect("/dashboard");
  }
  return (
    <div className="w-full max-w-[400px] lg:mt-[100px]">
      <div className="flex flex-col gap-2">
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
