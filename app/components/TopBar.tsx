export default function TopBar() {
    return (
      <div className="flex items-center justify-between px-8 py-2 text-sm bg-black text-white">
        <p>support@luxeeclat.com</p>
        <div className="flex gap-4">
          <button>EN</button>
          <button>USD</button>
        </div>
      </div>
    );
  }