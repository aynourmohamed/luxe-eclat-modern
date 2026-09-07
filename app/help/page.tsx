import type { Metadata } from "next";
import HelpContent from "./HelpContent";

export const metadata: Metadata = {
  title: "Help & Support | Luxe Éclat",
  description: "Find answers to common questions or contact our support team.",
};

export default function HelpPage() {
  return <HelpContent />;
}