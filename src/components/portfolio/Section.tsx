import type { ReactNode } from "react";
import { motion } from "framer-motion";

export const SectionHeader = ({
  eyebrow,
  title,
  highlight,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="mb-14 text-center"
  >
    <span className="eyebrow">{eyebrow}</span>
    <h2 className="section-heading mt-6">
      {title} <span className="gradient-text">{highlight}</span>
    </h2>
    <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">{subtitle}</p>
  </motion.div>
);

export const Reveal = ({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 26 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Section = ({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) => (
  <section id={id} className={`relative overflow-hidden px-4 py-24 sm:py-32 ${className}`}>
    <div className="container relative mx-auto">{children}</div>
  </section>
);
