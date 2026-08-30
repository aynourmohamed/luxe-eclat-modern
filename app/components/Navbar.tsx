"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingCart, Search } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
  { href: "/help", label: "Help" },
  { href: "/account", label: "Account" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="relative flex items-center justify-between px-4 md:px-8 py-3">
      <Link href="/">
        <Image src="/images/logo no bg.png" alt="Luxe Éclat" width={160} height={80} />
      </Link>

      <div className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              pathname === link.href
                ? "text-brand font-semibold border-b-2 border-brand"
                : "text-black hover:text-brand"
            }
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-2">
        <input
          type="text"
          placeholder="Search"
          className="border border-brand rounded-full px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-brand"
        />
        <button className="bg-brand text-white rounded-full px-4 py-1 text-sm cursor-pointer hover:opacity-90 transition-opacity">
          Search
        </button>
        <ShoppingCart className="w-6 h-6 text-brand cursor-pointer hover:text-black transition-colors" />
      </div>

      <div className="flex items-center gap-4 md:hidden">
        <ShoppingCart className="w-6 h-6 text-brand hover:text-black transition-colors" />
        <button onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="absolute top-full left-0 w-full bg-white border-t flex flex-col items-center gap-4 py-6 md:hidden z-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={pathname === link.href ? "text-brand font-semibold" : ""}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 w-3/4">
            <input
              type="text"
              placeholder="Search"
              className="border border-brand rounded-full px-3 py-1 text-sm flex-1 focus:outline-none focus:ring-1 focus:ring-brand"
            />
            <button className="bg-brand text-white rounded-full px-4 py-1 text-sm cursor-pointer hover:opacity-90 transition-opacity">
              Search
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}