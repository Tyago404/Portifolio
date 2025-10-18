"use client";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav>
      <ul className="flex items-center gap-4 text-gray-400 font-sm/tight">
        <li
          className='hover:text-gray-50 transition duration-400 ease-in-out'
        >
          <Link href="/">Home</Link>
        </li>
        <li className='hover:text-gray-50 transition duration-400 ease-in-out'>
          <Link href="/">Skills</Link>
        </li>
        <Image
          src="/images/profile-icon.png"
          alt="profile"
          width={30}
          height={30}
        />
        <li className='hover:text-gray-50 transition duration-400 ease-in-out'>
          <Link href="/">Projetos</Link>
        </li>
        <li className='hover:text-gray-50 transition duration-400 ease-in-out'>
          <Link href="/">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
}
