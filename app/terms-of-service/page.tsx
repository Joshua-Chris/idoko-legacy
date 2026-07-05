import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import RouteGrid from "@/components/ui/RouteGrid";

export const metadata: Metadata = {
  title: "Terms of Service | Idoko Legacy LLC",
  description: "Terms of service for Idoko Legacy LLC's healthcare logistics and medical courier services.",
};

const sections = [
  {
    title: "Services",
    body: "Idoko Legacy LLC provides medical courier and healthcare logistics services, including but not limited to laboratory sample transport, pharmaceutical delivery, medical equipment transportation, and scheduled or on-demand deliveries, within Houston, Texas and surrounding communities.",
  },
  {
    title: "Scheduling and delivery windows",
    body: "Pickup and delivery times are estimates based on standard operating conditions. While we prioritize timeliness, actual times may vary due to traffic, weather, or other circumstances beyond our control.",
  },
  {
    title: "Client responsibilities",
    body: "Clients are responsible for providing accurate pickup and delivery information, properly packaging materials for transport, and ensuring shipments comply with applicable laws and regulations.",
  },
  {
    title: "Liability",
    body: "Idoko Legacy LLC handles every shipment with care; however, our liability for loss or damage is limited as set forth in the service agreement applicable to your account. Please contact us for details specific to your service arrangement.",
  },
  {
    title: "Cancellations",
    body: "Scheduled pickups may be cancelled or rescheduled by contacting our office. Same-day or STAT requests may be subject to different cancellation terms due to their time-sensitive nature.",
  },
  {
    title: "Payment terms",
    body: "Invoicing and payment terms are established individually with each client and outlined in the applicable service agreement.",
  },
  {
    title: "Changes to these terms",
    body: "We may update these terms from time to time. Continued use of our services constitutes acceptance of the current terms posted on this page.",
  },
  {
    title: "Contact us",
    body: "Questions about these terms can be directed to Info@idokolegacy.com or (832) 977-9202.",
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-accent-600/30 bg-primary-950 py-20 text-white lg:py-28">
        <RouteGrid id="terms-hero-grid" className="text-accent-500/[0.08]" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Legal"
            title="Terms of service"
            description="Last updated January 2026"
            variant="dark"
          />
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl space-y-10 px-6 lg:px-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-xl text-primary-950">{section.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-primary-950/70">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}