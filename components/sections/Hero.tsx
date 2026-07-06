import Button from '@/components/ui/Button';
import HeroStat from './HeroStat';

export default function Hero() {
  return (
    <section className="relative -mt-[88px] min-h-[calc(100svh+88px)] flex items-center overflow-hidden border-b border-accent-600/30">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1639278001900-e772db0c6b4a?auto=format&fit=max')`,
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Clean black overlay */}
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
              Houston, Texas &middot; Healthcare logistics
            </p>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white tracking-tighter font-inter">
              Reliable healthcare logistics you can trust.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-100/90">
              Secure, professional, time-critical medical courier services for
              hospitals, laboratories, pharmacies, clinics, and healthcare
              organizations across Houston and surrounding communities.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/quote">Request a quote</Button>
              <Button href="/contact" variant="outline-light">
                Schedule a pickup
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <HeroStat />
          </div>
        </div>
      </div>
    </section>
  );
}
