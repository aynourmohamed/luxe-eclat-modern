import type { Metadata } from "next";
import AccountContent from "./AccountContent";

export const metadata: Metadata = {
  title: "My Account | Luxe Éclat",
  description: "Log in or create an account with Luxe Éclat.",
};

export default function HelpPage() {
  return <AccountContent />;
}