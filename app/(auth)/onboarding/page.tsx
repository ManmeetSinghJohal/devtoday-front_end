"use client";
import Image from "next/image";
import React, { useState } from "react";

import OnboardingForm from "@/components/onboarding/OnboardingForm";
import Theme from "@/components/shared/header/Theme";
import Logo from "@/components/shared/Logo";

const Onboarding = () => {
  const [step, setStep] = useState(0);

  function incrementStep() {
    setStep((prevStep) => prevStep + 1);
  }

  return (
    <div className="mx-auto lg:grid lg:grid-cols-2">
      <div className="hidden h-screen bg-white-100 dark:bg-dark-800 lg:block">
        <div className="mb-[86px] ml-[40px] mt-[44px] flex dark:text-white-100">
          <Logo />
          <Theme />
        </div>
        <div className="mx-auto w-[442px]">
          <div className="display-1-bold mb-10 text-dark-700 dark:text-white-100">
            Tell us a little about yourself!
          </div>
          <div className="flex rounded-lg bg-white-200 p-5 dark:bg-dark-700">
            <div className="mr-5 flex size-[60px] justify-center rounded-lg bg-misc-100 dark:bg-dark-800">
              <Image
                src="/assets/icons/rocket.svg"
                width={20}
                height={20}
                alt="rocket"
              />
            </div>
            {step === 0 && (
              <div className="paragraph-1-medium w-[322px] pt-2 text-dark-700 dark:text-white-200">
                Highlight your skills and projects for the community.
              </div>
            )}
            {step === 1 && (
              <div className="paragraph-1-medium w-[322px] pt-2 text-dark-700 dark:text-white-200">
                Outline your coding journey by setting ambitious and achievable
                goals.
              </div>
            )}
            {step === 2 && (
              <div className="paragraph-1-medium w-[322px] pt-2 text-dark-700 dark:text-white-200">
                Paint your coding canvas by selecting your favorite languages &
                frameworks.
              </div>
            )}
          </div>
          <div className="mt-5 flex rounded-lg bg-white-200 p-5 dark:bg-dark-700">
            <div className="mr-5 flex size-[60px] justify-center rounded-lg bg-misc-200 dark:bg-dark-800">
              <Image
                src="/assets/icons/feedback.svg"
                width={20}
                height={20}
                alt="feedback"
              />
            </div>
            {step === 0 && (
              <div className="paragraph-1-medium w-[322px] pt-2 text-dark-700 dark:text-white-200">
                Explore learning opportunities and connect with mentors.
              </div>
            )}
            {step === 1 && (
              <div className="paragraph-1-medium w-[322px] pt-2 text-dark-700 dark:text-white-200">
                Share your coding triumphs and achievements with the community.
              </div>
            )}
            {step === 2 && (
              <div className="paragraph-1-medium w-[322px] pt-2 text-dark-700 dark:text-white-200">
                Choose tools that define your coding style and shape your dev
                journey.
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mx-auto w-[347px] lg:w-[460px]">
        <div className="mx-auto mb-[52px] flex w-52 pt-11 dark:text-white-100 lg:hidden">
          <Logo />
          <Theme />
        </div>
        <div className="lg:mt-[160px]">
          <OnboardingForm incrementStep={incrementStep} step={step} />
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
