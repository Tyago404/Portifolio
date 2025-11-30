import Image from "next/image";
import { Heading } from "../Heading";
import { Button } from "../Button";
import clsx from "clsx";

export function Footer() {
  const commonClasses = "rounded-full p-2 opacity-50 text-sm bg-white/5 ";
  return (
    <footer className="flex flex-col items-center justify-center mt-10">
      <Image
        src="/images/tiago-photo-footer.png"
        alt="profile"
        width={200}
        height={200}
        priority
        className="w-60 h-auto opacity-60  brightness-70 rounded-full bg-linear-to-r from-white/20 to-transparent"
      />
      <Heading as="h1" text="Tiago Santos" />
      <ul className="flex gap-2 text-xl">
        <li className={clsx(commonClasses, "min-w-21")}>Front-end</li>
        <li className={commonClasses}>UX/UI</li>
        <li className={commonClasses}>Proativo</li>
        <li className={commonClasses}> Profissional</li>
      </ul>
      <Button classname="mt-4" text="Me contrate agora 🔥" />
    </footer>
  );
}
