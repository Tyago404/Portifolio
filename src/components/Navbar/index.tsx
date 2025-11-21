import clsx from "clsx";
import { NavLinks } from "./NavLinks";
import Image from "next/image";
import { Paragraph } from "../Paragraph";
import { HamburgerMenu } from "./HamburgerMenu";
import { Button } from "../Button";

export function NavBar() {
  return (
    <div
      className={clsx(
        "fixed lg:left-1/2 lg:-translate-x-1/2 lg:p-[22px] lg:mt-16",
        "flex w-full items-center justify-between",
        "p-4",
        "z-100",
        "transparent bg-white/5",
        "backdrop-blur-xl",
        "lg:w-150 lg:h-10",
        "lg:rounded-full",
        "bg-linear-to-r from-white/5 to-transparent",
        "border border-white/10"
      )}
    >
      <div className="flex items-center gap-1">
        <Image
          src="/images/profile-icon.png"
          alt="profile"
          width={40}
          height={30}
          priority
          className="w-auto h-auto"
        />
        <Paragraph className="font-bold text-xs" text="TIAGO SANTOS" />
      </div>
      <div className="flex items-center gap-4">
        <Button classname="md:hidden" text="Contratar" />
        <HamburgerMenu />
      </div>
      <NavLinks className="hidden md:flex" />
    </div>
  );
}
