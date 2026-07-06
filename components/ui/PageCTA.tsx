import Button from './Button';

interface PageCTAProps {
  title: string;
  description?: string;
  buttonLabel: string;
  buttonHref: string;
}

export default function PageCTA({
  title,
  description,
  buttonLabel,
  buttonHref,
}: PageCTAProps) {
  return (
    <section className="flex min-h-[280px] items-center justify-center border-t border-primary-950/10 bg-primary-50 py-16 text-center">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="text-2xl font-bold text-primary-950 sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-base text-primary-950/80">{description}</p>
        )}
        <Button href={buttonHref} className="mt-8">
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}
