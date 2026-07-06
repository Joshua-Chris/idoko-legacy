import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'solid' | 'outline-dark' | 'outline-light';
  className?: string;
}

const variants = {
  solid: 'bg-accent-500 text-primary-950 hover:bg-accent-400',
  'outline-dark':
    'border border-primary-950/30 text-primary-950 hover:border-primary-950 hover:bg-primary-950/5',
  'outline-light':
    'border border-white/40 text-white hover:border-white hover:bg-white/10',
};

export default function Button({
  href,
  children,
  variant = 'solid',
  className = '',
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-block rounded-full px-7 py-3.5 text-sm font-semibold transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
