import Image from "next/image";
import { Paragraph } from "../Paragraph";
import { Facebook, GithubIcon, Instagram, Linkedin } from "lucide-react";

export function About() {
  return (
    <section className="flex w-full border border-transparent border-b-white py-8">
      <Image
        src="/images/profile-icon.png"
        alt="profile"
        width={400}
        height={300}
        priority
        className="bg-white m-6"
      />

      <div className="flex flex-col gap-6 justify-center w-[50%] m-6">
        <h1 className="text-5xl font-bold ">Sobre mim </h1>
        <Paragraph text="Sou um profissional em transição de carreira, saindo do ramo musical para seguir meu verdadeiro interesse: o desenvolvimento Front-End. Tenho ampla experiência em trabalho em equipe e no contato direto com clientes, adquirida durante meu tempo como balconista em loja de música." />
        <Paragraph text="Sou uma pessoa comunicativa, com facilidade e vontade constante de aprender. Tenho experiência com Next.js e TailwindCSS, e busco minha primeira oportunidade na área para continuar evoluindo e contribuir com projetos que unam tecnologia, design e boa experiência do usuário." />
        <div className="flex gap-4">
          <Facebook size={30} />
          <Instagram size={30} />
          <Linkedin size={30} />
          <GithubIcon size={30} />
        </div>
      </div>
    </section>
  );
}
