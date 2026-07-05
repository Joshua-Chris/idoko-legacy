import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import RouteGrid from "@/components/ui/RouteGrid";
import QuoteForm from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote | Idoko Legacy LLC",
  description:
    "Request a quote for recurring medical courier services or an urgent same-day delivery from Idoko Legacy LLC.",
};

export default function QuotePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-accent-600/30 bg-primary-950 py-20 text-white lg:py-28">
        <RouteGrid id="quote-hero-grid" className="text-accent-500/[0.08]" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Request a quote"
            title="Need reliable healthcare transportation?"
            description="Whether you require recurring medical courier services or an urgent same-day delivery, Idoko Legacy LLC is ready to help. Complete the form and one of our logistics specialists will respond promptly."
            variant="dark"
          />
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <QuoteForm />
        </div>
      </section>
    </>
  );
}