"use client";

import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section id="mission" className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-brand-gold/30 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-brand-gold text-xs font-medium tracking-widest uppercase block mb-4">
            Mission
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-text">
            The Source Code
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          {/* Large quote mark */}
          <span className="absolute -top-6 -left-4 text-8xl text-brand-gold/10 font-serif select-none leading-none">
            &quot;
          </span>

          <div className="space-y-6 pl-2">
            <p className="text-xl sm:text-2xl text-brand-text/90 leading-relaxed font-light">
              The Caribbean has been importing technology for generations. We buy
              the software, rent the servers, depend on the infrastructure built
              elsewhere — for economies that look nothing like ours.
            </p>

            <p className="text-xl sm:text-2xl text-brand-text/90 leading-relaxed font-light">
              I&apos;m building the alternative. AI that understands sugar cane
              economies, CSEC syllabuses, Eastern Caribbean courts, and ECCB
              monetary policy. Infrastructure designed{" "}
              <span className="text-brand-gold font-medium">from here</span>,
              not exported here.
            </p>

            <p className="text-xl sm:text-2xl text-brand-text/90 leading-relaxed font-light">
              Oceanic is not a startup chasing Silicon Valley validation. It is
              a deliberate, long-term bet that the Caribbean can own its
              technological future — and I intend to prove it.
            </p>
          </div>

          <span className="absolute -bottom-8 right-0 text-8xl text-brand-gold/10 font-serif select-none leading-none rotate-180">
            &quot;
          </span>
        </motion.div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex items-center gap-4"
        >
          <div className="w-12 h-px bg-brand-gold/40" />
          <p className="text-brand-muted text-sm">
            Tejhyuani Charles, 14 — Basseterre, St. Kitts
          </p>
        </motion.div>
      </div>
    </section>
  );
}
