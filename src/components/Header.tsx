import { Mail, Linkedin } from "lucide-react";
import headerImage from "figma:asset/64f1fc1f0d7ef1c4ebf13d4578c2b44576bf5831.png";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
              <img
                src={headerImage}
                alt="Emma Pindera"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="mb-4 flex items-start gap-1">
                <div>
                  <span 
                    className="inline-block" 
                    style={{ 
                      fontSize: '2.5rem',
                      fontWeight: '300',
                      letterSpacing: '0.05em',
                      color: '#7ed9c3',
                      fontFamily: 'Georgia, serif',
                      fontStyle: 'italic',
                      textShadow: '0 2px 4px rgba(126, 217, 195, 0.2)'
                    }}
                  >
                    Yada Yada
                  </span>
                  <span 
                    className="inline-block" 
                    style={{ 
                      fontSize: '2.5rem',
                      fontWeight: '600',
                      letterSpacing: '0.05em',
                      color: '#5bc4ab',
                      fontFamily: 'Georgia, serif',
                      marginLeft: '0.35rem'
                    }}
                  >
                    content
                  </span>
                </div>
                <span 
                  style={{ 
                    fontSize: '0.75rem',
                    color: '#7ed9c3',
                    fontWeight: '500',
                    marginTop: '0.25rem'
                  }}
                >
                  ™
                </span>
              </div>
              <h2 className="mb-2">Emma Pindera, MET</h2>
              <p className="text-muted-foreground mb-4">
                Content Strategist
              </p>
              <p className="text-muted-foreground mb-2">
                "Yada yada" skips the fluff to get to what matters—my content does the same, ensuring every word serves a clear purpose.
              </p>
              <p className="text-muted-foreground mb-6">
                Crafting clear content solutions that connect brands with their audiences. 
                Specializing in voice & tone development, content strategy, and user-centered writing.
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
        </div>
      </div>
    </header>
  );
}
