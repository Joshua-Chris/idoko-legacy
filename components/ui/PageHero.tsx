import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  photoSrc?: string;
  photoHint: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  photoSrc,
  photoHint,
}: PageHeroProps) {
  return (
    <section className="relative -mt-[88px] flex min-h-[46vh] items-end overflow-hidden lg:min-h-[52vh]">
      {/* Background Image — slow continuous Ken Burns zoom, never fully still */}
      <div
        className="absolute inset-0 animate-hero-zoom bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: photoSrc
            ? `url('${photoSrc}')`
            : 'linear-gradient(to bottom, #1e3a8a, #172554)',
        }}
      />

      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bgDark/70 via-bgDark/80 to-bgDark" />

      {/* Ambient accent glow, breathing slowly in the corner */}
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 animate-blob rounded-full bg-accent-500/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-14 pt-32 lg:px-10 lg:pb-16">
        <Reveal variant="up">
          <span
            className="mb-3 block h-[2px] w-10 animate-hero-underline rounded-full bg-accent-500/80"
            aria-hidden="true"
          />
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            variant="dark"
          />
        </Reveal>
      </div>
    </section>
  );
}
