import type { Metadata } from "next";
import CartContent from "./CartContent";

export const metadata: Metadata = {
  title: "Your Cart | Luxe Éclat",
  description: "Review items in your Luxe Éclat shopping cart.",
};

export default function HelpPage() {
  return <CartContent />;
}