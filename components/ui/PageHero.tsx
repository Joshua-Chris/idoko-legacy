import SectionHeading from './SectionHeading';

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
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: photoSrc
            ? `url('${photoSrc}')`
            : 'linear-gradient(to bottom, #1e3a8a, #172554)',
        }}
      />

      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/70 via-primary-950/80 to-primary-950" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-14 pt-32 lg:px-10 lg:pb-16">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          variant="dark"
        />
      </div>
    </section>
  );
}
