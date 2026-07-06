'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  Shield,
  Clock,
  Award,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';
import Button from '@/components/ui/Button';

type FeaturesPanel = {
  type: 'features';
  label: string;
  intro: string;
  features: { icon: LucideIcon; title: string; description: string }[];
};

type StatPanel = {
  type: 'stat';
  label: string;
  headline: string;
  headlineDetail: string;
  stats: { icon: LucideIcon; value: string; label: string }[];
};

type ChecklistPanel = {
  type: 'checklist';
  label: string;
  items: string[];
};

type PanelData = FeaturesPanel | StatPanel | ChecklistPanel;

interface Slide {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  panel: PanelData;
}

const slides: Slide[] = [
  {
    image: '/assets/images/image7.jpeg',
    eyebrow: 'Houston, Texas · Healthcare logistics',
    title: 'Reliable healthcare logistics you can trust.',
    description:
      'Secure, professional, time-critical medical courier services for hospitals, laboratories, pharmacies, clinics, and healthcare organizations across Houston and surrounding communities.',
    panel: {
      type: 'features',
      label: 'Operating with integrity',
      intro:
        'Every shipment carries more than supplies — it carries trust and the promise of patient care.',
      features: [
        {
          icon: Shield,
          title: 'HIPAA-Conscious',
          description: 'Strict confidentiality and secure handling.',
        },
        {
          icon: Clock,
          title: 'Time-Critical',
          description: 'Same-day, STAT & scheduled reliability.',
        },
        {
          icon: Award,
          title: 'Professional Excellence',
          description: 'Chain-of-custody, trained team, uncompromising care.',
        },
      ],
    },
  },
  {
    image: '/assets/images/bgimage.jpeg',
    eyebrow: 'STAT deliveries',
    title: 'When every minute matters, we move first.',
    description:
      'From urgent lab specimens to critical equipment transport, our dispatch team is built for speed without cutting corners on care.',
    panel: {
      type: 'stat',
      label: 'Time-critical performance',
      headline: 'STAT & same-day delivery',
      headlineDetail:
        'Available when timing is critical for your patients and your practice.',
      stats: [
        { icon: Clock, value: '24 hrs', label: 'Delivery ops, Mon–Sat' },
        { icon: Shield, value: '100%', label: 'Chain-of-custody tracked' },
      ],
    },
  },
  {
    image: '/assets/images/image8.jpeg',
    eyebrow: 'HIPAA-conscious operations',
    title: "Confidentiality isn't an afterthought. It's the standard.",
    description:
      'Every handoff, every route, every delivery is handled with the chain-of-custody discipline healthcare providers depend on.',
    panel: {
      type: 'checklist',
      label: 'Built for compliance',
      items: [
        'Secure pickup procedures',
        'Chain-of-custody support',
        'Limiting access to authorized personnel',
        'Confidential handling, every delivery',
      ],
    },
  },
];

// 🔧 TWEAK SLIDE SPEED HERE — milliseconds per slide before auto-advancing.
const SLIDE_DURATION = 16000;
const SWIPE_THRESHOLD = 50;

export default function Hero() {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [autoplay]);

  function goToSlide(i: number) {
    setActive(i);
    setAutoplay(false);
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      // Swiping just changes the slide — autoplay keeps running on mobile
      // so the timer never gets stuck off after a swipe.
      setActive((i) =>
        delta < 0
          ? (i + 1) % slides.length
          : (i - 1 + slides.length) % slides.length,
      );
    }
    touchStartX.current = null;
  }

  const slide = slides[active];

  return (
    <section
      className="relative -mt-[88px] flex min-h-[calc(100svh+88px)] flex-col overflow-hidden border-b border-accent-600/30 bg-primary-950"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={() => setAutoplay(false)}
    >
      {slides.map((s, i) => (
        <div
          key={s.image}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={s.image}
            alt={`${s.eyebrow} background`}
            fill
            priority
            sizes="100vw"
            quality={80}
            className="object-cover"
          />
        </div>
      ))}

      {/* Dark blue overlay off primary-950 — gradient, lighter at top, deeper at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/70 via-primary-dark/90 to-primary-dark/95" />

      {/*
        Single container, no nested wrapper — mx-auto max-w-6xl px-6 py-20 lg:px-10
        is the exact same pattern used by Navbar/Footer. Keep it in one div so the
        left/right rhythm can't drift out of sync again.
      */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-center px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-16">
          <div key={`text-${active}`} className="animate-fade-in-up">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
              {slide.eyebrow}
            </p>
            <h1 className="mt-5 max-w-xl text-4xl font-bold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {slide.title}
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-primary-100/90">
              {slide.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button href="/quote" className="w-full text-center sm:w-auto">
                Request a quote
              </Button>
              <Button
                href="/contact"
                variant="outline-light"
                className="w-full text-center sm:w-auto"
              >
                Schedule a pickup
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3 lg:hidden">
              {slides.map((_, i) => (
                <IndicatorDot
                  key={i}
                  index={i}
                  active={active}
                  autoplay={autoplay}
                  onSelect={goToSlide}
                />
              ))}
            </div>
          </div>

          <div
            key={`panel-${active}`}
            className="hidden animate-fade-in-up lg:block"
          >
            <HeroPanel panel={slide.panel} />
          </div>
        </div>
      </div>

      <div className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-end gap-4 lg:flex">
        {slides.map((_, i) => (
          <IndicatorDot
            key={i}
            index={i}
            active={active}
            autoplay={autoplay}
            onSelect={goToSlide}
            vertical
          />
        ))}
      </div>
    </section>
  );
}

function IndicatorDot({
  index,
  active,
  autoplay,
  onSelect,
  vertical = false,
}: {
  index: number;
  active: number;
  autoplay: boolean;
  onSelect: (i: number) => void;
  vertical?: boolean;
}) {
  const isActive = index === active;
  const isPast = index < active;

  return (
    <button
      type="button"
      aria-label={`Show slide ${index + 1}`}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(index);
      }}
      className={`group relative flex cursor-pointer items-center ${
        vertical ? '-mx-3 px-3 py-1.5' : '-my-3 py-3'
      }`}
    >
      <span
        className={`relative overflow-hidden rounded-full bg-white/25 transition-transform duration-200 ${
          vertical
            ? 'h-8 w-1.5 group-hover:scale-x-[1.8]'
            : 'h-1.5 w-12 group-hover:scale-y-[1.8]'
        }`}
      >
        {isActive && autoplay && (
          <span
            key={active}
            className={`absolute bg-accent-500 ${vertical ? 'inset-x-0 top-0 rounded-full' : 'inset-y-0 left-0 rounded-full'}`}
            style={{
              animation: vertical
                ? `slideProgressVertical ${SLIDE_DURATION}ms linear forwards`
                : `slideProgress ${SLIDE_DURATION}ms linear forwards`,
            }}
          />
        )}
        {isActive && !autoplay && (
          <span className="absolute inset-0 rounded-full bg-accent-500" />
        )}
        {isPast && (
          <span className="absolute inset-0 rounded-full bg-accent-500" />
        )}
      </span>
    </button>
  );
}

function HeroPanel({ panel }: { panel: PanelData }) {
  return (
    <div className="ml-auto flex h-[400px] w-full max-w-md flex-col rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-md">
      <div className="text-xs font-semibold uppercase tracking-widest text-accent-300">
        {panel.label}
      </div>

      <div className="flex flex-1 flex-col justify-center">
        {panel.type === 'features' && (
          <div className="space-y-5">
            <p className="text-[16px] font-medium leading-snug text-white">
              {panel.intro}
            </p>
            <div className="space-y-5">
              {panel.features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <f.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-400" />
                  <div>
                    <p className="font-semibold text-white">{f.title}</p>
                    <p className="mt-1 text-sm leading-snug text-white/70">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {panel.type === 'stat' && (
          <div>
            <p className="text-2xl font-bold leading-snug text-white">
              {panel.headline}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {panel.headlineDetail}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-6 border-t border-white/15 pt-6">
              {panel.stats.map((s) => (
                <div key={s.label}>
                  <s.icon className="h-5 w-5 text-accent-400" />
                  <p className="mt-2 text-xl font-bold text-white">{s.value}</p>
                  <p className="mt-0.5 text-xs leading-snug text-white/70">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {panel.type === 'checklist' && (
          <div className="space-y-4">
            {panel.items.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-400" />
                <p className="text-[15px] leading-snug text-white/90">{item}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-white/15 pt-5">
        <p className="text-sm font-medium text-accent-300">Idoko Legacy LLC</p>
        <p className="text-xs text-white/60">Trust Today. Legacy Tomorrow.</p>
      </div>
    </div>
  );
}
