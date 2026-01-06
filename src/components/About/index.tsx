"use client";

import Image from "next/image";
import { Paragraph } from "../Paragraph";
import { Facebook, GithubIcon, Instagram, Linkedin, Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export function About() {
  const commonClasses =
    "hover:scale-101 hover:brightness-75 transition-all duration-300";
  return (
    <section
      id="about"
      className="flex flex-col items-center md:flex-row w-full border border-transparent border-b-white py-8 justify-center"
    >
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className=" relative w-full max-w-100 aspect-square bg-white p-2 rounded-full"
      >
        <Image
          src="/images/tiago-photo-about.png"
          alt="profile"
          fill
          priority
          className="w-full h-full rounded-full "
        />
      </motion.div>

      <motion.div
        initial={{ x: 10, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-6 justify-center w-full md:max-w-[50%] m-6"
      >
        <h1 className="text-5xl font-bold ">Sobre mim</h1>
        <Paragraph text="Sou um profissional em transição de carreira, saindo do ramo musical para seguir meu verdadeiro interesse: o desenvolvimento Front-End. Tenho ampla experiência em trabalho em equipe e no contato direto com clientes, adquirida durante meu tempo como balconista em loja de música." />
        <Paragraph text="Sou uma pessoa comunicativa, com facilidade e vontade constante de aprender. Tenho experiência com Next.js e TailwindCSS, e busco minha primeira oportunidade na área para continuar evoluindo e contribuir com projetos que unam tecnologia, design e boa experiência do usuário." />
        <div className="flex gap-4">
          <Link
            className={commonClasses}
            target="_blank"
            href={"https://www.linkedin.com/in/tiago-santos-53761b179/"}
          >
            <Linkedin size={30} />
          </Link>
          <Link
            className={commonClasses}
            target="_blank"
            href={"https://github.com/Tyago404"}
          >
            <GithubIcon size={30} />
          </Link>
          <Link
            className={commonClasses}
            target="_blank"
            href={"https://www.facebook.com/tiago.santos.256554"}
          >
            <Facebook size={30} />
          </Link>
          <Link
            className={commonClasses}
            target="_blank"
            href={"https://www.instagram.com/tyago404/"}
          >
            <Instagram size={30} />
          </Link>
          <Link
            className={commonClasses}
            target="_blank"
            href={
              "https://wa.me/5511940571680?text=Ol%C3%A1%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar"
            }
          >
            <Phone size={30} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
