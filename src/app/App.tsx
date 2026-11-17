import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Header } from "./components/Header";
import { AboutMe } from "./components/AboutMe";
import { VoiceAndTone } from "./components/VoiceAndTone";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Talks } from "./components/Talks";
import { useEffect, useState } from "react";
import footerLogo from "figma:asset/859390ea10830c60fe96f1b91e17379a1ade57e8.png";
import { ImageWithAssetFallback } from "./components/ImageWithAssetFallback";
import { FALLBACK_URLS } from "./assets/fallback-config";

export default function App() {
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    // Set favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = footerLogo;
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={setActiveTab} />
      
      <main id="portfolio-content" className="container mx-auto px-4 py-12 md:py-20">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="mb-8 grid h-auto w-full grid-cols-2 gap-1 sm:grid-cols-5">
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="voice">Voice & Tone</TabsTrigger>
            <TabsTrigger value="projects">My Work</TabsTrigger>
            <TabsTrigger value="skills">What I Do</TabsTrigger>
            <TabsTrigger value="presentations">My Talks</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="mt-0">
            <AboutMe />
          </TabsContent>
          
          <TabsContent value="voice" className="mt-0">
            <VoiceAndTone />
          </TabsContent>
          
          <TabsContent value="projects" className="mt-0">
            <Projects />
          </TabsContent>
          
          <TabsContent value="skills" className="mt-0">
            <Skills />
          </TabsContent>
          
          <TabsContent value="presentations" className="mt-0">
            <Talks />
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="mt-20 border-t border-border bg-muted">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-4 flex justify-center">
              <ImageWithAssetFallback 
                src={footerLogo} 
                fallbackSrc={FALLBACK_URLS.footerBrandLogo}
                alt="Yada Yada content" 
                className="h-24"
              />
            </div>
            <p className="text-muted-foreground text-sm">© 2026 Emma Pindera. Available for freelance projects, conferences, speaking engagements, and consulting.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
