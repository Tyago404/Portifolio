"use client";
import Image from "next/image";
import { Paragraph } from "../Paragraph";
import clsx from "clsx";
import { motion } from "motion/react";

type ProjectProps = {
  src: string;
  alt: string;
  paragraphText: string;
  titleText: string;
  pText: string;
  motionDuration: number;
};

export function Project({
  src,
  alt,
  paragraphText,
  titleText,
  pText,
  motionDuration
}: ProjectProps) {
  return (
    <motion.div
      initial={{ y: 50, }}
      whileInView={{ y: 0 }}
      transition={{ duration: motionDuration, ease: "easeOut" }}
      className="relative border w-full group"
    >
      <p
        className={clsx(
          "absolute z-40 m-5 -translate-x-full",
          "text-white bg-black p-2 rounded-full text-sm",
          "opacity-0 group-hover:opacity-100 group-hover:translate-x-0",
          "transition-all duration-300 ease-out"
        )}
      >
        {pText}
      </p>
      <div className="relative h-100 brightness-30 hover:brightness-90 transition-all  ">
        <Image
          src={src}
          alt={alt}
          fill
          className="w-full h-full object-cover"
          sizes="(max-width: 768px) 100vw,
       (min-width: 769px) 50vw"
        />
      </div>
      <div className=" flex flex-col gap-2 p-2 bg-black ">
        <h1>{titleText}</h1>
        <Paragraph text={paragraphText} />
      </div>
    </motion.div>
  );
}
