import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import RouteGrid from "@/components/ui/RouteGrid";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Idoko Legacy LLC",
  description:
    "Get in touch with Idoko Legacy LLC for healthcare logistics and medical courier services in Houston, Texas.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-accent-600/30 bg-primary-950 py-20 text-white lg:py-28">
        <RouteGrid id="contact-hero-grid" className="text-accent-500/[0.08]" />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Contact us"
            title="We'd love to hear from you"
            variant="dark"
          />
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1fr_1.3fr] lg:px-10">
          <div className="space-y-8">
            <InfoItem icon={MapPin} label="Address">
              14781 Memorial Drive #569
              <br />
              Houston, Texas 77079
              <br />
              United States
            </InfoItem>
            <InfoItem icon={Phone} label="Phone">
              (832) 977-9202
            </InfoItem>
            <InfoItem icon={Mail} label="Email">
              Info@idokolegacy.com
            </InfoItem>
            <InfoItem icon={Clock} label="Office hours">
              Administrative office
              <br />
              Mon – Sat, 8:00 AM – 5:00 PM
              <br />
              Sunday: Closed
              <br />
              <br />
              Delivery operations
              <br />
              Mon – Sat, available 24 hours
            </InfoItem>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}

function InfoItem({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <Icon className="h-5 w-5 flex-none text-accent-600" strokeWidth={1.5} />
      <div>
        <p className="font-mono text-[11px] uppercase tracking-widest2 text-primary-950/40">
          {label}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-primary-950/80">{children}</p>
      </div>
    </div>
  );
}