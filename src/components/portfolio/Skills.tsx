import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Brain, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeader } from "./Section";
import { SKILL_CATEGORIES } from "@/data/portfolio";

const ICONS = { Code2, Database, Layout, Server, Brain, Wrench } as const;

const Skills = () => (
  <Section id="skills">
    <SectionHeader
      eyebrow="Stack"
      title="Skills &"
      highlight="Expertise"
      subtitle="The languages, frameworks and tools I use to ship end-to-end products."
    />

    <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
      {SKILL_CATEGORIES.map((category, index) => {
        const Icon = ICONS[category.icon];
        return (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card hover-glow group relative overflow-hidden p-6"
          >
            <div className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-gradient-hero opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />

            <div className="relative mb-5 flex items-center gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-hero shadow-glow">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="min-w-0 truncate text-lg font-semibold">{category.title}</h3>
              <span className="ml-auto shrink-0 text-xs font-medium text-muted-foreground">
                {category.level}%
              </span>
            </div>

            <div className="relative mb-5 h-1.5 w-full overflow-hidden rounded-full bg-white/8">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${category.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.15 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full bg-gradient-accent"
              />
            </div>

            <div className="relative flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="border-border bg-white/5 text-xs font-normal text-foreground/85 transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  </Section>
);

export default Skills;
