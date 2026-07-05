import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import RouteGrid from "@/components/ui/RouteGrid";

export const metadata: Metadata = {
  title: "HIPAA Compliance | Idoko Legacy LLC",
  description:
    "Idoko Legacy LLC supports HIPAA-conscious operations through secure pickup, controlled transportation, and chain-of-custody procedures.",
};

const commitments = [
  "Secure pickup procedures",
  "Controlled transportation practices",
  "Confidential handling of medical deliveries",
  "Chain-of-custody support",
  "Limiting access to authorized personnel",
  "Maintaining shipment integrity",
  "Supporting applicable HIPAA privacy requirements",
  "Promoting accountability across every delivery",
];

export default function HipaaCompliancePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-accent-600/30 bg-primary-950 py-20 text-white lg:py-28">
        <RouteGrid id="hipaa-hero-grid" className="text-accent-500/[0.08]" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="HIPAA compliance"
            title="Privacy. Security. Confidentiality."
            description="Healthcare logistics involves more than transportation. It requires protecting sensitive healthcare information while maintaining secure operational procedures."
            variant="dark"
          />
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <ShieldCheck className="h-8 w-8 text-accent-600" strokeWidth={1.5} />
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-950/70">
                At Idoko Legacy LLC, we strive to support healthcare organizations through
                operational practices designed to reduce risk and promote secure handling of
                healthcare-related shipments. Our commitment includes:
              </p>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-950/70">
                We continually work toward maintaining procedures that align with federal and
                state healthcare privacy expectations.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-px bg-primary-950/10 sm:grid-cols-2">
              {commitments.map((item) => (
                <li key={item} className="bg-white p-6 text-sm text-primary-950">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-primary-950/10 bg-primary-50 py-16 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-2xl text-primary-950">
            Questions about our confidentiality procedures?
          </h2>
          <p className="mt-3 text-primary-950/70">
            Our team is always available to discuss our HIPAA-related operations.
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