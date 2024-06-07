"use client";
import parse from "html-react-parser";
import React from "react";

interface Props {
  data: string;
}

const ParseHTML = ({ data }: Props) => {
  

  return <div>{parse(data)}</div>;
};

export default ParseHTML;
