"use client";
import parse from "html-react-parser";
import React from "react";

const ParseHTML = ({ data }: { data: string }) => {
  if (typeof data !== "string") {
    console.warn("ParseHTML expected a string, received:", data);
    return null;
  }

  const parsed = parse(data); 
  return <>{parsed}</>;
};


export default ParseHTML;
