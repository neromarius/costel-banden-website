'use client';

import React, { useEffect, useState } from "react";

const STORAGE_KEY = "costel_banden_contact";
const DEFAULTS_URL = "/data/contact-default.json";

export default function WhatsAppButton() {
  const [phone, setPhone] = useState<string>("");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setPhone(JSON.parse(stored).whatsapp || "");
    } else {
      fetch(DEFAULTS_URL)
        .then((r) => r.json())
        .then((data) => setPhone(data.whatsapp || ""));
    }
  }, []);

  if (!phone) return null;

  return (
    <a
      href={`https://wa.me/${phone.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-20 z-50 flex flex-col items-center group"
    >
      <div className="relative flex items-center justify-center md:w-[100px] md:h-[100px] w-[85px] h-[85px]">
        {/* Roată clară, cu profil și spițe */}
        <svg
          className="absolute animate-spin"
          style={{ width: '100%', height: '100%', animationDuration: '2s' }}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Anvelopă exterioară */}
          <circle cx="50" cy="50" r="48" stroke="#222" strokeWidth="8" fill="#444" />
          {/* Profil anvelopă */}
          {[...Array(24)].map((_, i) => {
            const angle = (i * 15) * Math.PI / 180;
            const x1 = 50 + 44 * Math.cos(angle);
            const y1 = 50 + 44 * Math.sin(angle);
            const x2 = 50 + 48 * Math.cos(angle);
            const y2 = 50 + 48 * Math.sin(angle);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#fff" strokeWidth="2" />;
          })}
          {/* Spițe */}
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45) * Math.PI / 180;
            const x1 = 50 + 20 * Math.cos(angle);
            const y1 = 50 + 20 * Math.sin(angle);
            const x2 = 50 + 44 * Math.cos(angle);
            const y2 = 50 + 44 * Math.sin(angle);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#bbb" strokeWidth="3" />;
          })}
          {/* Butuc central */}
          <circle cx="50" cy="50" r="18" fill="#222" stroke="#888" strokeWidth="4" />
        </svg>
        {/* Buton WhatsApp central */}
        <span className="relative z-10">
          <div className="rounded-full bg-green-500 shadow-2xl flex items-center justify-center md:w-[56px] md:h-[56px] w-[48px] h-[48px]">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#25D366" />
              <path d="M22.4 18.8c-.3-.2-1.7-.8-2-1s-.5-.2-.7.1c-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.1-.4-2.1-1.2-.8-.7-1.3-1.5-1.5-1.8-.2-.3 0-.4.1-.6.1-.1.2-.2.3-.4.1-.1.1-.2.2-.3.1-.2.1-.3 0-.5-.1-.2-.7-1.7-.9-2.3-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.7 1.1 2.9.1.2 2 3.1 4.8 4.2.7.3 1.3.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.2-.1-.5-.2z" fill="#fff"/>
            </svg>
          </div>
        </span>
      </div>
      <span className="mt-2 text-green-700 font-bold text-sm bg-white px-2 py-1 rounded shadow-lg group-hover:bg-green-100 transition">WhatsApp</span>
    </a>
  );
}
