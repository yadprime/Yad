import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { contactMethods, servicePrompts, siteActions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact YAD God's Hand for technology support, websites, cybersecurity, AI, training, and digital transformation help.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact YAD"
        title="Start with the challenge in front of you."
        description="Reach YAD Tech & Digital Aid for technology support, digital transformation guidance, websites, software, cybersecurity, cloud, AI, automation, and training."
      />

      <section className="bg-ivory py-16 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="eyebrow text-gold-muted">Direct contact</p>
            <h2 className="font-display mt-4 text-balance text-4xl font-bold leading-tight text-charcoal sm:text-5xl">
              WhatsApp for quick starts. Email for fuller project context.
            </h2>
            <p className="mt-6 text-lg leading-8 text-charcoal/70">
              YAD begins by understanding the real situation, then recommends
              the practical next step.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                external
                href={siteActions.primary.href}
                icon={siteActions.primary.icon}
              >
                Start on WhatsApp
              </ButtonLink>
              <ButtonLink
                href={siteActions.email.href}
                icon={siteActions.email.icon}
                variant="outline"
              >
                Email YAD
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-5">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  className="focus-ring block rounded-lg border border-charcoal/10 bg-white/70 p-6 text-charcoal shadow-[0_20px_70px_rgba(30,24,11,0.05)] hover:border-gold/60"
                  href={method.href}
                  key={method.title}
                  rel={method.title === "WhatsApp" ? "noreferrer" : undefined}
                  target={method.title === "WhatsApp" ? "_blank" : undefined}
                >
                  <Icon aria-hidden="true" className="size-7 text-gold-muted" />
                  <h2 className="font-display mt-4 text-3xl font-bold">
                    {method.title}
                  </h2>
                  <p className="mt-2 text-base font-bold text-charcoal/70">
                    {method.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="eyebrow text-gold-muted">Common starting points</p>
            <h2 className="font-display mt-4 text-balance text-4xl font-bold leading-tight text-charcoal sm:text-5xl">
              A few ways clients begin the conversation.
            </h2>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {servicePrompts.map((prompt) => (
              <div
                className="rounded-lg border border-charcoal/10 bg-ivory p-5 text-sm font-extrabold text-charcoal/75"
                key={prompt}
              >
                {prompt}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-16 text-white sm:py-20">
        <div className="section-shell">
          <p className="eyebrow text-gold">Home market</p>
          <h2 className="font-display mt-4 max-w-3xl text-balance text-4xl font-bold leading-tight">
            Serving Sierra Leone first, with systems designed to scale beyond it.
          </h2>
          <p className="mt-6 max-w-2xl leading-8 text-white/70">
            YAD grows deliberately: deep local usefulness first, regional and
            international adaptation over time.
          </p>
        </div>
      </section>
    </>
  );
}
