"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/hipaa-compliance", label: "HIPAA compliance" },
  { href: "/service-areas", label: "Service areas" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-accent-600/30 bg-primary-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          className="flex flex-col leading-none"
          onClick={() => setOpen(false)}
        >
          <span className="font-serif text-xl font-semibold tracking-tight text-white">
            Idoko Legacy
          </span>
          <span className="mt-1 font-mono text-[10px] uppercase tracking-widest2 text-accent-400">
            Trust today &middot; Legacy tomorrow
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
  {navLinks.map((link) => {
    const active = pathname === link.href;
    return (
      <Link
        key={link.href}
        href={link.href}
        aria-current={active ? "page" : undefined}
        className={`text-sm transition-colors hover:text-white ${
          active ? "text-white" : "text-primary-100/80"
        }`}
      >
        {link.label}
      </Link>
    );
  })}
</nav>

        <div className="hidden lg:block">
          <Link
            href="/quote"
            className="border border-accent-500 px-5 py-2 text-sm text-accent-400 transition-colors hover:bg-accent-500 hover:text-primary-950"
          >
            Request a quote
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-white lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

     <MobileMenu links={navLinks} open={open} onClose={() => setOpen(false)} pathname={pathname} />
    </header>
  );
}