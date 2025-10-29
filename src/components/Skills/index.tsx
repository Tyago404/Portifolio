import clsx from "clsx";
import { Heading } from "../Heading";
import { GridCard } from "./GridCard";

export function Skills() {
  return (
    <section className="p-2 flex flex-col ">
      <Heading text="Minhas Skills" />

      <div
        className={clsx(
          "grid grid-cols-3 grid-rows-3 gap-2 my-4",
          "[grid-template-areas:'div1_div1_div2'_'div3_div4_div4'_'div5_div5_div5']"
        )}
      >
        <GridCard className="h-60" gridArea="div1" />
        <GridCard gridArea="div2" />
        <GridCard gridArea="div3" />
        <GridCard gridArea="div4" />
        <GridCard gridArea="div5" />
      </div>
    </section>
  );
}
