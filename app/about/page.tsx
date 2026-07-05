import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import RouteGrid from "@/components/ui/RouteGrid";

export const metadata: Metadata = {
  title: "About Us | Idoko Legacy LLC",
  description:
    "Idoko Legacy LLC is a professional healthcare logistics and medical courier company serving Houston, Texas.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-accent-600/30 bg-primary-950 py-20 text-white lg:py-28">
        <RouteGrid id="about-hero-grid" className="text-accent-500/[0.08]" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="About us"
            title="Delivering excellence in healthcare logistics"
            description="Idoko Legacy LLC is a professional healthcare logistics and medical courier company dedicated to providing secure, dependable, and efficient transportation services throughout Houston, Texas."
            variant="dark"
          />
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <p className="text-base leading-relaxed text-primary-950/70">
            We work with healthcare providers that require timely, accurate, and secure delivery
            of medical materials. Our logistics processes are designed to minimize delays, reduce
            risk, and maintain the integrity of every shipment.
          </p>
          <p className="mt-6 text-base leading-relaxed text-primary-950/70">
            Every delivery matters because behind every package is a patient, a physician, a
            laboratory result, or life-saving medical equipment. Our team operates with
            professionalism, urgency, and attention to detail, ensuring that healthcare
            organizations can focus on patient care while we handle their transportation needs.
          </p>
        </div>
      </section>

      <section className="border-t border-primary-950/10 bg-primary-50 py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:px-10">
          <div className="border-t border-accent-500 pt-5">
            <span className="font-mono text-xs uppercase tracking-widest2 text-accent-600">
              Our mission
            </span>
            <p className="mt-3 font-serif text-xl leading-snug text-primary-950">
              To provide safe, dependable, efficient, and professional healthcare logistics
              solutions while building lasting partnerships through trust, exceptional customer
              service, and operational excellence.
            </p>
          </div>
          <div className="border-t border-accent-500 pt-5">
            <span className="font-mono text-xs uppercase tracking-widest2 text-accent-600">
              Our vision
            </span>
            <p className="mt-3 font-serif text-xl leading-snug text-primary-950">
              To become one of Texas&apos; most trusted healthcare logistics providers by
              consistently delivering transportation solutions that strengthen healthcare
              operations and improve patient care.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-2xl text-primary-950">
            Ready to work with a logistics partner you can trust?
          </h2>
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