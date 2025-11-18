import clsx from "clsx";
import { Heading } from "../Heading";
import { GridCardContent } from "./GridCardContent";
import { GridRoundedContent } from "./GridRoundedContent";

export function Skills() {
  return (
    <section className="p-2 flex flex-col ">
      <Heading id="skills" as="h1" text="Minhas Skills" />
      <div
        className={clsx(
          "md:grid grid-cols-3 grid-rows-2 gap-2 ",
          "[grid-template-areas:'div1_div1_div2'_'div3_div4_div4']",
          "flex flex-col"
        )}
      >
        <GridCardContent />
      </div>

      <Heading as="h1" text="Soft Skills" />
      <div
        className={clsx(
          "flex flex-col md:grid grid-cols-3 grid-rows-1 gap-4",
          "[grid-template-areas:'div5_div6_div7']"
        )}
      >
        <GridRoundedContent />
      </div>
    </section>
  );
}
