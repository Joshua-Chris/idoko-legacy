import Image from 'next/image';
import Link from 'next/link';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/hipaa-compliance', label: 'HIPAA compliance' },
  { href: '/service-areas', label: 'Service areas' },
];

const moreLinks = [
  { href: '/contact', label: 'Contact' },
  { href: '/quote', label: 'Request quote' },
  { href: '/privacy-policy', label: 'Privacy policy' },
  { href: '/terms-of-service', label: 'Terms of service' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-100">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-32 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-8">
          <div className="lg:pr-8">
            <Image
              src="/assets/icons/light-logo-t.png"
              alt="Idoko Legacy LLC"
              width={200}
              height={80}
              className="h-14 w-auto object-contain sm:h-16"
            />
            <p className="mt-5 text-lg font-bold text-white">
              Trust today. Legacy tomorrow.
            </p>
            <p className="mt-3 text-sm text-primary-100/80">
              Healthcare logistics &amp; medical courier services
            </p>
            <p className="mt-5 text-sm leading-relaxed text-primary-100/70">
              14781 Memorial Drive #569
              <br />
              Houston, Texas 77079
              <br />
              United States
            </p>
          </div>

          <div className="lg:border-l lg:border-white/2 lg:pl-8">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-accent-400">
              Quick links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-100/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:border-l lg:border-white/2 lg:pl-8">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-accent-400">
              Contact
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-primary-100/70">
              Phone:{' '}
              <a href="tel:+18329779202" className="hover:text-white">
                (832) 977-9202
              </a>
              <br />
              Email:{' '}
              <a
                href="mailto:info@idokolegacy.com"
                className="hover:text-white"
              >
                Info@idokolegacy.com
              </a>
            </p>
            <ul className="mt-5 space-y-3">
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-100/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-primary-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Idoko Legacy LLC. All rights reserved.</p>
          <p>Houston, TX &middot; 29.7604&deg; N, 95.3698&deg; W</p>
        </div>
      </div>
    </footer>
  );
}
