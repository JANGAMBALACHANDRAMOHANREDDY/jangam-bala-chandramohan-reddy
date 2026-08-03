import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section, SectionHeader } from "./Section";
import { EXPERIENCES } from "@/data/portfolio";

const Experience = () => (
  <Section id="experience">
    <SectionHeader
      eyebrow="Journey"
      title="Internship"
      highlight="Timeline"
      subtitle="Every internship that shaped my engineering and data craft."
    />

    <div className="relative mx-auto max-w-4xl">
      <div className="absolute left-4 top-2 hidden h-full w-px bg-gradient-to-b from-secondary via-primary to-transparent sm:block" />

      <div className="space-y-6">
        {EXPERIENCES.map((experience, index) => (
          <motion.article
            key={`${experience.title}-${experience.company}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="relative sm:pl-16"
          >
            <span className="absolute left-[9px] top-9 hidden h-3.5 w-3.5 rounded-full bg-secondary ring-4 ring-secondary/20 sm:block" />

            <div className="glass-card hover-glow p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-hero shadow-glow">
                  <Briefcase className="h-5 w-5 text-primary-foreground" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold sm:text-xl">{experience.title}</h3>
                      <p className="text-sm text-muted-foreground sm:text-base">
                        {experience.company} · {experience.type}
                      </p>
                    </div>
                    {experience.current && (
                      <Badge className="bg-accent/15 text-accent">Current</Badge>
                    )}
                  </div>

                  <div className="mb-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-primary" />
                      {experience.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-primary" />
                      {experience.location}
                    </span>
                  </div>

                  {experience.description.length > 0 && (
                    <ul className="mb-4 space-y-2">
                      {experience.description.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span className="text-sm text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-secondary/15 text-xs font-normal text-foreground/85"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </Section>
);

export default Experience;
