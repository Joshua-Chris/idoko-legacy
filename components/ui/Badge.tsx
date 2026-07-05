interface BadgeProps {
  children: React.ReactNode;
  variant?: "filled" | "outline";
}

export default function Badge({ children, variant = "outline" }: BadgeProps) {
  const styles =
    variant === "filled"
      ? "bg-accent-500/10 text-accent-700"
      : "border border-accent-600 text-accent-700";

  return (
    <span className={`inline-block px-2 py-1 font-mono text-[10px] uppercase tracking-widest2 ${styles}`}>
      {children}
    </span>
  );
}