import { cn } from "@/lib/utils";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionIntro({
  eyebrow,
  title,
  children,
  align = "left",
  light,
}: SectionIntroProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <p className={cn("eyebrow", light ? "text-gold" : "text-gold-muted")}>
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-display mt-4 text-balance text-4xl font-bold leading-tight sm:text-5xl",
          light ? "text-white" : "text-charcoal",
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mt-5 text-pretty text-base leading-8 sm:text-lg",
          light ? "text-white/70" : "text-charcoal/70",
        )}
      >
        {children}
      </div>
    </div>
  );
}
