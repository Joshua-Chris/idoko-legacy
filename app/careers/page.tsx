import type { Metadata } from 'next';
import { Heart, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import ApplicationForm from '@/components/forms/ApplicationForm';

export const metadata: Metadata = {
  title: 'Careers | Idoko Legacy',
  description:
    'Join Idoko Legacy and help deliver time-critical healthcare logistics across Houston, Texas.',
};

const VALUES = [
  {
    icon: Heart,
    title: 'Purpose-driven work',
    description:
      'Every delivery supports real patient care — your work matters beyond the road.',
  },
  {
    icon: ShieldCheck,
    title: 'Trained & supported',
    description:
      'HIPAA and handling training provided, with a team that has your back on every route.',
  },
  {
    icon: TrendingUp,
    title: 'Room to grow',
    description:
      'From driver to dispatcher to fleet lead — we promote from within as we grow.',
  },
  {
    icon: Users,
    title: 'A tight-knit team',
    description:
      'Small enough to know your name, established enough to offer real stability.',
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Work with us"
        photoHint="delivery driver healthcare logistics"
        photoSrc="assets/images/careers.jpg"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
              Why Idoko Legacy
            </p>
            <h2 className="mt-3 font-serif text-3xl text-primary-950 sm:text-4xl">
              Deliveries that matter, work that fits your life
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-950/70">
              We move specimens, medications, and supplies that hospitals and
              patients depend on. It&apos;s demanding work — and we take care of
              the people who do it.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-primary-950/10 bg-primary-50 p-6"
              >
                <Icon className="h-6 w-6 text-accent-600" strokeWidth={1.5} />
                <p className="mt-4 font-serif text-lg text-primary-950">
                  {title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-primary-950/70">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="bg-primary-50 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-600">
              Apply
            </p>
            <h2 className="mt-3 font-serif text-3xl text-primary-950 sm:text-4xl">
              Start your application
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-950/70">
              Let us know the role you&apos;re interested in, along with your
              relevant experience and availability. Our hiring team reviews
              every application and will follow up directly if there&apos;s a
              potential match.
            </p>
          </div>
          <div className="mt-10">
            <ApplicationForm />
          </div>
        </div>
      </section>
    </>
  );
}
