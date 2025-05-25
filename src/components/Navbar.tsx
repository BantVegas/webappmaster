"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-40 px-6 md:px-12 py-3 bg-white/30 backdrop-blur-xl border-b border-white/10 shadow-lg flex items-center justify-between">
      {/* Logo vľavo */}
      <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-fuchsia-600 drop-shadow">
        WebAppMaster
      </Link>
      {/* Navigácia vpravo */}
      <div className="flex gap-2 md:gap-6">
        <NavItem href="/cennik" active={pathname.startsWith("/cennik")}>Cenník</NavItem>
        <NavItem href="/ako-to-funguje" active={pathname.startsWith("/ako-to-funguje")}>Ako to funguje</NavItem>
      </div>
    </nav>
  );
}

// Komponent na zvýraznenie aktívneho odkazu
function NavItem({ href, active, children }: { href: string, active?: boolean, children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-xl font-medium transition
        ${active ? "bg-blue-500/20 text-blue-900 shadow" : "text-slate-800 hover:bg-blue-100/50"}
      `}
    >
      {children}
    </Link>
  );
}
