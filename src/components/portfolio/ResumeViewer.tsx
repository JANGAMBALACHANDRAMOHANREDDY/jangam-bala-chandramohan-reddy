import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, Maximize2, ExternalLink, Loader2, FileWarning } from "lucide-react";
import { RESUME_URL } from "@/data/portfolio";

export { RESUME_URL };

type Status = "loading" | "ready" | "error";

const ResumeViewer = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("loading");
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    let active = true;
    setStatus("loading");

    fetch(RESUME_URL, { method: "HEAD" })
      .then((res) => {
        if (!active) return;
        const type = res.headers.get("content-type") ?? "";
        setStatus(res.ok && !type.includes("text/html") ? "ready" : "error");
      })
      .catch(() => active && setStatus("error"));

    return () => {
      active = false;
    };
  }, [open]);

  const goFullscreen = () => {
    const el = frameRef.current;
    if (!el) return;
    if (document.fullscreenElement) void document.exitFullscreen();
    else void el.requestFullscreen?.();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-[calc(100vw-1.5rem)] max-w-5xl border-border bg-background-elevated/95 p-0 backdrop-blur-xl">
        <DialogHeader className="flex-row items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-6">
          <DialogTitle className="text-sm font-medium sm:text-base">
            Resume — Jangam Bala Chandra Mohan Reddy
          </DialogTitle>
          <div className="flex items-center gap-2 pr-8">
            <Button
              size="icon"
              variant="ghost"
              onClick={goFullscreen}
              aria-label="Fullscreen preview"
              className="hidden sm:inline-flex"
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" asChild aria-label="Open resume in new tab">
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button size="sm" className="gap-2" asChild>
              <a href={RESUME_URL} download>
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Download</span>
              </a>
            </Button>
          </div>
        </DialogHeader>

        <div
          ref={frameRef}
          className="relative h-[70vh] w-full overflow-hidden bg-background sm:h-[78vh]"
        >
          {status === "loading" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="text-sm text-muted-foreground">Loading resume…</p>
            </div>
          )}

          {status === "ready" && (
            <object
              data={`${RESUME_URL}#view=FitH`}
              type="application/pdf"
              className="h-full w-full"
              aria-label="Resume PDF preview"
            >
              <iframe
                src={`${RESUME_URL}#view=FitH`}
                title="Resume PDF preview"
                className="h-full w-full border-0"
                loading="lazy"
              />
            </object>
          )}

          {status === "error" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
              <FileWarning className="h-10 w-10 text-secondary" />
              <div>
                <p className="font-medium">Inline preview unavailable</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Your browser blocked the embedded PDF. You can still open or download the resume.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button asChild className="gap-2">
                  <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Open Resume
                  </a>
                </Button>
                <Button variant="outline" asChild className="gap-2">
                  <a href={RESUME_URL} download>
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeViewer;
