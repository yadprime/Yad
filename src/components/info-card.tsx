import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type InfoCardProps = {
  title: string;
  description: string;
  icon?: LucideIcon;
  dark?: boolean;
};

export function InfoCard({
  title,
  description,
  icon: Icon,
  dark,
}: InfoCardProps) {
  return (
    <article
      className={cn(
        "rounded-lg border p-6",
        dark
          ? "border-white/10 bg-white/[0.04] text-white"
          : "border-charcoal/10 bg-white/70 text-charcoal shadow-[0_20px_70px_rgba(30,24,11,0.06)]",
      )}
    >
      {Icon ? (
        <div
          className={cn(
            "mb-5 inline-flex size-11 items-center justify-center rounded-full",
            dark ? "bg-gold/15 text-gold-bright" : "bg-gold/15 text-gold-muted",
          )}
        >
          <Icon aria-hidden="true" className="size-5" />
        </div>
      ) : null}
      <h3 className="font-display text-2xl font-bold leading-tight">{title}</h3>
      <p
        className={cn(
          "mt-3 text-sm leading-7",
          dark ? "text-white/70" : "text-charcoal/70",
        )}
      >
        {description}
      </p>
    </article>
  );
}
