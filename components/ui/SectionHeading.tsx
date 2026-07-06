interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  variant?: 'light' | 'dark';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  variant = 'light',
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  const isDark = variant === 'dark';

  return (
    <div className={isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="text-sm font-semibold uppercase tracking-widest text-accent-500">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl sm:text-4xl ${isDark ? 'text-white' : 'text-primary-950'}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${isDark ? 'text-primary-100/90' : 'text-primary-950/80'}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
