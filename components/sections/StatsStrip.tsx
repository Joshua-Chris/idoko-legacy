const stats = [
  { value: '24/7', label: 'STAT dispatch availability' },
  { value: '10+', label: 'Specialized logistics services' },
  { value: '9', label: 'Texas communities served' },
  { value: '100%', label: 'Chain-of-custody tracked' },
];

export default function StatsStrip() {
  return (
    <section className="border-b border-primary-950/10 bg-accent-50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4 lg:px-10">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <p className="text-3xl font-bold text-primary-950 sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm font-medium leading-snug text-primary-950/80">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
