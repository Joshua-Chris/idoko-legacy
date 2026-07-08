import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import QuoteForm from '@/components/forms/QuoteForm';

export const metadata: Metadata = {
  title: 'Request a Quote | Idoko Legacy LLC',
  description:
    'Request a quote for recurring medical courier services or an urgent same-day delivery from Idoko Legacy LLC.',
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a quote"
        title="Need reliable healthcare transportation?"
        description="Whether you require recurring medical courier services or an urgent same-day delivery, Idoko Legacy LLC is ready to help. Complete the form and one of our logistics specialists will respond promptly."
        photoHint="delivery van road healthcare"
        photoSrc="https://images.unsplash.com/photo-1647353629293-5099772e96f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDczfHx8ZW58MHx8fHx8"
      />
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
