import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline-dark" | "outline-light";
  className?: string;
}

const variants = {
  solid: "bg-accent-500 text-primary-950 hover:bg-accent-400",
  "outline-dark": "border border-primary-950/30 text-primary-950 hover:border-primary-950",
  "outline-light": "border border-white/30 text-white hover:border-white",
};

export default function Button({ href, children, variant = "solid", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-block px-6 py-3 text-sm font-medium transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}