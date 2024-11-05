"use client";
import { useAppSelector } from "@/hooks/reduxHook";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const query = useParams();
  const { detailData } = useAppSelector((state) => state.viewConfig);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <p className="text-4xl font-bold text-blue-600 mb-4">{query?.id}</p>

      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <Image
            src={`${detailData?.url}`}
            alt={detailData?.name || "Product Image"}
            width={150}
            height={150}
            className="rounded-lg"
          />
        </div>

        <div className="text-center">
          <p className="text-2xl font-semibold text-gray-800">
            {detailData?.name}
          </p>
          <p className="text-xl text-green-600 mt-2">
            Price: {detailData?.price}
          </p>
          <p className="text-gray-600 mt-2">{detailData?.description}</p>
          <p className="text-gray-700 mt-2">Stock: {detailData?.stock}</p>
          <p className="text-gray-700 mt-2">Category: {detailData?.category}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
