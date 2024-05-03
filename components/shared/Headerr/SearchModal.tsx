"use client";
import React, { useState } from "react";

import SearchIcon from "@/components/shared/Iconss/SearchIcon";
import { Button } from "@/components/ui/button";

const SearchModal = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className=" flex items-center gap-2.5">
      <Button
        variant="navbar"
        className={`${open ? "bg-primary1-500 text-white-100" : "bg-transparent text-white-400 dark:text-white-300"}  flex items-center justify-center rounded-[7px] p-2.5 `}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <SearchIcon pending />
      </Button>
    </div>
  );
};

export default SearchModal;
