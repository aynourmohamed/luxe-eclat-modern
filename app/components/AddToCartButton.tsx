"use client";

import { Minus, Plus } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Candle } from "../types/candle";

export default function AddToCartButton({ candle }: { candle: Candle }) {
  const { addToCart, updateQuantity, getQuantity } = useCart();
  const quantity = getQuantity(candle.slug);

  if (quantity === 0) {
    return (
      <button
        onClick={() => addToCart(candle)}
        className="px-6 py-2 rounded-full mt-2 transition-colors cursor-pointer bg-brand text-white hover:bg-[#a89aa4]"
      >
        Add to Cart
      </button>
    );
  }

  return (
    <div className="flex items-center gap-3 mt-2 bg-brand rounded-full px-3 py-2">
      <button
        onClick={() => updateQuantity(candle.slug, quantity - 1)}
        className="text-white cursor-pointer"
      >
        <Minus className="w-4 h-4" />
      </button>
      <span className="text-white font-semibold w-4 text-center">
        {quantity}
      </span>
      <button
        onClick={() => updateQuantity(candle.slug, quantity + 1)}
        className="text-white cursor-pointer"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}