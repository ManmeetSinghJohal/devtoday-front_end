"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  name: z.string().min(4, {
    message: "name must be at least 4 characters.",
  }),
  username: z.string(),
  bio: z.string().min(10, {
    message: "Bio must be at least 10 characters.",
  }),
  interestTech: z
    .array(z.string())
    .max(7, { message: "You can only add 7 tags" }),
  linkedinLink: z.string().url().optional(),
  linkedinHandle: z.string().optional(),
  instagramLink: z.string().url().optional(),
  instagramHandle: z.string().optional(),
  githubLink: z.string().url().optional(),
  githubHandle: z.string().optional(),
  xProfileLink: z.string().url().optional(),
  xProfileHandle: z.string().optional(),
});

type FormFields = z.infer<typeof formSchema>;
const EditProfile = ({ user }: EditProfileProps) => {
  const {
    username,
    id,
    profile: {
      name,
      bio,
      tech,
      linkedinHandle,
      linkedinLink,
      instagramHandle,
      instagramLink,
      githubLink,
      githubHandle,
      xProfileLink,
      xProfileHandle,
    },
  } = user;

  const form = useForm<FormFields>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: name ?? "",
      username: `@${username}`,
      bio,
      interestTech: tech,
      linkedinHandle: linkedinHandle ?? "",
      linkedinLink: linkedinLink ?? "",
      instagramHandle: instagramHandle ?? "",
      instagramLink: instagramLink ?? "",
      githubLink: githubLink ?? "",
      githubHandle: githubHandle ?? "",
      xProfileLink: xProfileLink ?? "",
      xProfileHandle: xProfileHandle ?? "",
    },
  });

  const router = useRouter();
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const editResponse = await fetch(
        `http://localhost:3005/api/profile/${id}`,
        {
          method: "PATCH",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );
      if (editResponse.ok) {
        router.push("/profile");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="p-8 md:w-[840px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex items-center justify-start gap-2.5">
            <div className="flex size-[60px] items-center justify-center rounded-full bg-white-100 text-white-400 dark:bg-dark-800 dark:text-white-300">
              <ImageIcon />
            </div>
            <Button
              className="flex gap-2 bg-white-100 text-white-400
             hover:bg-white-100 dark:bg-dark-800 dark:text-white-300 dark:hover:bg-dark-700"
            >
              <UploadFileIcon />
              <span>Set a profile photo</span>
            </Button>
          </div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-white-200">Name</FormLabel>
                <FormControl>
                  <Input
                    className="input-form border-white-border dark:border-dark-border"
                    placeholder="Your first name"
                    {...field}
                    value={field.value}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-white-200">Username</FormLabel>
                <FormControl>
                  <Input
                    disabled
                    className="input-form border-white-border dark:border-dark-border"
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
                    className="input-form border-white-border dark:border-dark-border"
                    placeholder="Your bio"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="interestTech"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-white-200">Interest</FormLabel>
                <FormControl>
                  <div className="input-form flex min-h-10 flex-col gap-2 rounded-md border border-white-border p-1 dark:border-dark-border">
                    <div className="input-form flex flex-row gap-2 rounded-md border-white-border p-1 dark:border-dark-border">
                      {field.value.map((tag, index) => (
                        <div key={index} className="">
                          <div className="caption-cap-10 flex items-center gap-1 rounded-xl bg-white-200 px-2 py-1 text-dark-700 dark:bg-dark-700 dark:text-white-300">
                            <p className="uppercase">{tag}</p>
                            <span
                              className="cursor-pointer"
                              onClick={() =>
                                field.onChange(
                                  field.value.filter(
                                    (tagName) => tagName !== tag
                                  )
                                )
                              }
                            >
                              <CrossIcon />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Input
                      className="m-0 size-full  border border-none
                       bg-transparent p-1 focus-visible:ring-transparent focus-visible:ring-offset-transparent"
                      placeholder="Add a tag ..."
                      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        const target = e.target as HTMLInputElement;
                        const inputValue = target.value;
                        if (e.key === "Enter" && inputValue !== "") {
                          e.preventDefault();
                          form.trigger("interestTech");
                          if (!field.value.includes(inputValue)) {
                            if (field.value.length <= 6)
                              field.onChange([...field.value, inputValue]);
                            target.value = "";
                          }
                        }
                      }}
                    />
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="linkedinHandle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white-200">
                    LinkedIn
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="input-form border-white-border dark:border-dark-border"
                      placeholder="Your LinkedIn URL"
                      {...field}
                      onChange={field.onChange}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="linkedinLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white-200">Link</FormLabel>
                  <FormControl>
                    <Input
                      className="input-form border-white-border dark:border-dark-border"
                      placeholder="Your LinkedIn URL"
                      {...field}
                      onChange={field.onChange}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="githubHandle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white-200">Github</FormLabel>
                  <FormControl>
                    <Input
                      className="input-form border-white-border dark:border-dark-border"
                      placeholder="Your LinkedIn URL"
                      {...field}
                      onChange={field.onChange}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="githubLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white-200">Link</FormLabel>
                  <FormControl>
                    <Input
                      className="input-form border-white-border dark:border-dark-border"
                      placeholder="Your LinkedIn URL"
                      {...field}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="instagramHandle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white-200">
                    Instagram
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="input-form border-white-border dark:border-dark-border"
                      placeholder="Your LinkedIn URL"
                      {...field}
                      onChange={field.onChange}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="instagramLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white-200">Link</FormLabel>
                  <FormControl>
                    <Input
                      className="input-form border-white-border dark:border-dark-border"
                      placeholder="Your LinkedIn URL"
                      {...field}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="xProfileHandle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white-200">
                    Twitter/X
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="input-form border-white-border dark:border-dark-border"
                      placeholder="Your LinkedIn URL"
                      {...field}
                      onChange={field.onChange}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="xProfileLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white-200">Link</FormLabel>
                  <FormControl>
                    <Input
                      className="input-form border-white-border dark:border-dark-border"
                      placeholder="Your LinkedIn URL"
                      {...field}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Link className="link-button secondary-button" href="/profile">
              Cancel
            </Link>
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
