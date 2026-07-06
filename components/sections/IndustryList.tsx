import { icons } from '@/lib/icons';
import type { Industry } from '@/types';

export default function IndustryList({
  industries,
}: {
  industries: Industry[];
}) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {industries.map((industry) => {
        const Icon = icons[industry.icon];
        return (
          <div
            key={industry.name}
            className="group flex flex-col items-start gap-3 rounded-2xl border border-primary-950/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500 hover:shadow-md"
          >
            <Icon
              className="h-5 w-5 text-accent-600 transition-transform duration-300 group-hover:scale-110"
              strokeWidth={1.5}
            />
            <span className="text-base font-medium text-primary-950">
              {industry.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}
