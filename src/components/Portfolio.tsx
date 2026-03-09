"use client";

import { motion } from "framer-motion";

type Status = "live" | "development" | "concept";

interface Product {
  name: string;
  sector: string;
  description: string;
  status: Status;
  featured?: boolean;
  detail?: string;
}

const STATUS_CONFIG: Record<Status, { label: string; color: string; dot: string }> = {
  live: {
    label: "Live & Pitching",
    color: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
    dot: "bg-emerald-400",
  },
  development: {
    label: "In Development",
    color: "bg-blue-500/15 text-blue-400 border border-blue-500/30",
    dot: "bg-blue-400",
  },
  concept: {
    label: "Concept",
    color: "bg-brand-muted/15 text-brand-muted border border-brand-muted/20",
    dot: "bg-brand-muted",
  },
};

const PRODUCTS: Product[] = [
  {
    name: "Sugar City AI",
    sector: "Tourism AI",
    description:
      "Full-stack AI tourism platform built for the St. Kitts Ministry of Tourism. End-to-end visitor intelligence, itinerary generation, and industry analytics.",
    status: "live",
    featured: true,
    detail: "38,000+ lines of code",
  },
  {
    name: "Scholar AI",
    sector: "Education AI",
    description:
      "CSEC/CAPE aligned study assistant targeting a national Ministry of Education contract. Adaptive curriculum, exam prep, and performance tracking.",
    status: "development",
  },
  {
    name: "Kairi",
    sector: "Health AI",
    description:
      "AI-powered EHR system designed for SKN's 17 health facilities. Intelligent patient records, diagnostic support, and resource optimization.",
    status: "concept",
  },
  {
    name: "AXIOM AI",
    sector: "Architecture AI",
    description:
      "ML model generating building parameters from Caribbean climate and site data. Passive design optimization for tropical environments.",
    status: "concept",
  },
  {
    name: "Solara",
    sector: "Energy AI",
    description:
      "AI grid optimization platform for Caribbean utilities. Renewable integration, load forecasting, and energy distribution intelligence.",
    status: "concept",
  },
  {
    name: "Doubloon",
    sector: "Finance AI",
    description:
      "AI financial intelligence for ECCB, banks, and credit unions. Risk modeling, fraud detection, and regional economic analytics.",
    status: "concept",
  },
  {
    name: "Codex",
    sector: "Legal AI",
    description:
      "AI legal assistance for the Attorney General's office and Eastern Caribbean courts. Case research, document analysis, and precedent retrieval.",
    status: "concept",
  },
];

function StatusBadge({ status }: { status: Status }) {
  const cfg = STATUS_CONFIG[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${cfg.color}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot} ${status === "live" ? "animate-pulse" : ""}`} />
      {cfg.label}
    </span>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const isFeatured = product.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`group relative flex flex-col gap-4 p-6 rounded-2xl border transition-all duration-300 cursor-default
        ${
          isFeatured
            ? "border-brand-gold/40 bg-gradient-to-br from-brand-navy/60 to-brand-gold/5 hover:border-brand-gold hover:shadow-xl hover:shadow-brand-gold/10 md:col-span-2"
            : "border-brand-muted/10 bg-brand-navy/20 hover:border-brand-gold/50 hover:bg-brand-navy/40 hover:shadow-lg hover:shadow-brand-gold/5"
        }`}
    >
      {/* Featured glow */}
      {isFeatured && (
        <div className="absolute inset-0 rounded-2xl bg-brand-gold/3 opacity-0 group-hover:opacity-100 transition-opacity" />
      )}

      {/* Top row */}
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <span className="text-xs text-brand-gold/70 font-medium tracking-widest uppercase mb-1 block">
            {product.sector}
          </span>
          <h3
            className={`font-bold text-brand-gold leading-tight ${
              isFeatured ? "text-2xl sm:text-3xl" : "text-xl"
            }`}
          >
            {product.name}
          </h3>
        </div>
        <StatusBadge status={product.status} />
      </div>

      {/* Description */}
      <p
        className={`text-brand-muted leading-relaxed ${
          isFeatured ? "text-base" : "text-sm"
        }`}
      >
        {product.description}
      </p>

      {/* Detail tag */}
      {product.detail && (
        <div className="mt-auto pt-2 border-t border-brand-gold/10">
          <span className="text-xs text-brand-gold font-mono">{product.detail}</span>
        </div>
      )}

      {/* Hover accent line */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-brand-gold/0 to-transparent group-hover:via-brand-gold/40 transition-all duration-500" />
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-brand-gold text-xs font-medium tracking-widest uppercase block mb-4">
            Oceanic · Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-text mb-4">
            7 Products.
            <br />
            <span className="text-brand-gold">One Mission.</span>
          </h2>
          <p className="text-brand-muted text-lg max-w-xl leading-relaxed">
            AI infrastructure built for the Caribbean — government ministries,
            hospitals, schools, courts, utilities. Every product targets a
            contract with a real institution.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-brand-muted/60 text-sm text-center"
        >
          Target contracts:{" "}
          <span className="text-brand-gold/80">$645K–$780K/yr in SKN</span>
        </motion.p>
      </div>
    </section>
  );
}
