import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { icons } from '@/lib/icons';
import type { Service } from '@/types';

export default function ServiceFeatureCard({
  service,
}: {
  service: Service;
  index: number;
}) {
  const Icon = icons[service.icon];

  return (
    <section id={service.slug} className="scroll-mt-28">
      <div className="group overflow-hidden rounded-3xl border border-primary-950/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-950/10">
        <div className="grid md:grid-cols-[1fr_42%]">
          {/* Content */}

          <div className="flex flex-col justify-center p-8 lg:p-12">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-50 text-accent-600 ring-1 ring-accent-100 transition-all duration-300 group-hover:scale-105">
              <Icon className="h-7 w-7" strokeWidth={1.6} />
            </div>

            <h3 className="mt-6 text-2xl font-bold text-primary-950">
              {service.title}
            </h3>

            <p className="mt-4 max-w-xl text-base leading-8 text-primary-950/70">
              {service.description}
            </p>

            <Link
              href={`/quote?service=${service.slug}`}
              className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent-600 transition-all hover:gap-3"
            >
              Request this service
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Image */}

          <div className="relative min-h-[320px] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url('${service.imageUrl}')`,
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-l from-primary-950/15 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
