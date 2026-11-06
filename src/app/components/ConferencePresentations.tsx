import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Calendar,
  MapPin,
  Users,
  ExternalLink,
  Play,
  Presentation,
  Mic,
  Info,
} from "lucide-react";
import { AccessRequestModal } from "./AccessRequestModal";
import { ImageWithAssetFallback } from "./ImageWithAssetFallback";
import { FALLBACK_URLS } from "../assets/fallback-config";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import button2026TalkGraphic from "../../imports/image.png";
import lavaCon2026TalkGraphic from "../../imports/image-1.png";
import contentMattersPodcastGraphic from "../../imports/image-2.png";
import lavaCon2024TalkGraphic from "../../imports/image-3.png";

export function ConferencePresentations() {
  const [modal, setModal] = useState<{
    open: boolean;
    title: string;
    label: string;
  }>({
    open: false,
    title: "",
    label: "",
  });

  const openModal = (title: string, label: string) =>
    setModal({ open: true, title, label });

  const upcoming = [
    {
      type: "podcast" as const,
      title: "Building Adaptable Content Systems with AI",
      conference: "The Content Matters Podcast",
      host: "Barb Mosher Zinck",
      location: "Online",
      date: "November 19, 2026",
      about:
        "The Content Matters Podcast is a monthly podcast sponsored by Ingeniux. It dives into everything content practitioners need to create great content-rich experiences, whether for technical publishing, web experiences, or customer experience. I'll be joining host Barb Mosher Zinck to share my perspective on content strategy.",
      description:
        "How can teams use AI to improve content workflows without losing consistency or human judgment? I join Barb Mosher Zinck to discuss practical AI use cases across content audits, design systems, and technical documentation.",
      topics: [
        "Content Strategy",
        "Content Operations",
        "Customer Experience",
      ],
      podcastUrl:
        "https://info.ingeniux.com/content-matters-podcast",
      registerUrl:
        "https://www.linkedin.com/events/7523429610462711808/",
      graphic: contentMattersPodcastGraphic,
      graphicFallback: FALLBACK_URLS.contentMattersPodcast,
      graphicAlt:
        "Content Matters podcast graphic for Building Adaptable Content Systems with AI",
    },
    {
      type: "podcast" as const,
      title: "TBD",
      conference: "Inside Tech Comm",
      host: "Zohra Mubeena Mutabanna",
      location: "Online",
      date: "TBD",
      about:
        "Inside Tech Comm explores how technology, content, and the changing workplace are reshaping technical communication and the people behind it. Through candid conversations with practitioners and thinkers, the show looks beyond tools and trends to examine how the work is evolving, how people are navigating that change, and what it means for the future of the profession.",
      description:
        "I'll be joining host Zohra Mubeena Mutabanna on Inside Tech Comm. Episode details and the release date are coming soon.",
      topics: [
        "Technical Communication",
        "Content Strategy",
      ],
      podcastUrl: "https://www.insidetechcomm.show/",
      registerUrl: "",
    },
  ];

  const past = [
    {
      type: "conference" as const,
      title: "Creating Content AI Agents That Actually Work",
      conference: "LavaCon",
      location: "Charlotte, NC",
      date: "October 25–28, 2026",
      about:
        "LavaCon is an annual conference for content strategists, technical communicators, and content operations professionals. Now in its 24th year, it brings together more than 70 sessions and workshops focused on scaling content operations, preparing content for AI, and demonstrating measurable business value. In-person and virtual attendance options are available.",
      description:
        "I'll explore how thoughtfully designed AI agents can help content teams work smarter, move faster, and focus more of their time on strategic and creative work.",
      topics: [
        "AI Agents",
        "Content Strategy",
        "Content Operations",
      ],
      hasVideo: true,
      hasSlides: true,
      graphic: lavaCon2026TalkGraphic,
      graphicFallback: FALLBACK_URLS.lavaCon2026Talk,
      graphicAlt:
        "LavaCon 2026 graphic for Creating Content AI Agents That Actually Work",
    },
    {
      type: "conference" as const,
      title:
        "From Pattern Library to System: Evolving a Content Design System",
      conference: "Button",
      location: "Online",
      date: "September 23–25, 2026",
      about:
        "Button is a practitioner-focused conference for content designers navigating the fast-changing landscape of AI, shifting roles, and evolving expectations. It exists to bring practitioners together to share practical ideas, ask better questions, and figure out what comes next, together.",
      description:
        "For years, I was building content pattern libraries, style guides, and documenting copy exceptions. Today, I have the opportunity to share how those patterns evolved into a content design system that helps teams create more consistent, accessible, and scalable experiences faster. I'll share our journey, what worked, what didn't, and the lessons we learned along the way.",
      topics: [
        "Content Design System",
        "Pattern Libraries",
        "Scale",
      ],
      hasVideo: true,
      hasSlides: true,
      graphic: button2026TalkGraphic,
      graphicFallback: FALLBACK_URLS.button2026Talk,
      graphicAlt:
        "Button 2026 graphic for From Pattern Library to System",
    },
    {
      type: "conference" as const,
      title:
        "Conquering Content Chaos: The Legendary Quest of Content Auditing and Maintenance",
      conference: "LavaCon",
      location: "Portland, OR",
      date: "October 27–30, 2024",
      audience: "1000+ attendees",
      about:
        "LavaCon is an annual conference for content strategists, technical communicators, and content operations professionals, focused on reducing costs and generating revenue through state-of-the-art publishing technologies and content practices.",
      description:
        "Guiding content professionals through an eight-stage, quest-inspired framework for auditing and maintaining content, emphasizing data collection, insight generation, actionable improvements, and sustainable processes to transform chaos into organized, high-quality content.",
      topics: [
        "Content Audit",
        "Content Maintenance",
        "Content Strategy",
      ],
      hasVideo: true,
      hasSlides: true,
      graphic: lavaCon2024TalkGraphic,
      graphicFallback: FALLBACK_URLS.lavaCon2024Talk,
      graphicAlt:
        "LavaCon 2024 graphic for Conquering Content Chaos",
    },
    {
      type: "conference" as const,
      title: "Pushing the Limits with our Resource Center",
      conference: "Pendomonium",
      location: "Raleigh, NC",
      date: "October 7–9, 2024",
      audience: "2500+ attendees",
      about:
        "Pendomonium is Pendo's annual product event, bringing together 1,000+ product leaders across Product, Customer Success, UX, Marketing, and Revenue for world-class keynotes, 20+ hands-on breakout sessions, and real networking opportunities.",
      description:
        "How PointClickCare customizes its Resource Center to create a personalized hub.",
      topics: [
        "Resource Center",
        "Personalization",
        "Customer Experience",
      ],
      hasVideo: false,
      hasSlides: true,
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4">My Talks</h2>
        <p className="text-muted-foreground max-w-3xl">
          I'm passionate about sharing knowledge and
          contributing to the content strategy community. Here
          are my upcoming talks and recent presentations.
        </p>
      </div>

      {/* Upcoming */}
      <div>
        <h3 className="mb-4">Upcoming</h3>
        <div className="space-y-6">
          {upcoming.map((pres, index) => (
            <Card
              key={index}
              className="border-2"
              style={{ borderColor: "#D6A64B" }}
            >
              <CardHeader>
                <div
                  className={
                    "graphic" in pres
                      ? "grid gap-5 md:grid-cols-[minmax(0,1fr)_18rem] md:items-start"
                      : ""
                  }
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge
                        style={{
                          backgroundColor: "#D6A64B",
                          color: "#263747",
                        }}
                      >
                        Upcoming
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        {pres.type === "podcast" ? (
                          <Mic className="w-3 h-3" />
                        ) : (
                          <Presentation className="w-3 h-3" />
                        )}
                        {pres.type === "podcast"
                          ? "Podcast"
                          : "Conference"}
                      </Badge>
                      {pres.topics.map((topic, idx) => (
                        <Badge key={idx} variant="secondary">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="mt-[30px] text-2xl leading-tight">
                      {pres.title}
                    </CardTitle>
                    <CardDescription>
                      <span className="inline-flex items-center gap-1.5">
                        {pres.conference}
                        {"about" in pres && pres.about && (
                          <Popover>
                            <PopoverTrigger asChild>
                              <button
                                type="button"
                                aria-label={`About ${pres.conference}`}
                                className="inline-flex size-5 items-center justify-center rounded-full border border-[#91A18D] text-[#438184] transition-colors hover:bg-[#EEF0E9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#438184]"
                              >
                                <Info className="size-3" />
                              </button>
                            </PopoverTrigger>
                            <PopoverContent
                              align="start"
                              className="text-sm leading-relaxed"
                            >
                              {pres.about}
                            </PopoverContent>
                          </Popover>
                        )}
                      </span>
                      {"host" in pres && pres.host && (
                        <span className="block text-xs mt-0.5">
                          Hosted by {pres.host}
                        </span>
                      )}
                    </CardDescription>
                  </div>
                  {"graphic" in pres && pres.graphic && (
                    <ImageWithAssetFallback
                      src={pres.graphic}
                      fallbackSrc={pres.graphicFallback}
                      alt={pres.graphicAlt}
                      className="aspect-video w-full rounded-lg border border-border bg-muted object-cover"
                    />
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {pres.description}
                </p>
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
                <div className="flex flex-wrap gap-3">
                  {"podcastUrl" in pres && pres.podcastUrl && (
                    <a
                      href={pres.podcastUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium border transition-colors hover:bg-muted"
                      style={{
                        borderColor: "#91A18D",
                        color: "#34465C",
                      }}
                    >
                      <Mic className="w-3.5 h-3.5" />
                      Visit podcast
                    </a>
                  )}
                  {pres.registerUrl && (
                    <a
                      href={pres.registerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: "#34465C" }}
                    >
                      Register now
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Past */}
      <div>
        <h3 className="mb-4">Past Talks</h3>
        <div
          className="mb-6 p-4 rounded-lg border-l-4 flex flex-col sm:flex-row sm:items-center gap-4"
          style={{
            borderLeftColor: "#91A18D",
            backgroundColor: "#EEF0E9",
          }}
        >
          <p className="text-sm text-muted-foreground flex-1">
            These recordings and slides belong to the respective
            conferences, so I'm not able to share them publicly.
            Click the buttons below to request access for
            specific resources by email. You can click{" "}
            <strong>Request all talks</strong>, to request
            access to all resources. I'll review requests and
            grant access as soon as I can.
          </p>
          <button
            onClick={() =>
              openModal(
                "All Conferences",
                "all conference resources",
              )
            }
            className="shrink-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium border transition-colors hover:bg-white"
            style={{ borderColor: "#438184", color: "#34465C" }}
          >
            <Presentation className="w-3.5 h-3.5" />
            Request all talks
          </button>
        </div>
        <div className="space-y-6">
          {past.map((presentation, index) => (
            <Card key={index}>
              <CardHeader>
                <div
                  className={
                    "graphic" in presentation
                      ? "grid gap-5 md:grid-cols-[minmax(0,1fr)_18rem] md:items-start"
                      : ""
                  }
                >
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        {presentation.type === "podcast" ? (
                          <Mic className="w-3 h-3" />
                        ) : (
                          <Presentation className="w-3 h-3" />
                        )}
                        {presentation.type === "podcast"
                          ? "Podcast"
                          : "Conference"}
                      </Badge>
                      {presentation.topics.map((topic, idx) => (
                        <Badge key={idx} variant="secondary">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="mt-[30px] text-2xl leading-tight">
                      {presentation.title}
                    </CardTitle>
                    <CardDescription>
                      <span className="inline-flex items-center gap-1.5">
                        {presentation.conference}
                        {"about" in presentation &&
                          presentation.about && (
                            <Popover>
                              <PopoverTrigger asChild>
                                <button
                                  type="button"
                                  aria-label={`About ${presentation.conference}`}
                                  className="inline-flex size-5 items-center justify-center rounded-full border border-[#91A18D] text-[#438184] transition-colors hover:bg-[#EEF0E9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#438184]"
                                >
                                  <Info className="size-3" />
                                </button>
                              </PopoverTrigger>
                              <PopoverContent
                                align="start"
                                className="text-sm leading-relaxed"
                              >
                                {presentation.about}
                              </PopoverContent>
                            </Popover>
                          )}
                      </span>
                    </CardDescription>
                  </div>
                  {"graphic" in presentation &&
                    presentation.graphic && (
                      <ImageWithAssetFallback
                        src={presentation.graphic}
                        fallbackSrc={
                          presentation.graphicFallback
                        }
                        alt={presentation.graphicAlt}
                        className="aspect-video w-full rounded-lg border border-border bg-muted object-cover"
                      />
                    )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {presentation.description}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{presentation.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{presentation.location}</span>
                  </div>
                  {"audience" in presentation &&
                    presentation.audience && (
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{presentation.audience}</span>
                      </div>
                    )}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  {presentation.hasVideo ? (
                    <button
                      onClick={() =>
                        openModal(
                          presentation.title,
                          "recording",
                        )
                      }
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium border transition-colors hover:bg-muted"
                      style={{
                        borderColor: "#91A18D",
                        color: "#34465C",
                      }}
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
                      onClick={() =>
                        openModal(presentation.title, "slides")
                      }
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium border transition-colors hover:bg-muted"
                      style={{
                        borderColor: "#91A18D",
                        color: "#34465C",
                      }}
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

      <Card
        className="border-2"
        style={{
          backgroundColor: "#E1ECEB",
          borderColor: "#438184",
        }}
      >
        <CardHeader>
          <CardTitle>Speaking Inquiries</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            I'm always excited to speak at content strategy, UX
            writing, and design conferences. I can tailor
            presentations to your event's theme and audience
            needs.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <div className="mb-2">Speaking Topics</div>
              <p className="text-sm text-muted-foreground">
                Voice & tone, content strategy, UX writing,
                content operations
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
        onOpenChange={(open) =>
          setModal((prev) => ({ ...prev, open }))
        }
        itemTitle={modal.title}
        requestLabel={modal.label}
      />
    </div>
  );
}
