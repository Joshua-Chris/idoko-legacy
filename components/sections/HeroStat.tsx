'use client';

import { Shield, Clock, Award } from 'lucide-react';

export default function HeroStat() {
  return (
    <div className="ml-auto w-full max-w-md rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-md flex flex-col lg:min-h-[380px]">
      <div className="text-xs font-semibold uppercase tracking-widest text-accent-300">
        OPERATING WITH INTEGRITY
      </div>

      <div className="mt-8 space-y-7 flex-1">
        <p className="text-[17px] leading-tight font-medium text-white">
          Every shipment carries more than supplies — it carries trust and the
          promise of patient care.
        </p>

        <div className="space-y-7">
          <div className="flex gap-4">
            <Shield className="h-6 w-6 text-accent-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-white">HIPAA-Conscious</p>
              <p className="text-sm text-white/70 mt-1">
                Strict confidentiality and secure handling.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Clock className="h-6 w-6 text-accent-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-white">Time-Critical</p>
              <p className="text-sm text-white/70 mt-1">
                Same-day, STAT &amp; scheduled reliability.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Award className="h-6 w-6 text-accent-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-white">
                Professional Excellence
              </p>
              <p className="text-sm text-white/70 mt-1 mb-2">
                Chain-of-custody, trained team, and uncompromising care.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-10 border-t border-white/15">
        <p className="text-sm font-medium text-accent-300">
          Idoko Legacy Medical Courier
        </p>
        <p className="text-xs text-white/60">Trust Today. Legacy Tomorrow.</p>
      </div>
    </div>
  );
}
