import Card from "@/components/card/Card";
import React from "react";

const dataProduct = [
  {
    name: "Faisal",
    price: "10.000",
    url: "https://haluancorp.com/wp-content/uploads/2018/08/BULET10.jpg",
  },
  {
    name: "isdf",
    price: "140.000",
    url: "https://haluancorp.com/wp-content/uploads/2018/08/BULET11.jpg",
  },
  {
    name: "Fa44sal",
    price: "140.000",
    url: "https://haluancorp.com/wp-content/uploads/2018/08/BULET13.jpg",
  },
  {
    name: "Fais44al",
    price: "104.000",
    url: "https://haluancorp.com/wp-content/uploads/2018/08/BULET17.jpg",
  },
  {
    name: "Faiseeal",
    price: "10.0s00",
    url: "https://haluancorp.com/wp-content/uploads/2018/08/BULET34.jpg",
  },
  {
    name: "Faisal",
    price: "10.000",
    url: "https://haluancorp.com/wp-content/uploads/2018/08/BULET24.jpg",
  },
  {
    name: "Faiasdfsal",
    price: "10.33000",
    url: "https://haluancorp.com/wp-content/uploads/2018/08/BULET19.jpg",
  },
  {
    name: "Faiseeeal",
    price: "10.33000",
    url: "https://haluancorp.com/wp-content/uploads/2018/08/BULET27.jpg",
  },
];

const Page = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-red-200 grid grid-cols-3">
      {dataProduct.map((item, index) => (
        <div className={`w-full h-full grid place-items-center`} key={index}>
          <Card name={item.name} price={item.price} url={item.url} />
        </div>
      ))}
    </div>
  );
};

export default Page;
