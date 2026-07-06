import type { Metadata } from 'next';
import { ShieldCheck } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import PageCTA from '@/components/ui/PageCTA';

export const metadata: Metadata = {
  title: 'HIPAA Compliance | Idoko Legacy LLC',
  description:
    'Idoko Legacy LLC supports HIPAA-conscious operations through secure pickup, controlled transportation, and chain-of-custody procedures.',
};

const commitments = [
  'Secure pickup procedures',
  'Controlled transportation practices',
  'Confidential handling of medical deliveries',
  'Chain-of-custody support',
  'Limiting access to authorized personnel',
  'Maintaining shipment integrity',
  'Supporting applicable HIPAA privacy requirements',
  'Promoting accountability across every delivery',
];

export default function HipaaCompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="HIPAA compliance"
        title="Privacy. Security. Confidentiality."
        description="Healthcare logistics involves more than transportation. It requires protecting sensitive healthcare information while maintaining secure operational procedures."
        photoHint="secure data confidential document"
      />
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <ShieldCheck
                className="h-9 w-9 text-accent-600"
                strokeWidth={1.5}
              />
              <p className="mt-5 max-w-sm text-base leading-relaxed text-primary-950/80">
                At Idoko Legacy LLC, we strive to support healthcare
                organizations through operational practices designed to reduce
                risk and promote secure handling of healthcare-related
                shipments.
              </p>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-primary-950/80">
                We continually work toward maintaining procedures that align
                with federal and state healthcare privacy expectations.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {commitments.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-primary-950/10 bg-primary-50 p-6 text-base font-medium text-primary-950"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <PageCTA
        title="Questions about our confidentiality procedures?"
        description="Our team is always available to discuss our HIPAA-related operations."
        buttonLabel="Contact us"
        buttonHref="/contact"
      />
    </>
  );
}
