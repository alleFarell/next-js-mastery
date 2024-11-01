"use client";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const query = useParams();
  return (
    <div>
      Ini menu
      <p>{query.menu}</p>
    </div>
  );
};

export default Page;
