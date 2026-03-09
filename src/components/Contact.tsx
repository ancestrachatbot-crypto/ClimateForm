"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send — wire up to Formspree / email API in production
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-navy/40 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-brand-gold text-xs font-medium tracking-widest uppercase block mb-4">
            Get in touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-text mb-4">
            Contact
          </h2>
          <p className="text-brand-muted text-lg max-w-lg">
            Investors, press, ministry officials, educators, or anyone who
            believes in building the Caribbean&apos;s technological future — let&apos;s
            talk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-brand-muted text-xs uppercase tracking-wide mb-2"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-brand-navy/40 border border-brand-muted/20 text-brand-text placeholder:text-brand-muted/40 text-sm focus:outline-none focus:border-brand-gold/50 transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-brand-muted text-xs uppercase tracking-wide mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg bg-brand-navy/40 border border-brand-muted/20 text-brand-text placeholder:text-brand-muted/40 text-sm focus:outline-none focus:border-brand-gold/50 transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-brand-muted text-xs uppercase tracking-wide mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                className="w-full px-4 py-3 rounded-lg bg-brand-navy/40 border border-brand-muted/20 text-brand-text placeholder:text-brand-muted/40 text-sm focus:outline-none focus:border-brand-gold/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-brand-gold text-brand-bg font-semibold text-sm tracking-wide rounded-lg hover:bg-brand-gold/90 disabled:opacity-60 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-brand-gold/20"
            >
              {status === "sending" ? (
                <>
                  <span className="w-4 h-4 border-2 border-brand-bg/40 border-t-brand-bg rounded-full animate-spin" />
                  Sending...
                </>
              ) : status === "sent" ? (
                <>Message sent — thank you!</>
              ) : (
                <>
                  <Send size={14} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>

          {/* Direct contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6 lg:pt-8"
          >
            <div className="p-6 rounded-2xl border border-brand-gold/20 bg-brand-navy/20 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center flex-shrink-0">
                <Mail size={16} className="text-brand-gold" />
              </div>
              <div>
                <p className="text-brand-muted text-xs uppercase tracking-wide mb-1">
                  Email
                </p>
                <a
                  href="mailto:tejhyuanicharles@oceanic.ai"
                  className="text-brand-text font-medium text-sm hover:text-brand-gold transition-colors"
                >
                  tejhyuanicharles@oceanic.ai
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-brand-muted text-sm font-medium">
                I&apos;m particularly interested in hearing from:
              </p>
              {[
                "Caribbean government ministries",
                "University admissions (MIT/Harvard)",
                "Impact investors & angels",
                "Caribbean students & educators",
                "Press & media",
              ].map((audience) => (
                <div key={audience} className="flex items-center gap-3">
                  <ArrowRight size={12} className="text-brand-gold flex-shrink-0" />
                  <span className="text-brand-muted text-sm">{audience}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
