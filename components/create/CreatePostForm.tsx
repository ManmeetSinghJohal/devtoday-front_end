"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Editor } from "@tinymce/tinymce-react";
import { format } from "date-fns";
import { CalendarIcon, ChevronsUpDown } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
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

import AudioUpload from "../AudioUpload";
import ImageUpload from "../ImageUpload";
import ParseHTML from "../ParseHTML";

const CreatePostForm: React.FC<CreatePostFormProps> = ({
  groupNames,
  authorId,
}) => {
  const [isPreview, setIsPreview] = useState(false);
  const editorRef = useRef<TinyMCEEditor | null>(null);

  const router = useRouter();

  const togglePreview = () => {
    setIsPreview((prevState) => !prevState);
  };

  const form = useForm<TCreatePostSchema>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      title: "",
      createType: "STANDARD",
      group: "",
      coverImage: "",
      audioFile: "",
      audioTitle: "",
      meetupLocation: "",
      meetupDate: undefined,
      tinyContent: "",
      interestTechTags: [],
    },
  });

  const { handleSubmit, watch } = form;

  const isCreateType = watch("createType");
  const isCoverImage = watch("coverImage");
  const isTinyContent = watch("tinyContent");
  const isTitle = watch("title");

  async function onSubmit(values: TCreatePostSchema) {
    const getGroup = groupNames.find((group) => group.name === values.group);
    const groupId = getGroup?.id;
    if (values.meetupDate) values.meetupDate.toISOString();
    const valuesCopy = { ...values, authorId, groupId };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { group, ...postDetails } = valuesCopy;
    console.log("postDetails", postDetails);

    try {
      const res = await fetch("http://localhost:3005/api/post", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postDetails),
      });
      if (res.ok) {
        router.push("profile");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {isPreview && (
        <>
          <div className="mb-5 flex gap-[5px]" onClick={togglePreview}>
            <Image
              src="../assets/left_arrow.svg"
              height={12}
              width={15}
              alt="left arrow"
              className="mr-4"
            />
            <Image
              src="../assets/preview.svg"
              height={20}
              width={20}
              alt="preview"
            />
            <div className="paragraph-3-medium">Preview</div>
          </div>

          {isCoverImage && (
            <div className="relative mb-5 h-[270px] overflow-hidden">
              <Image
                src={isCoverImage}
                alt="my image"
                layout="fill"
                objectFit="cover rounded-2xl"
              />
            </div>
          )}

          {isTitle && <div className="display-2-bold mb-5">{isTitle}</div>}
          {isTinyContent && <ParseHTML data={isTinyContent} />}
        </>
      )}
      {!isPreview && (
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
                          <SelectItem value="STANDARD">
                            <div className="flex gap-2.5">
                              <HomeIcon />
                              <div className="text-sm capitalize hover:text-primary1-500">
                                Post
                              </div>
                            </div>
                          </SelectItem>
                          <SelectItem value="MEETUP">
                            <div className="flex gap-2.5">
                              <CalendarIconSVG />
                              <div className="text-sm capitalize hover:text-primary1-500">
                                Meetup
                              </div>
                            </div>
                          </SelectItem>
                          <SelectItem value="PODCAST">
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
              render={({ field }) => (
                <FormItem className="mt-6 md:mt-8">
                  <FormLabel className="paragraph-3-medium text-dark-800 dark:text-white-200">
                    Upload a cover image
                  </FormLabel>
                  <FormControl>
                    <ImageUpload
                      value={field.value}
                      setValue={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {isCreateType === "PODCAST" && (
              <>
                <FormField
                  control={form.control}
                  name="audioFile"
                  render={({ field }) => (
                    <FormItem className="mt-6 md:mt-8">
                      <FormLabel className="paragraph-3-medium text-dark-800 dark:text-white-200">
                        Podcast audio file
                      </FormLabel>
                      <FormControl>
                        <AudioUpload
                          value={field.value}
                          setValue={field.onChange}
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

            {isCreateType === "MEETUP" && (
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

            {!isPreview && (
              <div className="mt-10 flex gap-[5px]" onClick={togglePreview}>
                <Image
                  src="../assets/preview.svg"
                  height={20}
                  width={20}
                  alt="preview"
                />
                <div className="paragraph-3-medium">Preview</div>
              </div>
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
                        content_style:
                          "body { font-family:IBM; font-size:16px }",
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
              name="interestTechTags"
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
                              await form.trigger("interestTechTags");
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
      )}
      {form.formState.errors.root && (
        <p className="text-red-500">{form.formState.errors.root.message}</p>
      )}
    </>
  );
};

export default CreatePostForm;
