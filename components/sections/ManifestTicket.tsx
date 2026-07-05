"use client";

import { useEffect, useState } from "react";

type CheckpointStatus = "complete" | "current" | "pending";

const steps = [
  { label: "Pickup confirmed" },
  { label: "In transit" },
  { label: "Delivered" },
];

function formatElapsed(seconds: number) {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

interface ManifestTicketProps {
  trackingCode?: string;
}

export default function ManifestTicket({
  trackingCode = "IDK-2026-0704-HOU",
}: ManifestTicketProps) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [elapsed, setElapsed] = useState(347);

  useEffect(() => {
    const tick = setInterval(() => setElapsed((s) => s + 1), 1000);
    return () => clearInterval(tick);
  }, []);

  useEffect(() => {
    const cycle = setInterval(() => {
      setActiveIndex((i) => (i + 1) % steps.length);
    }, 4500);
    return () => clearInterval(cycle);
  }, []);

  const checkpoints: { label: string; status: CheckpointStatus }[] = steps.map(
    (step, i) => ({
      label: step.label,
      status: i < activeIndex ? "complete" : i === activeIndex ? "current" : "pending",
    })
  );

  return (
    <div className="relative mx-auto w-full max-w-sm animate-float bg-white text-primary-950">
      <span className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-primary-950" aria-hidden="true" />
      <span className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-primary-950" aria-hidden="true" />

      <div className="border border-accent-500/60 px-6 py-7">
        <div className="flex items-center justify-between border-b border-dashed border-primary-950/20 pb-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest2 text-primary-950/60">
              Manifest
            </p>
            <p className="mt-1 font-mono text-sm text-primary-950">{trackingCode}</p>
          </div>
          <span className="flex items-center gap-1.5 border border-accent-600 px-2 py-1 font-mono text-[10px] uppercase tracking-widest2 text-accent-700">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-600" />
            </span>
            Live
          </span>
        </div>

        <ol className="mt-6 space-y-5">
          {checkpoints.map((cp) => (
            <li key={cp.label} className="flex items-start gap-3">
              <span className="relative mt-1 flex h-2.5 w-2.5 flex-none">
                {cp.status === "current" && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-60" />
                )}
                <span
                  className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                    cp.status === "pending"
                      ? "border border-primary-950/30 bg-white"
                      : "bg-accent-500"
                  }`}
                />
              </span>
              <div className="flex flex-1 items-baseline justify-between">
                <span className="text-sm text-primary-950">{cp.label}</span>
                <span className="font-mono text-xs text-primary-950/60">
                  {cp.status === "pending" ? "—" : cp.status === "current" ? "in progress" : "done"}
                </span>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex items-center justify-between border-t border-dashed border-primary-950/20 pt-4">
          <span className="font-mono text-[10px] uppercase tracking-widest2 text-primary-950/50">
            Time in transit
          </span>
          <span className="font-mono text-sm text-primary-950">{formatElapsed(elapsed)}</span>
        </div>
      </div>
    </div>
  );
}