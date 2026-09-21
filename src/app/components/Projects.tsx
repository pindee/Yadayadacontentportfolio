import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Lock, FolderOpen } from "lucide-react";
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

export function Projects() {
  const [modal, setModal] = useState<{ open: boolean; title: string; label: string }>({
    open: false,
    title: "",
    label: "",
  });

  const openModal = (title: string, label: string) =>
    setModal({ open: true, title, label });

  const projects: Project[] = [
    {
      title: "AI Agent Solutions",
      company: "PointClickCare",
      description: "Lead the integration of AI-assisted authoring into content workflows, enabling teams to scale content creation without sacrificing quality. Develop and govern prompt libraries: standardized, reusable prompt patterns that ensure AI outputs align with brand voice, product strategy, and accessibility standards.",
      impact: "Work with Engineering to ensure AI-generated or dynamic content respects structured models, tone, and governance rules",
      tags: ["AI Enablement", "Prompt Libraries", "Content Workflow"],
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
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Featured Projects</h2>
        <p className="text-muted-foreground max-w-3xl">
          A selection of recent projects showcasing my approach to content strategy,
          UX writing, and brand voice development across various industries.
        </p>
      </div>

      <div className="mb-6 p-4 rounded-lg border-l-4 flex flex-col sm:flex-row sm:items-center gap-4" style={{ borderLeftColor: "#7ed9c3", backgroundColor: "#e8f9f5" }}>
        <p className="text-sm text-muted-foreground flex-1">
          These projects are proprietary to the companies I have worked with, so I'm not able to share them publicly. Use the request buttons on individual projects, or click <strong>Request all projects</strong> to request access by email. I will review requests and grant access as soon as I can.
        </p>
        <button
          onClick={() => openModal("All Projects", "all project resources")}
          className="shrink-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium border transition-colors hover:bg-white"
          style={{ borderColor: "#7ed9c3", color: "#2d9d7f" }}
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
                backgroundColor: "#f3f4f6",
                borderLeftColor: "#2d9d7f",
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
                    style={{ borderColor: "#7ed9c3", color: "#2d9d7f" }}
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

      <AccessRequestModal
        open={modal.open}
        onOpenChange={(open) => setModal(prev => ({ ...prev, open }))}
        itemTitle={modal.title}
        requestLabel={modal.label}
      />
    </div>
  );
}
