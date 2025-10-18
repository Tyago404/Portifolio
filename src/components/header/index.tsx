import clsx from "clsx";
import { Navbar } from "../Navbar";

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

          <div className="p-2 flex flex-col text-sm  justify-center items-center">
            <div
              className={clsx(
                "transparent bg-white/5",
                "backdrop-blur-md",
                "w-90 h-8",
                "rounded-sm",
                "flex justify-center items-center",
              )}
            >
             <Navbar />

            </div>
          </div>
        </header>
  )
}
