import { useState } from "react";
import ContactSection from "../components/ContactSection";
import { defaultContactForm } from "../content";
import { submitContact } from "../services/api";

export default function Contact() {
  const [form, setForm] = useState(defaultContactForm);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      await submitContact(form);
      setStatus({
        type: "success",
        message: "Your enquiry has been sent successfully.",
      });
      setForm(defaultContactForm);
    } catch {
      setStatus({
        type: "error",
        message: "Unable to send message right now. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
            Contact
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Send us a message
          </h1>
        </div>

        {status.message ? (
          <div
            className={`mt-6 rounded-2xl border px-4 py-3 text-sm ${
              status.type === "success"
                ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                : "border-rose-400/30 bg-rose-400/10 text-rose-200"
            }`}
          >
            {status.message}
          </div>
        ) : null}

        <ContactSection
          form={form}
          onChange={handleChange}
          onSubmit={handleSubmit}
          submitting={submitting}
        />
      </div>
    </section>
  );
}
