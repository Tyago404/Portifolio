"use client";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { NavLinks } from "./NavLinks";
import clsx from "clsx";

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(!isClient);
  }, []);

  return (
    <>
      <button
        className="md:hidden z-200"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
       {isOpen ? <X /> : <Menu />}
      </button>

      {isClient &&
        createPortal(
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={
              clsx(
              'fixed flex flex-col justify-center items-center' ,
              'inset-0 p-16 z-90 backdrop-blur-xl ',
              'transition-all duration-500 ease-in',

              isOpen ? " opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            <NavLinks ulClasses="gap-8" />
          </div>,
          document.body
        )}
    </>
  );
}
