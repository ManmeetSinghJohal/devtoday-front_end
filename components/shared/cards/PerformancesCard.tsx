import React from "react";

import { Skeleton } from "@/components/ui/skeleton";
import { mockPosts } from "@/constants/mockposts";

const PerformanceCard = () => {
  const performances = mockPosts.slice(0, 5);
  return (
    <section className="w-full">
      <div className="gap-5 rounded-2xl bg-white-100 p-5 dark:bg-dark-800">
        <div className="flex flex-col items-start gap-0.5  ">
          <p className="paragraph-2-bold text-dark-800 dark:text-white-200">
            Performance
          </p>
          <p className="paragraph-3-regular">
            The best posts from the last 30 days
          </p>
        </div>
        {performances.map((post: Post) => (
          <div key={post.id} className="mt-5 flex w-full items-center gap-3">
            <Skeleton className="size-[58px] shrink-0 rounded-lg bg-white-200 dark:bg-dark-700" />

            <div className="paragraph-4-regular lg:paragraph-3-regular flex w-full justify-between text-dark-700 dark:text-white-300 ">
              <p className="paragraph-3-regular flex flex-col justify-center text-start capitalize text-white-400 dark:text-white-300">
                views
                <span className=" paragraph-3-medium text-dark-800 dark:text-white-200">
                  {post.views}
                </span>
              </p>
              <p className="flex flex-col justify-center text-start capitalize text-white-400 dark:text-white-300">
                likes
                <span className="paragraph-3-medium text-dark-800 dark:text-white-200">
                  36,8888
                </span>
              </p>
              <p className="flex flex-col   justify-center text-start capitalize text-white-400 dark:text-white-300">
                comments
                <span className="paragraph-3-medium text-dark-800 dark:text-white-200">
                  34
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PerformanceCard;
