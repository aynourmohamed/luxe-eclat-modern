"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    image: "/images/first header.png",
    title: "Candles That Care for You – Illuminate and Indulge",
    subtitle: "Handcrafted candles that melt into a nourishing body oil.",
  },
  {
    image: "/images/second header.png",
    title: "Embrace Serenity – Light Your Path",
    subtitle: "Burn it for ambiance. Melt it into your skincare ritual.",
  },
  {
    image: "/images/third header.jpg",
    title: "Glow Naturally – Your Light, Your Way",
    subtitle: "One candle, two rituals: soothing light, nourishing oil.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  function goToPrev() {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }

  function goToNext() {
    setCurrent((prev) => (prev + 1) % slides.length);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative w-full h-[500px]">
      <Image
        src={slide.image}
        alt={slide.title}
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black/30">
        <h1 className="text-brand font-heading text-2xl md:text-4xl font-bold mb-4 max-w-2xl">
          {slide.title}
        </h1>
        <p className="text-white text-base md:text-lg mb-6 max-w-xl">{slide.subtitle}</p>
        <div className="flex gap-4">
          <Link
            href="/shop"
            className="bg-brand text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Shop Now
          </Link>

          <Link
            href="/about"
            className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-brand transition-colors"
          >
            Discover More
          </Link>
        </div>
      </div>

      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white cursor-pointer"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white cursor-pointer"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 w-8 rounded-full cursor-pointer ${index === current ? "bg-white" : "bg-white/40"
              }`}
          />
        ))}
      </div>
    </section>
  );
}