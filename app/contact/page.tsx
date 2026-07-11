import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Idoko Legacy Medical Courier',
  description:
    'Get in touch with Idoko Legacy Medical Courier for healthcare logistics and medical courier services in Houston, Texas.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="We'd love to hear from you"
        photoHint="logistics office desk professional"
        photoSrc="/assets/images/contact-images/contact-image-1.jpg"
      />
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1fr_1.3fr] lg:px-10">
          <div className="space-y-6">
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
    <div className="flex gap-4 rounded-2xl border border-primary-950/10 bg-primary-50 p-6">
      <Icon className="h-5 w-5 flex-none text-accent-600" strokeWidth={1.5} />
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-primary-950/50">
          {label}
        </p>
        <p className="mt-1 text-base leading-relaxed text-primary-950/85">
          {children}
        </p>
      </div>
    </div>
  );
}
