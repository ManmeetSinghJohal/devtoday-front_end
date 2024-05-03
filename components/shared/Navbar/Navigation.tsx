"use client";
import Link from "next/link";
import { useState } from "react";

import CalendarIcon from "@/components/shared/Icons/CalendarIcon";
import CreateIcon from "@/components/shared/Icons/CreateIcon";
import GroupsIcon from "@/components/shared/Icons/GroupsIcon";
import HeadphonesIcon from "@/components/shared/Icons/HeadphonesIcon";
import LayersIcon from "@/components/shared/Icons/LayersIcon";
import { NavIcons } from "@/lib/constants";

export const Icon = ({ id, isSelected }: NavIconProps) => {
  if (id === "layers") return <LayersIcon isSelected={isSelected} />;
  if (id === "calendar") return <CalendarIcon isSelected={isSelected} />;
  if (id === "headphones") return <HeadphonesIcon isSelected={isSelected} />;
  if (id === "groups") return <GroupsIcon isSelected={isSelected} />;
  if (id === "create") return <CreateIcon isSelected={isSelected} />;
};

export const Navigation = () => {
  const [selectedIcon, setSelectedIcon] = useState<NavIconsState>({
    layers: false,
    calendar: false,
    headphones: false,
    groups: false,
    create: false,
  });
  const handleIconClick = (iconName: NavIcons) => {
    setSelectedIcon({
      layers: iconName === "layers",
      calendar: iconName === "calendar",
      headphones: iconName === "headphones",
      groups: iconName === "groups",
      create: iconName === "create",
    });
  };

  return (
    <div className="hidden items-center gap-2.5 md:flex">
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
