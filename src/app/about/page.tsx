import type { Metadata } from "next";
import Image from "next/image";
import { InfoCard } from "@/components/info-card";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { brand, mandate, tracks, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about YAD God's Hand, a mission-led technology and digital transformation institution beginning in Sierra Leone.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About YAD"
        title="An institution built to intervene with purpose."
        description="YAD God's Hand is a multi-disciplinary organization beginning with technology service, guidance, and digital capacity building in Sierra Leone."
      />

      <section className="bg-ivory py-16 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative aspect-square overflow-hidden rounded-lg border border-charcoal/10 bg-charcoal">
            <Image
              alt="YAD God's Hand logo with hand and light"
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              src={brand.logoImage}
            />
          </div>
          <div>
            <p className="eyebrow text-gold-muted">Name and identity</p>
            <h2 className="font-display mt-4 text-balance text-4xl font-bold leading-tight text-charcoal sm:text-5xl">
              A hand that helps. A hand that guides. A hand that builds.
            </h2>
            <p className="mt-6 text-pretty text-lg leading-8 text-charcoal/70">
              The name YAD carries the idea of purposeful intervention: a hand
              that enters the situation, acts with care, and leaves the
              environment better than it found it. For clients, that means clear
              communication, practical solutions, and long-term thinking.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="section-shell">
          <SectionIntro
            eyebrow="Mandate"
            title="Three words that shape every engagement."
          >
            <p>
              Help, guide, and build are not slogans at YAD. They are the
              practical standard for service, knowledge transfer, and long-term
              value creation.
            </p>
          </SectionIntro>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {mandate.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-16 text-white sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionIntro
            eyebrow="Core values"
            light
            title="Operational standards, not wall posters."
          >
            <p>
              YAD evaluates its work through purpose, integrity, empowerment,
              innovation, stewardship, and excellence.
            </p>
          </SectionIntro>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <article
                className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
                key={value.title}
              >
                <h3 className="font-display text-2xl font-bold text-gold-bright">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 sm:py-24">
        <div className="section-shell">
          <SectionIntro
            align="center"
            eyebrow="The seven tracks"
            title="A long-term institution, beginning with service."
          >
            <p>
              YAD launches through the Service Track, but the broader model is
              designed for service, building, training, investment, governance,
              licensing, and infrastructure to reinforce one another over time.
            </p>
          </SectionIntro>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
            {tracks.map((track, index) => (
              <div
                className="rounded-lg border border-charcoal/10 bg-white/70 p-5 text-center"
                key={track}
              >
                <p className="font-display text-3xl font-bold text-gold-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm font-extrabold leading-6 text-charcoal">
                  {track}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
