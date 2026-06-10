import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { contactDetails, defaultContactForm } from "../content";

export default function ContactSection({
  form,
  onChange,
  onSubmit,
  submitting,
}) {
  const activeForm = form || defaultContactForm;

  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
              Get in touch
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Talk to DotTech Academy
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Have a question about the Generative AI program or future course
              launches? Send a message and our team will reach out.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <FiPhone className="mt-1 text-sky-300" />
                <div>
                  <p className="text-sm font-semibold text-white">Phone</p>
                  <p className="text-sm text-slate-300">
                    {contactDetails.phone}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <FiMapPin className="mt-1 text-sky-300" />
                <div>
                  <p className="text-sm font-semibold text-white">Address</p>
                  <p className="text-sm leading-7 text-slate-300">
                    {contactDetails.address}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <FiMail className="mt-1 text-sky-300" />
                <div>
                  <p className="text-sm font-semibold text-white">Email</p>
                  <p className="text-sm text-slate-300">
                    info@dottechacademy.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {["name", "email", "phone"].map((field) => (
                <label key={field} className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-200 capitalize">
                    {field}
                  </span>
                  <input
                    name={field}
                    value={activeForm[field]}
                    onChange={onChange}
                    required={field !== "phone"}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/50"
                    placeholder={
                      field === "email"
                        ? "you@example.com"
                        : `Enter your ${field}`
                    }
                    type={field === "email" ? "email" : "text"}
                  />
                </label>
              ))}
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-medium text-slate-200">
                Message
              </span>
              <textarea
                name="message"
                value={activeForm.message}
                onChange={onChange}
                rows="6"
                required
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/50"
                placeholder="Tell us what you want to learn or ask about the course"
              />
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>

            <p className="mt-3 text-xs text-slate-500">
              We will store your enquiry securely in MongoDB and contact you as
              soon as possible.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
