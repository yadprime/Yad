"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { brand, contactLinks, navItems } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-charcoal/[0.94] text-white shadow-[0_16px_44px_rgba(0,0,0,0.2)] backdrop-blur">
      <div className="wide-shell flex min-h-[76px] items-center justify-between gap-4">
        <Link
          aria-label="YAD God's Hand home"
          className="focus-ring flex min-w-0 items-center gap-3"
          href="/"
          onClick={() => setOpen(false)}
        >
          <span className="relative block size-11 shrink-0 overflow-hidden rounded-full border border-gold/40 bg-black">
            <Image
              alt=""
              className="object-cover"
              fill
              sizes="44px"
              src={brand.logoImage}
            />
          </span>
          <span className="min-w-0">
            <span className="font-display block truncate text-xl font-bold leading-none text-gold-bright">
              {brand.shortName}
            </span>
            <span className="block truncate text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/70">
              God&apos;s Hand
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                className={cn(
                  "focus-ring rounded-full px-4 py-2 text-sm font-bold text-white/70 hover:bg-white/[0.08] hover:text-white",
                  active && "bg-white/10 text-gold-bright",
                )}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            className="focus-ring inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full bg-gold px-5 text-sm font-extrabold text-charcoal hover:bg-gold-bright"
            href={contactLinks.whatsapp}
            rel="noreferrer"
            target="_blank"
          >
            <MessageCircle aria-hidden="true" className="size-4" />
            WhatsApp
          </a>
        </div>

        <button
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="focus-ring inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </button>
      </div>

      <div
        className={cn(
          "grid border-t border-white/10 bg-charcoal transition-[grid-template-rows] lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <nav
            aria-label="Mobile navigation"
            className="wide-shell flex flex-col gap-2 py-4"
          >
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  className={cn(
                    "focus-ring rounded-md px-3 py-3 text-base font-bold text-white/80",
                    active
                      ? "bg-white/10 text-gold-bright"
                      : "hover:bg-white/[0.08] hover:text-white",
                  )}
                  href={item.href}
                  key={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              className="focus-ring mt-2 inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-gold px-5 text-sm font-extrabold text-charcoal"
              href={contactLinks.whatsapp}
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle aria-hidden="true" className="size-4" />
              Start on WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
