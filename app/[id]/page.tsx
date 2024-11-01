"use client";
import { useAppSelector } from "@/hooks/reduxHook";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const query = useParams();
  const { detailData } = useAppSelector((state) => state.viewConfig);

  return (
    <div>
      testID
      <p className="text-[50px]">{query?.id}</p>
      <p>{detailData?.name}</p>
      <p>{detailData?.price}</p>
      <Image src={`${detailData?.url}`} alt="" width={150} height={150} />
    </div>
  );
};

export default Page;
