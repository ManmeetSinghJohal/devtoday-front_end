"use client";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useRouter } from "next/navigation";
import { Editor } from "@tinymce/tinymce-react";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Editor as TinyMCEEditor } from "tinymce";

import CalendarIcon from "@/components/shared/icons/CalendarIcon";
import HeadphonesIcon from "@/components/shared/icons/HeadphonesIcon";
import HomeIcon from "@/components/shared/icons/HomeIcon";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TCreatePostSchema, createPostSchema } from "@/lib/validations";

const Create = () => {
  // const router = useRouter();
  const editorRef = useRef<TinyMCEEditor | null>(null);

  const form = useForm<TCreatePostSchema>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      title: "",
      createType: "Post",
      group: "",
      tinyContent: "",
      tags: "",
    },
  });

  async function onSubmit(values: TCreatePostSchema) {
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="mb-6 md:mb-8">
                <FormLabel className="paragraph-3-medium text-dark-800 dark:text-white-200">
                  Title
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Write a title of the post"
                    className="paragraph-3-regular h-11 rounded-lg border-white-border px-3 py-3.5 text-dark-900 dark:border-dark-border dark:bg-dark-800 dark:text-white-100"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="md:flex md:gap-2.5">
            <FormField
              control={form.control}
              name="createType"
              render={({ field }) => (
                <FormItem className="pb-2.5">
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="paragraph-3-regular w-full border-none  text-xs text-muted-foreground">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent className="border-none">
                          <SelectItem
                            value="Post"
                          >
                            <div className="flex gap-2.5">
                              <HomeIcon/>
                              <div className="text-sm capitalize">Post</div>
                            </div>
                          </SelectItem>
                          <SelectItem
                            value="Meetup"
                          >
                            <div className="flex gap-2.5">
                              <CalendarIcon/>
                              <div className="text-sm capitalize">Meetup</div>
                            </div>
                          </SelectItem>
                          <SelectItem
                            value="Podcast"
                          >
                            <div className="flex gap-2.5">
                              <HeadphonesIcon/>
                              <div className="text-sm capitalize">Podcast</div>
                            </div>
                          </SelectItem>
                          
                     
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="group"
              render={({ field }) => (
                <FormItem className="md:flex-1">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Group" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="JSM Mastery">JSM Mastery</SelectItem>
                      <SelectItem value="GitHub">GitHub</SelectItem>
                      <SelectItem value="Zod">Zod</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="tinyContent"
            render={({ field }) => (
              <FormItem className="mt-6 flex w-full flex-col gap-3 md:mt-8">
                <FormControl className="mt-3.5">
                  <Editor
                    apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                    onInit={(_evt, editor) => {
                      editorRef.current = editor;
                    }}
                    onBlur={field.onBlur}
                    onEditorChange={field.onChange}
                    initialValue=""
                    init={{
                      height: 376,
                      menubar: false,
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "codesample",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                      ],
                      toolbar:
                        "styles bold italic underline strikethrough link image alignleft aligncenter alignright bullist numlist",
                      content_style: "body { font-family:IBM; font-size:16px }",
                      skin: "oxide",
                      content_css: "",
                    }}
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem className="mt-6 md:mt-8">
                <FormLabel className="paragraph-3-medium text-dark-800 dark:text-white-200">
                  Add or change tags (up to 5) so readers know what your story
                  is about
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Add a tag..."
                    className="paragraph-3-regular h-11 rounded-lg border-white-border px-3 py-3.5 text-dark-900 dark:border-dark-border dark:bg-dark-800 dark:text-white-100"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="mt-6 md:mt-8 md:flex md:flex-row-reverse">
            <div className="py-1 md:ml-2.5 md:flex-1">
              <Button
                className="paragraph-2-bold h-11 w-full rounded-lg bg-primary1-500 dark:text-white-200"
                type="submit"
                disabled={form.formState.isSubmitting}
              >
                Publish Post
              </Button>
            </div>

            <div className="py-1 md:mr-2.5 md:flex-1">
              <Button
                className="paragraph-2-bold h-11 w-full rounded-lg bg-white-100 text-dark-900 dark:bg-dark-800 dark:text-white-200"
                type="button"
              >
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </Form>
      {form.formState.errors.root && (
        <p className="text-red-500">{form.formState.errors.root.message}</p>
      )}
    </>
  );
};

export default Create;
