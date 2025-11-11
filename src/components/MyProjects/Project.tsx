import Image from "next/image";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";

type ProjectProps = {
  src: string;
  alt: string;
  paragraphText: string;
  titleText: string;
};

export function Project({ src, alt, paragraphText, titleText }: ProjectProps) {
  return (
    <div className="border">
      <div className="relative h-100 w-50 ">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
      <div className=" flex flex-col gap-2 p-2 bg-black ">
        <h1>{titleText}</h1>
        <Paragraph text={paragraphText} />
      </div>
    </div>
  );
}
