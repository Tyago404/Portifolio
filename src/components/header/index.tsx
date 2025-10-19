import clsx from "clsx";
import { Navbar } from "../Navbar";
import { Paragraph } from "../Paragraph";
import { Button } from "../Button";

export function Header() {
  return (
    <>
      <header>
        <div
          className={clsx(
            "flex flex-col m-auto justify-center items-center",
            "transparent bg-white/5",
            "backdrop-blur-md",
            "w-150 h-10",
            "rounded-full"
          )}
        >
          <Navbar />
        </div>

        <div>
          <h1 className="text-6xl font-bold -tracking-[5px] w-100 mt-30">
            Contrate um desenvolvedor
            <span className="block text-[var(--color-secoundary)]">
              Proativo
            </span>
          </h1>
          <div className=" flex justify-between w-full  space-between border border-transparent border-l-2 border-l-[var(--color-secoundary)] p-2 mt-4">
            <Paragraph
              className="w-100"
              text="Olá, sou Tiago vamos juntos aumentar o lucro da sua empresa com soluções inteligentes"
            />
            <Button text="Me contrate agora 🔥" />
          </div>
        </div>
      </header>
    </>
  );
}
