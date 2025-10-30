import clsx from "clsx";
import { Heading } from "../Heading";
import { GridCard } from "./GridCard";
import { GridRoundedCard } from "./GridRoundedCard";
import { GridCardContent } from "./GridCardContent";

export function Skills() {
  return (
    <section className="p-2 flex flex-col ">
      <Heading as="h1" text="Minhas Skills" />

      <div
        className={clsx(
          "grid grid-cols-3 grid-rows-3 gap-2 my-4",
          "[grid-template-areas:'div1_div1_div2'_'div3_div4_div4'_'div5_div5_div5']"
        )}
      >
        <GridCardContent />
        <GridCardContent />
        <GridCardContent />
        <GridCardContent />

        <GridRoundedCard />
        <GridRoundedCard />
        <GridRoundedCard />
      </div>
    </section>
  );
}
