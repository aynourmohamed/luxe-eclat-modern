"use client";

import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./components/AddToCartButton";

// types
type CandleStatus = "in-stock" | "sold-out" | "preorder";

interface Candle {
  name: string;
  description: string;
  price: number;
  status: CandleStatus;
  ingredients?: string;
}

// sample data
const lavenderDream: Candle = {
  name: "Vanilla Bourbon",
  description: "A warm blend of vanilla and aged bourbon",
  price: 24.99,
  status: "sold-out",
};

// components used only on home
function CandleCard({ candle }: { candle: Candle }) {
  return (
    <div>
      <h3>{candle.name}</h3>
      <p>{candle.price}</p>
      <p>{candle.description}</p>
      <p>{candle.status}</p>
    </div>
  );
}

function PriceTag({ amount }: { amount: number }) {
  return <p>${amount}</p>;
}

// page
export default function Home() {
  return (
    <div>
      {/* ─── Hero section ─── */}
      <section className="relative w-full h-[500px]">
        <Image
          src="/images/first header.png"
          alt="Luxe Éclat hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black/20">
          <h1 className="text-brand text-4xl font-bold mb-4">
            Light Up Your Moments
          </h1>
          <p className="text-white text-lg max-w-xl">
            Handcrafted candles for every mood and moment.
          </p>
        </div>
      </section>

      {/* ─── existing practice content, for now ─── */}
      <CandleCard candle={lavenderDream} />
      <AddToCartButton />
      <PriceTag amount={24.99} />
    </div>
  );
}