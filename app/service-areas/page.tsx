import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import PageCTA from '@/components/ui/PageCTA';
import { serviceAreas } from '@/content/serviceAreas';

export const metadata: Metadata = {
  title: 'Service Areas | Idoko Legacy LLC',
  description:
    'Idoko Legacy LLC proudly serves Houston, Katy, Sugar Land, Cypress, Pearland, and surrounding Texas communities.',
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service areas"
        title="Proudly serving Houston and beyond"
        description="Local expertise means faster routes and fewer surprises. Here's where we operate."
        photoHint="houston texas skyline"
      />
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {serviceAreas.map((area) => (
              <div
                key={area.name}
                className={`flex flex-col justify-between gap-6 rounded-2xl border p-6 ${
                  area.isHub
                    ? 'border-accent-500 bg-accent-50'
                    : 'border-primary-950/10 bg-white'
                }`}
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-primary-950/50">
                  {area.isHub ? 'Hub' : 'Service area'}
                </span>
                <span className="text-lg font-bold text-primary-950">
                  {area.name}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-primary-950/75">
            Don&apos;t see your community listed? We regularly extend service to
            surrounding Texas communities on a scheduled or as-needed basis —
            reach out and we&apos;ll confirm coverage for your location.
          </p>
        </div>
      </section>
      <PageCTA
        title="Check coverage for your facility"
        buttonLabel="Request a quote"
        buttonHref="/quote"
      />
    </>
  );
}
