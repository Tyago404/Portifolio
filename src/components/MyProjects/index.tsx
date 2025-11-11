import { Heading } from "../Heading";
import { Project } from "./Project";

export function MyProjects() {
  return (
    <section>
      <Heading as="h1" text="Meus Projetos" />
      <div className="flex ">
        <Project
          src="/images/chronos-pomodoro-print.png"
          alt="chronosPrint"
          titleText="Chronos Pomodoro"
          paragraphText="App web Pomodoro para gerenciar ciclos de foco de forma simples e intuitiva, com layout einterface limpa."
        />
        <Project
          src="/images/riffly-print.png"
          alt="rifflyPrint"
          titleText="Riffly"
          paragraphText="E-commerce responsivo desenvolvido com Next.js, TailwindCSS e design system."
        />
        <Project
          src="/images/blog-print.png"
          alt="blogPrint"
          titleText="The Blog"
          paragraphText="Blog para treinar consultas usando Drizzle, com fluxo simples e organizado de conteúdo."
        />
        <Project
          src="/images/hotel-print.png"
          alt="HotelPrint"
          titleText="Hotel"
          paragraphText="Site de hotel desenvolvido com Next.js e TailwindCSS, layout responsivo e visual moderno."
        />
      </div>
    </section>
  );
}
