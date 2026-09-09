"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartContent() {
  const { items, removeFromCart, updateQuantity } = useCart();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="py-16 px-6 text-center max-w-2xl mx-auto">
        <h1 className="text-brand text-3xl font-heading font-semibold mb-4">
          Your Cart
        </h1>
        <p className="text-gray-600 mb-6">Your cart is currently empty.</p>
        <Link
          href="/shop"
          className="bg-brand text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 px-6 max-w-3xl mx-auto">
      <h1 className="text-brand text-3xl font-heading font-semibold mb-8 text-center">
        Your Cart
      </h1>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.slug}
            className="flex items-center gap-4 border rounded-lg p-4"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={80}
              height={80}
              className="object-cover rounded w-20 h-20"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
            </div>

            <div className="flex items-center gap-3 bg-brand rounded-full px-3 py-2">
              <button
                onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                className="text-white cursor-pointer"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-white font-semibold w-4 text-center">
                {item.quantity}
              </span>
              <button
                onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                className="text-white cursor-pointer"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <p className="font-bold w-20 text-right">
              ${(item.price * item.quantity).toFixed(2)}
            </p>

            <button
              onClick={() => removeFromCart(item.slug)}
              className="text-red-500 hover:underline cursor-pointer text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-8 border-t pt-6">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        <Link
          href="/checkout"
          className="bg-brand text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}