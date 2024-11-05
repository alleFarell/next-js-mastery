"use client";
import { useAppDispatch } from "@/hooks/reduxHook";
import { setDetailData } from "@/redux/slice/ViewConfiguration";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
// import faisal from "@/assets/images/product.jpeg";

interface CardType {
  name: string;
  price: string;
  url: string;
  description: string;
  stock: number;
  category: string;
}
const Card = ({ name, price, url, description, stock, category }: CardType) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleDetail = () => {
    dispatch(setDetailData({ name, price, url, description, stock, category }));
    router.push(`/${name}`);
  };
  return (
    <div className="border bg-red-600 flex flex-col gap-2 rounded-lg max-w-fit p-5 max-h-fit">
      <Image src={`${url}`} alt="" width={150} height={150} />
      <p>{name}</p>
      <p>Rp. {price}</p>

      <button onClick={() => handleDetail()} className="bg-blue-500">
        Detail
      </button>
    </div>
  );
};

export default Card;
