import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { SectionIntro } from "@/components/section-intro";
import { processSteps, siteActions } from "@/lib/content";

export const metadata: Metadata = {
  title: "Process",
  description:
    "YAD's engagement model moves through assessment, delivery, teaching, and support.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How engagement works"
        title="A disciplined process for practical technology outcomes."
        description="YAD combines problem-solving with knowledge transfer, so each engagement leaves the client more capable than before."
      />

      <section className="bg-ivory py-16 sm:py-24">
        <div className="section-shell">
          <div className="grid gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article
                  className="grid gap-6 rounded-lg border border-charcoal/10 bg-white/70 p-6 shadow-[0_20px_70px_rgba(30,24,11,0.05)] md:grid-cols-[160px_1fr]"
                  key={step.title}
                >
                  <div className="flex items-center gap-4 md:block">
                    <p className="font-display text-5xl font-bold text-gold-muted">
                      0{index + 1}
                    </p>
                    <div className="mt-0 inline-flex size-12 items-center justify-center rounded-full bg-gold/15 text-gold-muted md:mt-5">
                      <Icon aria-hidden="true" className="size-6" />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-display text-3xl font-bold text-charcoal">
                      {step.title}
                    </h2>
                    <p className="mt-3 max-w-3xl text-base leading-8 text-charcoal/70">
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionIntro
            eyebrow="Delivery standard"
            title="The handover matters as much as the build."
          >
            <p>
              A completed project should be working, documented, understood, and
              ready for the next stage of the client&apos;s growth.
            </p>
          </SectionIntro>
          <div className="grid gap-4">
            {[
              "Clear project scope, timeline, and communication owner.",
              "Testing against the client's real workflow and original goals.",
              "Practical documentation and guided walkthroughs.",
              "Support options for maintenance, questions, and improvements.",
            ].map((item) => (
              <div
                className="flex gap-3 rounded-lg border border-charcoal/10 bg-ivory p-5"
                key={item}
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-1 size-5 shrink-0 text-sierra-green"
                />
                <p className="leading-7 text-charcoal/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-16 text-white sm:py-20">
        <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="font-display max-w-2xl text-balance text-4xl font-bold leading-tight">
            Bring one technology challenge. YAD will help clarify the next step.
          </h2>
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
