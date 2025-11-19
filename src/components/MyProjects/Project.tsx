import Image from "next/image";
import { Paragraph } from "../Paragraph";
import clsx from "clsx";

type ProjectProps = {
  src: string;
  alt: string;
  paragraphText: string;
  titleText: string;
  pText: string;
};

export function Project({
  src,
  alt,
  paragraphText,
  titleText,
  pText,
}: ProjectProps) {
  return (
    <div className="border w-full ">
      <p
        className={clsx(
          "absolute z-100 m-5 -translate-x-full",
          "opacity-0 text-white bg-black p-2 rounded-full text-sm",
          "group-hover:opacity-100 group-hover:translate-x-0",
          "transition-all duration-300 ease-out"
        )}
      >
        {pText}
      </p>
      <div className="relative h-100 brightness-30 hover:brightness-90 transition-all ">
        <Image
          src={src}
          alt={alt}
          fill
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" flex flex-col gap-2 p-2 bg-black ">
        <h1>{titleText}</h1>
        <Paragraph text={paragraphText} />
      </div>
    </div>
  );
}
