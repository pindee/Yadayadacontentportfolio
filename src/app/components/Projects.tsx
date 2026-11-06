import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { BriefcaseBusiness, ExternalLink, FolderOpen, Lock, MapPin } from "lucide-react";
import { AccessRequestModal } from "./AccessRequestModal";

type ProjectRequest = { label: string; buttonText: string } | null;
type ProjectUnavailable = { message: string } | null;

interface Project {
  title: string;
  company: string;
  description: string;
  impact: string;
  tags: string[];
  year: string;
  request?: ProjectRequest;
  unavailable?: ProjectUnavailable;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  duration: string;
  employment: string;
  location: string;
  summary: string;
  highlights: string[];
  focus: string[];
  current?: boolean;
}

export function Projects() {
  const [modal, setModal] = useState<{ open: boolean; title: string; label: string }>({
    open: false,
    title: "",
    label: "",
  });

  const openModal = (title: string, label: string) =>
    setModal({ open: true, title, label });

  const experience: Experience[] = [
    {
      role: "Senior Content Strategist",
      company: "PointClickCare",
      period: "Aug 2026 to Present",
      duration: "4 mos",
      employment: "Permanent Full-time",
      location: "Mississauga, Ontario, Canada · Hybrid",
      summary: "Leads enterprise content strategy across products and platforms, aligning content initiatives with user needs, business goals, regulatory requirements, and product roadmaps.",
      highlights: [
        "Defines and governs AI-enabled content workflows, AI agents, and human-in-the-loop quality controls.",
        "Scales conversational design and optimizes trusted, machine-readable content for AI search, assistants, and product experiences.",
        "Owns content governance, editorial standards, content design systems, style guides, reusable patterns, and content architecture.",
        "Builds measurement frameworks and partners with Product, UX, Engineering, DevOps, and SaaSOps to improve customer and business outcomes.",
      ],
      focus: ["Content Design", "System Architecture", "AI Governance"],
      current: true,
    },
    {
      role: "Content Strategist",
      company: "PointClickCare",
      period: "Feb 2021 to Aug 2026",
      duration: "5 yrs 7 mos",
      employment: "Permanent Full-time",
      location: "Mississauga, Ontario",
      summary: "Planned and executed content strategy across product platforms, connecting content operations with the product delivery process and the organization’s brand and business objectives.",
      highlights: [
        "Defined back-end content structures so information could be delivered successfully across devices, platforms, and channels.",
        "Served as editor-in-chief, maintaining quality, clarity, consistency, product style guides, and the content release calendar.",
        "Designed measurement systems and used competitive and market research to guide content priorities and performance.",
      ],
      focus: ["Content Strategy", "Information Architecture", "Content Operations"],
    },
    {
      role: "Instructional Designer",
      company: "NAVBLUE, an Airbus Company",
      period: "Dec 2019 to Feb 2021",
      duration: "1 yr 3 mos",
      employment: "Permanent Full-time",
      location: "Waterloo, Ontario",
      summary: "Partnered with subject matter experts and business owners to research, plan, produce, and maintain customer-facing and internal training and documentation.",
      highlights: [
        "Built microlearning content plans and coached contributors on project scope, responsibilities, and delivery.",
        "Worked with Software Development, Quality Assurance, and Customer Support to improve UI accuracy and address customer pain points.",
        "Championed process improvements, new technologies, brand standards, and strong project management practices.",
      ],
      focus: ["Instructional Design", "Technical Content", "Project Management"],
    },
    {
      role: "Instructional Designer / Developer",
      company: "PointClickCare",
      period: "Jan 2019 to Oct 2019",
      duration: "10 mos",
      employment: "Permanent Full-time",
      location: "Mississauga, Ontario",
      summary: "Designed dynamic course materials and interactive software product training for PointClickCare customers and employees.",
      highlights: [
        "Managed eLearning projects end to end, from learning objectives and course preparation through implementation.",
        "Maintained consistency across instructional documents and learning experiences.",
        "Worked with Axonify, SuccessFactors, Relias, and related learning management tools.",
      ],
      focus: ["eLearning", "Course Design", "LMS"],
    },
    {
      role: "Technical Writer",
      company: "PointClickCare",
      period: "Jan 2015 to Dec 2018",
      duration: "4 yrs",
      employment: "Full-time",
      location: "Mississauga, Ontario",
      summary: "Maintained and improved the PointClickCare help system while creating clinical, administrative, and interdepartmental documentation.",
      highlights: [
        "Restructured help content and introduced a new navigation approach to improve findability.",
        "Created content with RoboHelp, Paligo and similar CCMS tools, and Articulate Storyline.",
        "Improved process flows, announcements, quick reference guides, formatting, and editorial standards.",
      ],
      focus: ["Technical Writing", "CCMS", "Help Architecture"],
    },
  ];

  const projects: Project[] = [
    {
      title: "Machine-Readable Style Guide Rebuild",
      company: "PointClickCare",
      description: "Rebuilding legacy style guides into a structured, machine-readable source of truth that can support human authors, AI assistants, and automated content checks. Defining reusable rules, metadata, examples, and governance so guidance can be interpreted consistently across tools and channels.",
      impact: "Creating a trusted foundation for scalable authoring, more reliable AI outputs, and consistent content decisions across teams and systems",
      tags: ["Machine-Readable Content", "Style Guide", "Content Governance"],
      year: "2027",
      unavailable: { message: "This work is currently in development and no external sample is available yet." },
    },
    {
      title: "Content Design System",
      company: "PointClickCare",
      description: "Unified guidelines developed over years into one content design system. Structured the system to connect with Claude Skills, Claude Design, Figma Make, and Figma plug-ins so teams can apply shared content standards directly within the tools where they work.",
      impact: "Created a scalable model for sharing trusted resources, patterns, and knowledge with every team while helping people and AI tools produce more consistent content",
      tags: ["Content Design System", "AI-Ready Standards", "Knowledge Sharing"],
      year: "2026",
      request: { label: "content design system overview", buttonText: "Request overview" },
    },
    {
      title: "AI Agent Solutions",
      company: "PointClickCare",
      description: "Built and continue to develop a suite of eight content AI agents that generate content faster. Each agent follows defined standards, templates, and variables, and connects with the tools teams already use to plan, write, and manage content.",
      impact: "Eight agents built or in progress, combining faster content creation with structured models, governed outputs, and consistent quality",
      tags: ["AI Agents", "Governed Content", "Content Workflow"],
      year: "2025-2026",
      request: { label: "solutions", buttonText: "Request solutions" },
    },
    {
      title: "Style Guide",
      company: "PointClickCare",
      description: "Created comprehensive style guide that serves as the foundation for all content creation across the organization. Established writing standards, grammar rules, and best practices that align with brand voice while ensuring accessibility and clarity.",
      impact: "40% reduction in support tickets, 25% increase in content consistency across teams",
      tags: ["Style Guide", "Content Standards", "Brand Voice"],
      year: "2024",
      request: { label: "guide", buttonText: "Request guide" },
    },
    {
      title: "Content Analytics Dashboard",
      company: "PointClickCare",
      description: "Built comprehensive analytics dashboard to track content success metrics including Customer Effort Scores (CES), guide and help file views, guide goal completions, video engagement rates, and content performance across all customer touchpoints. Leverage data-driven insights to continuously optimize content effectiveness and user experience.",
      impact: "Enabled data-informed content decisions, identified high-impact content gaps, and improved content ROI through continuous measurement and iteration",
      tags: ["Analytics", "CES", "Content Metrics"],
      year: "2022",
      request: { label: "sample", buttonText: "Request sample" },
    },
    {
      title: "100% Content Accessibility Compliance",
      company: "PointClickCare",
      description: "Led organization-wide initiative to achieve 100% content accessibility compliance. Added comprehensive alt-text to all images, ensured color contrast accessibility, and implemented WCAG 2.1 AA standards across all product content and documentation.",
      impact: "WCAG 2.1 AA compliance achieved, improved user experience for all users including those with disabilities",
      tags: ["Accessibility", "WCAG Compliance", "Inclusive Design"],
      year: "2022",
      unavailable: { message: "This work lives inside the product and no external sample is available, unfortunately." },
    },
    {
      title: "Voice and Tone",
      company: "PointClickCare",
      description: "Own and evolve the voice and tonal system, ensuring flexibility across contexts (e.g., onboarding vs. error states vs. AI responses) while maintaining brand coherence. Implement structured writing models across the organization, enabling consistent, machine-readable, and human-friendly content.",
      impact: "Embedded structured authoring practices across product content and internal documentation, creating clarity and reducing content debt",
      tags: ["Voice & Tone", "Structured Writing", "Brand Coherence"],
      year: "2021",
      request: { label: "voice and tone resources", buttonText: "Request" },
    },
    {
      title: "One-Stop Resource Hub",
      company: "PointClickCare",
      description: "Created a comprehensive user-facing resource hub that centralizes all customer content resources in one accessible location. Developed and organized user training materials, in-app guidance, help files, customer support documentation, and self-service resources to empower customers with the information they need, when they need it.",
      impact: "50% reduction in support tickets, 65% improvement in customer self-service success rate, and 4.7/5 customer satisfaction rating for help resources",
      tags: ["Customer Resources", "Help Documentation", "Self-Service"],
      year: "2021",
      request: { label: "recording", buttonText: "Request recording" },
    },
    {
      title: "End to End Release Cycle Calendar, Schedule, Process & Deliverables",
      company: "PointClickCare",
      description: "Created, managed, and maintained a comprehensive end-to-end release cycle framework encompassing the full content calendar, scheduling, process documentation, and deliverables tracking. Established a repeatable system that aligned content teams with product release timelines across every stage of the cycle.",
      impact: "Brought structure and predictability to content releases, ensuring all deliverables were scoped, assigned, and shipped on time with every product cycle",
      tags: ["Release Management", "Content Operations", "Process Design"],
      year: "2021",
      unavailable: { message: "This work lives inside the product and no external sample is available, unfortunately." },
    },
    {
      title: "Interactive Customer-Facing eLearning & Support Documentation",
      company: "Skywise (formerly Navblue)",
      description: "Designed and developed interactive customer-facing eLearning courses paired with comprehensive supporting documentation. Built engaging, scenario-based learning experiences that guided customers through complex workflows, complemented by reference documentation that reinforced learning and enabled self-service support.",
      impact: "Equipped customers with the knowledge and confidence to onboard and operate independently, reducing reliance on live support and improving overall product adoption",
      tags: ["eLearning", "Instructional Design", "Support Documentation"],
      year: "2020",
      unavailable: { message: "This work lives inside the product and no external sample is available, unfortunately." },
    },
    {
      title: "Help File Architecture and Creation in CCMS",
      company: "PointClickCare",
      description: "Architected and authored a comprehensive help file system within a Component Content Management System (CCMS), structuring modular, reusable content components that could be assembled and published across multiple outputs and audiences.",
      impact: "Established a scalable content architecture that reduced authoring redundancy and improved consistency across all help documentation",
      tags: ["CCMS", "Help Documentation", "Content Architecture"],
      year: "2015",
      unavailable: { message: "This work lives inside the product and no external sample is available, unfortunately." },
    },
  ];

  return (
    <div className="space-y-12">
      <section aria-labelledby="experience-heading">
        <div className="mb-6 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#34465C]">
              <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
              Career path
            </div>
            <h2 id="experience-heading" className="mb-2">My Experience</h2>
            <p className="max-w-3xl text-muted-foreground">
              More than a decade turning complex product knowledge into clear, scalable content systems for people and the technologies that support them.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/emmapindera/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-[#34465C] underline decoration-[#438184] decoration-2 underline-offset-4 transition-colors hover:text-[#438184] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#438184] focus-visible:ring-offset-4"
          >
            Full profile on LinkedIn
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="relative">
          <div className="absolute bottom-4 left-[7px] top-4 hidden w-px bg-[#CDD6C9] sm:block" aria-hidden="true" />
          <div className="space-y-3">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="group relative grid gap-3 rounded-xl border border-border bg-card p-5 transition-all hover:border-[#91A18D] hover:shadow-sm sm:grid-cols-[11rem_1fr] sm:gap-8 sm:border-0 sm:border-b sm:bg-transparent sm:py-6 sm:pl-8 sm:pr-2 sm:hover:shadow-none"
              >
                <span
                  className="absolute left-0 top-8 hidden h-[15px] w-[15px] rounded-full border-[3px] border-white bg-[#438184] ring-1 ring-[#91A18D] sm:block"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {item.period} <span className="font-normal text-muted-foreground">· {item.duration}</span>
                  </p>
                  <p className="mt-1 flex items-start gap-1.5 text-xs leading-5 text-muted-foreground">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {item.location}
                  </p>
                </div>
                <div>
                  <div className="mb-2 flex flex-wrap items-baseline gap-x-2">
                    <h3 className="text-lg font-semibold leading-tight">{item.role}</h3>
                    <span className="text-sm font-semibold text-[#34465C]">{item.company}</span>
                    {item.current && (
                      <span className="rounded-full bg-[#F5EBD5] px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#34465C]">
                        Present
                      </span>
                    )}
                  </div>
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    {item.employment}
                  </p>
                  <p className="max-w-3xl text-sm leading-6 text-muted-foreground">{item.summary}</p>
                  <ul className="mt-4 max-w-3xl space-y-2">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#438184]" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2" aria-label={`Focus areas for ${item.role}`}>
                    {item.focus.map((focus) => (
                      <span
                        key={focus}
                        className="rounded-full bg-[#EEF0E9] px-3 py-1 text-xs font-medium text-[#34465C]"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="projects-heading" className="space-y-8">
      <div>
        <h2 id="projects-heading" className="mb-4">Featured Projects</h2>
        <p className="text-muted-foreground max-w-3xl">
          A selection of recent projects showcasing my approach to content strategy,
          UX writing, and brand voice development across various industries.
        </p>
      </div>

      <div className="mb-6 p-4 rounded-lg border-l-4 flex flex-col sm:flex-row sm:items-center gap-4" style={{ borderLeftColor: "#91A18D", backgroundColor: "#EEF0E9" }}>
        <p className="text-sm text-muted-foreground flex-1">
          These projects are proprietary to the companies I have worked with, so I'm not able to share them publicly. Use the request buttons on individual projects, or click <strong>Request all projects</strong> to request access by email. I will review requests and grant access as soon as I can.
        </p>
        <button
          onClick={() => openModal("All Projects", "all project resources")}
          className="shrink-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium border transition-colors hover:bg-white"
          style={{ borderColor: "#438184", color: "#34465C" }}
        >
          <FolderOpen className="w-3.5 h-3.5" />
          Request all projects
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between gap-4 mb-2">
                <Badge variant="outline">{project.year}</Badge>
              </div>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.company}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="mb-4 p-3 rounded-md border-l-4" style={{
                backgroundColor: "#F0EEE8",
                borderLeftColor: "#438184",
              }}>
                <p className="text-sm">{project.impact}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <Badge key={idx} variant="secondary">{tag}</Badge>
                ))}
              </div>
              {project.request && (
                <div className="mt-auto">
                  <button
                    onClick={() => openModal(project.title, project.request!.label)}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium border transition-colors hover:bg-muted"
                    style={{ borderColor: "#438184", color: "#34465C" }}
                  >
                    {project.request.buttonText}
                  </button>
                </div>
              )}
              {project.unavailable && (
                <div className="mt-auto flex items-start gap-2 text-sm text-muted-foreground italic">
                  <Lock className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                  <span>{project.unavailable.message}</span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      </section>

      <AccessRequestModal
        open={modal.open}
        onOpenChange={(open) => setModal(prev => ({ ...prev, open }))}
        itemTitle={modal.title}
        requestLabel={modal.label}
      />
    </div>
  );
}
