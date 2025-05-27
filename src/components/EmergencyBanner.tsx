import React from "react";

type EmergencyBannerProps = {
  text: string;
};

export default function EmergencyBanner({ text }: EmergencyBannerProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 mx-auto max-w-[220px] md:max-w-md z-50 bg-red-700 text-white py-3 px-2 flex items-center justify-center text-center gap-2 shadow-2xl rounded-xl">
      <span className="font-bold text-sm md:text-xl w-full text-center">{text}</span>
    </div>
  );
}
