"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";
type FieldErrors = Record<string, string[]>;

export default function ContactForm() {
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
      const res = await fetch("/api/contact", {
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
        <p className="font-serif text-lg text-primary-950">Message sent.</p>
        <p className="mt-2 text-sm text-primary-950/70">
          A member of our team will respond shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Field label="Full name" name="name" required error={fieldErrors.name} />
      <Field label="Organization" name="organization" error={fieldErrors.organization} />
      <Field label="Email address" name="email" type="email" required error={fieldErrors.email} />
      <Field label="Phone number" name="phone" type="tel" error={fieldErrors.phone} />
      <div>
        <label className="font-mono text-xs uppercase tracking-widest2 text-primary-950/50">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-2 w-full border border-primary-950/20 bg-white px-4 py-3 text-sm text-primary-950 outline-none focus:border-accent-500"
        />
        {fieldErrors.message && (
          <p className="mt-1 text-xs text-red-600">{fieldErrors.message[0]}</p>
        )}
      </div>

      {status === "error" && <p className="text-sm text-red-600">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-accent-500 px-6 py-3 text-sm font-medium text-primary-950 transition-colors hover:bg-accent-400 disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string[];
}) {
  return (
    <div>
      <label className="font-mono text-xs uppercase tracking-widest2 text-primary-950/50">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full border border-primary-950/20 bg-white px-4 py-3 text-sm text-primary-950 outline-none focus:border-accent-500"
      />
      {error && <p className="mt-1 text-xs text-red-600">{error[0]}</p>}
    </div>
  );
}