/**
 * Aurora + mesh-gradient ambient background.
 * Purely decorative: fixed, non-interactive, no layout impact.
 */
const PARTICLES = [
  { left: "8%", top: "22%", delay: "0s", size: 3 },
  { left: "18%", top: "68%", delay: "2.4s", size: 2 },
  { left: "31%", top: "12%", delay: "5s", size: 2 },
  { left: "44%", top: "78%", delay: "1.2s", size: 3 },
  { left: "57%", top: "34%", delay: "3.6s", size: 2 },
  { left: "69%", top: "62%", delay: "6.2s", size: 3 },
  { left: "78%", top: "18%", delay: "0.8s", size: 2 },
  { left: "88%", top: "72%", delay: "4.4s", size: 3 },
  { left: "94%", top: "40%", delay: "7s", size: 2 },
];

const AuroraBackground = () => (
  <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-background" />

    {/* Aurora ribbons */}
    <div className="absolute -top-1/3 left-1/2 h-[70vh] w-[140vw] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--primary)_38%,transparent),transparent)] blur-[120px] animate-aurora" />
    <div
      className="absolute top-1/4 -left-1/4 h-[60vh] w-[90vw] rounded-[50%] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--secondary)_32%,transparent),transparent)] blur-[130px] animate-aurora"
      style={{ animationDelay: "-7s" }}
    />
    <div
      className="absolute bottom-0 right-0 h-[55vh] w-[80vw] rounded-[50%] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--accent)_22%,transparent),transparent)] blur-[140px] animate-aurora"
      style={{ animationDelay: "-14s" }}
    />

    {/* Floating orbs */}
    <div className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-primary/15 blur-[150px] animate-float" />
    <div
      className="absolute right-[-6rem] top-1/2 h-[380px] w-[380px] rounded-full bg-secondary/15 blur-[150px] animate-float-slow"
      style={{ animationDelay: "-6s" }}
    />

    {/* Subtle grid */}
    <div className="absolute inset-0 grid-lines opacity-40 mask-fade-b" />

    {/* Floating particles */}
    {PARTICLES.map((p, i) => (
      <span
        key={i}
        className="absolute rounded-full bg-accent/50 blur-[1px] animate-float"
        style={{
          left: p.left,
          top: p.top,
          width: p.size,
          height: p.size,
          animationDelay: p.delay,
          animationDuration: `${18 + i * 2}s`,
        }}
      />
    ))}

    {/* Vignette */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,var(--background)_100%)]" />
  </div>
);

export default AuroraBackground;
