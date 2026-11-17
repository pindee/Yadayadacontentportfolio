import {
  BarChart3,
  Bot,
  Braces,
  CheckCircle2,
  LayoutGrid,
  Target,
  Volume2,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: Target,
    title: "Content Strategy",
    description: "Align content with user needs, product priorities, regulatory requirements, and measurable business goals.",
    deliverables: ["Audits and roadmaps", "Information architecture", "Success measures"],
  },
  {
    icon: LayoutGrid,
    title: "Content Design Systems",
    description: "Create reusable patterns, standards, and governance that help distributed teams make consistent decisions.",
    deliverables: ["Pattern libraries", "Style guidance", "Governance models"],
  },
  {
    icon: Braces,
    title: "Content Engineering",
    description: "Turn guidance into structured, machine-readable rules that can travel across tools and delivery channels.",
    deliverables: ["Content models", "Rules and metadata", "Tool integrations"],
  },
  {
    icon: Bot,
    title: "AI-Ready Workflows",
    description: "Design focused AI agents and prompt systems with clear inputs, constraints, evaluation, and human review.",
    deliverables: ["Agent workflows", "Prompt templates", "Quality scorecards"],
  },
  {
    icon: Volume2,
    title: "Voice, Tone and UX Writing",
    description: "Make product experiences clearer through practical voice guidance, interface copy, and content patterns.",
    deliverables: ["Voice systems", "UI copy", "Before-and-after reviews"],
  },
  {
    icon: BarChart3,
    title: "Measurement and Optimization",
    description: "Connect content decisions to evidence through analytics, research, audits, and continuous improvement.",
    deliverables: ["Measurement plans", "Content dashboards", "Review cycles"],
  },
];

export function Skills() {
  return (
    <div className="space-y-10">
      <section aria-labelledby="what-i-do-heading">
        <p className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">Skills and solutions</p>
        <h2 id="what-i-do-heading" className="text-3xl font-semibold leading-tight">What I Do</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          I help product organizations make content clearer, more consistent, easier to govern, and ready for AI-enabled experiences.
        </p>
      </section>

      <section aria-label="Services" className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card key={service.title} className="flex flex-col">
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl font-semibold leading-tight">{service.title}</CardTitle>
                <CardDescription className="leading-6">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <ul className="space-y-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-foreground" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <section className="rounded-xl border border-border bg-primary p-6 text-primary-foreground sm:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold leading-tight">Need a clearer content system?</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 opacity-80">
              I’m available for content strategy, design systems, AI workflow design, audits, and speaking engagements.
            </p>
          </div>
          <a
            href="mailto:emmapindera@hotmail.com"
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
          >
            Start a conversation
          </a>
        </div>
      </section>
    </div>
  );
}
