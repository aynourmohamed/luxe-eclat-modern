import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop | Luxe Éclat",
  description: "Browse our full collection of handcrafted candles.",
};

export default async function ShopPage() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();

  return (
    <div>
      
      <h1>Shop Page</h1>

      <img src={data.message} alt="Random dog" width={300} />

      <Link href="/shop/vanilla-bourbon">View Vanilla Bourbon</Link>

      <Image src="/images/candle care kit.png" alt="Candle Care Kit" width={300} height={300} />

    </div>

  );
}