import { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Star, CircleDot } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Section, SectionHeader } from "./Section";
import { FEATURED_PROJECTS, OTHER_PROJECTS, PROJECT_FILTERS, type FeaturedProject } from "@/data/portfolio";

const TiltCard = ({ project, index }: { project: FeaturedProject; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -py * 7, y: px * 7 });
  };

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1100px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1)",
      }}
      className="glass-card hover-glow group overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
        <img
          src={project.thumbnail}
          alt={`${project.title} — ${project.category} screenshot`}
          width={1280}
          height={800}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
        <div className="absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-background/10" />

        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {project.featured && (
            <Badge className="gap-1 bg-primary/90 text-primary-foreground">
              <Star className="h-3 w-3" />
              Featured
            </Badge>
          )}
          <Badge
            variant="outline"
            className="gap-1 border-border bg-background/60 backdrop-blur-md"
          >
            <CircleDot className="h-3 w-3 text-accent" />
            {project.status}
          </Badge>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
          {project.category}
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.features.map((feature) => (
            <span
              key={feature}
              className="rounded-full border border-border bg-white/[0.04] px-3 py-1 text-xs text-muted-foreground"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Tech Stack
          </h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-secondary/15 text-xs font-normal text-foreground/85 hover:bg-secondary/25"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Button className="group/btn gap-2 rounded-full shadow-glow" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button
            variant="outline"
            className="group/btn gap-2 rounded-full border-border bg-white/5"
            asChild
          >
            <a href={project.demo ?? project.github} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
              Live Demo
            </a>
          </Button>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? FEATURED_PROJECTS
        : FEATURED_PROJECTS.filter((p) => p.filters.includes(filter)),
    [filter]
  );

  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Work"
        title="Full Stack"
        highlight="Projects"
        subtitle="Production-minded platforms built end to end — from UI systems to APIs and data layers."
      />

      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {PROJECT_FILTERS.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            aria-pressed={filter === item}
            className={`relative rounded-full border px-4 py-1.5 text-sm transition-all ${
              filter === item
                ? "border-primary/50 text-foreground shadow-glow"
                : "border-border bg-white/[0.03] text-muted-foreground hover:border-white/25 hover:text-foreground"
            }`}
          >
            {filter === item && (
              <motion.span
                layoutId="project-filter"
                className="absolute inset-0 rounded-full bg-primary/15"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative">{item}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => (
            <TiltCard key={project.title} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <p className="text-center text-muted-foreground">No projects match this filter yet.</p>
      )}

      <div className="mx-auto mt-24 max-w-6xl">
        <h3 className="mb-8 text-center text-2xl font-semibold">More Work</h3>
        <Tabs defaultValue="Data Analysis" className="w-full">
          <TabsList className="mx-auto mb-8 grid w-full max-w-md grid-cols-2 rounded-full border border-border bg-white/[0.04] p-1">
            <TabsTrigger value="Data Analysis" className="rounded-full">
              Data Analysis
            </TabsTrigger>
            <TabsTrigger value="AI & Machine Learning" className="rounded-full">
              AI & ML
            </TabsTrigger>
          </TabsList>

          {Object.entries(OTHER_PROJECTS).map(([category, projects]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="glass-card hover-glow flex flex-col p-6"
                  >
                    <h4 className="text-lg font-semibold">{project.title}</h4>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-border bg-white/[0.04] text-xs font-normal"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-5 w-full gap-2 rounded-full border-border bg-white/[0.04]"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        View on GitHub
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Section>
  );
};

export default Projects;
