"use client";

import clsx from "clsx";
import { Paragraph } from "../Paragraph";
import { Heading } from "../Heading";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

type GridCardProps = {
  gridArea: "div1" | "div2" | "div3" | "div4";
  children?: React.ReactNode;
  text: string;
  titleText: string;
  motionDuration: number;
};

export function GridCard({
  gridArea,
  children,
  text,
  titleText,
  motionDuration,
}: GridCardProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const areatemplate = {
    div1: "[grid-area:div1]",
    div2: "[grid-area:div2]",
    div3: "[grid-area:div3]",
    div4: "[grid-area:div4]",
  };

  if (isMobile) {
    return (
      <div
        className={clsx(
          "p-2 border bg-white/1 rounded-sm",
          areatemplate[gridArea]
        )}
      >
        <div className="p-2 h-30 myclass">{children}</div>
        <div className="max-h-full ">
          <Heading as="h3" text={titleText} />
          <Paragraph
            className="text-[12px] font-thin p-1 brightness-80 "
            text={text}
          />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ filter: "blur(10px)", y: 10, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
      transition={{ duration: motionDuration, ease: "easeOut" }}
      viewport={{once:true}}
      className={clsx(
        "p-2 border bg-white/1 rounded-sm hover:scale-101 transition-all duration-500",
        areatemplate[gridArea]
      )}
    >
      <div className="p-2 h-30 myclass">{children}</div>
      <div className="max-h-full ">
        <Heading as="h3" text={titleText} />
        <Paragraph
          className="text-[12px] font-thin p-1 brightness-80 "
          text={text}
        />
      </div>
    </motion.div>
  );
}
