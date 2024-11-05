import Card from "@/components/card/Card";
import React from "react";

const dataProduct = [
  {
    name: "Faisal",
    price: "10.000",
    url: "https://haluancorp.com/wp-content/uploads/2018/08/BULET10.jpg",
    description: "High-quality product",
    stock: 100,
    category: "Electronics",
  },
  {
    name: "isdf",
    price: "140.000",
    url: "https://haluancorp.com/wp-content/uploads/2018/08/BULET11.jpg",
    description: "Top-rated item",
    stock: 50,
    category: "Furniture",
  },
  {
    name: "Fa44sal",
    price: "140.000",
    url: "https://haluancorp.com/wp-content/uploads/2018/08/BULET13.jpg",
    description: "New arrival",
    stock: 75,
    category: "Clothing",
  },
  {
    name: "Fais44al",
    price: "104.000",
    url: "https://haluancorp.com/wp-content/uploads/2018/08/BULET17.jpg",
    description: "Limited edition",
    stock: 30,
    category: "Accessories",
  },
  {
    name: "Faiseeal",
    price: "10.0s00",
    url: "https://haluancorp.com/wp-content/uploads/2018/08/BULET34.jpg",
    description: "Best seller",
    stock: 200,
    category: "Books",
  },
  {
    name: "Faisal",
    price: "10.000",
    url: "https://haluancorp.com/wp-content/uploads/2018/08/BULET24.jpg",
    description: "Customer favorite",
    stock: 120,
    category: "Toys",
  },
  {
    name: "Faiasdfsal",
    price: "10.33000",
    url: "https://haluancorp.com/wp-content/uploads/2018/08/BULET19.jpg",
    description: "Premium quality",
    stock: 60,
    category: "Home",
  },
  {
    name: "Faiseeeal",
    price: "10.33000",
    url: "https://haluancorp.com/wp-content/uploads/2018/08/BULET27.jpg",
    description: "Exclusive deal",
    stock: 40,
    category: "Garden",
  },
];

const Page = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-red-200 grid grid-cols-3">
      {dataProduct.map((item, index) => (
        <div className={`w-full h-full grid place-items-center`} key={index}>
          <Card
            name={item.name}
            price={item.price}
            url={item.url}
            description={item.description}
            stock={item.stock}
            category={item.category}
          />
        </div>
      ))}
    </div>
  );
};

export default Page;
