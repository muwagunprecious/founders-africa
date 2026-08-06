"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { programmes } from "../../app/program/_data";
import NavLink from "./nav-link/navLink";
import { useWaitlistModal } from "@/context/WaitlistContext";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Programmes", href: "/program" },
  { label: "Summit", href: "/summit" },
  { label: "About", href: "/#about" },
  { label: "Impact", href: "/#impact" },
  { label: "Partners", href: "/#partners" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  if (href === "/program") {
    return pathname === "/program" || pathname.startsWith("/program/");
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { openWaitlistModal } = useWaitlistModal();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="w-full py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between px-4 lg:hidden">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Founders Africa
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-black hover:border-black/20 hover:bg-black/5"
          >
            <span className="sr-only">Toggle menu</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={`h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
            menuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4 rounded-3xl border border-black/5 bg-white p-4 shadow-[0_20px_50px_rgba(13,17,23,0.08)]">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                item.href === "/program" ? (
                  <div key={item.href} className="px-3 py-3">
                    <NavLink
                      href={item.href}
                      active={isActivePath(pathname, item.href)}
                      className="rounded-2xl px-0 py-0"
                      disabled={true}
                    >
                      {item.label}
                    </NavLink>
                    <div className="mt-3 grid gap-2 border-l border-primary/30 pl-4">
                      {programmes.map((programme) => (
                        <Link
                          key={programme.slug}
                          href={`/program/${programme.slug}`}
                          className="text-sm text-gray-500 hover:text-primary"
                        >
                          {programme.navLabel}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    active={isActivePath(pathname, item.href)}
                    className="rounded-2xl px-3 py-3"
                  >
                    {item.label}
                  </NavLink>
                )
              ))}
            </nav>

            <div className="mt-4 flex flex-col gap-3 border-t border-black/5 pt-4">
              <button
                type="button"
                onClick={openWaitlistModal}
                className="rounded-full px-4 py-3 text-center text-sm font-medium text-black hover:bg-black/5 cursor-pointer"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={openWaitlistModal}
                className="cursor-pointer rounded-full bg-primary px-4 py-3 text-sm font-medium hover:brightness-125"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>

        <div className="relative hidden flex-row items-center justify-center p-4 lg:flex">
          <nav className="flex flex-row items-center gap-4">
            {navItems.map((item) =>
              item.href === "/program" ? (
                <div key={item.href} className="group relative">
                  <NavLink
                    href={item.href}
                    active={isActivePath(pathname, item.href)}
                    disabled={true}
                  >
                    {item.label}
                  </NavLink>

                  <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-64 -translate-x-1/2 rounded-3xl border border-black/10 bg-white p-3 opacity-0 shadow-[0_20px_50px_rgba(13,17,23,0.12)] transition-all duration-150 group-hover:visible group-hover:opacity-100">
                    <div className="grid gap-1">
                      {programmes.map((programme) => (
                        <Link
                          key={programme.slug}
                          href={`/program/${programme.slug}`}
                          className="rounded-2xl px-3 py-2 text-sm text-gray-500 hover:bg-primary/10 hover:text-black"
                        >
                          {programme.navLabel}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.href}
                  href={item.href}
                  active={isActivePath(pathname, item.href)}
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="absolute right-4 flex flex-row items-center gap-4">
            <button
              type="button"
              onClick={openWaitlistModal}
              className="font-medium hover:text-primary cursor-pointer"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={openWaitlistModal}
              className="cursor-pointer rounded-full bg-primary px-4 py-2 font-medium hover:brightness-125"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

