import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import QuoteForm from '@/components/forms/QuoteForm';

export const metadata: Metadata = {
  title: 'Request a Quote | Idoko Legacy Medical Courier',
  description:
    'Request a quote for recurring medical courier services or an urgent same-day delivery from Idoko Legacy Medical Courier.',
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a quote"
        title="Need reliable healthcare transportation?"
        description="Whether you require recurring medical courier services or an urgent same-day delivery, Idoko Legacy Medical Courier is ready to help. Complete the form and one of our logistics specialists will respond promptly."
        photoHint="delivery van road healthcare"
        photoSrc="/assets/images/quote-images/quote-image-1.jpg"
      />
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
