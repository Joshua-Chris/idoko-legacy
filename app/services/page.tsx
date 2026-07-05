import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import RouteGrid from "@/components/ui/RouteGrid";
import ServiceCard from "@/components/sections/ServiceCard";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services | Idoko Legacy LLC",
  description:
    "Comprehensive healthcare logistics solutions including medical courier, lab sample transport, pharmaceutical delivery, and STAT rush services in Houston, Texas.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-accent-600/30 bg-primary-950 py-20 text-white lg:py-28">
        <RouteGrid id="services-hero-grid" className="text-accent-500/[0.08]" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Our services"
            title="Comprehensive healthcare logistics solutions"
            description="From routine lab runs to STAT deliveries, every service is built around the standards healthcare providers depend on."
            variant="dark"
          />
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-primary-950/10 bg-primary-50 py-16 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-2xl text-primary-950">
            Not sure which service fits your needs?
          </h2>
          <p className="mt-3 text-primary-950/70">
            Tell us about your shipment and we&apos;ll recommend the right logistics solution.
          </p>
          <Link
            href="/quote"
            className="mt-7 inline-block bg-accent-500 px-6 py-3 text-sm font-medium text-primary-950 hover:bg-accent-400"
          >
            Request a quote
          </Link>
        </div>
      </section>
    </>
  );
}