'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

type NavbarProps = {
  home: string;
  services: string;
  appointments: string;
  contact: string;
};

const navItems = [
  { key: "home", path: "" },
  { key: "services", path: "servicii" },
  { key: "contact", path: "contact" },
];

export default function Navbar(props: NavbarProps) {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "ro";
  const labels = props;

  return (
    <nav className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center gap-2 py-0 px-1 md:px-0">
      {/* Titlu deasupra barei de limbă pe mobil, orizontal și întins */}
      <div className="w-full flex flex-row items-center justify-center mb-0 gap-2">
        {/* Logo CB - dimensiune SVG nativă, fără width/height fixe */}
        <a href="/" className="flex items-center flex-shrink-0" aria-label="Acasă Costel Banden">
          <img src="/logo-costelbanden.svg" alt="Logo CB" style={{ maxWidth: '96px', width: '96px', minWidth: '96px', height: 'auto', display: 'block' }} />
        </a>
        <span className="text-2xl font-extrabold text-blue-900 flex-1 text-center tracking-wider">Costel Banden</span>
      </div>
      {/* Bara de limbă sub titlu, scrollabilă orizontal și încadrată perfect */}
      <div className="block md:hidden w-full mb-0">
        <div className="overflow-x-auto w-full pb-1 pt-1 flex flex-nowrap gap-2 no-scrollbar" style={{WebkitOverflowScrolling: 'touch', maxWidth: '100vw'}}>
          <LanguageSwitcher />
        </div>
      </div>
      {/* Bara de meniu, scrollabilă orizontal pe mobil dacă e nevoie */}
      <div className="w-full flex justify-center">
        <div className="flex flex-row w-full max-w-full gap-2 justify-center items-center overflow-x-auto flex-nowrap no-scrollbar" style={{WebkitOverflowScrolling: 'touch', maxWidth: '100vw'}}>
          {navItems.map(({ key, path }) => (
            <Link
              key={key}
              href={key === "home" ? "/" : `/${lang}${path ? `/${path}` : ""}`}
              className={`button flex-shrink-0 min-w-[90px] max-w-[120px] px-1 py-2 text-xs md:text-base whitespace-nowrap text-center ${pathname === (key === "home" ? "/" : `/${lang}${path ? `/${path}` : ""}`) ? "bg-blue-600 text-white" : ""}`}
            >
              {labels[key as keyof typeof labels]}
            </Link>
          ))}
        </div>
      </div>
      <div className="hidden md:block ml-4">
        {/* Language Switcher doar pe desktop */}
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
