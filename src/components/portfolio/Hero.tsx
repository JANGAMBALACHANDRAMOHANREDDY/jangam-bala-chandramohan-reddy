import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Eye, Github, Linkedin, Mail, ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ResumeViewer from "./ResumeViewer";
import { PROFILE, ROLES, RESUME_URL } from "@/data/portfolio";
import profileAsset from "@/assets/profile-headshot.jpg.asset.json";

const scrollToSection = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const SOCIALS = [
  { href: PROFILE.github, label: "GitHub", Icon: Github },
  { href: PROFILE.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: `mailto:${PROFILE.email}`, label: "Email", Icon: Mail },
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-28 pt-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/12 blur-[160px] animate-float" />

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-block"
        >
          <div className="relative">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-hero opacity-70 blur-lg" />
            <div className="relative h-32 w-32 overflow-hidden rounded-full border border-white/20 sm:h-40 sm:w-40">
              <img
                src={profileAsset.url}
                alt="Jangam Bala Chandra Mohan Reddy — Full Stack and AI Engineer"
                width={352}
                height={352}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-7 flex justify-center"
        >
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-ring" />
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            {PROFILE.availability}
          </span>
        </motion.div>

        <h1 className="text-balance text-[clamp(2.4rem,8vw,5rem)] font-semibold leading-[0.98] tracking-tighter">
          {[PROFILE.displayFirst, PROFILE.displayMiddle, PROFILE.displayLast].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`mr-3 inline-block ${i === 1 ? "gradient-text" : ""}`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-7 flex h-10 items-center justify-center overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-lg font-medium text-primary-glow sm:text-2xl"
            >
              {ROLES[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {PROFILE.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Button size="lg" className="gap-2 rounded-full shadow-glow" asChild>
            <a href={RESUME_URL} download>
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
          <ResumeViewer>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 rounded-full border-border bg-white/5 backdrop-blur-md hover:bg-white/10"
            >
              <Eye className="h-4 w-4" />
              Preview Resume
            </Button>
          </ResumeViewer>
          <Button
            size="lg"
            variant="outline"
            className="group gap-2 rounded-full border-border bg-white/5 backdrop-blur-md hover:bg-white/10"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
          <Button
            size="lg"
            className="gap-2 rounded-full bg-gradient-accent text-accent-foreground hover:opacity-90"
            onClick={() => scrollToSection("contact")}
          >
            Hire Me
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="gap-2 rounded-full text-muted-foreground hover:text-foreground"
            onClick={() => scrollToSection("contact")}
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          {SOCIALS.map(({ href, label, Icon }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -4, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-white/5 text-muted-foreground backdrop-blur-md transition-colors hover:border-primary/50 hover:text-foreground"
            >
              <Icon className="h-5 w-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll to about section"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default Hero;
