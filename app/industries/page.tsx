import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import RouteGrid from "@/components/ui/RouteGrid";
import IndustryList from "@/components/sections/IndustryList";
import { industries } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries We Serve | Idoko Legacy LLC",
  description:
    "Idoko Legacy LLC serves hospitals, laboratories, pharmacies, clinics, and healthcare networks across Houston, Texas.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-accent-600/30 bg-primary-950 py-20 text-white lg:py-28">
        <RouteGrid id="industries-hero-grid" className="text-accent-500/[0.08]" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Industries we serve"
            title="Built for every corner of the healthcare system"
            description="Every organization we work with handles something time-sensitive. Our logistics processes adapt to what your operation needs."
            variant="dark"
          />
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <IndustryList industries={industries} />
        </div>
      </section>

      <section className="border-t border-primary-950/10 bg-primary-50 py-16 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-2xl text-primary-950">
            Don&apos;t see your organization type listed?
          </h2>
          <p className="mt-3 text-primary-950/70">
            We build customized logistics solutions for healthcare operations of every kind.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-block bg-accent-500 px-6 py-3 text-sm font-medium text-primary-950 hover:bg-accent-400"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}