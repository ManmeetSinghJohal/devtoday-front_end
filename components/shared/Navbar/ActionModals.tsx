"use client";
import React, { useState } from "react";

import NotificationIcon from "@/components/shared/Icons/NotificationIcon";
import SearchIcon from "@/components/shared/Icons/SearchIcon";
import { Button } from "@/components/ui/button";
import { NavModalIcons } from "@/lib/constants";

export const Icon = ({ id, isSelected }: NavIconProps) => {
  if (id === "notifications")
    return <NotificationIcon isSelected={isSelected} />;
  if (id === "search") return <SearchIcon isSelected={isSelected} />;
};

const ActionModals = () => {
  const [selectedIcon, setSelectedIcon] = useState<NavIconsState>({
    layers: false,
    calendar: false,
    headphones: false,
    groups: false,
    create: false,
  });
  const handleIconClick = (iconName: NavModalIcons) => {
    if (selectedIcon[iconName]) {
      setSelectedIcon({ [iconName]: false });
    } else {
      setSelectedIcon({
        notifications: iconName === "notifications",
        search: iconName === "search",
      });
    }
  };
  const pending = !!selectedIcon.notification;

  return (
    <div className=" flex items-center gap-2.5">
      {NavModalIcons.map((icon) => (
        <div key={icon.id} className="flex items-center ">
          <Button
            variant="navbar"
            className={`${selectedIcon[icon.id] ? "bg-primary1-500" : "bg-transparent"} flex items-center justify-center rounded-[7px] p-2.5 `}
            onClick={() => {
              handleIconClick(icon.id);
            }}
          >
            <Icon
              id={icon.id}
              isSelected={selectedIcon[icon.id]}
              pending={pending}
            />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ActionModals;
