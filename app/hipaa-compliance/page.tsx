import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ShieldCheck,
  Lock,
  Truck,
  Eye,
  Link2,
  UserCheck,
  PackageCheck,
  FileCheck,
  Activity,
} from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import PageCTA from '@/components/ui/PageCTA';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'HIPAA Compliance | Idoko Legacy LLC',
  description:
    'Idoko Legacy LLC supports HIPAA-conscious operations through secure pickup, controlled transportation, and chain-of-custody procedures.',
};

const commitments = [
  { label: 'Secure pickup procedures', icon: Lock },
  { label: 'Controlled transportation practices', icon: Truck },
  { label: 'Confidential handling of medical deliveries', icon: Eye },
  { label: 'Chain-of-custody support', icon: Link2 },
  { label: 'Limiting access to authorized personnel', icon: UserCheck },
  { label: 'Maintaining shipment integrity', icon: PackageCheck },
  {
    label: 'Supporting applicable HIPAA privacy requirements',
    icon: FileCheck,
  },
  { label: 'Promoting accountability across every delivery', icon: Activity },
];

const stats = [
  { value: '24/7', label: 'STAT dispatch availability' },
  { value: '100%', label: 'Chain-of-custody tracked' },
  { value: '9', label: 'Texas communities served' },
  { value: '10+', label: 'Specialized logistics services' },
];

const practiceCards = [
  {
    src: 'https://images.unsplash.com/photo-1614018453562-77f6180ce036?fm=jpg&q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0',
    title: 'Controlled pickup',
    description:
      'Materials are received and verified under consistent, documented procedures.',
  },
  {
    src: 'https://images.unsplash.com/photo-1582902281043-69c645f40cd5?fm=jpg&q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0',
    title: 'Secure transport',
    description:
      'Shipments remain under continuous control throughout transportation.',
  },
  {
    src: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?fm=jpg&q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0',
    title: 'Verified delivery',
    description:
      'Every delivery is confirmed, keeping the chain of custody intact.',
  },
];

export default function HipaaCompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="HIPAA compliance"
        title="Privacy. Security. Confidentiality."
        description="Healthcare logistics involves more than transportation. It requires protecting sensitive healthcare information while maintaining secure operational procedures."
        photoHint="secure data confidential document"
        photoSrc="https://images.unsplash.com/photo-1758691461990-03b49d969495?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      {/* Intro + commitments */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div
          className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-accent-500/5 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.3fr]">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-50">
                  <ShieldCheck
                    className="h-7 w-7 text-accent-600"
                    strokeWidth={1.5}
                  />
                </span>
                <h2 className="mt-6 text-2xl font-bold text-primary-950 sm:text-3xl">
                  Built around trust
                </h2>
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
                <div className="group relative mt-8 max-w-sm overflow-hidden rounded-2xl">
                  <Image
                    src="/assets/images/image8.jpeg"
                    alt="Idoko Legacy team supporting secure healthcare logistics"
                    width={480}
                    height={320}
                    className="h-56 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 via-transparent to-transparent" />
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {commitments.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.label} delay={i * 60}>
                    <div className="group relative overflow-hidden rounded-2xl border border-primary-950/10 bg-primary-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500/40 hover:shadow-lg hover:shadow-accent-500/5">
                      <Icon
                        className="h-6 w-6 text-accent-600 transition-transform duration-300 group-hover:scale-110"
                        strokeWidth={1.75}
                      />
                      <p className="mt-4 text-base font-medium text-primary-950">
                        {item.label}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="relative overflow-hidden bg-primary-100 py-16">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 animate-blob rounded-full bg-accent-500/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 sm:grid-cols-4 lg:px-10">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80} className="text-center">
              <p className="text-3xl font-bold text-accent-600 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-primary-950/70">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Visual proof section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="In practice"
            title="Confidentiality, carried through every step"
            description="From pickup to final delivery, our procedures are designed to keep sensitive healthcare materials protected and accounted for."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practiceCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 100}>
                <div className="group overflow-hidden rounded-2xl border border-primary-950/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={card.src}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary-950">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-primary-950/70">
                      {card.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Questions about our confidentiality procedures?"
        description="Our team is always available to discuss our HIPAA-related operations."
        buttonLabel="Contact us"
        buttonHref="/contact"
        backgroundImage="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8"
      />
    </>
  );
}
