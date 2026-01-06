import { Heading } from "../Heading";
import { Project } from "./Project";

export function MyProjects() {
  return (
    <section
      id="projects"
      className="border border-transparent border-b-white py-12 "
    >
      <Heading as="h1" text="Meus Projetos" />
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 ">
        <Project
          src="/images/chronos-pomodoro-print.png"
          alt="chronosPrint"
          pText="Desenvolvimento"
          titleText="Chronos Pomodoro"
          motionDuration={0.6}
          paragraphText="App web Pomodoro para gerenciar ciclos de foco de forma simples e intuitiva, com layout einterface limpa."
        />
        <Project
          src="/images/riffly-print.png"
          alt="rifflyPrint"
          titleText="Riffly"
          pText="Responsividade"
          motionDuration={0.5}
          paragraphText="E-commerce responsivo desenvolvido com Next.js, TailwindCSS e design system."
        />
        <Project
          src="/images/blog-print.png"
          alt="blogPrint"
          pText="API e Requisições"
          titleText="The Blog"
          motionDuration={0.6}
          paragraphText="Blog para treinar consultas usando Drizzle, com fluxo simples e organizado de conteúdo."
        />
        <Project
          src="/images/hotel-print.png"
          alt="HotelPrint"
          pText="Layout"
          titleText="Hotel"
          motionDuration={0.4}
          paragraphText="Site de hotel desenvolvido com Next.js e TailwindCSS, layout responsivo e visual moderno."
        />
        <Project
          src="/images/crudmaker-screenshot.png"
          alt="CrudMakerPrint"
          pText="API e Requisições"
          titleText="Crud Maker"
          motionDuration={0.4}
          paragraphText="Projeto CRUD desenvolvido em React para criação, edição e controle de tarefas, utilizando Context API e integração com API externa."
        />
      </div>
    </section>
  );
}
