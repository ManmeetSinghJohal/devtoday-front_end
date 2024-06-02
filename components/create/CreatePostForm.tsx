"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Editor } from "@tinymce/tinymce-react";
import { format } from "date-fns";
import { CalendarIcon, ChevronsUpDown } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Editor as TinyMCEEditor } from "tinymce";

import CalendarIconSVG from "@/components/shared/icons/CalendarIcon";
import CrossIcon from "@/components/shared/icons/CrossIcon";
import HeadphonesIcon from "@/components/shared/icons/HeadphonesIcon";
import HomeIcon from "@/components/shared/icons/HomeIcon";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { TCreatePostSchema, createPostSchema } from "@/lib/validations";

const CreatePostForm: React.FC<GroupNamesProps> = ({ groupNames }) => {
  const editorRef = useRef<TinyMCEEditor | null>(null);
  console.log(groupNames);

  const form = useForm<TCreatePostSchema>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      title: "",
      createType: "Post",
      group: "",
      coverImage: undefined,
      audioFile: undefined,
      audioTitle: "",
      meetupLocation: "",
      meetupDate: undefined,
      tinyContent: "",
      interestTech: [],
    },
  });

  const { register, handleSubmit, setValue, watch } = form;

  const isCreateType = watch("createType");

  async function onSubmit(values: TCreatePostSchema) {
    console.log(values);
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue("coverImage", file);
    }
  };
  const handleAudioFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue("audioFile", file);
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                      <SelectTrigger className="paragraph-3-regular w-full border-none text-xs text-dark-900 dark:border-dark-border dark:bg-dark-800 dark:text-white-100">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent className="border-none text-dark-900 dark:border-dark-border dark:bg-dark-800 dark:text-white-100">
                        <SelectItem value="Post">
                          <div className="flex gap-2.5">
                            <HomeIcon />
                            <div className="text-sm capitalize hover:text-primary1-500">
                              Post
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="Meetup">
                          <div className="flex gap-2.5">
                            <CalendarIconSVG />
                            <div className="text-sm capitalize hover:text-primary1-500">
                              Meetup
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="Podcast">
                          <div className="flex gap-2.5">
                            <HeadphonesIcon />
                            <div className="text-sm capitalize hover:text-primary1-500">
                              Podcast
                            </div>
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
                <FormItem className="flex flex-col md:flex-1">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "justify-between text-dark-900 dark:border-dark-border dark:bg-dark-800 dark:text-white-100",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value
                            ? groupNames.find(
                                (group) => group.name === field.value
                              )?.name
                            : "Select group"}
                          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[456px] p-0 lg:w-[732px]">
                      <Command className="text-dark-900 dark:border-dark-border dark:bg-dark-800 dark:text-white-100">
                        <CommandInput placeholder="Search group..." />
                        <CommandList>
                          <CommandEmpty>No language found.</CommandEmpty>
                          <CommandGroup className="px-[14px] py-[18px] ">
                            {groupNames.map((group, index) => (
                              <div
                                key={group.id}
                                className={`flex h-[40px] items-center ${index < groupNames.length - 1 ? "mb-5" : ""}`}
                              >
                                <CommandItem
                                  value={group.name}
                                  onSelect={() => {
                                    form.setValue("group", group.name);
                                  }}
                                  className="flex size-full cursor-pointer items-center pl-0"
                                >
                                  <div className="relative size-[34px] rounded-full">
                                    <Image
                                      src={group.coverImage}
                                      alt={group.name}
                                      width={34}
                                      height={34}
                                      className="size-full rounded-full"
                                    />
                                  </div>
                                  <div className="ml-2">
                                    <div className="paragraph-4-medium text-dark-800 dark:text-white-200">
                                      {group.name}
                                    </div>
                                    <div className="subtitle-small dark:text-white-400">
                                      {group.bio}
                                    </div>
                                  </div>
                                </CommandItem>
                              </div>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="coverImage"
            render={() => (
              <FormItem className="mt-6 md:mt-8">
                <FormLabel className="paragraph-3-medium text-dark-800 dark:text-white-200">
                  Upload a cover image
                </FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    className="paragraph-3-regular h-11 rounded-lg border-white-border px-3 py-3.5 text-dark-900 dark:border-dark-border dark:bg-dark-800 dark:text-white-100"
                    {...register}
                    onChange={handleFileChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {isCreateType === "Podcast" && (
            <>
              <FormField
                control={form.control}
                name="audioFile"
                render={() => (
                  <FormItem className="mt-6 md:mt-8">
                    <FormLabel className="paragraph-3-medium text-dark-800 dark:text-white-200">
                      Podcast audio file
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        className="paragraph-3-regular h-11 rounded-lg border-white-border px-3 py-3.5 text-dark-900 dark:border-dark-border dark:bg-dark-800 dark:text-white-100"
                        {...register}
                        onChange={handleAudioFileChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="audioTitle"
                render={({ field }) => (
                  <FormItem className="mt-6 md:mt-8">
                    <FormLabel className="paragraph-3-medium text-dark-800 dark:text-white-200">
                      Audio Title
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ex: Codetime | Episode 8"
                        className="paragraph-3-regular h-11 rounded-lg border-white-border px-3 py-3.5 text-dark-900 dark:border-dark-border dark:bg-dark-800 dark:text-white-100"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          {isCreateType === "Meetup" && (
            <>
              <FormField
                control={form.control}
                name="meetupLocation"
                render={({ field }) => (
                  <FormItem className="mt-6 md:mt-8">
                    <FormLabel className="paragraph-3-medium text-dark-800 dark:text-white-200">
                      Meetup location
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Write a location for this meetup"
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
                name="meetupDate"
                render={({ field }) => (
                  <FormItem className="mt-6 flex flex-col gap-2.5 lg:mt-8">
                    <FormLabel>Meetup date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left paragraph-3-regular h-11 rounded-lg border-white-border text-dark-900 dark:border-dark-border dark:bg-dark-800 dark:text-white-100",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2.5 size-4 opacity-50" />
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span className="mr-auto">
                                Pick date of the meetup
                              </span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

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
            name="interestTech"
            render={({ field }) => (
              <FormItem className="mt-6 md:mt-8">
                <FormLabel className="paragraph-3-medium text-dark-800 dark:text-white-200">
                  Add or change tags (up to 5) so readers know what your story
                  is about
                </FormLabel>
                <FormControl>
                  <div className="input-form flex min-h-10 flex-col gap-2 rounded-md border border-white-border p-1 dark:border-dark-border">
                    <div className="input-form flex flex-row flex-wrap gap-2 rounded-md border-white-border p-1 dark:border-dark-border">
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
                      className="m-0 size-full border border-none
                       bg-transparent p-1 focus-visible:ring-transparent focus-visible:ring-offset-transparent"
                      placeholder="Add a tag ..."
                      onKeyDown={async (
                        e: React.KeyboardEvent<HTMLInputElement>
                      ) => {
                        const target = e.target as HTMLInputElement;
                        const inputValue = target.value;
                        if (e.key === "Enter" && inputValue !== "") {
                          e.preventDefault();
                          if (!field.value.includes(inputValue)) {
                            field.onChange([...field.value, inputValue]);
                            target.value = "";
                            await form.trigger("interestTech");
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

export default CreatePostForm;