"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(50),
});

const LoginForm = () => {
  const [error, setError] = useState("");

  const router = useRouter();

  const searchParams = useSearchParams();

  useEffect(() => {
    const search = searchParams.get("error");
    if (search === "OAuthAccountNotLinked") {
      setError(
        "The email address is already linked to an account. Please log in with that account."
      );
    }
  }, [searchParams]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      console.log("res", res);
      if (res?.error) {
        setError("Invalid email or password");
        return;
      }

      // router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
    console.log("log-in values", values);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[22px]">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="paragraph-3-medium text-dark-800 dark:text-white-200">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="paragraph-3-regular h-11 rounded-lg border-white-border px-3 py-3.5 text-dark-900 dark:border-dark-border dark:bg-dark-800 dark:text-white-100"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="paragraph-3-medium text-dark-800 dark:text-white-200">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    className="paragraph-3-regular h-11 rounded-lg border-white-border px-3 py-3.5 text-dark-900 dark:border-dark-border dark:bg-dark-800 dark:text-white-100"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="py-1">
            <Button
              className="paragraph-2-bold h-11 w-full rounded-lg bg-primary1-500 dark:text-white-200"
              type="submit"
              disabled={form.formState.isSubmitting}
            >
              Next
            </Button>
          </div>
        </form>
      </Form>
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
};

export default LoginForm;
