"use client";
import { useState } from "react";

const buttons = ["Posts", "Meetups", "Podcasts", "Groups"];
const ProfileNavbar = () => {
  const [active, setActive] = useState("Posts");
  return (
    <div className="paragraph-1-medium flex w-full justify-center rounded-xl bg-white-100 px-3.5 py-5 text-white-400 dark:bg-dark-800 dark:text-white-300 sm:justify-between lg:justify-between lg:px-6 ">
      {buttons.map((button) => (
        <div
          key={button}
          onClick={() => setActive(button)}
          className={`cursor-pointer rounded-lg p-2 sm:px-3.5 lg:px-5 ${
            active === button ? "bg-primary1-500  text-white-100" : ""
          }`}
        >
          {button}
        </div>
      ))}
    </div>
  );
};

export default ProfileNavbar;
