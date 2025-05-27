'use client';

import React from "react";

type Service = {
  title: string;
  desc: string;
  price: string;
  icon?: string;
};

export default function ServiceList({ services = [] }: { services?: Service[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
      {Array.isArray(services) && services.map((srv, idx) => (
        <div key={idx} className="bg-white/90 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
          <span className="text-2xl font-extrabold text-blue-500 mb-1">{idx + 1}.</span>
          {srv.icon && <span className="text-4xl mb-2">{srv.icon}</span>}
          <h3 className="text-xl font-bold mb-2 text-blue-700">{srv.title}</h3>
          <p className="text-center text-blue-900">{srv.desc}</p>
          <span className="mt-2 text-lg font-semibold text-green-700">{srv.price}</span>
        </div>
      ))}
    </div>
  );
}
