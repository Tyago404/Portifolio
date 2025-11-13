import clsx from "clsx";
import { Navbar } from "./NavBar";
import { HeaderContent } from "./HeaderContent";

export function Header() {
  return (
    <>
      <header>
        <div
          className={clsx(
            "fixed left-1/2 -translate-x-1/2",
            "flex  items-center p-5 z-100",
            "transparent bg-white/5",
            "backdrop-blur-md",
            "w-150 h-10",
            "rounded-full",
            "bg-linear-to-r from-white/5 to-transparent",
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
