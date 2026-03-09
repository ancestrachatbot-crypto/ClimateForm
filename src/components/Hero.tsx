"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

// Floating particle component
function Particle({
  x,
  y,
  size,
  delay,
  duration,
}: {
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full bg-brand-gold/20"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.1, 0.4, 0.1],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

const PARTICLES = [
  { x: 10, y: 20, size: 4, delay: 0, duration: 5 },
  { x: 25, y: 70, size: 3, delay: 1, duration: 7 },
  { x: 40, y: 15, size: 5, delay: 0.5, duration: 6 },
  { x: 60, y: 80, size: 3, delay: 2, duration: 8 },
  { x: 75, y: 30, size: 4, delay: 1.5, duration: 5.5 },
  { x: 85, y: 60, size: 6, delay: 0.8, duration: 7 },
  { x: 15, y: 50, size: 3, delay: 3, duration: 6 },
  { x: 90, y: 10, size: 4, delay: 2.5, duration: 5 },
  { x: 50, y: 45, size: 2, delay: 1.2, duration: 9 },
  { x: 68, y: 55, size: 3, delay: 0.3, duration: 6.5 },
  { x: 32, y: 88, size: 5, delay: 1.8, duration: 7.5 },
  { x: 80, y: 75, size: 3, delay: 2.2, duration: 5.8 },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  const scrollToPortfolio = () => {
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-bg via-brand-bg to-brand-navy/40" />

      {/* Slow radial pulse */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-navy/30 blur-3xl" />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {PARTICLES.map((p, i) => (
          <Particle key={i} {...p} />
        ))}
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
      >
        {/* Location badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-xs font-medium tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            St. Kitts &amp; Nevis · Caribbean
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-bold leading-none tracking-tight mb-6"
        >
          <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-brand-text">
            TEJHYUANI
          </span>
          <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-brand-gold">
            CHARLES
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-brand-muted text-lg sm:text-xl md:text-2xl font-light max-w-2xl leading-relaxed mb-4"
        >
          Building AI infrastructure for the Caribbean —
          <br className="hidden sm:block" />
          <span className="text-brand-text font-medium"> from St. Kitts &amp; Nevis</span>
        </motion.p>

        {/* Sub-tagline */}
        <motion.p
          variants={itemVariants}
          className="text-brand-muted/70 text-sm sm:text-base max-w-xl mb-12"
        >
          Founder &amp; CEO, Oceanic &nbsp;·&nbsp; CTO, Sugar City AI &nbsp;·&nbsp; Form 4, Basseterre High School
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <button
            onClick={scrollToPortfolio}
            className="group px-8 py-4 bg-brand-gold text-brand-bg font-semibold text-sm tracking-wide rounded-lg hover:bg-brand-gold/90 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-brand-gold/25"
          >
            View My Work
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button
            onClick={scrollToAbout}
            className="px-8 py-4 border border-brand-gold/40 text-brand-text font-semibold text-sm tracking-wide rounded-lg hover:border-brand-gold hover:bg-brand-gold/5 transition-all duration-200"
          >
            Read My Story
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-center"
        >
          {[
            { value: "38K+", label: "Lines of Code" },
            { value: "7", label: "AI Products" },
            { value: "3rd", label: "ECCB AI Competition" },
            { value: "2026", label: "OECS Robotics Rep" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="text-2xl sm:text-3xl font-bold text-brand-gold">
                {stat.value}
              </span>
              <span className="text-xs text-brand-muted tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} />
      </motion.div>
    </section>
  );
}
