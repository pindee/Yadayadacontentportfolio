import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Heart, Lightbulb, Sparkles } from "lucide-react";

export function VoiceAndTone() {
  const principles = [
    {
      title: "Clear & Concise",
      description: "Every word serves a purpose. I eliminate jargon and complexity to make content accessible to all readers.",
      examples: ["User-friendly microcopy", "Scannable web content", "Simplified technical documentation"]
    },
    {
      title: "Empathetic & Human",
      description: "Content should feel like a conversation, not a lecture. I write with warmth and understanding.",
      examples: ["Error messages that help", "Onboarding that guides", "Support content that cares"]
    },
    {
      title: "Strategic & Intentional",
      description: "Every piece of content ladders up to business goals while meeting user needs.",
      examples: ["Conversion-focused CTAs", "SEO-optimized articles", "Goal-oriented navigation"]
    },
    {
      title: "Consistent & Trustworthy",
      description: "I build brand trust through consistent voice across all touchpoints and channels.",
      examples: ["Style guide development", "Brand voice standards", "Multi-channel consistency"]
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Voice & Tone Philosophy</h2>
        <p className="text-muted-foreground max-w-3xl">
          A well-defined voice and tone is the foundation of effective content. I help brands 
          discover and articulate their unique voice, then apply it consistently across all content touchpoints.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {principles.map((principle, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{principle.title}</CardTitle>
              <CardDescription>{principle.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {principle.examples.map((example, idx) => (
                  <Badge key={idx} variant="secondary">
                    {example}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>My Writing Principles</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
            <p className="text-muted-foreground">
              <strong>User-first:</strong> Always prioritize the user's needs and context over clever wordplay
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
            <p className="text-muted-foreground">
              <strong>Inclusive:</strong> Use language that welcomes everyone and avoids assumptions
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
            <p className="text-muted-foreground">
              <strong>Actionable:</strong> Guide users toward their goals with clear, helpful direction
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
            <p className="text-muted-foreground">
              <strong>Authentic:</strong> Build trust through honest, transparent communication
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="mt-12 pt-8 border-t">
        <div className="mb-6">
          <h2 className="mb-2">My Personal Voice Characteristics</h2>
          <p className="text-muted-foreground">
            How I communicate professionally across all interactions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-2">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-950 flex items-center justify-center mb-3">
                <Heart className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              </div>
              <CardTitle>Warm & Personable</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                You consistently infuse warmth and friendliness into your messages, even in 
                professional contexts. Whether you're coordinating logistics or responding to 
                a colleague, your tone is approachable and kind.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center mb-3">
                <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle>Helpful & Solution-Oriented</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                You're quick to offer resources, clarify processes, and guide others through 
                tasks. Your tone is supportive and proactive, often anticipating needs before 
                they're voiced.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-950 flex items-center justify-center mb-3">
                <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle>Playful & Creative</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                You bring a lighthearted energy to your communications, using humor, emojis, 
                and clever phrasing to keep things engaging. Even technical or logistical 
                messages carry a spark of personality.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
