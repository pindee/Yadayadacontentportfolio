import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";

export function ConferencePresentations() {
  const presentations = [
    {
      title: "Pushing the Limits with our Resource Center",
      conference: "Pendomonium",
      location: "Raleigh, NC",
      date: "October 2024",
      audience: "2500+ attendees",
      description: "How PointClickCare customizes its Resource Center to create a personalized hub.",
      topics: ["Resource Center", "Personalization", "Customer Experience"]
    },
    {
      title: "Conquering Content Chaos:The Legendary Quest of Content Auditing and Maintenance",
      conference: "Lavacon",
      location: "Portland, OR",
      date: "October 2024",
      audience: "1000+ attendees",
      description: "Guiding content professionals through an eight-stage, quest-inspired framework for auditing and maintaining content, emphasizing data collection, insight generation, actionable improvements, and sustainable processes to transform chaos into organized, high-quality content.",
      topics: ["Content Audit", "Content Maintenance", "Content Strategy"]
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Conference Presentations</h2>
        <p className="text-muted-foreground max-w-3xl">
          I'm passionate about sharing knowledge and contributing to the content strategy community. 
          Here are some of my recent talks and workshops from conferences around the world.
        </p>
      </div>

      <div className="space-y-6">
        {presentations.map((presentation, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex flex-wrap gap-2 mb-3">
                {presentation.topics.map((topic, idx) => (
                  <Badge key={idx} variant="secondary">
                    {topic}
                  </Badge>
                ))}
              </div>
              <CardTitle>{presentation.title}</CardTitle>
              <CardDescription>{presentation.conference}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{presentation.description}</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{presentation.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{presentation.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{presentation.audience}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Speaking Inquiries</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            I'm always excited to speak at content strategy, UX writing, and design conferences. 
            I can tailor presentations to your event's theme and audience needs.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <div className="mb-2">Speaking Topics</div>
              <p className="text-sm text-muted-foreground">
                Voice & tone, content strategy, UX writing, content operations
              </p>
            </div>
            <div>
              <div className="mb-2">Format</div>
              <p className="text-sm text-muted-foreground">
                Keynotes, workshops, panels, or webinars
              </p>
            </div>
            <div>
              <div className="mb-2">Contact</div>
              <p className="text-sm text-muted-foreground">
                emmapindera@hotmail.com
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
