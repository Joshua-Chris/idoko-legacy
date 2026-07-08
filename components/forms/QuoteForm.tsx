'use client';

import { useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';
type FieldErrors = Record<string, string[]>;

const fields: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}[] = [
  { label: 'Full name', name: 'fullName' },
  { label: 'Organization', name: 'organization' },
  { label: 'Email address', name: 'email', type: 'email' },
  { label: 'Phone number', name: 'phone', type: 'tel' },
  { label: 'Pickup address', name: 'pickupAddress' },
  { label: 'Delivery address', name: 'deliveryAddress' },
  { label: 'Shipment type', name: 'shipmentType' },
  { label: 'Preferred pickup date', name: 'preferredPickupDate', type: 'date' },
];

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [shakeField, setShakeField] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');
    setFieldErrors({});

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        if (body.issues) {
          setFieldErrors(body.issues);
          const firstBad = Object.keys(body.issues)[0];
          setShakeField(firstBad);
          setTimeout(() => setShakeField(null), 500);
        }
        throw new Error(body.error || 'Something went wrong.');
      }

      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  if (status === 'success') {
    return (
      <div className="animate-[riseIn_0.5s_ease-out] rounded-3xl border-2 border-accent-500/40 bg-accent-50 p-10 text-center shadow-[0_8px_30px_-8px_rgba(0,0,0,0.15)]">
        <svg
          className="mx-auto mb-4 h-14 w-14 text-accent-600"
          viewBox="0 0 52 52"
          fill="none"
        >
          <circle
            cx="26"
            cy="26"
            r="24"
            stroke="currentColor"
            strokeWidth="2.5"
            className="animate-[drawCircle_0.6s_ease-out_forwards]"
            style={{ strokeDasharray: 151, strokeDashoffset: 151 }}
          />
          <path
            d="M15 27l7 7 15-15"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="animate-[drawCheck_0.4s_ease-out_0.5s_forwards]"
            style={{ strokeDasharray: 30, strokeDashoffset: 30 }}
          />
        </svg>
        <p className="font-serif text-lg text-primary-950">
          Quote request received.
        </p>
        <p className="mt-2 text-sm text-primary-950/85">
          A logistics specialist will respond promptly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl border-2 border-primary-950/10 bg-white p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] sm:p-10"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="font-mono text-xs font-semibold uppercase tracking-widest2 text-primary-950/80"
            >
              {field.label}
            </label>
            <input
              id={field.name}
              type={field.type || 'text'}
              name={field.name}
              placeholder={field.placeholder}
              required
              onFocus={() => setFocusedField(field.name)}
              onBlur={() => setFocusedField(null)}
              className={`mt-2 w-full rounded-xl border-2 bg-white px-4 py-3 text-sm text-primary-950 outline-none transition-all duration-200 placeholder:text-primary-950/45 focus:border-accent-500 focus:ring-4 focus:ring-accent-500/15 ${
                fieldErrors[field.name]
                  ? 'border-red-400'
                  : 'border-primary-950/15'
              } ${shakeField === field.name ? 'animate-[shake_0.4s_ease-in-out]' : ''}`}
            />
            {fieldErrors[field.name] && (
              <p className="mt-1.5 text-xs font-medium text-red-600">
                {fieldErrors[field.name][0]}
              </p>
            )}
          </div>
        ))}
      </div>

      <div>
        <label
          htmlFor="additionalInfo"
          className="font-mono text-xs font-semibold uppercase tracking-widest2 text-primary-950/80"
        >
          Additional information
        </label>
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          rows={4}
          placeholder="Fragile items, time-sensitive delivery, special handling instructions..."
          onFocus={() => setFocusedField('additionalInfo')}
          onBlur={() => setFocusedField(null)}
          className="mt-2 w-full rounded-xl border-2 border-primary-950/15 bg-white px-4 py-3 text-sm text-primary-950 outline-none transition-all duration-200 placeholder:text-primary-950/45 focus:border-accent-500 focus:ring-4 focus:ring-accent-500/15"
        />
      </div>

      {status === 'error' && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="group relative w-full overflow-hidden rounded-full bg-accent-500 px-6 py-3.5 text-sm font-semibold text-primary-950 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.2)] transition-all duration-200 hover:bg-accent-400 hover:shadow-[0_6px_20px_-4px_rgba(0,0,0,0.3)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:active:scale-100 sm:w-auto"
      >
        <span className="flex items-center justify-center gap-2">
          {status === 'submitting' && (
            <svg
              className="h-4 w-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="3"
                strokeOpacity="0.25"
              />
              <path
                d="M21 12a9 9 0 0 0-9-9"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          )}
          {status === 'submitting' ? 'Submitting…' : 'Request quote'}
        </span>
      </button>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
        @keyframes riseIn {
          from { opacity: 0; transform: translateY(8px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes drawCircle {
          to { stroke-dashoffset: 0; }
        }
        @keyframes drawCheck {
          to { stroke-dashoffset: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; }
        }
      `}</style>
    </form>
  );
}
