import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return(
    <header>
          <video
            className="brightness-50 w-full h-170 object-cover fixed -z-10"
            src="/videos/background.mov"
            autoPlay
            loop
            muted
          ></video>

          <div className="p-2 flex flex-col  justify-center items-center">
            <div
              className={clsx(
                "transparent",
                "bg-white/5",
                "backdrop-blur-md",
                "w-100 h-10",
                "rounded-sm",
                "p-3",
                "flex justify-center items-center",
              )}
            >
              <nav>
                <ul className="flex items-center gap-4">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/">Skills</Link></li>
                    <Image src='/images/profile-icon.png' alt='profile' width={30} height={30}/>
                  <li><Link href="/">Projetos</Link></li>
                  <li><Link href="/">Sobre</Link></li>
                </ul>
              </nav>

            </div>
          </div>
        </header>
  )
}
