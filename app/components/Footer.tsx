import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 px-8 py-10 bg-gradient-to-br from-white to-[#e8e0e4] text-black">      <Image src="/images/logo no bg.png" alt="Luxe Éclat" width={220} height={110} />

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
        <Link href="/" className="hover:text-brand hover:underline">
          About Us
        </Link>
        <Link href="/" className="hover:text-brand hover:underline">
          Privacy Policy
        </Link>
        <Link href="/contact" className="hover:text-brand hover:underline">
          Contact
        </Link>
        <Link href="/account" className="hover:text-brand hover:underline">
          Track My Order
        </Link>
      </div>

      <div className="flex gap-4">
        <FaInstagram className="w-6 h-6 cursor-pointer" style={{ color: "#E1306C" }} />
        <FaFacebook className="w-6 h-6 cursor-pointer" style={{ color: "#1877F2" }} />
        <FaTiktok className="w-6 h-6 cursor-pointer text-black" />
      </div>

      <p className="text-xs text-gray-500 mt-2">
        © 2026 Luxe Éclat. All rights reserved.
      </p>
    </footer>
  );
}