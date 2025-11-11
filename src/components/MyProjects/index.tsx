import { Heading } from "../Heading";
import { Project } from "./Project";

export function MyProjects() {
  return (
    <section>
      <Heading as="h1" text="Meus Projetos" />
      <div className="flex">
        <Project
          src="/images/chronos-pomodoro-print.png"
          alt="chronosPrint"
          titleText="Chronos Pomodoro"
          paragraphText="App web pra gerenciar o tempo com a técnica Pomodoro."
        />
        <Project
          src="/images/chronos-pomodoro-print.png"
          alt="chronosPrint"
          titleText="Chronos Pomodoro"
          paragraphText="App web pra gerenciar o tempo com a técnica Pomodoro. "
        />
        <Project
          src="/images/chronos-pomodoro-print.png"
          alt="chronosPrint"
          titleText="Chronos Pomodoro"
          paragraphText="App web pra gerenciar o tempo com a técnica Pomodoro. "
        />
        <Project
          src="/images/chronos-pomodoro-print.png"
          alt="chronosPrint"
          titleText="Chronos Pomodoro"
          paragraphText="App web pra gerenciar o tempo com a técnica Pomodoro. "
        />
      </div>
    </section>
  );
}
