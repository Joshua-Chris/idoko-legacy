import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import StatsStrip from '@/components/sections/StatsStrip';
import CoreValues from '@/components/sections/CoreValues';
import ProcessSteps from '@/components/sections/ProcessSteps';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ServiceCard from '@/components/sections/ServiceCard';
import IndustryList from '@/components/sections/IndustryList';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import PageCTA from '@/components/ui/PageCTA';
import { services } from '@/content/services';
import { industries } from '@/content/industries';
import { serviceAreas } from '@/content/serviceAreas';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <CoreValues />
      <ProcessSteps />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Our services"
            title="Logistics solutions built for healthcare"
            description="A sample of what we handle daily — see the full list for everything we offer."
          />

          <Reveal className="mt-12" delay={100}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 6).map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </Reveal>

          <div className="mt-12 flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center rounded-full bg-primary-950 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-500"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <section className="bg-primary-50 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Industries we serve"
              title="Trusted across the healthcare system"
            />
            <Link
              href="/industries"
              className="text-sm font-semibold text-accent-600 hover:text-accent-700"
            >
              View all industries →
            </Link>
          </div>
          <Reveal className="mt-12" delay={100}>
            <IndustryList industries={industries.slice(0, 8)} />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 text-primary-950 lg:py-24">
        <div
          className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 animate-blob rounded-full bg-accent-500/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Service areas"
            title="Proudly serving Houston and surrounding communities"
            variant="light"
          />
          <Reveal className="mt-10" delay={100}>
            <div className="flex flex-wrap gap-3">
              {serviceAreas.map((area) => (
                <span
                  key={area.name}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    area.isHub
                      ? 'border-accent-500 bg-accent-500/10 text-accent-600'
                      : 'border-primary-950/15 text-primary-950/70 hover:border-primary-950/30'
                  }`}
                >
                  {area.name}
                </span>
              ))}
            </div>
          </Reveal>
          <Link
            href="/service-areas"
            className="mt-8 inline-block text-sm font-semibold text-accent-600 hover:text-accent-700"
          >
            View full coverage map →
          </Link>
        </div>
      </section>

      <PageCTA
        title="Need reliable healthcare transportation?"
        description="Whether you require recurring medical courier services or an urgent same-day delivery, Idoko Legacy is ready to help."
        buttonLabel="Request a quote"
        buttonHref="/quote"
      />
    </>
  );
}
