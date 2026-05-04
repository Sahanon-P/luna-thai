"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-luna-cream"
          : "bg-white/90 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.jpg"
              alt="Luna Thai Massage & Wellness"
              width={44}
              height={44}
              className="rounded-sm shrink-0"
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className="font-playfair text-sm font-bold tracking-[0.2em] text-luna-brown uppercase">
                Luna Thai
              </span>
              <span className="font-playfair italic text-[10px] text-luna-gold tracking-[0.15em]">
                Massage &amp; Wellness
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-lato tracking-wide transition-colors",
                  pathname === link.href
                    ? "text-luna-gold"
                    : "text-luna-brown hover:text-luna-gold"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              className={cn(
                buttonVariants({ size: "sm" }),
                "bg-luna-gold hover:bg-luna-brown text-white font-lato text-xs tracking-widest uppercase transition-colors rounded-none px-6 border-none"
              )}
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-luna-brown p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-luna-cream/60 py-5 flex flex-col gap-4 pb-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-lato tracking-wide transition-colors",
                  pathname === link.href
                    ? "text-luna-gold"
                    : "text-luna-brown hover:text-luna-gold"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              onClick={() => setMobileOpen(false)}
              className={cn(
                buttonVariants(),
                "bg-luna-gold hover:bg-luna-brown text-white font-lato text-xs tracking-widest uppercase transition-colors rounded-none mt-1 border-none justify-center"
              )}
            >
              Book Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
