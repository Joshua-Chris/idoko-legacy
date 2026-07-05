import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import RouteGrid from "@/components/ui/RouteGrid";
import { serviceAreas } from "@/content/serviceAreas";

export const metadata: Metadata = {
  title: "Service Areas | Idoko Legacy LLC",
  description:
    "Idoko Legacy LLC proudly serves Houston, Katy, Sugar Land, Cypress, Pearland, and surrounding Texas communities.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-accent-600/30 bg-primary-950 py-20 text-white lg:py-28">
        <RouteGrid id="areas-hero-grid" className="text-accent-500/[0.08]" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Service areas"
            title="Proudly serving Houston and beyond"
            description="Local expertise means faster routes and fewer surprises. Here's where we operate."
            variant="dark"
          />
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid grid-cols-2 gap-px bg-primary-950/10 sm:grid-cols-3 lg:grid-cols-5">
            {serviceAreas.map((area) => (
              <div
                key={area.name}
                className={`flex flex-col justify-between gap-6 bg-white p-6 ${
                  area.isHub ? "ring-1 ring-inset ring-accent-500" : ""
                }`}
              >
                <span className="font-mono text-[10px] uppercase tracking-widest2 text-primary-950/40">
                  {area.isHub ? "Hub" : "Service area"}
                </span>
                <span className="font-serif text-lg text-primary-950">{area.name}</span>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-primary-950/60">
            Don&apos;t see your community listed? We regularly extend service to surrounding
            Texas communities on a scheduled or as-needed basis — reach out and we&apos;ll
            confirm coverage for your location.
          </p>
        </div>
      </section>

      <section className="border-t border-primary-950/10 bg-primary-50 py-16 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-2xl text-primary-950">
            Check coverage for your facility
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