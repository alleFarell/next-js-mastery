"use client";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const query = useParams();
  console.log(query);
  return (
    <div>
      testID
      <p>{query?.id}</p>
    </div>
  );
};

export default Page;
