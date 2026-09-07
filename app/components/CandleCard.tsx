import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import { Candle } from "../types/candle";

export default function CandleCard({ candle }: { candle: Candle }) {
  return (
    <div className="rounded-2xl p-4 flex flex-col items-center text-center shadow-md bg-white">
      <Link href={`/shop/${candle.slug}`}>
        <Image
          src={candle.image}
          alt={candle.name}
          width={250}
          height={250}
          className="object-cover rounded w-[250px] h-[250px] cursor-pointer"
        />
        <h3 className="font-semibold mt-3 hover:text-brand transition-colors">
          {candle.name}
        </h3>
      </Link>
      <p className="text-sm text-gray-600 mt-1">{candle.description}</p>
      <p className="font-bold mt-2">${candle.price.toFixed(2)}</p>
      <AddToCartButton candle={candle} />
    </div>
  );
}