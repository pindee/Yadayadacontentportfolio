import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Header } from "./components/Header";
import { AboutMe } from "./components/AboutMe";
import { VoiceAndTone } from "./components/VoiceAndTone";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Solutions } from "./components/Solutions";
import { ConferencePresentations } from "./components/ConferencePresentations";
import { useEffect } from "react";
import faviconImage from "figma:asset/fb899e620f0393f7ff809ef26f11961b1840d216.png";
import footerLogo from "figma:asset/859390ea10830c60fe96f1b91e17379a1ade57e8.png";

export default function App() {
  useEffect(() => {
    // Set favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = faviconImage;
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        <Tabs defaultValue="about" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="voice">Voice & Tone</TabsTrigger>
            <TabsTrigger value="projects">My Projects</TabsTrigger>
            <TabsTrigger value="skills">My Skills</TabsTrigger>
            <TabsTrigger value="solutions">My Solutions</TabsTrigger>
            <TabsTrigger value="presentations">Presentations</TabsTrigger>
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
          
          <TabsContent value="solutions" className="mt-0">
            <Solutions />
          </TabsContent>
          
          <TabsContent value="presentations" className="mt-0">
            <ConferencePresentations />
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="border-t-2 mt-16" style={{ 
        borderTopColor: '#7ed9c3',
        backgroundColor: '#f9fafb'
      }}>
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-4 flex justify-center">
              <img 
                src={footerLogo} 
                alt="Yada Yada content" 
                className="h-40"
              />
            </div>
            <p className="text-muted-foreground text-sm">© 2025 Emma Pindera. Available for freelance projects and consulting.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
