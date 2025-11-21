import { Mail, Linkedin } from "lucide-react";
import headerImage from "figma:asset/64f1fc1f0d7ef1c4ebf13d4578c2b44576bf5831.png";
import logoImage from "figma:asset/75f4d8401f9705e2ddfe66989fd8fc444db1f19a.png";
import iconLogo from "figma:asset/659c4452656d58cf0e110b9213e6f29b92650b40.png";
import { ImageWithAssetFallback } from "./ImageWithAssetFallback";
import { FALLBACK_URLS } from "../assets/fallback-config";

export function Header() {
  return (
    <header className="border-b-4 shadow-md" style={{ 
      borderBottomColor: '#7ed9c3',
      background: 'linear-gradient(135deg, #e8f9f5 0%, #d1f2ea 100%)'
    }}>
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-6">
            {/* Top row: Headshot/name/links, Icon Logo, and Text Logo */}
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
              {/* Left: Headshot and name/links */}
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 ring-2" style={{ ringColor: '#7ed9c3' }}>
                  <ImageWithAssetFallback
                    src={headerImage}
                    fallbackSrc={FALLBACK_URLS.headerImage}
                    alt="Emma Pindera"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="mb-1">Emma Pindera, MET</h2>
                  <p className="text-muted-foreground mb-3">
                    Content Strategist
                  </p>
                  <div className="flex gap-4 justify-center md:justify-start">
                    <a
                      href="mailto:emmapindera@hotmail.com"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Email</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/emmapindera/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Center: Icon Logo */}
              <div className="flex items-center justify-center">
                <ImageWithAssetFallback
                  src={iconLogo}
                  fallbackSrc={FALLBACK_URLS.iconLogo}
                  alt="Yada Yada Icon"
                  className="h-12"
                />
              </div>
              
              {/* Right: Logo */}
              <div className="flex items-center justify-center">
                <ImageWithAssetFallback
                  src={logoImage}
                  fallbackSrc={FALLBACK_URLS.logoImage}
                  alt="Yada Yada content" 
                  className="h-24"
                />
              </div>
            </div>
            
            {/* Bottom row: Tagline */}
            <p className="text-muted-foreground text-center">
              "Yada yada" skips the fluff to get to what matters—my content does the same, ensuring every word serves a clear purpose.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}