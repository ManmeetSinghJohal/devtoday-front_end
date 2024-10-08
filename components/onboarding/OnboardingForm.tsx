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
import { ambitionOptions, techOptions, journeyOptions } from "@/constants";

import { RadioGroup } from "../ui/radio-group";

const FormSchema = z.object({
  journey: z.string(),
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

  // const session = useSession();
  const { data: session, update } = useSession();
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
  const router = useRouter();

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/profile/onboarding`, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          id: session?.user?.id,
          tech: data.tech.map((tech) => tech.techName),
          ambitions: data.ambitions.map((ambition) => ambition.ambitionName),
        }),
      });
      if (res.ok) {
        update();
        setTimeout(() => {
          router.push("/profile");
        }, 2000); 
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
                      {journeyOptions.map((journeyItem) => (
                        <FormItem
                          key={journeyItem.journeyName}
                          className={`h-14 cursor-pointer select-none rounded-lg p-3 ${selectedJourney === journeyItem.journeyName ? "bg-primary1-500 text-white-100" : "bg-white-100 text-dark-700 dark:bg-dark-800 dark:text-white-200"}`}
                          onClick={() =>
                            setValue("journey", journeyItem.journeyName)
                          }
                        >
                          <FormLabel className="cursor-pointer">
                            {journeyItem.journeyDescription}
                          </FormLabel>
                        </FormItem>
                      ))}
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
              render={() => (
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
              render={() => (
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
