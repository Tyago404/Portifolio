"use client";

import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Paragraph } from "../Paragraph";
import { motion } from "motion/react";
import { ArrowDownToLine } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

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
    }, 3000);

    return () => {
      clearInterval(myInterval);
    };
  }, [myWordsArray.length]);

  return (
    <div>
      <motion.h1
        initial={{filter: "blur(10px)", x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1,filter: "blur(0px)"}}
        transition={{duration: 0.6}}
        className="text-5xl md:text-7xl font-bold -tracking-[3px] max-w-150 mt-30 "
      >
        Contrate um desenvolvedor
        <motion.span
          className="block  text-(--color-secoundary)"
          key={myWordsArray[index]}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: 500 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {myWordsArray[index]}
        </motion.span>
      </motion.h1>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={clsx(
          "flex flex-col md:flex-row gap-2 justify-between w-full",
          "border border-transparent border-l-2 border-l-(--color-secoundary)",
          "p-2 mt-4"
        )}
      >
        <Paragraph
          className="max-w-100"
          text="Olá, sou Tiago vamos juntos aumentar o lucro da sua empresa com soluções inteligentes"
        />
        <Button text="Me contrate agora 🔥" />
      </motion.div>
      <Link
        href="/downloads/cv-tiago-santos.pdf"
        download
        className={clsx(
          "flex items-center ",
          "mt-2 gap-2 p-2",
          "text-xs",
          "bg-white/10 hover:bg-white/30",
          "max-w-max",
          "rounded-full",
          "cursor-pointer"
        )}
      >
        <ArrowDownToLine size={15} />
        <p>Baixar CV</p>
      </Link>
    </div>
  );
}
