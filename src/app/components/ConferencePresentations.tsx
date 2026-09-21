import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Users, ExternalLink, Play, Presentation } from "lucide-react";
import { AccessRequestModal } from "./AccessRequestModal";

export function ConferencePresentations() {
  const [modal, setModal] = useState<{ open: boolean; title: string; label: string }>({
    open: false,
    title: "",
    label: "",
  });

  const openModal = (title: string, label: string) =>
    setModal({ open: true, title, label });

  const upcoming = [
    {
      title: "Creating Content AI Agents That Actually Work",
      conference: "LavaCon Content Strategy Conference 2026",
      location: "Charlotte, NC",
      date: "October 2026",
      description: "I'll explore how thoughtfully designed AI agents can help content teams work smarter, move faster, and focus more of their time on strategic and creative work.",
      topics: ["AI Agents", "Content Strategy", "Content Operations"],
      registerUrl: "https://lnkd.in/gYaSac2S",
    },
  ];

  const past = [
    {
      title: "From Pattern Library to System: Evolving a Content Design System",
      conference: "Button",
      location: "Online",
      date: "September 2026",
      description: "For years, I was building content pattern libraries, style guides, and documenting copy exceptions. Today, I have the opportunity to share how those patterns evolved into a content design system that helps teams create more consistent, accessible, and scalable experiences faster. I'll share our journey, what worked, what didn't, and the lessons we learned along the way.",
      topics: ["Content Design System", "Pattern Libraries", "Scale"],
      hasVideo: true,
      hasSlides: true,
    },
    {
      title: "Conquering Content Chaos: The Legendary Quest of Content Auditing and Maintenance",
      conference: "Lavacon",
      location: "Portland, OR",
      date: "October 2024",
      audience: "1000+ attendees",
      description: "Guiding content professionals through an eight-stage, quest-inspired framework for auditing and maintaining content, emphasizing data collection, insight generation, actionable improvements, and sustainable processes to transform chaos into organized, high-quality content.",
      topics: ["Content Audit", "Content Maintenance", "Content Strategy"],
      hasVideo: true,
      hasSlides: true,
    },
    {
      title: "Pushing the Limits with our Resource Center",
      conference: "Pendomonium",
      location: "Raleigh, NC",
      date: "October 2024",
      audience: "2500+ attendees",
      description: "How PointClickCare customizes its Resource Center to create a personalized hub.",
      topics: ["Resource Center", "Personalization", "Customer Experience"],
      hasVideo: false,
      hasSlides: true,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">Conference Presentations</h2>
        <p className="text-muted-foreground max-w-3xl">
          I'm passionate about sharing knowledge and contributing to the content strategy community.
          Here are my upcoming talks and recent presentations.
        </p>
      </div>

      {/* Upcoming */}
      <div>
        <h3 className="mb-4">Upcoming</h3>
        <div className="space-y-6">
          {upcoming.map((pres, index) => (
            <Card key={index} className="border-2" style={{ borderColor: "#7ed9c3" }}>
              <CardHeader>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge style={{ backgroundColor: "#7ed9c3", color: "#1a1a1a" }}>Upcoming</Badge>
                  {pres.topics.map((topic, idx) => (
                    <Badge key={idx} variant="secondary">{topic}</Badge>
                  ))}
                </div>
                <CardTitle>{pres.title}</CardTitle>
                <CardDescription>{pres.conference}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{pres.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{pres.date}</span>
                  </div>
                  {pres.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{pres.location}</span>
                    </div>
                  )}
                </div>
                {pres.registerUrl && (
                  <a
                    href={pres.registerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#2d9d7f" }}
                  >
                    Register now
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Past */}
      <div>
        <h3 className="mb-4">Past Presentations</h3>
        <div className="mb-6 p-4 rounded-lg border-l-4 flex flex-col sm:flex-row sm:items-center gap-4" style={{ borderLeftColor: "#7ed9c3", backgroundColor: "#e8f9f5" }}>
          <p className="text-sm text-muted-foreground flex-1">
            These recordings and slides belong to the respective conferences, so I'm not able to share them publicly. Click the buttons below to request access for specific resources by email. You can click <strong>Request all conferences</strong>, to request access to all resources. I'll review requests and grant access as soon as I can.
          </p>
          <button
            onClick={() => openModal("All Conferences", "all conference resources")}
            className="shrink-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium border transition-colors hover:bg-white"
            style={{ borderColor: "#7ed9c3", color: "#2d9d7f" }}
          >
            <Presentation className="w-3.5 h-3.5" />
            Request all conferences
          </button>
        </div>
        <div className="space-y-6">
          {past.map((presentation, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  {presentation.topics.map((topic, idx) => (
                    <Badge key={idx} variant="secondary">{topic}</Badge>
                  ))}
                </div>
                <CardTitle>{presentation.title}</CardTitle>
                <CardDescription>{presentation.conference}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{presentation.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{presentation.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{presentation.location}</span>
                  </div>
                  {"audience" in presentation && presentation.audience && (
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{presentation.audience}</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  {presentation.hasVideo ? (
                    <button
                      onClick={() => openModal(presentation.title, "recording")}
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium border transition-colors hover:bg-muted"
                      style={{ borderColor: "#7ed9c3", color: "#2d9d7f" }}
                    >
                      <Play className="w-3.5 h-3.5" />
                      Request recording
                    </button>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground italic">
                      <Play className="w-3.5 h-3.5" />
                      Recording unavailable
                    </span>
                  )}
                  {presentation.hasSlides && (
                    <button
                      onClick={() => openModal(presentation.title, "slides")}
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium border transition-colors hover:bg-muted"
                      style={{ borderColor: "#7ed9c3", color: "#2d9d7f" }}
                    >
                      <Presentation className="w-3.5 h-3.5" />
                      Request slides
                    </button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="border-2" style={{ backgroundColor: "#e8f9f5", borderColor: "#7ed9c3" }}>
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

      <AccessRequestModal
        open={modal.open}
        onOpenChange={(open) => setModal(prev => ({ ...prev, open }))}
        itemTitle={modal.title}
        requestLabel={modal.label}
      />
    </div>
  );
}
