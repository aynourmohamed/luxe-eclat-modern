import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Luxe Éclat | Handcrafted Candles",
    template: "%s | Luxe Éclat",
  },
  description: "Handcrafted candles for every mood and moment. Shop natural, eco-friendly candles online.",
  keywords: ["candles", "handmade candles", "aromatherapy", "soy candles", "Luxe Éclat"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <CartProvider>
          <TopBar />
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}