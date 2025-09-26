'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

const ads = [
  {
    src: "/assets/images/bags-and-shoes.png",
    alt: "Affordable bags and shoes",
    text: "Affordable bags and shoes",
  },
  {
    src: "/assets/images/car-banner.png",
    alt: "clean affordable cars",
    text: "New clean affordable cars",
  },
  {
    src: "/assets/images/vegetables.png",
    alt: "vegetables",
    text: "Fresh vegetables",
  }
  // Add more ads here
];

export default function AddsCard() {
  const [currentAd, setCurrentAd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 5000); // Switch every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const { src, alt, text } = ads[currentAd];

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="w-full max-w-[500px] h-[150px]  bg-[#333333] relative overflow-hidden flex justify-center items-center rounded-3xl max-[400px]:h-[100px]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
      <p className="absolute text-white text-xl font-bold text-center bg-black/50 px-4 py-2 rounded">
        {text}
      </p>
    </div>
    </div>
  );
}
