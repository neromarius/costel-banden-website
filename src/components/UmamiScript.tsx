'use client';

import Script from "next/script";
import { useEffect, useState } from "react";

const UMAMI_WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
const UMAMI_SRC = process.env.NEXT_PUBLIC_UMAMI_SRC;

function getCookiePrefs() {
  if (typeof window === "undefined") return null;
  try {
    const prefs = JSON.parse(localStorage.getItem("costel_banden_cookie_consent") || "null");
    return prefs;
  } catch {
    return null;
  }
}

export default function UmamiScript() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const prefs = getCookiePrefs();
    if (prefs && prefs.analytics) setEnabled(true);
  }, []);

  if (!enabled || !UMAMI_WEBSITE_ID || !UMAMI_SRC) return null;

  return (
    <Script
      async
      defer
      data-website-id={UMAMI_WEBSITE_ID}
      src={UMAMI_SRC}
    />
  );
}
