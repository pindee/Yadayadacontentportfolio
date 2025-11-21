import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle2 } from "lucide-react";

export function Solutions() {
  const solutions = [
    {
      title: "Content Strategy & Planning",
      description: "End-to-end content strategy that aligns with business goals and user needs.",
      deliverables: [
        "Content audit & gap analysis",
        "Competitive content research",
        "Content roadmap & priorities",
        "Success metrics & KPIs",
        "Stakeholder alignment workshops"
      ],
      ideal: "Organizations lacking clear content direction or struggling with inconsistent messaging"
    },
    {
      title: "Voice & Tone Development",
      description: "Defining and documenting your brand's unique voice across all touchpoints.",
      deliverables: [
        "Brand voice definition",
        "Tone variation guidelines",
        "Real-world examples & templates",
        "Team training materials",
        "Voice & tone testing framework"
      ],
      ideal: "Brands seeking consistent personality or going through rebranding"
    },
    {
      title: "UX Writing & Content Design",
      description: "User-centered copy that guides, informs, and delights at every interaction.",
      deliverables: [
        "Interface copy & microcopy",
        "User flow optimization",
        "Error & success messaging",
        "Onboarding content",
        "Accessibility-compliant copy"
      ],
      ideal: "Product teams building or redesigning digital experiences"
    },
    {
      title: "Content Operations & Governance",
      description: "Systems and processes to scale content production while maintaining quality.",
      deliverables: [
        "Editorial style guide",
        "Content workflow documentation",
        "Review & approval processes",
        "Content templates & patterns",
        "Team roles & responsibilities"
      ],
      ideal: "Growing teams needing structure and scalability in content production"
    },

    {
      title: "Content Migration & Optimization",
      description: "Thoughtful content transformation during platform changes or redesigns.",
      deliverables: [
        "Content inventory & audit",
        "Migration planning & mapping",
        "Content rewriting & optimization",
        "Redirect strategy",
        "Post-migration QA"
      ],
      ideal: "Companies migrating platforms or consolidating content properties"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Solutions I Offer</h2>
        <p className="text-muted-foreground max-w-3xl">
          Tailored content solutions designed to solve real business challenges. Whether you need 
          strategic direction, hands-on execution, or both, I can help move your content forward.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {solutions.map((solution, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{solution.title}</CardTitle>
              <CardDescription>{solution.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col gap-6">
              <div>
                <div className="mb-3">What you get:</div>
                <div className="space-y-2">
                  {solution.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#2d9d7f' }} />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-auto pt-4 border-t">
                <Badge variant="outline" className="mb-2">Ideal for</Badge>
                <p className="text-sm text-muted-foreground">{solution.ideal}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

     
    </div>
  );
}
