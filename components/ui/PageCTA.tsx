import Image from 'next/image';
import Button from './Button';

interface PageCTAProps {
  title: string;
  description?: string;
  buttonLabel: string;
  buttonHref: string;
  backgroundImage?: string;
}

export default function PageCTA({
  title,
  description,
  buttonLabel,
  buttonHref,
  backgroundImage = '/assets/images/image5.jpeg',
}: PageCTAProps) {
  return (
    <section className="relative flex min-h-[280px] items-center justify-center overflow-hidden py-16 text-center text-white">
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={backgroundImage}
          alt="Idoko Legacy Background image"
          fill
          priority={false}
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-bgDark/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-bgDark/60 via-bgDark/50 to-bgDark/70" />
      </div>

      <div className="relative mx-auto max-w-2xl px-6">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
        {description && (
          <p className="mt-3 text-base text-white/80">{description}</p>
        )}
        <Button href={buttonHref} className="mt-8 text-white">
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}
