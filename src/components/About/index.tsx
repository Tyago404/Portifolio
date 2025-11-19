import Image from "next/image";
import { Paragraph } from "../Paragraph";
import { Facebook, GithubIcon, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export function About() {
  return (
    <section className="flex flex-col items-center md:flex-row w-full border border-transparent border-b-white py-8 justify-center">
      <div className=" relative w-full max-w-100 aspect-square bg-white p-2 rounded-full">
        <Image
          src="/images/profile-icon.png "
          alt="profile"
          fill
          priority
          className="bg-blue-200 object-cover w-full h-full rounded-full "
        />
      </div>

      <div className="flex flex-col gap-6 justify-center w-full md:max-w-[50%] m-6">
        <h1 id="about" className="text-5xl font-bold ">
          Sobre mim
        </h1>
        <Paragraph text="Sou um profissional em transição de carreira, saindo do ramo musical para seguir meu verdadeiro interesse: o desenvolvimento Front-End. Tenho ampla experiência em trabalho em equipe e no contato direto com clientes, adquirida durante meu tempo como balconista em loja de música." />
        <Paragraph text="Sou uma pessoa comunicativa, com facilidade e vontade constante de aprender. Tenho experiência com Next.js e TailwindCSS, e busco minha primeira oportunidade na área para continuar evoluindo e contribuir com projetos que unam tecnologia, design e boa experiência do usuário." />
        <div className="flex gap-4">
          <Link
            className="hover:scale-101 hover:brightness-75 transition-all duration-300"
            target="_blank"
            href={"https://www.linkedin.com/in/tiago-santos-53761b179/"}
          >
            <Linkedin size={30} />
          </Link>
          <Link
            className="hover:scale-101 hover:brightness-75 transition-all duration-300"
            target="_blank"
            href={"https://github.com/Tyago404"}
          >
            <GithubIcon size={30} />
          </Link>
          <Link
            className="hover:scale-101 hover:brightness-75 transition-all duration-300"
            target="_blank"
            href={"https://www.facebook.com/tiago.santos.256554"}
          >
            <Facebook size={30} />
          </Link>
          <Link
            className="hover:scale-101 hover:brightness-75 transition-all duration-300"
            target="_blank"
            href={"https://www.instagram.com/tyago404/"}
          >
            <Instagram size={30} />
          </Link>
        </div>
      </div>
    </section>
  );
}
