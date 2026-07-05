import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import RouteGrid from "@/components/ui/RouteGrid";
import { faqs } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQ | Idoko Legacy LLC",
  description: "Answers to common questions about Idoko Legacy LLC's healthcare logistics and medical courier services.",
};

export default function FaqPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-accent-600/30 bg-primary-950 py-20 text-white lg:py-28">
        <RouteGrid id="faq-hero-grid" className="text-accent-500/[0.08]" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" variant="dark" />
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="divide-y divide-primary-950/10 border-t border-primary-950/10">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-serif text-lg text-primary-950">
                  {faq.question}
                  <span className="ml-4 flex-none font-mono text-accent-600 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-primary-950/70">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-primary-950/10 bg-primary-50 py-16 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-serif text-2xl text-primary-950">Still have questions?</h2>
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