'use client';

import { useEffect, useState } from 'react';
import { icons } from '@/lib/icons';
import type { Service } from '@/types';

export default function ServicesSidebar({ services }: { services: Service[] }) {
  const [activeSlug, setActiveSlug] = useState(services[0]?.slug);

  useEffect(() => {
    const sections = services
      .map((s) => document.getElementById(s.slug))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSlug(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [services]);

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28">
        <div className="rounded-2xl border border-primary-950/10 bg-white p-4 shadow-sm">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-950/45">
            Services
          </p>

          <nav className="space-y-1">
            {services.map((service) => {
              const Icon = icons[service.icon];
              const active = activeSlug === service.slug;

              return (
                <a
                  key={service.slug}
                  href={`#${service.slug}`}
                  className={`group flex items-center gap-2 rounded-xl px-3 py-2 transition-all duration-200 ${
                    active
                      ? 'bg-accent-50 text-accent-700'
                      : 'text-primary-950/70 hover:bg-primary-50 hover:text-primary-950'
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 shrink-0 ${
                      active
                        ? 'text-accent-600'
                        : 'text-primary-950/40 group-hover:text-primary-950'
                    }`}
                    strokeWidth={1.8}
                  />

                  <span className="text-[13px] font-medium leading-tight">
                    {service.title}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}
