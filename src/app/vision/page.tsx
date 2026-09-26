import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { flywheel, roadmap, siteActions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Vision",
  description:
    "YAD's long-term vision is to grow from technology service into training, proprietary systems, advisory, and infrastructure.",
};

export default function VisionPage() {
  return (
    <>
      <PageHero
        eyebrow="Long vision"
        title="Local depth first. Global usefulness over time."
        description="YAD launches in Sierra Leone with Tech & Digital Aid, then grows deliberately toward proprietary tools, training, consulting, infrastructure, and social impact."
      />

      <section className="bg-ivory py-16 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro
            eyebrow="Growth roadmap"
            title="Each phase builds the conditions for the next."
          >
            <p>
              The roadmap is public-facing and simple: serve well, learn deeply,
              build from what is learned, and expand only when the foundation is
              strong.
            </p>
          </SectionIntro>
          <div className="grid gap-5">
            {roadmap.map((item) => (
              <article
                className="rounded-lg border border-charcoal/10 bg-white/70 p-6"
                key={item.phase}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-charcoal px-3 py-1 text-xs font-extrabold uppercase tracking-[0.16em] text-white">
                    {item.phase}
                  </span>
                  <span className="text-sm font-bold text-gold-muted">
                    {item.timing}
                  </span>
                </div>
                <h2 className="font-display mt-4 text-3xl font-bold text-charcoal">
                  {item.title}
                </h2>
                <p className="mt-3 leading-8 text-charcoal/70">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-16 text-white sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow text-gold">The flywheel</p>
            <h2 className="font-display mt-4 text-balance text-4xl font-bold leading-tight sm:text-5xl">
              Service becomes insight. Insight becomes better systems.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-white/70">
              YAD is built to learn from the field. Every engagement reveals
              patterns that can improve future services and eventually become
              tools, training, standards, and platforms.
            </p>
          </div>
          <div className="grid gap-3">
            {flywheel.map((item, index) => (
              <div
                className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5"
                key={item}
              >
                <span className="font-display text-3xl font-bold text-gold-bright">
                  {index + 1}
                </span>
                <p className="font-bold leading-7 text-white/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div className="inline-flex size-16 items-center justify-center rounded-full bg-gold/15 text-gold-muted">
            <Sparkles aria-hidden="true" className="size-8" />
          </div>
          <div>
            <h2 className="font-display text-balance text-4xl font-bold leading-tight text-charcoal sm:text-5xl">
              Social impact is not deferred.
            </h2>
            <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-charcoal/70">
              The communities most underserved by technology are central to
              YAD&apos;s design. The formal foundation comes later, but the
              commitment begins with the first client, first student, and first
              institution YAD helps strengthen.
            </p>
            <div className="mt-8">
              <ButtonLink
                href="/contact"
                icon={siteActions.secondary.icon}
                variant="light"
              >
                Build with YAD
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
