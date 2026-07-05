"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";
type FieldErrors = Record<string, string[]>;

const fields: { label: string; name: string; type?: string }[] = [
  { label: "Full name", name: "fullName" },
  { label: "Organization", name: "organization" },
  { label: "Email address", name: "email", type: "email" },
  { label: "Phone number", name: "phone", type: "tel" },
  { label: "Pickup address", name: "pickupAddress" },
  { label: "Delivery address", name: "deliveryAddress" },
  { label: "Shipment type", name: "shipmentType" },
  { label: "Preferred pickup date", name: "preferredPickupDate", type: "date" },
];

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    setFieldErrors({});

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        if (body.issues) setFieldErrors(body.issues);
        throw new Error(body.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-accent-500 bg-accent-50 p-8 text-center">
        <p className="font-serif text-lg text-primary-950">Quote request received.</p>
        <p className="mt-2 text-sm text-primary-950/70">
          A logistics specialist will respond promptly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name}>
            <label className="font-mono text-xs uppercase tracking-widest2 text-primary-950/50">
              {field.label}
            </label>
            <input
              type={field.type || "text"}
              name={field.name}
              required
              className="mt-2 w-full border border-primary-950/20 bg-white px-4 py-3 text-sm text-primary-950 outline-none focus:border-accent-500"
            />
            {fieldErrors[field.name] && (
              <p className="mt-1 text-xs text-red-600">{fieldErrors[field.name][0]}</p>
            )}
          </div>
        ))}
      </div>

      <div>
        <label className="font-mono text-xs uppercase tracking-widest2 text-primary-950/50">
          Additional information
        </label>
        <textarea
          name="additionalInfo"
          rows={4}
          className="mt-2 w-full border border-primary-950/20 bg-white px-4 py-3 text-sm text-primary-950 outline-none focus:border-accent-500"
        />
      </div>

      {status === "error" && <p className="text-sm text-red-600">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-accent-500 px-6 py-3 text-sm font-medium text-primary-950 transition-colors hover:bg-accent-400 disabled:opacity-50"
      >
        {status === "submitting" ? "Submitting…" : "Request quote"}
      </button>
    </form>
  );
}