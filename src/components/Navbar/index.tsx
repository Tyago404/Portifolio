import clsx from "clsx";
import { NavLinks } from "./NavLinks";
import Image from "next/image";
import { Paragraph } from "../Paragraph";

export function NavBar() {
  return (
    <div
      className={clsx(
        "lg:fixed lg:left-1/2 lg:-translate-x-1/2 lg:p-[22px] lg:mt-16",
        "p-4",
        "z-100",
        "flex items-center justify-between",
        "transparent bg-white/5",
        "backdrop-blur-md",
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
        />
        <Paragraph className="font-bold text-xs" text="TIAGO SANTOS" />
      </div>
      <NavLinks />
    </div>
  );
}
