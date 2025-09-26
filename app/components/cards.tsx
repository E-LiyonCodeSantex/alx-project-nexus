import Image from "next/image";
import { useEffect, useState } from "react";
import type { ProductCards } from "@/interface/index";
import Link from "next/link";


interface CardProps {
  product: ProductCards;
}

export default function Card({ product }: CardProps) {
  // start each card at 0 (or randomize if you want staggered animations)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // every 3s advance to the next image in THIS product’s images[]
  useEffect(() => {
    if (product.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % product.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [product.images.length]);

  // pick the URL for the current image—or fallback if none
  const rawImage = product.images[currentImageIndex]?.image;
  const imageUrl = rawImage && rawImage.startsWith("http")
    ? rawImage
    : "/fallback.png";


  return (
    <Link href={`/home/cardDetail/${product.id}`} className=" card no-underline">
      <div className="bg-[#F2F3F2] w-full max-w-[150px] sm:w-[200px] flex flex-col justify-center items-center gap-2 p-2 rounded-2xl custom-shadow">
        <div className="w-full h-[100px] relative border-2 border-black/40 rounded-2xl">
          <Image
            src={imageUrl}
            fill
            alt={product.name}
            className="rounded-2xl"
          />
        </div>
        <div className="relative w-full overflow-x-hidden flex flex-col justify-center items-start">
          <p className="font-bold">{product.name}</p>
          <span
            className="animate-scroll whitespace-nowrap text-lg no-scrollbar text-sm"
          >{product.description}</span>
          <span>{product.brand.name}</span>
          <div className="w-full flex justify-between items-center gap-2">
            <span className="font-bold">₦{product.price}</span>
            <span className="text-black/70">₦{product.initial_price}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}