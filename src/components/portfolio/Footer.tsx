import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE, FOOTER_NAV } from "@/data/portfolio";

const Footer = () => (
  <footer className="relative border-t border-border py-12">
    <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[1.4fr_1fr_auto]">
      <div>
        <div className="text-lg font-semibold gradient-text">{PROFILE.name}</div>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          {PROFILE.footerBio}
        </p>
      </div>

      <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm md:flex-col">
        {FOOTER_NAV.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex h-fit gap-3">
        {[
          { icon: Github, href: PROFILE.github, label: "GitHub" },
          { icon: Linkedin, href: PROFILE.linkedin, label: "LinkedIn" },
          { icon: Mail, href: `mailto:${PROFILE.email}`, label: "Email" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-white/[0.04] text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground"
          >
            <item.icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>

    <div className="mx-auto mt-10 max-w-6xl px-6 text-xs text-muted-foreground">
      © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
    </div>
  </footer>
);

export default Footer;
