"use client";
import React, { useEffect, useState } from "react";

export default function EmergencyBannerDynamic() {
  const [price, setPrice] = useState<string>("");

  useEffect(() => {
    fetch("/data/contact-default.json")
      .then(res => res.json())
      .then(data => setPrice(data.pretUrgenta || ""));
  }, []);

  if (!price) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90vw] max-w-xs sm:max-w-sm md:max-w-md z-50 bg-red-700 text-white py-3 px-2 flex items-center justify-center text-center gap-2 animate-pulse shadow-2xl rounded-xl">
      <span className="font-bold text-lg md:text-xl w-full text-center">Serviciu de urgență disponibil!</span>
    </div>
  );
}
