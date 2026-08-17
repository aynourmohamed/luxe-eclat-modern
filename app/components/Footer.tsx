import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 px-8 py-10 mt-auto bg-black text-white">
      <p className="text-xl font-bold">Luxe Éclat</p>

      <div className="flex gap-6 text-sm">
        <Link href="/shop">Shop</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/help">Help</Link>
        <Link href="/account">Account</Link>
      </div>

      <div className="flex gap-4 text-sm">
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">Pinterest</a>
      </div>
    </footer>
  );
}