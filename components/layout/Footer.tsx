import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/hipaa-compliance", label: "HIPAA compliance" },
  { href: "/service-areas", label: "Service areas" },
  { href: "/contact", label: "Contact" },
  { href: "/quote", label: "Request quote" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy policy" },
  { href: "/terms-of-service", label: "Terms of service" },
];

export default function Footer() {
  return (
    <footer className="border-t border-accent-600/40 bg-primary-950 text-primary-100">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10">
        <p className="font-serif text-lg text-white">
          Trust today. Legacy tomorrow.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-widest2 text-accent-400">
              Idoko Legacy LLC
            </h3>
            <p className="mt-3 text-sm text-primary-100/70">
              Healthcare logistics &amp; medical courier services
            </p>
            <p className="mt-4 font-mono text-xs leading-relaxed text-primary-100/60">
              14781 Memorial Drive #569
              <br />
              Houston, Texas 77079
              <br />
              United States
            </p>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-widest2 text-accent-400">
              Quick links
            </h3>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-100/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-widest2 text-accent-400">
              Contact
            </h3>
            <p className="mt-3 font-mono text-xs leading-relaxed text-primary-100/60">
              Phone: (832) 977-9202
              <br />
              Email: Info@idokolegacy.com
            </p>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-100/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-primary-100/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Idoko Legacy LLC. All rights reserved.</p>
          <p className="font-mono">Houston, TX &middot; 29.7604&deg; N, 95.3698&deg; W</p>
        </div>
      </div>
    </footer>
  );
}