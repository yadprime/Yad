import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { InfoCard } from "@/components/info-card";
import { SectionIntro } from "@/components/section-intro";
import {
  audiences,
  brand,
  contactLinks,
  differentiators,
  mandate,
  processSteps,
  proofPoints,
  services,
  siteActions,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="relative isolate min-h-[82svh] overflow-hidden bg-charcoal text-white">
        <Image
          alt="YAD God's Hand brand mark above a glowing horizon"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          fill
          priority
          sizes="100vw"
          src={brand.heroImage}
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,9,12,0.94),rgba(7,9,12,0.68)_48%,rgba(7,9,12,0.2))]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-[linear-gradient(0deg,var(--charcoal),rgba(13,16,20,0))]" />

        <div className="section-shell flex min-h-[82svh] items-center py-16">
          <div className="max-w-3xl">
            <p className="eyebrow text-gold-bright">
              Sierra Leone based technology partner
            </p>
            <h1 className="font-display mt-5 text-balance text-6xl font-bold leading-[0.9] sm:text-7xl lg:text-8xl">
              {brand.name}
            </h1>
            <p className="mt-5 text-xl font-bold text-gold-bright sm:text-2xl">
              {brand.tagline}
            </p>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/80 sm:text-xl">
              {brand.division} helps businesses, institutions, startups, and
              communities use technology with confidence, security, and
              long-term direction.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                external
                href={siteActions.primary.href}
                icon={siteActions.primary.icon}
              >
                {siteActions.primary.label}
              </ButtonLink>
              <ButtonLink
                href={siteActions.secondary.href}
                icon={siteActions.secondary.icon}
                variant="secondary"
              >
                {siteActions.secondary.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 sm:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <SectionIntro
            eyebrow="Launch division"
            title="Technology should not be the barrier between people and progress."
          >
            <p>
              YAD begins with Tech & Digital Aid: a full-service technology arm
              built to solve immediate problems, transfer knowledge, and create
              the insight needed for future platforms and infrastructure.
            </p>
          </SectionIntro>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {proofPoints.map((point) => (
              <div
                className="rounded-lg border border-charcoal/10 bg-white/70 p-5"
                key={point.label}
              >
                <p className="font-display text-4xl font-bold text-gold-muted">
                  {point.value}
                </p>
                <p className="mt-1 text-sm font-bold leading-6 text-charcoal/70">
                  {point.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="section-shell">
          <SectionIntro
            eyebrow="Mandate"
            title="A hand that helps, guides, and builds."
          >
            <p>
              YAD is designed to meet real needs today while building the
              capability, people, and systems that raise the standard over time.
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
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionIntro
              eyebrow="Core services"
              light
              title="End-to-end support for the whole technology problem."
            >
              <p>
                A broken website, a weak network, a manual process, and a
                security gap are often connected. YAD is positioned to see the
                whole system.
              </p>
              <div className="mt-7">
                <ButtonLink href="/services" icon={ArrowRight} variant="primary">
                  View all services
                </ButtonLink>
              </div>
            </SectionIntro>

            <div className="grid gap-4 sm:grid-cols-2">
              {services.slice(0, 6).map((service) => (
                <InfoCard
                  dark
                  description={service.description}
                  icon={service.icon}
                  key={service.title}
                  title={service.title}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory-deep py-16 sm:py-24">
        <div className="section-shell">
          <SectionIntro
            align="center"
            eyebrow="Engagement model"
            title="Every project follows a simple discipline."
          >
            <p>
              YAD does not rush to a surface-level fix. The work moves through
              assessment, delivery, teaching, and support so the client receives
              both a solution and more capability.
            </p>
          </SectionIntro>

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article
                  className="rounded-lg border border-charcoal/10 bg-white/70 p-6 text-charcoal"
                  key={step.title}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-display text-4xl font-bold text-gold-muted">
                      0{index + 1}
                    </span>
                    <Icon aria-hidden="true" className="size-6 text-sierra-green" />
                  </div>
                  <h3 className="font-display mt-5 text-2xl font-bold">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-charcoal/70">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionIntro
            eyebrow="Who we serve"
            title="Built for organizations and people who need technology to work."
          >
            <p>
              From a small shop that needs a dependable website to a school
              modernizing its digital tools, the standard remains the same:
              clarity, care, and durable results.
            </p>
          </SectionIntro>
          <div className="grid gap-5 sm:grid-cols-2">
            {audiences.map((audience) => (
              <InfoCard key={audience.title} {...audience} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-16 text-white sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="eyebrow text-gold">Why YAD</p>
            <h2 className="font-display mt-4 max-w-3xl text-balance text-4xl font-bold leading-tight sm:text-5xl">
              Not just a service provider. An ecosystem of assistance.
            </h2>
            <div className="mt-8 grid gap-4">
              {differentiators.map((item) => (
                <div className="flex gap-3" key={item}>
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-1 size-5 shrink-0 text-sierra-green"
                  />
                  <p className="leading-7 text-white/75">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-gold/25 bg-white/[0.04] p-7">
            <p className="font-display text-3xl font-bold text-gold-bright">
              Start with one challenge.
            </p>
            <p className="mt-4 leading-8 text-white/75">
              Whether the need is support, a website, automation, cloud setup,
              training, or a digital roadmap, YAD begins by understanding the
              real situation.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                external
                href={contactLinks.whatsapp}
                icon={siteActions.primary.icon}
              >
                Start on WhatsApp
              </ButtonLink>
              <ButtonLink href="/contact" icon={ArrowRight} variant="secondary">
                Contact page
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
