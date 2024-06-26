"use client";
import Link from "next/link";

const buttons = [
  { label: "Posts", id: "standard" },
  { label: "Meetups", id: "meetup" },
  { label: "Podcasts", id: "podcast" },
  { label: "Groups", id: "group" },
];
const ProfileNavbar = ({ type }: { type: string }) => {
  return (
    <div className="paragraph-1-medium flex w-full justify-center rounded-xl bg-white-100 px-3.5 py-5 text-white-400 dark:bg-dark-800 dark:text-white-300 sm:justify-between lg:justify-between lg:px-6 ">
      {buttons.map((button) => (
        <Link
          href={`?postType=${button.id}`}
          key={button.id}
          className={`cursor-pointer rounded-lg p-2 capitalize sm:px-3.5 lg:px-5 ${
            type === button.id ? "bg-primary1-500  text-white-100" : ""
          }`}
        >
          {button.label}
        </Link>
      ))}
    </div>
  );
};

export default ProfileNavbar;
