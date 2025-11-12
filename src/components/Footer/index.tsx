import Image from "next/image";
import { Heading } from "../Heading";
import { Button } from "../Button";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center mt-10">
      <Image
        src="/images/profile-icon.png"
        alt="profile"
        width={90}
        height={30}
        priority
      />
      <Heading as="h1" text="Tiago Santos" />
      <ul className="flex gap-6 text-xl">
        <li className="rounded-full p-4 bg-white/5">Front-end</li>
        <li className="rounded-full p-4 bg-white/5">UX/UI</li>
        <li className="rounded-full p-4 bg-white/5">Proativo</li>
        <li className="rounded-full p-4 bg-white/5"> Profissional</li>
      </ul>
      <Button classname="mt-10" text="Me contrate agora 🔥" />
    </footer>
  );
}
