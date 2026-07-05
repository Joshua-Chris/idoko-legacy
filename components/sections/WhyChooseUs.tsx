import SectionHeading from "@/components/ui/SectionHeading";
import RouteGrid from "@/components/ui/RouteGrid";
import Reveal from "@/components/ui/Reveal";

const reasons = [
  { title: "HIPAA-conscious operations", description: "We strive to follow procedures that support compliance with HIPAA requirements and healthcare privacy regulations." },
  { title: "Dependable deliveries", description: "Timeliness is essential in healthcare. We prioritize punctual pickups and deliveries every day." },
  { title: "Secure handling", description: "Every shipment receives careful handling from pickup through final delivery." },
  { title: "Flexible scheduling", description: "Emergency deliveries, scheduled routes, and customized logistics plans available." },
  { title: "Local expertise", description: "Serving Houston and surrounding communities with local healthcare logistics experience." },
  { title: "Customer-focused service", description: "We build long-term relationships through responsive communication and exceptional service." },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 py-20 text-white lg:py-28">
      <RouteGrid id="why-choose-grid" className="text-accent-500/[0.08]" />
      <div
        className="pointer-events-none absolute right-0 top-0 h-80 w-80 animate-blob rounded-full bg-accent-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Why choose us"
          title="Your trusted healthcare logistics partner"
          description="Choosing the right medical logistics company is critical. Here's why healthcare providers choose Idoko Legacy."
          variant="dark"
        />
        <Reveal className="mt-14" delay={100}>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="group border border-accent-500/30 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-400 hover:bg-white/[0.06]"
              >
                <h3 className="font-serif text-lg text-white">{reason.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-primary-100/80">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}