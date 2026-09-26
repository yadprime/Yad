import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { brand, contact, contactLinks, navItems } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr] lg:py-16">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative block size-12 overflow-hidden rounded-full border border-gold/40 bg-black">
              <Image
                alt=""
                className="object-cover"
                fill
                sizes="48px"
                src={brand.logoImage}
              />
            </span>
            <div>
              <p className="font-display text-2xl font-bold text-gold-bright">
                {brand.name}
              </p>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/60">
                {brand.tagline}
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/70">
            YAD Tech & Digital Aid helps businesses, institutions, startups, and
            communities use technology with clarity, security, and lasting value.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.16em] text-gold">
            Pages
          </h2>
          <nav className="mt-4 grid gap-3" aria-label="Footer navigation">
            {navItems.map((item) => (
              <Link
                className="focus-ring text-sm text-white/70 hover:text-white"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.16em] text-gold">
            Contact
          </h2>
          <div className="mt-4 grid gap-3 text-sm">
            <a
              className="focus-ring inline-flex items-center gap-2 text-white/70 hover:text-white"
              href={contactLinks.whatsapp}
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle aria-hidden="true" className="size-4 text-gold" />
              {contact.whatsappDisplay}
            </a>
            <a
              className="focus-ring inline-flex items-center gap-2 text-white/70 hover:text-white"
              href={contactLinks.email}
            >
              <Mail aria-hidden="true" className="size-4 text-gold" />
              {contact.email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="section-shell flex flex-col gap-2 text-xs font-semibold text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 YAD God&apos;s Hand. All rights reserved.</p>
          <p>Sierra Leone home market. Global ambition.</p>
        </div>
      </div>
    </footer>
  );
}
