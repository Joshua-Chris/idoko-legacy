import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import PageCTA from '@/components/ui/PageCTA';
import { faqs } from '@/content/faq';

export const metadata: Metadata = {
  title: 'FAQ | Idoko Legacy LLC',
  description:
    "Answers to common questions about Idoko Legacy LLC's healthcare logistics and medical courier services.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        photoHint="customer support headset office"
      />
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-primary-950/10 bg-primary-50 p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-bold text-primary-950">
                  {faq.question}
                  <span className="ml-4 flex-none text-2xl leading-none text-accent-600 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-base leading-relaxed text-primary-950/80">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <PageCTA
        title="Still have questions?"
        buttonLabel="Contact us"
        buttonHref="/contact"
      />
    </>
  );
}
