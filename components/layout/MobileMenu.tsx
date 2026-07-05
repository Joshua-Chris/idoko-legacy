interface MobileMenuProps {
  links: NavLink[];
  open: boolean;
  onClose: () => void;
  pathname: string;
}

export default function MobileMenu({ links, open, onClose, pathname }: MobileMenuProps) {
  if (!open) return null;

  return (
    <nav className="flex flex-col border-t border-accent-600/30 bg-primary-950 px-6 py-4 lg:hidden">
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`border-b border-white/5 py-3 text-sm ${
              active ? "text-white" : "text-primary-100/80"
            }`}
            onClick={onClose}
          >
            {link.label}
          </Link>
        );
      })}
      <Link
        href="/quote"
        className="mt-4 border border-accent-500 px-5 py-3 text-center text-sm text-accent-400"
        onClick={onClose}
      >
        Request a quote
      </Link>
    </nav>
  );
}