import Link from "next/link";
import Hero from "@/components/sections/Hero";
import StatsStrip from "@/components/sections/StatsStrip";
import CoreValues from "@/components/sections/CoreValues";
import ProcessSteps from "@/components/sections/ProcessSteps";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServiceCard from "@/components/sections/ServiceCard";
import IndustryList from "@/components/sections/IndustryList";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { serviceAreas } from "@/content/serviceAreas";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <CoreValues />
      <ProcessSteps />

      <section className="bg-gradient-to-b from-primary-50/60 to-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Our services"
              title="Logistics solutions built for healthcare"
              description="A sample of what we handle daily — see the full list for everything we offer."
            />
            <Link
              href="/services"
              className="font-mono text-xs uppercase tracking-widest2 text-accent-600 hover:text-accent-700"
            >
              View all services →
            </Link>
          </div>
          <Reveal className="mt-12" delay={100}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 6).map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <WhyChooseUs />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Industries we serve" title="Trusted across the healthcare system" />
            <Link
              href="/industries"
              className="font-mono text-xs uppercase tracking-widest2 text-accent-600 hover:text-accent-700"
            >
              View all industries →
            </Link>
          </div>
          <Reveal className="mt-12" delay={100}>
            <IndustryList industries={industries.slice(0, 8)} />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-950 to-primary-900 py-20 text-white lg:py-24">
        <div
          className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 animate-blob rounded-full bg-accent-500/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Service areas"
            title="Proudly serving Houston and surrounding communities"
            variant="dark"
          />
          <Reveal className="mt-10" delay={100}>
            <div className="flex flex-wrap gap-3">
              {serviceAreas.map((area) => (
                <span
                  key={area.name}
                  className={`border px-4 py-2 font-mono text-xs uppercase tracking-widest2 transition-colors ${
                    area.isHub
                      ? "border-accent-500 bg-accent-500/10 text-accent-400"
                      : "border-white/20 text-primary-100/85 hover:border-white/40"
                  }`}
                >
                  {area.name}
                </span>
              ))}
            </div>
          </Reveal>
          <Link
            href="/service-areas"
            className="mt-8 inline-block font-mono text-xs uppercase tracking-widest2 text-accent-400 hover:text-accent-300"
          >
            View full coverage map →
          </Link>
        </div>
      </section>

      <section className="bg-gradient-to-b from-accent-50 via-white to-white py-20 text-center lg:py-24">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-3xl text-primary-950">
            Need reliable healthcare transportation?
          </h2>
          <p className="mt-4 text-primary-950/75">
            Whether you require recurring medical courier services or an
            urgent same-day delivery, Idoko Legacy is ready to help.
          </p>
          <Button href="/quote" className="mt-8">
            Request a quote
          </Button>
        </div>
      </section>
    </>
  );
}