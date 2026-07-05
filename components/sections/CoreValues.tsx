import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const featured = {
  code: "01",
  title: "Integrity",
  description:
    "We conduct every delivery with honesty, transparency, and accountability. It's the foundation every other value in our operation is built on.",
};

const values = [
  { code: "02", title: "Reliability", description: "Healthcare providers trust us because we consistently deliver on time." },
  { code: "03", title: "Confidentiality", description: "We protect sensitive healthcare information and maintain strict confidentiality throughout every delivery." },
  { code: "04", title: "Professionalism", description: "Every member of our team is committed to delivering exceptional customer service and operational excellence." },
  { code: "05", title: "Safety", description: "Protecting medical shipments and maintaining chain-of-custody procedures remain central to our operations." },
];

export default function CoreValues() {
  return (
    <section className="relative border-b border-primary-950/10 bg-gradient-to-b from-white to-primary-50/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading eyebrow="Our core values" title="What guides every delivery" />
        <Reveal className="mt-14" delay={100}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-8">
            <div className="group flex flex-col justify-between border border-accent-500/40 bg-primary-950 p-8 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-950/20 sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:p-10">
              <div>
                <span className="font-mono text-xs text-accent-400">
                  {featured.code} &middot; Foundational
                </span>
                <h3 className="mt-4 font-serif text-3xl text-white">{featured.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-primary-100/90">
                  {featured.description}
                </p>
              </div>
              <span className="mt-8 inline-block h-px w-16 bg-accent-500" />
            </div>

            {values.map((value) => (
              <div
                key={value.code}
                className="group border border-primary-950/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500 hover:shadow-lg hover:shadow-primary-950/5"
              >
                <span className="font-mono text-xs text-primary-950/50">{value.code}</span>
                <h3 className="mt-3 font-serif text-xl text-primary-950">{value.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-primary-950/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}