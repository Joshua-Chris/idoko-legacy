import { icons } from "@/lib/icons";
import type { Service } from "@/types";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon];

  return (
    <div className="group border border-primary-950/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-500 hover:shadow-lg hover:shadow-primary-950/5">
      <Icon className="h-6 w-6 text-accent-600 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
      <h3 className="mt-5 font-serif text-lg text-primary-950">{service.title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-primary-950/70">{service.description}</p>
    </div>
  );
}