import { motion } from "framer-motion";
import { ExternalLink, Award, Calendar, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "./Section";
import { CERTIFICATIONS, CERT_SKILLS, CERT_STATS } from "@/data/portfolio";

const statusClass = (status: string) => {
  switch (status) {
    case "active":
      return "bg-accent/15 text-accent hover:bg-accent/25";
    case "completed":
      return "bg-primary/15 text-primary hover:bg-primary/25";
    case "expired":
      return "bg-muted text-muted-foreground";
    default:
      return "bg-secondary/15 text-secondary-foreground";
  }
};

const Certifications = () => (
  <Section id="certifications">
    <SectionHeader
      eyebrow="Credentials"
      title="Certifications &"
      highlight="Learning"
      subtitle="Verified programs across data, AI and cloud engineering."
    />

    <div className="mx-auto max-w-6xl">
      <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {CERT_STATS.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            className="glass-card hover-glow p-6 text-center"
          >
            <div className="text-3xl font-semibold gradient-text">{stat.value}</div>
            <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={`${cert.title}-${cert.organization}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card hover-glow flex flex-col p-6"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <Badge className={statusClass(cert.status)}>
                {cert.status.charAt(0).toUpperCase() + cert.status.slice(1)}
              </Badge>
              <Shield className="h-5 w-5 shrink-0 text-muted-foreground" />
            </div>

            <h3 className="text-lg font-semibold">{cert.title}</h3>

            <div className="mt-3 flex-1 space-y-1.5 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 shrink-0" />
                {cert.organization}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 shrink-0" />
                {cert.date}
              </div>
              {cert.id && <div className="text-xs">ID: {cert.id}</div>}
            </div>

            <Button
              variant="outline"
              size="sm"
              className="mt-5 w-full gap-2 rounded-full border-border bg-white/[0.04]"
            >
              <ExternalLink className="h-4 w-4" />
              View Certificate
            </Button>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-7"
      >
        <h3 className="text-xl font-semibold">Skills Gained Through Certifications</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {CERT_SKILLS.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="bg-secondary/15 text-sm font-normal text-foreground/85"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </motion.div>
    </div>
  </Section>
);

export default Certifications;
