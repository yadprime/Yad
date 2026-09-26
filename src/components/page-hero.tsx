import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  tone?: "dark" | "light";
};

export function PageHero({
  eyebrow,
  title,
  description,
  tone = "dark",
}: PageHeroProps) {
  const isDark = tone === "dark";

  return (
    <section
      className={cn(
        "relative overflow-hidden py-20 sm:py-24 lg:py-28",
        isDark ? "bg-charcoal text-white" : "bg-ivory text-charcoal",
      )}
    >
      <div className="section-shell relative z-10">
        <p
          className={cn(
            "eyebrow",
            isDark ? "text-gold-bright" : "text-gold-muted",
          )}
        >
          {eyebrow}
        </p>
        <h1 className="font-display mt-5 max-w-4xl text-balance text-5xl font-bold leading-[0.96] sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p
          className={cn(
            "mt-6 max-w-3xl text-pretty text-lg leading-8 sm:text-xl",
            isDark ? "text-white/75" : "text-charcoal/70",
          )}
        >
          {description}
        </p>
      </div>
      {isDark ? (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
        />
      ) : null}
    </section>
  );
}
