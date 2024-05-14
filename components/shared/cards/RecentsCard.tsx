import ArrowRightIcon from "@/components/shared/icons/ArrowRightIcon";
import { Skeleton } from "@/components/ui/skeleton";

const RecentPosts = ({ posts, user }: RecentPostsProps) => {
  const recentPosts = posts.slice(0, 3);

  return (
    <section className="w-full">
      <div className="rounded-2xl bg-white-100 p-5 dark:bg-dark-800 ">
        <div className="paragraph-2-bold flex items-center gap-0.5 text-dark-800  dark:text-white-200">
          <p>Recent Posts</p>
          <ArrowRightIcon />
        </div>
        {recentPosts.map((post: any) => (
          <div key={post.id} className="mt-5 flex items-center gap-3">
            <Skeleton className="size-[58px] shrink-0 rounded-lg bg-white-200 dark:bg-dark-700" />

            <div className="flex w-full flex-col gap-1">
              <p className="paragraph-3-bold w-full text-dark-800 dark:text-white-200">
                {post.title}
              </p>

              <p className="subtitle-small w-full text-white-400">
                by {user.username}
              </p>
            </div>
            <div className="text-white-400">
              <ArrowRightIcon />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
