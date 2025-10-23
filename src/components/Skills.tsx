import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { 
  Target,
  LayoutGrid,
  Volume2,
  Bot,
  GraduationCap,
  BarChart3
} from "lucide-react";

export function Skills() {
  const strategicAreas = [
    {
      icon: Target,
      title: "Strategic Direction & Cohesion",
      description: "I define content strategy across products, platforms, and touchpoints, aligning language with business goals, product vision, and user outcomes.",
      capabilities: [
        "I ensure voice, tone, and terminology remain consistent across squads and markets",
        "I embed content strategy into product and engineering roadmaps",
        "I influence decisions early — not just editing late"
      ]
    },
    {
      icon: LayoutGrid,
      title: "Design System Integration",
      description: "I act as the content counterpart to the design system, creating reusable content patterns, naming frameworks, UI text components, and tone tokens.",
      capabilities: [
        "I partner with Design System teams to evolve language and interaction patterns in sync",
        "I enable squads to move quickly while staying aligned",
        "I maintain governance models and documentation for correct system usage"
      ]
    },
    {
      icon: Volume2,
      title: "Voice, Tone & Structured Writing",
      description: "I own and evolve the voice and tonal system, ensuring flexibility across contexts while maintaining brand coherence.",
      capabilities: [
        "I implement structured writing models across the organization",
        "I create consistent, machine-readable, and human-friendly content",
        "I embed structured authoring practices into product content and documentation"
      ]
    },
    {
      icon: Bot,
      title: "AI Enablement & Prompt Libraries",
      description: "I lead the integration of AI-assisted authoring into content workflows, enabling teams to scale content creation without sacrificing quality.",
      capabilities: [
        "I develop and govern prompt libraries — standardized, reusable prompt patterns",
        "I ensure AI outputs align with brand voice, product strategy, and accessibility standards",
        "I act as strategic owner of language in AI contexts (assistants, copilots, chat interfaces)"
      ]
    },
    {
      icon: GraduationCap,
      title: "Organizational Enablement & Skilling",
      description: "I build internal capacity for good writing by creating education programs, office hours, guidelines, and tools that upskill teams.",
      capabilities: [
        "I develop content frameworks for internal and external audiences",
        "I establish content operations practices to scale quality across distributed teams",
        "I act as strategic connector between Product, Engineering, UX, Marketing, and Legal"
      ]
    },
    {
      icon: BarChart3,
      title: "Measurement & Continuous Improvement",
      description: "I define content success metrics tied to product and organizational goals — e.g., task completion, error reduction, conversion, comprehension, and support deflection.",
      capabilities: [
        "I use quantitative analytics and qualitative research to evolve content patterns",
        "I conduct audits and feedback loops to keep systems clean and scalable",
        "I ensure content becomes a measurable, strategic asset driving business impact"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">My Skills</h2>
        <div className="space-y-4 max-w-4xl">
          <p className="text-muted-foreground">
            In a modern Product–Engineering–UX organization, Content Designers focus on crafting language within features: writing UI copy, help content, onboarding flows, and micro-interactions that make individual user journeys clear and usable.
          </p>
          <p className="text-muted-foreground">
            I work systemically and programmatically — ensuring that all those individual pieces work together as a cohesive, scalable, and intelligent content ecosystem. I shape frameworks, govern patterns, and operationalize language across the entire product lifecycle and organization.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {strategicAreas.map((area, index) => {
          const Icon = area.icon;
          return (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="flex-1">{area.title}</CardTitle>
                </div>
                <CardDescription>{area.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {area.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{capability}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle>Why This Matters</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            In a world where multiple teams ship in parallel, AI accelerates content generation, and structured writing underpins everything from UI to API docs, my work serves as the connective tissue that holds it all together.
          </p>
          <div className="space-y-3">
            <p className="text-muted-foreground">Through my work, I ensure that:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Voice, tone, and structure are unified and intentional across all user and employee experiences</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Design systems, AI models, and prompt libraries work together to deliver coherent, scalable content</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Teams across the org are empowered to write well — not just content specialists</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Content becomes a measurable, strategic asset that drives clarity, trust, efficiency, and business impact</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
