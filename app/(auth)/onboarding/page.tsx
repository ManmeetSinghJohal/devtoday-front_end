"use client"
import Image from "next/image";
import React, { useState } from "react";

import OnboardingForm from "@/components/onboarding/OnboardingForm";

const Onboarding = () => {
  const [step, setStep] = useState(0);

  function incrementStep() {
    setStep((prevStep) => prevStep + 1);
  }

  return (
    <div className="mb-24 w-full max-w-[400px] lg:mt-[100px]">
      <div className="flex flex-col items-center">
        <div className="hidden w-[1440px] lg:grid lg:grid-cols-2">
          <div className="bg-white-100 dark:bg-dark-800">
            <div className="mb-[52px] ml-10 mt-11 flex">
              <Image
                src="assets/logos/logo.svg"
                alt="logo"
                width={147}
                height={30}
                className="dark:hidden"
              />
              <Image
                src="assets/logos/logo-dark.svg"
                alt="logo"
                width={147}
                height={30}
                className="hidden dark:block"
              />
            </div>
            <div className="ml-[148px] mr-[130px] mt-[86px]">
              <div className="display-1-bold mb-10 text-dark-700 dark:text-white-100">
                Tell us a little about yourself!
              </div>
              <div className="flex rounded-lg bg-white-200 p-5 dark:bg-dark-700">
                <div className="mr-5 flex size-[60px] justify-center rounded-lg bg-misc-100 dark:bg-dark-800">
                  <Image
                    src="assets/icons/rocket.svg"
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
                    Outline your coding journey by setting ambitious and
                    achievable goals.
                  </div>
                )}
                {step === 2 && (
                  <div className="paragraph-1-medium w-[322px] pt-2 text-dark-700 dark:text-white-200">
                    Paint your coding canvas by selecting your favorite
                    languages & frameworks.
                  </div>
                )}
              </div>
              <div className="mt-5 flex rounded-lg bg-white-200 p-5 dark:bg-dark-700">
                <div className="mr-5 flex size-[60px] justify-center rounded-lg bg-misc-200 dark:bg-dark-800">
                  <Image
                    src="assets/icons/feedback.svg"
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
                    Share your coding triumphs and achievements with the
                    community.
                  </div>
                )}
                {step === 2 && (
                  <div className="paragraph-1-medium w-[322px] pt-2 text-dark-700 dark:text-white-200">
                    Choose tools that define your coding style and shape your
                    dev journey.
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mb-[174px] ml-[130px] mr-[169px] mt-[160px] flex w-full flex-col gap-2">
              <OnboardingForm incrementStep={incrementStep} step={step} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 lg:hidden">
        <OnboardingForm incrementStep={incrementStep} step={step} />
      </div>
    </div>
  );
};

export default Onboarding;
