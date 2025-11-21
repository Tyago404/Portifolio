import clsx from "clsx";
import Link from "next/link";

type NavLinksProps = {
  className?: string;
  ulClasses?: string;
};

export function NavLinks({ className, ulClasses }: NavLinksProps) {
  const linkClasses = "block w-full h-full p-6 md:p-0";
  const commonLiClasses =
    "bg-(--color-secoundary) text-white p-1 text-center  md:bg-transparent md:p-0 md:w-auto md:text-gray-300 rounded-full w-50 md:hover:text-gray-50 transition duration-400 ease-in-out ";
  return (
    <>
      <nav className={clsx("p-6", className)}>
        <ul
          className={clsx(
            "flex flex-col md:flex-row items-center gap-4 text-gray-400 font-sm/tight",
            ulClasses
          )}
        >
          <li className={commonLiClasses}>
            <Link href="/" className={linkClasses}>
              Home
            </Link>
          </li>

          <li className={commonLiClasses}>
            <Link href="#skills" className={linkClasses}>
              Skills
            </Link>
          </li>
          <li className={commonLiClasses}>
            <a href="#projects" className={linkClasses}>
              Projetos
            </a>
          </li>
          <li className={commonLiClasses}>
            <Link href="#about" className={linkClasses}>
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
