import type { Metadata } from 'next';
import { Target, Eye } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import PageCTA from '@/components/ui/PageCTA';
import StatsStrip from '@/components/sections/StatsStrip';

export const metadata: Metadata = {
  title: 'About Us | Idoko Legacy LLC',
  description:
    'Idoko Legacy LLC is a professional healthcare logistics and medical courier company serving Houston, Texas.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero with negative margin for transparent navbar */}
      <PageHero
        eyebrow="About us"
        title="Delivering excellence in healthcare logistics"
        description="A professional healthcare logistics and medical courier company dedicated to secure, dependable, and efficient transportation throughout Houston, Texas."
        photoSrc="assets/images/image5.jpeg"
        photoHint="healthcare team hospital hallway"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <div
            className="h-80 w-full rounded-3xl bg-cover bg-center lg:h-[420px]"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1634025130850-1d24389e25c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvc3BpdGFsJTIwZGVsaXZlcnklMjB0cmFuc3BvcnRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D`,
            }}
          />

          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-600">
              Who we are
            </span>
            <h2 className="mt-3 text-3xl font-bold text-primary-950">
              Every delivery represents someone&apos;s health
            </h2>
            <p className="mt-5 text-base leading-relaxed text-primary-950/80">
              We work with healthcare providers that require timely, accurate,
              and secure delivery of medical materials. Our logistics processes
              are designed to minimize delays, reduce risk, and maintain the
              integrity of every shipment.
            </p>
            <p className="mt-4 text-base leading-relaxed text-primary-950/80">
              Behind every package is a patient, a physician, a laboratory
              result, or life-saving medical equipment. Our team operates with
              professionalism, urgency, and attention to detail, so healthcare
              organizations can focus on patient care while we handle their
              transportation needs.
            </p>
          </div>
        </div>
      </section>

      <StatsStrip />

      <section className="bg-primary-50 py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 lg:grid-cols-2 lg:px-10">
          <div className="rounded-3xl bg-primary-950 p-10 text-white">
            <Target className="h-8 w-8 text-accent-400" strokeWidth={1.5} />
            <span className="mt-6 block text-xs font-semibold uppercase tracking-widest text-accent-400">
              Our mission
            </span>
            <p className="mt-3 text-xl font-semibold leading-snug text-white">
              To provide safe, dependable, efficient, and professional
              healthcare logistics solutions while building lasting partnerships
              through trust, exceptional customer service, and operational
              excellence.
            </p>
          </div>
          <div className="rounded-3xl border border-primary-950/10 bg-white p-10">
            <Eye className="h-8 w-8 text-accent-600" strokeWidth={1.5} />
            <span className="mt-6 block text-xs font-semibold uppercase tracking-widest text-primary-950/50">
              Our vision
            </span>
            <p className="mt-3 text-xl font-semibold leading-snug text-primary-950">
              To become one of Texas&apos; most trusted healthcare logistics
              providers by consistently delivering transportation solutions that
              strengthen healthcare operations and improve patient care.
            </p>
          </div>
        </div>
      </section>

      <PageCTA
        title="Ready to work with a logistics partner you can trust?"
        buttonLabel="Request a quote"
        buttonHref="/quote"
        backgroundImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU4fHx8ZW58MHx8fHx8"
      />
    </>
  );
}
