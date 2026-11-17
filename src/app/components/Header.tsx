import { useState } from "react";
import { ChevronDown, ChevronUp, Linkedin, Mail } from "lucide-react";
import headerImage from "figma:asset/64f1fc1f0d7ef1c4ebf13d4578c2b44576bf5831.png";
import iconLogo from "figma:asset/659c4452656d58cf0e110b9213e6f29b92650b40.png";
import logoImage from "figma:asset/75f4d8401f9705e2ddfe66989fd8fc444db1f19a.png";
import { FALLBACK_URLS } from "../assets/fallback-config";
import { ImageWithAssetFallback } from "./ImageWithAssetFallback";

interface HeaderProps {
  onNavigate: (tab: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [isBannerExpanded, setIsBannerExpanded] = useState(true);

  const navigateTo = (tab: string) => {
    onNavigate(tab);
    requestAnimationFrame(() => {
      document.getElementById("portfolio-content")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <header className="relative border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between border-b border-border py-3 sm:py-5">
          <div className={`items-center gap-3 ${isBannerExpanded ? "flex" : "hidden md:flex"}`}>
            <ImageWithAssetFallback
              src={iconLogo}
              fallbackSrc={FALLBACK_URLS.handWritingIconLogo}
              alt=""
              className="h-7 w-auto object-contain sm:h-9"
            />
            <ImageWithAssetFallback
              src={logoImage}
              fallbackSrc={FALLBACK_URLS.yadaYadaTextLogo}
              alt="Yada Yada content"
              className="h-9 w-auto object-contain sm:h-11"
            />
          </div>

          {!isBannerExpanded && (
            <div className="mr-auto md:mx-auto md:text-center">
              <p className="font-display text-sm font-bold leading-tight text-foreground sm:text-base">
                Emma Pindera, MET
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Senior Content Strategist
              </p>
            </div>
          )}

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="mailto:emmapindera@hotmail.com"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-2"
              aria-label="Email Emma Pindera"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span className="hidden text-sm font-bold sm:inline">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/emmapindera/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90 sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-2"
              aria-label="Emma Pindera on LinkedIn"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              <span className="hidden text-sm font-bold sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>

        {isBannerExpanded && (
        <div id="portfolio-intro-banner" className="grid items-center gap-6 py-8 md:grid-cols-[1fr_auto] md:gap-10 md:py-20">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-teal sm:mb-5 sm:text-sm sm:tracking-[0.18em]">
              Emma Pindera · Senior Content Strategist
            </p>
            <h1 className="max-w-4xl font-display text-3xl font-black leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Words with purpose.
              <span className="block text-brand-teal">Content with strategy.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-6 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
              “Yada yada” skips the fluff to get to what matters. My work does the same, turning complex content and guidelines into clear, governed systems that teams can use across products, platforms, and AI-enabled workflows.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
              <button
                type="button"
                onClick={() => navigateTo("projects")}
                className="inline-flex items-center rounded-full border border-primary px-4 py-2 text-sm font-bold text-foreground transition-colors hover:bg-secondary sm:px-6 sm:py-3 sm:text-base"
              >
                Explore my work
              </button>
              <button
                type="button"
                onClick={() => navigateTo("presentations")}
                className="inline-flex items-center rounded-full border border-primary px-4 py-2 text-sm font-bold text-foreground transition-colors hover:bg-secondary sm:px-6 sm:py-3 sm:text-base"
              >
                Listen to my talks
              </button>
            </div>
          </div>

          <div className="relative mx-auto hidden w-48 md:block md:w-56">
            <div className="absolute -inset-3 rounded-full bg-secondary" aria-hidden="true" />
            <div className="relative aspect-square overflow-hidden rounded-full border-4 border-background">
              <ImageWithAssetFallback
                src={headerImage}
                fallbackSrc={FALLBACK_URLS.professionalHeadshot}
                alt="Emma Pindera"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        )}
      </div>
      <button
        type="button"
        onClick={() => setIsBannerExpanded((expanded) => !expanded)}
        aria-expanded={isBannerExpanded}
        aria-controls="portfolio-intro-banner"
        aria-label={isBannerExpanded ? "Minimize banner" : "Show intro banner"}
        className="absolute bottom-0 left-1/2 flex h-8 w-8 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-background text-foreground shadow-sm transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:h-10 sm:w-10"
      >
        {isBannerExpanded ? (
          <ChevronUp className="h-5 w-5" aria-hidden="true" />
        ) : (
          <ChevronDown className="h-5 w-5" aria-hidden="true" />
        )}
      </button>
    </header>
  );
}
