"use client";
import React, { useEffect, useState } from "react";
import Image from 'next/image';

interface GalleryImage {
  url: string;
  caption: string | { [lang: string]: string };
}

const GALLERY_JSON_PATH = "/locales/";

type Props = { locale: string };

export default function HomeGallery({ locale }: Props) {
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    fetch(GALLERY_JSON_PATH + locale + ".json")
      .then(res => res.json())
      .then(data => setImages(data.gallery.images || []));
  }, [locale]);

  if (!images.length) return null;

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {images.map((img, idx) => (
        <div key={idx} className="flex flex-col items-center max-w-xs">
          <Image src={img.url} alt={typeof img.caption === 'string' ? img.caption : img.caption?.[locale] || ''} width={400} height={300} className="w-64 h-48 object-cover rounded shadow" />
          {img.caption && (
            <div className="mt-2 text-center text-black text-base font-medium bg-white/80 px-2 py-1 rounded">
              {typeof img.caption === 'string' ? img.caption : img.caption?.[locale] || ''}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
