"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
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
import { ambitionOptions, techOptions } from "@/constants";

import { RadioGroup } from "../ui/radio-group";

const FormSchema = z.object({
  journey: z.enum(["veteran", "learner", "builder", "studying", "new"], {
    required_error: "Please select your current programming journey!",
  }),
  ambitions: z.array(
    z.object({
      ambitionName: z.string(),
    })
  ),
  tech: z.array(
    z.object({
      techName: z.string(),
    })
  ),
});

const OnboardingForm = ({
  incrementStep,
  step,
}: {
  incrementStep: () => void;
  step: number;
}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const router = useRouter();
  const session = useSession();
  const {
    fields: techFields,
    append: techAppend,
    remove: techRemove,
  } = useFieldArray({
    control: form.control,
    name: "tech",
  });

  const {
    fields: ambitionFields,
    append: ambitionAppend,
    remove: ambitionRemove,
  } = useFieldArray({
    control: form.control,
    name: "ambitions",
  });

  const { setValue, watch } = form;
  const selectedJourney = watch("journey");

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    try {
      const res = await fetch("http://localhost:3005/api/profile/onboarding", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          id: session.data?.user?.id,
          tech: data.tech.map((tech) => tech.techName),
          ambitions: data.ambitions.map((ambition) => ambition.ambitionName),
        }),
      });

      if (res.ok) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[22px]">
          {step === 0 && (
            <FormField
              control={form.control}
              name="journey"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>
                    <div className="display-2-bold lg:display-1-bold mb-10 text-dark-800 dark:text-white-100">
                      Which best describes your current programming journey?
                    </div>
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem
                        className={`h-14 cursor-pointer select-none rounded-lg p-3 ${selectedJourney === "veteran" ? "bg-primary1-500 text-white-100" : "bg-white-100 text-dark-700 dark:bg-dark-800 dark:text-white-200"}`}
                        onClick={() => setValue("journey", "veteran")}
                      >
                        <FormLabel className="cursor-pointer">
                          Seasoned Pro - Coding veteran
                        </FormLabel>
                      </FormItem>
                      <FormItem
                        className={`h-14 cursor-pointer select-none rounded-lg p-3 ${selectedJourney === "learner" ? "bg-primary1-500 text-white-100" : "bg-white-100 text-dark-700 dark:bg-dark-800 dark:text-white-200"}`}
                        onClick={() => setValue("journey", "learner")}
                      >
                        <FormLabel className="cursor-pointer">
                          Learning Enthusiast - Continuous learner
                        </FormLabel>
                      </FormItem>
                      <FormItem
                        className={`h-14 cursor-pointer select-none rounded-lg p-3 ${selectedJourney === "builder" ? "bg-primary1-500 text-white-100" : "bg-white-100 text-dark-700 dark:bg-dark-800 dark:text-white-200"}`}
                        onClick={() => setValue("journey", "builder")}
                      >
                        <FormLabel className="cursor-pointer">
                          Project Explorer - Passionate builder
                        </FormLabel>
                      </FormItem>
                      <FormItem
                        className={`h-14 cursor-pointer select-none rounded-lg p-3 ${selectedJourney === "studying" ? "bg-primary1-500 text-white-100" : "bg-white-100 text-dark-700 dark:bg-dark-800 dark:text-white-200"}`}
                        onClick={() => setValue("journey", "studying")}
                      >
                        <FormLabel className="cursor-pointer">
                          Tech Student - Studying programming
                        </FormLabel>
                      </FormItem>
                      <FormItem
                        className={`h-14 cursor-pointer select-none rounded-lg p-3 ${selectedJourney === "new" ? "bg-primary1-500 text-white-100" : "bg-white-100 text-dark-700 dark:bg-dark-800 dark:text-white-200"}`}
                        onClick={() => setValue("journey", "new")}
                      >
                        <FormLabel className="cursor-pointer">
                          Tech Explorer - New to coding, eager to learn
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {step === 1 && (
            <FormField
              control={form.control}
              name="ambitions"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>
                    <div className="display-2-bold lg:display-1-bold mb-10 text-dark-800 dark:text-white-100">
                      Define your coding ambitions.
                    </div>
                  </FormLabel>
                  <div className="space-y-5">
                    {ambitionOptions.map((ambitions) => (
                      <FormItem
                        key={ambitions.ambitionName}
                        className={`h-14 cursor-pointer select-none rounded-lg p-3 ${ambitionFields.some((field) => field.ambitionName === ambitions.ambitionName) ? "bg-primary1-500 text-white-100" : "bg-white-100 text-dark-700 dark:bg-dark-800 dark:text-white-200"}`}
                        onClick={() => {
                          const shouldAppend = !ambitionFields.some(
                            (field) =>
                              field.ambitionName === ambitions.ambitionName
                          );
                          if (shouldAppend) {
                            ambitionAppend({
                              ambitionName: ambitions.ambitionName,
                            });
                          } else {
                            ambitionRemove(
                              ambitionFields.findIndex(
                                (field) =>
                                  field.ambitionName === ambitions.ambitionName
                              )
                            );
                          }
                        }}
                      >
                        <FormLabel className="cursor-pointer">
                          {ambitions.ambitionDescription}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {step === 2 && (
            <FormField
              control={form.control}
              name="tech"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>
                    <div className="display-2-bold lg:display-1-bold mb-10 text-dark-800 dark:text-white-100">
                      Select your preferred languages and frameworks for a
                      personalized experience.
                    </div>
                  </FormLabel>
                  <div className="flex flex-wrap gap-x-3.5 gap-y-5">
                    {techOptions.map((tech) => (
                      <FormItem
                        key={tech}
                        onClick={() => {
                          const shouldAppend = !techFields.some(
                            (field) => field.techName === tech
                          );
                          if (shouldAppend) {
                            techAppend({ techName: tech });
                          } else {
                            techRemove(
                              techFields.findIndex(
                                (field) => field.techName === tech
                              )
                            );
                          }
                        }}
                        className={`flex h-11 cursor-pointer select-none rounded-lg p-3 ${
                          techFields.some((field) => field.techName === tech)
                            ? "bg-primary1-500 text-white-100"
                            : "bg-white-100 text-dark-800 dark:bg-dark-800 dark:text-white-200"
                        }`}
                      >
                        <FormLabel className="flex cursor-pointer items-center">
                          {tech}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {step < 2 && (
            <Button
              className="paragraph-2-bold h-11 w-full rounded-lg bg-primary1-500 dark:text-white-200"
              onClick={incrementStep}
              type="button"
            >
              Next
            </Button>
          )}
          {step === 2 && (
            <Button
              className="paragraph-2-bold h-11 w-full rounded-lg bg-primary1-500 dark:text-white-200"
              type="submit"
              disabled={form.formState.isSubmitting}
            >
              Get Started
            </Button>
          )}
        </form>
      </Form>
    </>
  );
};

export default OnboardingForm;
