"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link/navLink";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Programmes", href: "/programmes" },
  { label: "Summit", href: "/summit" },
  { label: "About", href: "/about" },
  { label: "Impact", href: "/impact" },
  { label: "Partners", href: "/partners" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="relative flex flex-row items-center justify-center p-6 bg-white sticky top-0 z-50">
      <nav className="flex flex-row items-center gap-4">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            active={isActivePath(pathname, item.href)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="absolute right-24 flex flex-row items-center gap-4">
        <Link
          href="/sign-in"
          className="hover:text-primary font-medium"
        >
          Sign In
        </Link>
        <button className="rounded-full bg-primary px-4 py-2 font-medium hover:brightness-125 cursor-pointer">
          Apply Now
        </button>
      </div>
    </header>
  )
}
