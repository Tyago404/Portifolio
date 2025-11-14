import clsx from "clsx";
import Link from "next/link";

type NavLinksProps = {
  className?: string;
  ulClasses?: string;
};

export function NavLinks({ className, ulClasses }: NavLinksProps) {
  return (
    <>
      <nav className={clsx("p-6", className)}>
        <ul
          className={clsx(
            "flex flex-col md:flex-row items-center gap-4 text-gray-400 font-sm/tight",
            ulClasses
          )}
        >
          <li
            className={clsx(
              "bg-(--color-secoundary) text-white p-6 text-center",
              "md:bg-transparent md:p-0 md:w-auto md:text-gray-300",
              "rounded-full w-50",
              "md:hover:text-gray-50 transition duration-400 ease-in-out "
            )}
          >
            <Link href="/">Home</Link>
          </li>

          <li
            className={clsx(
              "bg-(--color-secoundary) text-white p-6 text-center",
              "md:bg-transparent md:p-0 md:w-auto md:text-gray-300",
              "rounded-full w-50",
              "md:hover:text-gray-50 transition duration-400 ease-in-out "
            )}
          >
            <Link href="/">Skills</Link>
          </li>
          <li
            className={clsx(
              "bg-(--color-secoundary) text-white p-6 text-center",
              "md:bg-transparent md:p-0 md:w-auto md:text-gray-300",
              "rounded-full w-50",
              "md:hover:text-gray-50 transition duration-400 ease-in-out "
            )}
          >
            <Link href="/">Projetos</Link>
          </li>
          <li
            className={clsx(
              "bg-(--color-secoundary) text-white p-6 text-center",
              "md:bg-transparent md:p-0 md:w-auto md:text-gray-300",
              "rounded-full w-50",
              "md:hover:text-gray-50 transition duration-400 ease-in-out "
            )}
          >
            <Link href="/">Sobre</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
