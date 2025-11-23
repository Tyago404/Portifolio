import Image from "next/image";
import { GridRoundedCard } from "./GridRoundedCard";

export function GridRoundedContent() {
  return (
    <>
      <GridRoundedCard
        gridArea="div5"
        titleText="PROATIVO"
        paragraphText="Busco antecipar necessidades e propor soluções, sempre mantendo uma postura ativa na melhoria dos projetos."
        motionDuration={0.2}
      >
        <Image
          src="/images/proative-icon.png"
          alt="proative-icon"
          width={100}
          height={100}
        />
      </GridRoundedCard>
      <GridRoundedCard
        gridArea="div6"
        titleText="ORGANIZADO"
        paragraphText="Valorizo a organização em cada etapa do trabalho, mantendo código limpo e processos claros para a melhora do desempenho em equipe."
        motionDuration={0.1}
      >
        <Image
          src="/images/organization-icon.png"
          alt="proative-icon"
          width={100}
          height={100}
        />
      </GridRoundedCard>
      <GridRoundedCard
        gridArea="div7"
        titleText="ADAPTÁVEL"
        paragraphText="Tenho facilidade em me ajustar a novas tecnologias, equipes e desafios, aprendendo rapidamente e evoluindo com cada experiência."
        motionDuration={0.3}
      >
        <Image
          src="/images/adaptive-icon.png"
          alt="proative-icon"
          width={100}
          height={100}
        />
      </GridRoundedCard>
    </>
  );
}
