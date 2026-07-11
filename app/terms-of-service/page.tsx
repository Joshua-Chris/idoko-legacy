import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Terms of Service | Idoko Legacy Medical Courier',
  description:
    "Terms of service for Idoko Legacy Medical Courier's healthcare logistics and medical courier services.",
};

const sections = [
  {
    title: 'Services',
    body: 'Idoko Legacy Medical Courier provides medical courier and healthcare logistics services, including but not limited to laboratory sample transport, pharmaceutical delivery, medical equipment transportation, and scheduled or on-demand deliveries, within Houston, Texas and surrounding communities.',
  },
  {
    title: 'Scheduling and delivery windows',
    body: 'Pickup and delivery times are estimates based on standard operating conditions. While we prioritize timeliness, actual times may vary due to traffic, weather, or other circumstances beyond our control.',
  },
  {
    title: 'Client responsibilities',
    body: 'Clients are responsible for providing accurate pickup and delivery information, properly packaging materials for transport, and ensuring shipments comply with applicable laws and regulations.',
  },
  {
    title: 'Liability',
    body: 'Idoko Legacy Medical Courier handles every shipment with care; however, our liability for loss or damage is limited as set forth in the service agreement applicable to your account. Please contact us for details specific to your service arrangement.',
  },
  {
    title: 'Cancellations',
    body: 'Scheduled pickups may be cancelled or rescheduled by contacting our office. Same-day or STAT requests may be subject to different cancellation terms due to their time-sensitive nature.',
  },
  {
    title: 'Payment terms',
    body: 'Invoicing and payment terms are established individually with each client and outlined in the applicable service agreement.',
  },
  {
    title: 'Changes to these terms',
    body: 'We may update these terms from time to time. Continued use of our services constitutes acceptance of the current terms posted on this page.',
  },
  {
    title: 'Contact us',
    body: 'Questions about these terms can be directed to Info@idokolegacy.com or (832) 977-9202.',
  },
];
const lastUpdated = new Date().toLocaleDateString('en-US', {
  month: 'long',
  year: 'numeric',
});
export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of service"
        description={`Last updated ${lastUpdated}`}
        photoHint="legal contract signing"
      />
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl space-y-10 px-6 lg:px-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-primary-950">
                {section.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-primary-950/80">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
