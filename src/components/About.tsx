"use client";

import { motion } from "framer-motion";

const facts = [
  { label: "Age", value: "14" },
  { label: "School", value: "Basseterre High School" },
  { label: "Form", value: "Form 4" },
  { label: "Target", value: "MIT / Harvard" },
  { label: "Country", value: "St. Kitts & Nevis" },
];

const tags = [
  "Steel Pan",
  "Theatre",
  "AI / ML",
  "Full-Stack Dev",
  "Caribbean History",
  "CSEC IT",
  "Architecture",
  "Public Policy",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-brand-gold text-xs font-medium tracking-widest uppercase block mb-4">
            The Human
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-text">
            About
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-5 text-brand-muted leading-relaxed">
              <p className="text-brand-text/90 text-lg">
                I grew up watching the Caribbean import everything — technology
                included. Somewhere between steel pan practice and theatre
                rehearsals, I decided that was not the story I wanted to
                participate in.
              </p>
              <p>
                I taught myself to code. Not because anyone told me to, but
                because I saw what needed to exist. Sugar City AI started as a
                school project and became a 38,000-line platform with a real
                pitch to a real ministry. That taught me something: the gap
                between concept and contract is just work.
              </p>
              <p>
                I play steel pan — the only instrument invented in the 20th
                century, born in Trinidad, perfected across the Caribbean. I do
                theatre. Both disciplines taught me the same thing: performance
                under pressure, in front of an audience that matters.
              </p>
              <p>
                I am 14, in Form 4 at Basseterre High School, self-studying
                CSEC IT, targeting MIT and Harvard, and building AI
                infrastructure for a region that deserves its own. I am not
                waiting for permission.
              </p>
            </div>

            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-l-2 border-brand-gold pl-6 py-2"
            >
              <p className="text-brand-text/80 italic text-lg">
                The code is in the cane. The infrastructure is in the
                infrastructure. The future is in the people who refuse to wait
                for it.
              </p>
              <cite className="text-brand-muted text-sm mt-3 block not-italic">
                — The Code in the Cane
              </cite>
            </motion.blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            <div className="rounded-2xl border border-brand-gold/20 bg-brand-navy/30 overflow-hidden">
              <div className="px-6 py-4 border-b border-brand-gold/10 bg-brand-gold/5">
                <h3 className="text-brand-gold font-semibold text-sm tracking-wide uppercase">
                  Quick Facts
                </h3>
              </div>
              <div className="divide-y divide-brand-muted/10">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-center justify-between px-6 py-4"
                  >
                    <span className="text-brand-muted text-sm">{fact.label}</span>
                    <span className="text-brand-text font-medium text-sm">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-brand-navy/40 border border-brand-muted/10 text-brand-muted text-xs font-medium hover:border-brand-gold/30 hover:text-brand-gold/80 transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
