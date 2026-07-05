import ManifestTicket from "./ManifestTicket";
import RouteGrid from "@/components/ui/RouteGrid";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-accent-600/30 bg-gradient-to-b from-primary-950 via-primary-900 to-primary-950 text-white">
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 animate-blob rounded-full bg-accent-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 animate-blob rounded-full bg-primary-500/20 blur-3xl [animation-delay:-7s]"
        aria-hidden="true"
      />
      <RouteGrid id="hero-grid" className="text-accent-500/[0.08]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-20 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:px-10 lg:py-28">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest2 text-accent-400">
            Houston, Texas &middot; Healthcare logistics
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-4xl leading-tight text-white sm:text-5xl">
            Reliable healthcare logistics you can trust.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-primary-100/90">
            Secure, professional, time-critical medical courier services for
            hospitals, laboratories, pharmacies, clinics, and healthcare
            organizations across Houston and surrounding communities.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/quote">Request a quote</Button>
            <Button href="/contact" variant="outline-light">
              Schedule a pickup
            </Button>
          </div>
        </div>

        <div>
          <ManifestTicket />
          <p className="mt-4 text-center font-mono text-[11px] text-primary-100/60">
            Every shipment is tracked from pickup to delivery
          </p>
        </div>
      </div>
    </section>
  );
}