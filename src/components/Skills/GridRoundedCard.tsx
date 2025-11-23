"use client";

import clsx from "clsx";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";
import { motion } from "motion/react";

type GridRoundedCardProps = {
  gridArea: "div5" | "div6" | "div7";
  paragraphText: string;
  titleText: string;
  children: React.ReactNode;
  className?: string;
  motionDuration: number;
};

export function GridRoundedCard({
  gridArea,
  children,
  paragraphText,
  titleText,
  motionDuration,
}: GridRoundedCardProps) {
  const areatemplate = {
    div5: "[grid-area:div5]",
    div6: "[grid-area:div6]",
    div7: "[grid-area:div7]",
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: motionDuration, ease: "easeOut" }}
      viewport={{ once: true }}
      className={clsx(
        "border-8 bg-white/10 rounded-full p-8 hover:scale-101 transition-all duration-500",
        "flex flex-col justify-center items-center",
        areatemplate[gridArea]
      )}
    >
      <Heading as="h2" text={titleText} />
      {children}
      <Paragraph className=" brightness-80 text-center " text={paragraphText} />
    </motion.div>
  );
}
