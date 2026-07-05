import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const steps = [
  { number: "01", title: "Request a pickup", description: "Submit a quote request or call our dispatch line with your pickup and delivery details." },
  { number: "02", title: "We dispatch a courier", description: "A trained courier is assigned and routed to your facility, often within minutes for STAT requests." },
  { number: "03", title: "Secure delivery & confirmation", description: "Your shipment is delivered with chain-of-custody intact, and confirmation is sent back to your team." },
];

export default function ProcessSteps() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading eyebrow="How it works" title="From request to delivery, handled with precision" />
        <Reveal className="mt-14" delay={100}>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative border-t border-accent-500 pt-5">
                <span className="font-mono text-xs text-primary-950/50">{step.number}</span>
                <h3 className="mt-3 font-serif text-xl text-primary-950">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-primary-950/70">
                  {step.description}
                </p>
                {i < steps.length - 1 && (
                  <span
                    className="absolute -right-5 top-5 hidden text-accent-400 sm:block"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}