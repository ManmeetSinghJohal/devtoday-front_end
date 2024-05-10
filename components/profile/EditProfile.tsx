"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import CrossIcon from "@/components/shared/icons/CrossIcon";
import ImageIcon from "@/components/shared/icons/ImageIcon";
import UploadFileIcon from "@/components/shared/icons/UploadFileIcon";
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
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  username: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
  bio: z.string().min(10, {
    message: "Bio must be at least 10 characters.",
  }),
  interestTech: z.array(z.string()),
  linkedinUrl: z.string().url(),
  linkedinHandle: z.string(),
});

type FormFields = z.infer<typeof formSchema>;
const EditProfile = () => {
  const form = useForm<FormFields>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      bio: "Tech mentor, aspiring to bring ideas to life through side projects. Fluent in React.js, Next.js, & TS.",
      interestTech: [],
    },
  });

  const tech = ["React.js", "Next.js", "TypeScript", "Node.js", "GraphQL"];
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="p-8 md:w-[840px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex items-center justify-start gap-2.5">
            <div className="flex size-[60px] items-center justify-center rounded-full bg-white-100 text-white-400 dark:bg-dark-800 dark:text-white-300">
              <ImageIcon />
            </div>
            <Button className="flex gap-2 bg-white-100 text-white-400 dark:bg-dark-800 dark:text-white-300">
              <UploadFileIcon />
              <span>Set a profile photo</span>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-8 ">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white-200">
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="input-form"
                      placeholder="Your first name"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white-200">
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="input-form"
                      placeholder="Your last name"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-white-200">Username</FormLabel>
                <FormControl>
                  <Input
                    className="input-form "
                    placeholder="Your username"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-white-200">Bio</FormLabel>
                <FormControl>
                  <Input
                    className="input-form"
                    placeholder="Your bio"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-3">
            <FormLabel className="dark:text-white-200">
              Interested Technologies
            </FormLabel>
            <div className="input-form flex h-10 flex-row gap-2 rounded-md p-1">
              {tech.length > 0 &&
                tech.map((tag, index) => (
                  <div key={index} className="">
                    <div className="caption-cap-10 flex items-center gap-1 rounded-xl px-2 py-1 dark:bg-dark-700 dark:text-white-300">
                      <p className="uppercase">{tag}</p>
                      <span
                        className="cursor-pointer"
                        onClick={() => {
                          console.log("delete");
                          tech.pop();
                        }}
                      >
                        <CrossIcon />
                      </span>
                    </div>
                  </div>
                ))}
              <FormField
                control={form.control}
                name="interestTech"
                render={({ field }) => (
                  <FormItem className="size-full focus-visible:ring-transparent">
                    <FormControl>
                      <Input
                        className=" m-0  size-full border-none
                       bg-transparent p-0 focus-visible:ring-transparent focus-visible:ring-offset-transparent"
                        placeholder="Add a tag ..."
                        {...field}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            const value = form.getValues("interestTech");
                            tech.push(value);
                          }
                        }}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name="linkedinHandle"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-white-200">LinkedIn</FormLabel>
                <FormControl>
                  <Input
                    className="input-form"
                    placeholder="Your LinkedIn URL"
                    {...field}
                    onChange={field.onChange}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-5">
            <Button className="secondary-button" type="button">
              Cancel
            </Button>
            <Button type="submit" className="bg-primary1-500">
              Update Profile
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EditProfile;
