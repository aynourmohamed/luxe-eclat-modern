import Image from "next/image";
import AddToCartButton from "./AddToCartButton";
import { Candle } from "../types/candle";

export default function CandleCard({ candle }: { candle: Candle }) {
  return (
    <div className="rounded-2xl p-4 flex flex-col items-center text-center shadow-md bg-white">
      <Image
        src={candle.image}
        alt={candle.name}
        width={250}
        height={250}
        className="object-cover rounded w-[250px] h-[250px]"
      />
      <h3 className="font-semibold mt-3">{candle.name}</h3>
      <p className="text-sm text-gray-600 mt-1">{candle.description}</p>
      <p className="font-bold mt-2">${candle.price.toFixed(2)}</p>
      <AddToCartButton />
    </div>
  );
}