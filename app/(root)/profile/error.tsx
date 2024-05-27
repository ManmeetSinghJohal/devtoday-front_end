"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex size-full flex-col justify-center gap-4 text-center">
      <p className="display-1-bold text-center  text-dark-800 dark:text-white-100 ">
        Ooops!!
      </p>
      <div className="flex w-full flex-col justify-center">
        <p className=" text-dark-900 dark:text-white-200">
          Something went wrong.
        </p>
        <p className=" text-dark-900 dark:text-white-200">{error.message}</p>
      </div>
    </div>
  );
}
