import clsx from "clsx";
import { Paragraph } from "../Paragraph";
import { Heading } from "../Heading";

type GridCardProps = {
  gridArea: "div1" | "div2" | "div3" | "div4" | "div5";
  className?: string;
  children?: React.ReactNode;
  text: string;
  titleText: string;
};

export function GridCard({
  gridArea,
  className,
  children,
  text,
  titleText,
}: GridCardProps) {
  const areatemplate = {
    div1: "[grid-area:div1]",
    div2: "[grid-area:div2]",
    div3: "[grid-area:div3]",
    div4: "[grid-area:div4]",
    div5: "[grid-area:div5]",
  };

  return (
    <div
      className={clsx(
        "p-2 border bg-white/1 rounded-sm",
        areatemplate[gridArea],
        className
      )}
    >
      <div className="p-2 h-30 myclass">{children}</div>
     <div className="max-h-full ">
       <Heading as="h2"  text={titleText} />
      <Paragraph className="text-[10px] font-thin p-1" text={text} />
     </div>
    </div>
  );
}
