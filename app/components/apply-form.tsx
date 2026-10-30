"use client";

import { useEffect, useId, useRef, useState } from "react";
import { CatapultLink } from "./catapult-link";

type FieldName = "name" | "organization" | "communities" | "email" | "phone";

const fields: FieldName[] = ["name", "organization", "communities", "email", "phone"];

const labels: Record<FieldName, string> = {
  name: "Your name",
  organization: "Organization",
  communities: "Number of communities",
  email: "Email",
  phone: "Phone",
};

const messages: Record<FieldName, string> = {
  name: "Please enter your name.",
  organization: "Please enter your organization's name.",
  communities: "Please choose how many communities you run.",
  email: "Please enter your email, like name@example.com.",
  phone: "Please enter a phone number with at least 10 digits.",
};

const autoComplete: Partial<Record<FieldName, string>> = {
  name: "name",
  organization: "organization",
  email: "email",
  phone: "tel",
};

function validate(name: FieldName, value: string) {
  const v = value.trim();
  if (name === "email") return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : messages.email;
  if (name === "phone") return v.replace(/\D/g, "").length >= 10 ? "" : messages.phone;
  return v ? "" : messages[name];
}

export function ApplyForm() {
  const [values, setValues] = useState<Partial<Record<FieldName, string>>>({});
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [consent, setConsent] = useState(false);
  const [sent, setSent] = useState(false);
  const uid = useId();
  const summaryRef = useRef<HTMLDivElement>(null);
  const thanksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sent) thanksRef.current?.focus();
  }, [sent]);

  function update(name: FieldName, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  }

  function submit(event: React.FormEvent) {
    event.preventDefault();
    const next: Partial<Record<FieldName, string>> = {};
    for (const name of fields) {
      const error = validate(name, values[name] ?? "");
      if (error) next[name] = error;
    }
    setErrors(next);
    if (Object.keys(next).length > 0) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setSent(true);
  }

  if (sent) {
    return (
      <div ref={thanksRef} tabIndex={-1} className="p-6 sm:p-8">
        <span className="tag tag-live signal-on">Received</span>
        <h3 className="display-3 mt-5">Thank you{values.name ? `, ${values.name.trim().split(" ")[0]}` : ""}.</h3>
        <p className="lede mt-3">Adam will reach out within a few days to set a time.</p>
      </div>
    );
  }

  const errorList = fields.filter((name) => errors[name]);

  return (
    <form onSubmit={submit} noValidate className="p-5 sm:p-8">
      <h2 className="font-display text-[1.8rem] font-bold leading-tight">Book a meeting</h2>
      <p className="mt-2">18 minutes. We&apos;ll show you the site and see if the offer fits. All fields are required, except the checkbox.</p>

      {errorList.length > 0 && (
        <div ref={summaryRef} tabIndex={-1} role="alert" className="mt-5 rounded border-2 border-error p-4 text-error">
          <p className="font-bold">{errorList.length === 1 ? "One thing needs a look:" : `${errorList.length} things need a look:`}</p>
          <ul className="mt-1 list-disc pl-5">
            {errorList.map((name) => (
              <li key={name}>
                <a href={`#${uid}-${name}`} className="underline">
                  {errors[name]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {fields.map((name) => {
          const id = `${uid}-${name}`;
          const error = errors[name];
          const shared = {
            id,
            name,
            required: true,
            value: values[name] ?? "",
            "aria-invalid": error ? true : undefined,
            "aria-describedby": error ? `${id}-error` : undefined,
            className: "field",
          };
          return (
            <div key={name}>
              <label htmlFor={id} className="field-label">
                {labels[name]}
              </label>
              {name === "communities" ? (
                <select {...shared} onChange={(e) => update(name, e.target.value)}>
                  <option value="">Choose one</option>
                  <option>1</option>
                  <option>2 to 5</option>
                  <option>6 to 10</option>
                  <option>11 to 20</option>
                  <option>More than 20</option>
                </select>
              ) : (
                <input {...shared} type={name === "email" ? "email" : name === "phone" ? "tel" : "text"} autoComplete={autoComplete[name]} onChange={(e) => update(name, e.target.value)} />
              )}
              {error && (
                <p id={`${id}-error`} className="mt-1 font-bold text-error">
                  {error}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <label className="mt-6 flex cursor-pointer items-start gap-3">
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 size-6 shrink-0 cursor-pointer accent-[var(--signal-ink)]" />
        <span>It&apos;s okay for Kinward, from <CatapultLink />, to contact me about this by phone or text. Optional. Message and data rates may apply, and you can opt out at any time.</span>
      </label>

      <button type="submit" className="btn btn-primary mt-6 w-full sm:w-auto">
        Book my meeting
      </button>
    </form>
  );
}
