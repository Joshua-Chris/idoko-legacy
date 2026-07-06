import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

const steps = [
  {
    number: '01',
    title: 'Request a pickup',
    description:
      'Submit a quote request or call our dispatch line with your pickup and delivery details.',
  },
  {
    number: '02',
    title: 'We dispatch a courier',
    description:
      'A trained courier is assigned and routed to your facility, often within minutes for STAT requests.',
  },
  {
    number: '03',
    title: 'Secure delivery & confirmation',
    description:
      'Your shipment is delivered with chain-of-custody intact, and confirmation is sent back to your team.',
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-primary-50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="How it works"
          title="From request to delivery, handled with precision"
        />
        <Reveal className="mt-14" delay={100}>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="rounded-2xl bg-white p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 text-sm font-bold text-primary-950">
                  {step.number}
                </span>
                <h3 className="mt-4 text-xl font-bold text-primary-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-primary-950/75">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
