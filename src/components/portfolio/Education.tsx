import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, Sparkles, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeader } from "./Section";
import { EDUCATION } from "@/data/portfolio";

const Education = () => (
  <Section id="education">
    <SectionHeader
      eyebrow="Academics"
      title="Education &"
      highlight="Coursework"
      subtitle="My academic foundation in computer science, artificial intelligence and data science."
    />

    <div className="relative mx-auto max-w-4xl">
      <div className="absolute left-4 top-2 hidden h-full w-px bg-gradient-to-b from-secondary via-primary to-transparent sm:block" />

      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative sm:pl-16"
      >
        <span className="absolute left-[9px] top-10 hidden h-3.5 w-3.5 rounded-full bg-secondary ring-4 ring-secondary/20 sm:block" />

        <div className="glass-card hover-glow p-6 sm:p-9">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:justify-between">
            <div className="flex min-w-0 items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-hero shadow-glow">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold sm:text-2xl">{EDUCATION.degree}</h3>
                <p className="mt-1 text-muted-foreground">{EDUCATION.branch}</p>
                <p className="mt-1 flex items-start gap-2 text-sm text-accent">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0" />
                  {EDUCATION.specialization}
                </p>
              </div>
            </div>
            <Badge className="shrink-0 gap-1 bg-primary/15 text-primary hover:bg-primary/25">
              <Award className="h-3 w-3" />
              Distinction
            </Badge>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <div className="glass-panel p-4">
              <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                University
              </div>
              <div className="mt-1 font-semibold">{EDUCATION.university}</div>
            </div>
            <div className="glass-panel p-4">
              <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                CGPA
              </div>
              <div className="mt-1 text-2xl font-bold gradient-text">{EDUCATION.cgpa}</div>
            </div>
            <div className="glass-panel p-4">
              <div className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                Duration
              </div>
              <div className="mt-1 flex items-center gap-2 font-semibold">
                <Calendar className="h-4 w-4 text-primary" />
                {EDUCATION.duration}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <BookOpen className="h-4 w-4" />
              Key Coursework
            </h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {EDUCATION.coursework.map((course) => (
                <Badge
                  key={course}
                  variant="outline"
                  className="border-border bg-white/5 text-xs font-normal text-foreground/85"
                >
                  {course}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Academic Achievements
            </h4>
            <ul className="mt-4 space-y-2.5">
              {EDUCATION.achievements.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.article>
    </div>
  </Section>
);

export default Education;
