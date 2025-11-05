import Image from "next/image";
import { GridCard } from "./GridCard";

export function GridCardContent() {
  return (
    <>
      <GridCard
        titleText="Desenvolvimento Web Front-End"
        text="Crio aplicações web modernas e responsivas, focando em interfaces intuitivas e experiências fluidas. Trabalho com React.js e Next.js para entregar soluções eficientes, garantindo desempenho, acessibilidade e design que engaja o usuário"
        gridArea="div1"
      >
        <div className="flex gap-6 justify-center mt-4">
          <Image
            className="animate-spin [animation-duration:110s]"
            src="/images/react-icon.png"
            alt="test"
            width={70}
            height={70}
          />
          <Image
            className="animate-spin [animation-duration:110s]"
            src="/images/www-icon.png"
            alt="test"
            width={70}
            height={70}
          />
          <Image
            className="animate-spin [animation-duration:110s]"
            src="/images/next-icon.png"
            alt="test"
            width={70}
            height={70}
          />
        </div>
      </GridCard>

      <GridCard
        titleText=" Versionamento Git e GitHub"
        text="Utilizo Git e GitHub para versionar projetos, colaborar em equipes e manter um fluxo de desenvolvimento organizado e profissional."
        gridArea="div2"
      >
        <div className="flex gap-6 justify-center  mt-4">
          <Image
            className="animate-pulse [animation-duration:3s]"
            src="/images/git-icon.png"
            alt="test"
            width={70}
            height={70}
          />
          <Image
            className="animate-pulse [animation-duration:3s]"
            src="/images/gitHub-icon.png"
            alt="test"
            width={70}
            height={70}
          />
        </div>
      </GridCard>

      <GridCard
        titleText="Integração com APIs"
        text="Conecto interfaces a APIs REST, garantindo desempenho e comunicação fluida entre frontend e backend."
        gridArea="div3"
      >
        <div className="flex gap-6 justify-center  mt-4">
          <Image src="/images/sql-icon.png" alt="test" width={70} height={70} />
          <ul>
            <li>GET</li>
            <li>POST</li>
            <li>PUT</li>
            <li>DELETE</li>
          </ul>
        </div>
      </GridCard>
      <GridCard
        titleText="UX/UI & Acessibilidade"
        text="Crio interfaces intuitivas e inclusivas, aplicando boas práticas de design visual e experiência do usuário. Foco em acessibilidade, garantindo que todas as pessoas consigam interagir de forma fácil e confortável com a aplicação."
        gridArea="div4"
      >
        <div className="flex gap-6 justify-center  mt-4">
          <Image src="/images/ui-icon.png" alt="test" width={70} height={70} />
          <Image src="/images/ui1-icon.png" alt="test" width={70} height={70} />
          <Image src="/images/ui2-icon.png" alt="test" width={70} height={70} />
        </div>
      </GridCard>
    </>
  );
}
