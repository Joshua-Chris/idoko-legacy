import { icons } from '@/lib/icons';
import type { Service } from '@/types';

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];

  return (
    <div className="group overflow-hidden rounded-2xl border border-primary-950/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-accent-500 hover:shadow-lg hover:shadow-primary-950/5">
      <div
        className="h-48 w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url('${service.imageUrl}')` }}
      />

      <div className="p-7">
        <Icon
          className="h-6 w-6 text-accent-600 transition-transform duration-300 group-hover:scale-110"
          strokeWidth={1.5}
        />
        <h3 className="mt-4 text-lg font-bold text-primary-950">
          {service.title}
        </h3>
        <p className="mt-2 text-base leading-relaxed text-primary-950/75">
          {service.description}
        </p>
      </div>
    </div>
  );
}
