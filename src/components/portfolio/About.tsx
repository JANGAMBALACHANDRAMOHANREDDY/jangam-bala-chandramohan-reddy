import { motion } from "framer-motion";
import { GraduationCap, Cpu, Briefcase, FolderGit2, Trophy, Target } from "lucide-react";
import { Section, SectionHeader, Reveal } from "./Section";
import { ABOUT_CARDS, ABOUT_STATS } from "@/data/portfolio";
import profileAsset from "@/assets/profile-photo-full.jpg.asset.json";

const ICONS = { GraduationCap, Cpu, Briefcase, FolderGit2, Trophy, Target } as const;

const About = () => (
  <Section id="about">
    <SectionHeader
      eyebrow="About"
      title="Engineering with"
      highlight="intent"
      subtitle="A snapshot of my background, craft and where I'm heading next."
    />

    <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
      <Reveal className="space-y-5 lg:sticky lg:top-28">
        <div className="glass-card overflow-hidden p-2">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl">
            <img
              src={profileAsset.url}
              alt="Jangam Bala Chandra Mohan Reddy portrait"
              width={800}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {ABOUT_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-panel p-4 text-center"
            >
              <div className="text-2xl font-semibold gradient-text">{stat.value}</div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {ABOUT_CARDS.map((card, index) => {
          const Icon = ICONS[card.icon];
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card hover-glow group relative overflow-hidden p-6"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-hero shadow-glow">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="relative text-lg font-semibold">{card.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {card.body}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </Section>
);

export default About;
