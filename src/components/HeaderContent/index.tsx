"use client";

import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Paragraph } from "../Paragraph";
import { motion } from "motion/react";

export function HeaderContent() {
  const myWordsArray = [
    "Proativo",
    "Colaborativo",
    "Comunicativo",
    "Responsável",
    "Adaptável",
    "Organizado",
    "Front-end",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % myWordsArray.length);
    }, 2500);

    return () => {
      clearInterval(myInterval);
    };
  }, [myWordsArray.length]);

  return (
    <div>
      <h1 className="text-6xl font-bold -tracking-[5px] w-100 mt-30">
        Contrate um desenvolvedor
        <motion.span
          className="block text-[var(--color-secoundary)]"
          key={myWordsArray[index]}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: 500 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {myWordsArray[index]}
        </motion.span>
      </h1>
      <div className=" flex justify-between w-full  space-between border border-transparent border-l-2 border-l-[var(--color-secoundary)] p-2 mt-4">
        <Paragraph
          className="w-100"
          text="Olá, sou Tiago vamos juntos aumentar o lucro da sua empresa com soluções inteligentes"
        />
        <Button text="Me contrate agora 🔥" />
      </div>
    </div>
  );
}
