import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { services, siteActions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore YAD Tech & Digital Aid services across IT support, websites, software, cybersecurity, cloud, AI, training, and consulting.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="YAD Tech & Digital Aid"
        title="If it involves technology, YAD can help."
        description="From a single device issue to a full digital transformation roadmap, YAD serves the whole technology problem with clear assessment, delivery, teaching, and support."
      />

      <section className="bg-ivory py-16 sm:py-24">
        <div className="section-shell">
          <SectionIntro
            eyebrow="Service categories"
            title="A broad service base for connected technology needs."
          >
            <p>
              Technology problems rarely stay in one lane. These service areas
              are designed to combine when a client needs a complete solution.
            </p>
          </SectionIntro>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  className="flex min-h-[300px] flex-col rounded-lg border border-charcoal/10 bg-white/70 p-6 shadow-[0_22px_80px_rgba(30,24,11,0.05)]"
                  key={service.title}
                >
                  <div className="inline-flex size-12 items-center justify-center rounded-full bg-gold/15 text-gold-muted">
                    <Icon aria-hidden="true" className="size-6" />
                  </div>
                  <h2 className="font-display mt-5 text-2xl font-bold leading-tight text-charcoal">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-charcoal/70">
                    {service.description}
                  </p>
                  <div className="mt-auto pt-5">
                    <div className="flex flex-wrap gap-2">
                      {service.items.map((item) => (
                        <span
                          className="rounded-full border border-charcoal/10 bg-ivory px-3 py-1 text-xs font-bold text-charcoal/70"
                          key={item}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-16 text-white sm:py-20">
        <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">Start with the real need</p>
            <h2 className="font-display mt-4 text-balance text-4xl font-bold leading-tight">
              Not sure which service fits? Begin with an assessment.
            </h2>
            <p className="mt-5 leading-8 text-white/70">
              YAD identifies the root issue first, then recommends the smallest
              reliable path to a solution that can grow with the client.
            </p>
          </div>
          <ButtonLink
            external
            href={siteActions.primary.href}
            icon={siteActions.primary.icon}
          >
            Start on WhatsApp
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
