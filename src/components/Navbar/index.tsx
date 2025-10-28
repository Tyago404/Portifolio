"use client";
import Image from "next/image";
import Link from "next/link";
import { Paragraph } from "../Paragraph";

export function Navbar() {
  return (
    <nav className="flex  w-full p-6 justify-between">
      <div className="flex items-center gap-1">
        <Image
          src="/images/profile-icon.png"
          alt="profile"
          width={40}
          height={30}
          priority
        />
        <Paragraph className="font-bold text-xs" text="TIAGO SANTOS"/>
      </div>
      <ul className="flex items-center gap-4 text-gray-400 font-sm/tight">
        <li className="hover:text-gray-50 transition duration-400 ease-in-out">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-gray-50 transition duration-400 ease-in-out">
          <Link href="/">Skills</Link>
        </li>
        <li className="hover:text-gray-50 transition duration-400 ease-in-out">
          <Link href="/">Projetos</Link>
        </li>
        <li className="hover:text-gray-50 transition duration-400 ease-in-out">
          <Link href="/">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
}
