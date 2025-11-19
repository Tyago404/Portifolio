"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FormResend } from "../FormResend";

type ButtonProps = {
  text: string;
  classname?: string;
};

export function Button({ text, classname }: ButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={clsx(
          "bg-(--color-secoundary) text-black rounded-full p-2 px-4",
          "cursor-pointer hover:brightness-90 hover:scale-102 transition duration-250",
          "text-sm",
          classname
        )}
      >
        {text}
      </button>
      {isClient &&
        createPortal(
          <div
            className={clsx(
              "w-full h-full backdrop-blur-xl fixed flex flex-col justify-center items-center inset-0 p-16 z-90",
              isOpen ? " opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            <FormResend onClose={()=>{setIsOpen(false)}}/>
          </div>,
          document.body
        )}
    </>
  );
}
