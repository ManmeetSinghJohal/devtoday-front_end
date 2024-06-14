"use client";
import parse from "html-react-parser";
import React from "react";

interface Props {
  data: string;
}

const ParseHTML = ({ data }: Props) => {
  return (
    <div className="paragraph-2-regular text-white-400 dark:text-white-300">
      {parse(data)}
    </div>
  );
};

export default ParseHTML;
