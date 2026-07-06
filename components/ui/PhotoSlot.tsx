interface PhotoSlotProps {
  src?: string;
  alt: string;
  hint: string;
  className?: string;
  overlay?: 'dark' | 'none';
}

export default function PhotoSlot({
  src,
  alt,
  hint,
  className = '',
  overlay = 'none',
}: PhotoSlotProps) {
  if (!src) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-800 to-primary-950 ${className}`}
      >
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              'radial-gradient(circle at 30% 30%, rgba(216,154,10,0.35), transparent 60%)',
          }}
        />
        <p className="relative px-6 text-center text-xs font-semibold uppercase tracking-widest text-white/50">
          Photo: {hint}
        </p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-full w-full object-cover" />
      {overlay === 'dark' && (
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/50 to-primary-950/10" />
      )}
    </div>
  );
}
