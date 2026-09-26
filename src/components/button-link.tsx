import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: "primary" | "secondary" | "light" | "outline" | "dark";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-gold text-charcoal shadow-[0_16px_40px_rgba(201,168,76,0.24)] hover:bg-gold-bright",
  secondary:
    "border border-white/20 bg-white/10 text-white hover:border-gold/70 hover:bg-white/15",
  light:
    "bg-charcoal text-white hover:bg-charcoal-soft shadow-[0_16px_40px_rgba(13,16,20,0.18)]",
  outline:
    "border border-charcoal/20 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-white",
  dark: "bg-charcoal text-white hover:bg-black",
};

export function ButtonLink({
  href,
  children,
  icon: Icon,
  variant = "primary",
  className,
  external,
}: ButtonLinkProps) {
  const classes = cn(
    "focus-ring inline-flex min-h-12 max-w-full cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold leading-none transition-colors sm:px-6",
    variants[variant],
    className,
  );
  const useAnchor =
    external ||
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  const content = (
    <>
      {Icon ? <Icon aria-hidden="true" className="size-4 shrink-0" /> : null}
      <span>{children}</span>
    </>
  );

  if (useAnchor) {
    return (
      <a
        className={classes}
        href={href}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        target={external || href.startsWith("http") ? "_blank" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}
