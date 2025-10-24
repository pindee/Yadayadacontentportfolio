import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Voice and Tone",
      company: "PointClickCare",
      description: "Own and evolve the voice and tonal system, ensuring flexibility across contexts (e.g., onboarding vs. error states vs. AI responses) while maintaining brand coherence. Implement structured writing models across the organization, enabling consistent, machine-readable, and human-friendly content.",
      impact: "Embedded structured authoring practices across product content and internal documentation, creating clarity and reducing content debt",
      tags: ["Voice & Tone", "Structured Writing", "Brand Coherence"],
      year: "2024"
    },
    {
      title: "AI Agent Solutions",
      company: "PointClickCare",
      description: "Lead the integration of AI-assisted authoring into content workflows, enabling teams to scale content creation without sacrificing quality. Develop and govern prompt libraries — standardized, reusable prompt patterns that ensure AI outputs align with brand voice, product strategy, and accessibility standards.",
      impact: "Work with Engineering to ensure AI-generated or dynamic content respects structured models, tone, and governance rules",
      tags: ["AI Enablement", "Prompt Libraries", "Content Workflow"],
      year: "2024"
    },
    {
      title: "One-Stop Resource Hub",
      company: "PointClickCare",
      description: "Created a comprehensive user-facing resource hub that centralizes all customer content resources in one accessible location. Developed and organized user training materials, in-app guidance, help files, customer support documentation, and self-service resources to empower customers with the information they need, when they need it.",
      impact: "50% reduction in support tickets, 65% improvement in customer self-service success rate, and 4.7/5 customer satisfaction rating for help resources",
      tags: ["Customer Resources", "Help Documentation", "Self-Service"],
      year: "2023"
    },
    {
      title: "Content Analytics Dashboard",
      company: "PointClickCare",
      description: "Built comprehensive analytics dashboard to track content success metrics including Customer Effort Scores (CES), guide and help file views, guide goal completions, video engagement rates, and content performance across all customer touchpoints. Leverage data-driven insights to continuously optimize content effectiveness and user experience.",
      impact: "Enabled data-informed content decisions, identified high-impact content gaps, and improved content ROI through continuous measurement and iteration",
      tags: ["Analytics", "CES", "Content Metrics"],
      year: "2023"
    },
    {
      title: "Product-Specific Content Architecture",
      company: "PointClickCare",
      description: "Developed comprehensive product-specific content architecture that adapts to different contexts and user needs. Created scalable content models for cross-product consistency while allowing flexibility for unique product requirements.",
      impact: "95% user satisfaction score, improved content discoverability and task completion rates",
      tags: ["Information Architecture", "Content Models", "UX"],
      year: "2023"
    },
    {
      title: "Style Guide",
      company: "PointClickCare",
      description: "Created comprehensive style guide that serves as the foundation for all content creation across the organization. Established writing standards, grammar rules, and best practices that align with brand voice while ensuring accessibility and clarity.",
      impact: "40% reduction in support tickets, 25% increase in content consistency across teams",
      tags: ["Style Guide", "Content Standards", "Brand Voice"],
      year: "2022"
    },
    {
      title: "100% Content Accessibility Compliance",
      company: "PointClickCare",
      description: "Led organization-wide initiative to achieve 100% content accessibility compliance. Added comprehensive alt-text to all images, ensured color contrast accessibility, and implemented WCAG 2.1 AA standards across all product content and documentation.",
      impact: "WCAG 2.1 AA compliance achieved, improved user experience for all users including those with disabilities",
      tags: ["Accessibility", "WCAG Compliance", "Inclusive Design"],
      year: "2022"
    }
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

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between gap-4 mb-2">
                <Badge variant="outline">{project.year}</Badge>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </div>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.company}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="mb-4 p-3 rounded-md border-l-4" style={{ 
                backgroundColor: '#f3f4f6',
                borderLeftColor: '#2d9d7f'
              }}>
                <p className="text-sm">{project.impact}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, idx) => (
                  <Badge key={idx} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
