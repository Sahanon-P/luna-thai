import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-luna-brown text-luna-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.jpg"
                alt="Luna Thai Massage & Wellness"
                width={88}
                height={88}
                className="rounded-sm"
              />
            </Link>
            <div className="w-10 h-px bg-luna-gold/50" />
            <p className="text-sm text-luna-cream/65 leading-relaxed font-lato">
              Authentic Thai massage rooted in centuries of healing tradition,
              delivered with care and expertise in the heart of Christchurch.
            </p>
            <div className="flex gap-4 mt-1">
              <a
                href="#"
                className="text-luna-cream/50 hover:text-luna-gold transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="text-luna-cream/50 hover:text-luna-gold transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-luna-gold font-semibold mb-5 tracking-wide text-sm uppercase">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/booking", label: "Book a Session" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-luna-cream/60 hover:text-luna-gold transition-colors font-lato"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-luna-gold font-semibold mb-5 tracking-wide text-sm uppercase">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-luna-cream/60 font-lato">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-luna-gold/70 mt-0.5 shrink-0" />
                14/14 Acheron Drive, Riccarton, Christchurch
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-luna-gold/70 shrink-0" />
                022 852 4696
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-luna-gold/70 shrink-0" />
                lunathaimassageandwellness@gmail.com
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-luna-gold/70 mt-0.5 shrink-0" />
                <span>
                  9:00 AM – 8:30 PM
                  <br />
                  Open 7 days a week
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-luna-cream/15 mt-12 pt-6 text-center text-xs text-luna-cream/35 font-lato tracking-wide">
          © {new Date().getFullYear()} { } Luna Thai Massage &amp; Wellness. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
