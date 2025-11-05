import clsx from "clsx";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";

type GridRoundedCardProps = {
  gridArea: "div5" | "div6" | "div7";
  paragraphText: string;
  titleText: string;
  children: React.ReactNode;
  className?: string;
};

export function GridRoundedCard({
  gridArea,
  children,
  paragraphText,
  titleText,
}: GridRoundedCardProps) {
  const areatemplate = {
    div5: "[grid-area:div5]",
    div6: "[grid-area:div6]",
    div7: "[grid-area:div7]",
  };

  return (
    <div
      className={clsx(
        "border-8 bg-white/10 rounded-full p-10",
        "flex flex-col justify-center items-center",
        areatemplate[gridArea]
      )}
    >
      <Heading as="h1" text={titleText} />
      {children}
      <Paragraph className=" brightness-80 text-center " text={paragraphText} />
    </div>
  );
}
