import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import PageCTA from '@/components/ui/PageCTA';
import IndustryList from '@/components/sections/IndustryList';
import { industries } from '@/content/industries';

export const metadata: Metadata = {
  title: 'Industries We Serve | Idoko Legacy LLC',
  description:
    'Idoko Legacy LLC serves hospitals, laboratories, pharmacies, clinics, and healthcare networks across Houston, Texas.',
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries we serve"
        title="Built for every corner of the healthcare system"
        description="Every organization we work with handles something time-sensitive. Our logistics processes adapt to what your operation needs."
        photoHint="hospital exterior modern building"
      />
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <IndustryList industries={industries} />
        </div>
      </section>
      <PageCTA
        title="Don't see your organization type listed?"
        description="We build customized logistics solutions for healthcare operations of every kind."
        buttonLabel="Contact us"
        buttonHref="/contact"
      />
    </>
  );
}
