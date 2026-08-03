import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeader } from "./Section";
import { INTERNSHIP } from "@/data/portfolio";

const Internship = () => (
  <Section id="internship">
    <SectionHeader
      eyebrow="Experience"
      title="Professional"
      highlight="Experience"
      subtitle="Current internship role, responsibilities and the stack I ship with."
    />

    <div className="relative mx-auto max-w-4xl">
      <div className="absolute left-4 top-2 hidden h-full w-px bg-gradient-to-b from-primary via-secondary to-transparent sm:block" />

      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative sm:pl-16"
      >
        <span className="absolute left-[9px] top-10 hidden h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-primary/20 animate-pulse-ring sm:block" />

        <div className="glass-card hover-glow p-6 sm:p-9">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:justify-between">
            <div className="flex min-w-0 items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-hero shadow-glow">
                <Building2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold sm:text-2xl">{INTERNSHIP.role}</h3>
                <p className="mt-1 flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="h-4 w-4 shrink-0 text-accent" />
                  {INTERNSHIP.company}
                </p>
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              <Badge className="bg-accent/15 text-accent hover:bg-accent/20">
                {INTERNSHIP.status}
              </Badge>
              <Badge variant="outline" className="border-border bg-white/5 font-normal">
                {INTERNSHIP.mode}
              </Badge>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              {INTERNSHIP.duration}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              {INTERNSHIP.location}
            </span>
          </div>

          <p className="mt-6 leading-relaxed text-muted-foreground">{INTERNSHIP.summary}</p>

          <div className="mt-8">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Responsibilities
            </h4>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {INTERNSHIP.responsibilities.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Technologies
            </h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {INTERNSHIP.stack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-border bg-white/5 text-xs font-normal text-foreground/85"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  </Section>
);

export default Internship;
