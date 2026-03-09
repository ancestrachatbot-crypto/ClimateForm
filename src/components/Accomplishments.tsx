"use client";

import { motion } from "framer-motion";
import { Trophy, Globe, Code2, BookOpen, Cpu } from "lucide-react";

interface Milestone {
  icon: React.ReactNode;
  title: string;
  detail: string;
  year: string;
  highlight?: boolean;
}

const milestones: Milestone[] = [
  {
    icon: <Trophy size={18} />,
    title: "3rd Place — ECCB Youth Connect AI Competition",
    detail: "Competed across 3 islands, 12 teams. Presented Sugar City AI.",
    year: "2024",
    highlight: true,
  },
  {
    icon: <Globe size={18} />,
    title: "OECS Robotics Representative",
    detail: "Selected to represent the OECS region at March 2026 competition.",
    year: "2026",
    highlight: true,
  },
  {
    icon: <Code2 size={18} />,
    title: "38,000+ Lines of Code — Sugar City AI",
    detail:
      "Built end-to-end AI tourism platform for the St. Kitts Ministry of Tourism.",
    year: "2024",
  },
  {
    icon: <Cpu size={18} />,
    title: "Founded Oceanic",
    detail:
      "Caribbean-first AI infrastructure company with 7 products across 6 sectors.",
    year: "2024",
  },
  {
    icon: <BookOpen size={18} />,
    title: "Targeting #1 CSEC IT — Caribbean",
    detail:
      "Self-studying CSEC Information Technology, aiming for the top grade in the region.",
    year: "2025",
  },
];

export default function Accomplishments() {
  return (
    <section id="accomplishments" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-brand-gold text-xs font-medium tracking-widest uppercase block mb-4">
            Track Record
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-text">
            Accomplishments
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-gold/40 via-brand-gold/20 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {milestones.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex gap-6 p-6 rounded-xl border transition-all duration-300
                  ${
                    m.highlight
                      ? "border-brand-gold/30 bg-brand-gold/5"
                      : "border-brand-muted/10 bg-brand-navy/20"
                  }`}
              >
                {/* Timeline dot */}
                <div
                  className={`hidden sm:flex flex-shrink-0 -ml-[3.25rem] mt-0.5 w-5 h-5 rounded-full items-center justify-center border-2
                    ${
                      m.highlight
                        ? "border-brand-gold bg-brand-gold/20 text-brand-gold"
                        : "border-brand-muted/40 bg-brand-bg text-brand-muted"
                    }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      m.highlight ? "bg-brand-gold" : "bg-brand-muted/50"
                    }`}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-3 flex-wrap mb-2">
                    <span
                      className={`flex-shrink-0 mt-0.5 ${
                        m.highlight ? "text-brand-gold" : "text-brand-muted"
                      }`}
                    >
                      {m.icon}
                    </span>
                    <h3
                      className={`font-semibold text-base leading-snug flex-1 ${
                        m.highlight ? "text-brand-text" : "text-brand-text/80"
                      }`}
                    >
                      {m.title}
                    </h3>
                    <span className="flex-shrink-0 text-xs text-brand-gold font-mono px-2 py-0.5 rounded bg-brand-gold/10">
                      {m.year}
                    </span>
                  </div>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {m.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
