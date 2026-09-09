"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Candle } from "../types/candle";

interface CartItem extends Candle {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (candle: Candle) => void;
  removeFromCart: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  getQuantity: (slug: string) => number;
  clearCart: () => void;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = "luxe-eclat-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setItems(JSON.parse(saved));
    }
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, hasLoaded]);

  function addToCart(candle: Candle) {
    setItems((prev) => {
      const existing = prev.find((item) => item.slug === candle.slug);
      if (existing) {
        return prev.map((item) =>
          item.slug === candle.slug
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...candle, quantity: 1 }];
    });
  }

  function removeFromCart(slug: string) {
    setItems((prev) => prev.filter((item) => item.slug !== slug));
  }

  function updateQuantity(slug: string, quantity: number) {
    if (quantity <= 0) {
      removeFromCart(slug);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.slug === slug ? { ...item, quantity } : item))
    );
  }

  function getQuantity(slug: string): number {
    const item = items.find((item) => item.slug === slug);
    return item ? item.quantity : 0;
  }

  function clearCart() {
    setItems([]);
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        getQuantity,
        clearCart,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
