"use client";
import Image from "next/image";
import { Paragraph } from "../Paragraph";
import { motion } from "motion/react";

type ProjectProps = {
  src: string;
  alt: string;
  paragraphText: string;
  titleText: string;
};

export function Project({ src, alt, paragraphText, titleText }: ProjectProps) {
  return (
    <div className="border w-full">
      <div className="relative h-100 brightness-80 hover:brightness-40 transition-all ">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
      <div className=" flex flex-col gap-2 p-2 bg-black ">
        <h1>{titleText}</h1>
        <Paragraph text={paragraphText} />
      </div>
    </div>
  );
}
