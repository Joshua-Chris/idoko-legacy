import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import PageCTA from '@/components/ui/PageCTA';
import ServiceCard from '@/components/sections/ServiceCard';
import ProcessSteps from '@/components/sections/ProcessSteps';
import SectionHeading from '@/components/ui/SectionHeading';
import { services } from '@/content/services';

export const metadata: Metadata = {
  title: 'Services | Idoko Legacy LLC',
  description:
    'Comprehensive healthcare logistics solutions including medical courier, lab sample transport, pharmaceutical delivery, and STAT rush services in Houston, Texas.',
};

const differentiators = [
  {
    title: 'Chain-of-custody first',
    description:
      'Every handoff is logged, every shipment accounted for, start to finish.',
  },
  {
    title: 'Trained, vetted couriers',
    description:
      'Our team understands the sensitivity and urgency healthcare demands.',
  },
  {
    title: 'Built-in flexibility',
    description:
      'Scheduled routes or STAT rush — we adapt to how your organization operates.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Comprehensive healthcare logistics solutions"
        description="From routine lab runs to STAT deliveries, every service is built around the standards healthcare providers depend on."
        photoHint="medical supplies pharmacy shelves"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Built for healthcare"
            title="Why providers rely on us for every shipment"
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-primary-50 p-7 text-center"
              >
                <h3 className="text-lg font-bold text-primary-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-primary-950/75">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Not sure which service fits your needs?"
        description="Tell us about your shipment and we'll recommend the right logistics solution."
        buttonLabel="Request a quote"
        buttonHref="/quote"
      />
    </>
  );
}
