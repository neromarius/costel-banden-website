'use client';

import React from "react";
import { useRouter, usePathname } from "next/navigation";

const LANGUAGES = [
  { code: "ro", label: "Română", flag: "🇷🇴" },
  { code: "nl", label: "Nederlands", flag: "🇳🇱" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  // Extrage limba curentă din url (ex: /en/servicii)
  const currentLang = pathname.split("/")[1] || "ro";

  const handleChange = (code: string) => {
    // Înlocuiește limba din url cu cea nouă
    const parts = pathname.split("/");
    if (LANGUAGES.some(l => l.code === parts[1])) {
      parts[1] = code;
    } else {
      parts.splice(1, 0, code);
    }
    const newPath = parts.join("/") || "/";
    router.push(newPath);
  };

  return (
    <div className="flex gap-2 justify-center items-center">
      {LANGUAGES.map(({ code, label, flag }) => (
        <button
          key={code}
          onClick={() => handleChange(code)}
          className={`button flex-shrink-0 min-w-[90px] max-w-[120px] h-9 px-1 py-2 text-xs whitespace-nowrap text-center font-semibold shadow-md transition-all duration-200 flex items-center justify-center gap-1 rounded-2xl ${currentLang === code ? "bg-blue-600 text-white" : "bg-white/80 text-blue-800 hover:bg-blue-100"}`}
          style={{lineHeight: '1.1', fontSize: '0.93rem'}}
        >
          {flag && <span className="text-base leading-none">{flag}</span>}
          <span className="leading-none">{code.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
}
