"use client";
import InputText from "@/components/input/InputText";
import { useEffect, useState } from "react";

export default function About() {
  const [email, setEmail] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setCount(count + 1);
  }, [email]);

  console.log(email, "<<< ini emailnya");

  return (
    <div className="grid place-items-center w-[100vw] h-[100vh]">
      <div className="border p-2 rounded-lg flex flex-col">
        <h1>Hello, World!</h1>
        <p className="text-[50px]">{count}</p>
        <InputText value={email} setValue={setEmail} />
      </div>
    </div>
  );
}
