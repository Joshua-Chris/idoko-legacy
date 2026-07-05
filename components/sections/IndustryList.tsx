import { icons } from "@/lib/icons";
import type { Industry } from "@/types";

export default function IndustryList({ industries }: { industries: Industry[] }) {
  return (
    <div className="grid grid-cols-2 gap-px bg-primary-950/10 sm:grid-cols-3 lg:grid-cols-4">
      {industries.map((industry) => {
        const Icon = icons[industry.icon];
        return (
          <div
            key={industry.name}
            className="group flex flex-col items-start gap-3 bg-white p-6 transition-colors duration-300 hover:bg-primary-50"
          >
            <Icon className="h-5 w-5 text-accent-600 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
            <span className="text-[15px] text-primary-950">{industry.name}</span>
          </div>
        );
      })}
    </div>
  );
}