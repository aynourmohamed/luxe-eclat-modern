import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <p className="text-xl font-bold">Luxe Éclat</p>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/help">Help</Link>
        <Link href="/account">Account</Link>
      </div>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-3 py-1 text-sm"
        />
        <button>Search</button>
        <button>Cart</button>
      </div>
    </nav>
  );
}