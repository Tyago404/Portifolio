import clsx from "clsx";

type GridCardProps = {
  gridArea: "div1" | "div2" | "div3" | "div4" | "div5";
  className?: string;
};

export function GridCard({ gridArea, className }: GridCardProps) {
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
        "p-2 border bg-white/10 rounded-sm",
        areatemplate[gridArea],
        className
      )}
    ></div>
  );
}
