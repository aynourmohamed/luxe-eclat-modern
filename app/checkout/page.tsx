"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

interface ShippingData {
  fullName: string;
  address: string;
  city: string;
  postalCode: string;
  email: string;
}

export default function CheckoutPage() {
  const { items, totalItems, clearCart } = useCart();
  const [shippingData, setShippingData] = useState<ShippingData>({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    email: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderTotal, setOrderTotal] = useState(0);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setShippingData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOrderTotal(total);
    setOrderPlaced(true);
    clearCart();
  }

  if (orderPlaced) {
    return (
      <div className="py-16 px-6 text-center max-w-2xl mx-auto">
        <h1 className="text-brand text-3xl font-heading font-semibold mb-4">
          Order Confirmed!
        </h1>
        <p className="text-gray-600 mb-2">
          Thank you, {shippingData.fullName || "friend"} — your order of $
          {orderTotal.toFixed(2)} has been placed.
        </p>
        <p className="text-gray-500 text-sm mb-6">
          (This is a demo checkout — no real payment was processed.)
        </p>
        <Link
          href="/shop"
          className="bg-brand text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (totalItems === 0) {
    return (
      <div className="py-16 px-6 text-center max-w-2xl mx-auto">
        <h1 className="text-brand text-3xl font-heading font-semibold mb-4">
          Checkout
        </h1>
        <p className="text-gray-600 mb-6">
          Your cart is empty — add something before checking out.
        </p>
        <Link
          href="/shop"
          className="bg-brand text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
        >
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 px-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <h1 className="text-brand text-2xl font-heading font-semibold mb-6">
          Shipping Details
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={shippingData.fullName}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={shippingData.email}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={shippingData.address}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">City</label>
              <input
                type="text"
                name="city"
                value={shippingData.city}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-brand"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={shippingData.postalCode}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-brand"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-brand text-white px-6 py-2 rounded-full cursor-pointer hover:opacity-90 transition-opacity w-full mt-4"
          >
            Place Order
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-brand text-2xl font-heading font-semibold mb-6">
          Order Summary
        </h2>
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.slug} className="flex items-center gap-3">
              <Image
                src={item.image}
                alt={item.name}
                width={60}
                height={60}
                className="object-cover rounded w-14 h-14"
              />
              <div className="flex-1">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
              </div>
              <p className="text-sm font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
        <div className="border-t mt-6 pt-4 flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}