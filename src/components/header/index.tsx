import clsx from "clsx";

export function Header() {
  return(
    <div>
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
                "w-150",
                "rounded-xl",
                "p-3",
                "animation",
                "transition",
                "float-end"
              )}
            >
              HI
            </div>
          </div>
        </div>
  )
}
