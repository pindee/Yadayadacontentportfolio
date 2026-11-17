import forestPhoto from "figma:asset/2c71e58ffb188a80bd118380b7f723b76428fe6f.png";
import { FALLBACK_URLS } from "../assets/fallback-config";
import { ImageWithAssetFallback } from "./ImageWithAssetFallback";

export function AboutMe() {
  return (
    <div>
      <section aria-labelledby="about-heading" className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-stretch">
        <div className="flex flex-col">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">The person behind the work</p>
          <h2 id="about-heading" className="text-3xl font-semibold">About Me</h2>
          <div className="mt-5 space-y-4 text-muted-foreground">
            <p className="text-2xl font-semibold leading-tight text-foreground">
              12 years shaping content for complex products.
            </p>
            <p>
              I’m a senior content strategist across content strategy, technical writing, instructional design, and product content. “Yada yada” is my working principle: remove the noise, find what matters, and make every word useful.
            </p>
            <p>
              Today, I focus on trusted content that works for both people and machines. I combine human-centered writing with structured content, governance, measurement, and responsible AI practices to create systems that are clear, reusable, and built to scale.
            </p>
          </div>
          <div className="mt-10 border-t border-ring pt-4">
            <h3 className="font-semibold">Life Beyond Content</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Outside work, I travel, paddleboard, play board games, spend time with my family, and occasionally jump from perfectly good airplanes.
            </p>
          </div>
        </div>
        <div className="min-h-72 overflow-hidden rounded-xl border border-border bg-muted md:h-full">
          <ImageWithAssetFallback
            src={forestPhoto}
            fallbackSrc={FALLBACK_URLS.ropesCourseAdventure}
            alt="Navigating a ropes course in the forest"
            className="h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
