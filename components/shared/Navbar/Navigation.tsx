"use client";
import Link from "next/link";
import { useState } from "react";

import { Icon } from "@/components/shared/Icons/Icon";
import { NavIcons } from "@/lib/constants";

export const Navigation = () => {
  const [selectedIcon, setSelectedIcon] = useState<SelectedIconState>({
    layers: false,
    calendar: false,
    headphones: false,
    groups: false,
    create: false,
  });
  const handleIconClick = (iconName: SelectedIcon) => {
    setSelectedIcon({
      layers: iconName === "layers",
      calendar: iconName === "calendar",
      headphones: iconName === "headphones",
      groups: iconName === "groups",
      create: iconName === "create",
    });
  };

  return (
    <div className="flex items-center gap-2.5">
      {NavIcons.map((icon) => (
        <Link
          href={`/dashboard`}
          className={`${selectedIcon[icon.id] ? "bg-primary1-500" : "bg-transparent"} flex items-center justify-center rounded-[7px] p-2.5`}
          onClick={() => handleIconClick(icon.id)}
          key={icon.id}
        >
          <Icon id={icon.id} isSelected={selectedIcon[icon.id]} />
        </Link>
      ))}
    </div>
  );
};
