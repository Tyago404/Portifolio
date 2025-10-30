import { GridCard } from "./GridCard";

export function GridCardContent() {
  return (
    <>
      <GridCard
        titleText="Desenvolvimento Web"
        text="Crio aplicações web modernas e responsivas, focando em interfaces intuitivas e experiências fluidas. Trabalho com React.js e Next.js para entregar soluções eficientes, garantindo desempenho, acessibilidade e design que engaja o usuário"
        className="h-60"
        gridArea="div1"
      ></GridCard>
      <GridCard titleText="test2" text="test2" gridArea="div2">
        test2
      </GridCard>
      <GridCard titleText="test3" text="test3" gridArea="div3">
        test3
      </GridCard>
      <GridCard titleText="test4" text="test4" gridArea="div4">
        test4
      </GridCard>
    </>
  );
}
