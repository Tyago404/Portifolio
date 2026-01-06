import Image from "next/image";
import Link from "next/link";

export function WhatsappButton() {
  const pCommonClasses = "text-sm";
  return (
    <Link
      className="fixed right-1 bottom-1 m-5 md:m-20 cursor-pointer hover:scale-105
      hover:opacity-100 transition-all  duration-200 opacity-60  z-40"
      target="_blank"
      href={
        "https://wa.me/5511940571680?text=Ol%C3%A1%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar"
      }
    >
      <div className="flex flex-col items-center justify-center">
        <Image
          alt="whatsapp button"
          src="/images/whatsapp-icon.png"
          width={70}
          height={70}
        />

        <div className="hidden md:flex flex-col items-center justify-center">
          <p className={pCommonClasses}>me chame</p>
          <p className={pCommonClasses}>
            no <span className="text-green-300">whatsapp</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
