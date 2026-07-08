'use client';

import { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: 'up' | 'scale' | 'left' | 'right';
}

const variants = {
  up: {
    hidden: 'translate-y-12 opacity-0 blur-sm scale-[0.96]',
    visible: 'translate-y-0 opacity-100 blur-none scale-100',
  },
  scale: {
    hidden: 'scale-90 opacity-0 blur-sm',
    visible: 'scale-100 opacity-100 blur-none',
  },
  left: {
    hidden: '-translate-x-12 opacity-0 blur-sm',
    visible: 'translate-x-0 opacity-100 blur-none',
  },
  right: {
    hidden: 'translate-x-12 opacity-0 blur-sm',
    visible: 'translate-x-0 opacity-100 blur-none',
  },
};

export default function Reveal({
  children,
  className = '',
  delay = 0,
  variant = 'up',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const state = variants[variant];

  return (
    <div
      ref={ref}
      className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:blur-none ${
        visible ? state.visible : state.hidden
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
