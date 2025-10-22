import clsx from "clsx";
import { Navbar } from "../Navbar";
import { HeaderContent } from "../HeaderContent";

export function Header() {
  return (
    <>
      <header>
        <div
          className={clsx(
            "flex flex-col m-auto justify-center items-center",
            "transparent bg-white/5",
            "backdrop-blur-md",
            "w-150 h-10",
            "rounded-full",
            "bg-gradient-to-r from-white/5 to-transparent",
            "border border-white/10"
          )}
        >
          <Navbar />
        </div>
        <HeaderContent />
      </header>
    </>
  );
}
