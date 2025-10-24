import { Mail, Linkedin } from "lucide-react";
import headerImage from "figma:asset/64f1fc1f0d7ef1c4ebf13d4578c2b44576bf5831.png";

export function Header() {
  return (
    <header className="border-b-4 shadow-md" style={{ 
      borderBottomColor: '#7ed9c3',
      background: 'linear-gradient(135deg, #e8f9f5 0%, #d1f2ea 100%)'
    }}>
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 ring-2" style={{ ringColor: '#7ed9c3' }}>
              <img
                src={headerImage}
                alt="Emma Pindera"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <div className="mb-2 flex items-start gap-1 justify-center md:justify-start">
                <div>
                  <span 
                    className="inline-block" 
                    style={{ 
                      fontSize: '2rem',
                      fontWeight: '300',
                      letterSpacing: '0.05em',
                      color: '#2d9d7f',
                      fontFamily: 'Georgia, serif',
                      fontStyle: 'italic',
                      textShadow: '0 2px 4px rgba(126, 217, 195, 0.3)'
                    }}
                  >
                    Yada Yada
                  </span>
                  <span 
                    className="inline-block" 
                    style={{ 
                      fontSize: '2rem',
                      fontWeight: '600',
                      letterSpacing: '0.05em',
                      color: '#1f7a63',
                      fontFamily: 'Georgia, serif',
                      marginLeft: '0.35rem'
                    }}
                  >
                    content
                  </span>
                </div>
                <span 
                  style={{ 
                    fontSize: '0.65rem',
                    color: '#2d9d7f',
                    fontWeight: '500',
                    marginTop: '0.2rem'
                  }}
                >
                  ™
                </span>
              </div>
              <h2 className="mb-1">Emma Pindera, MET</h2>
              <p className="text-muted-foreground mb-3">
                Content Strategist
              </p>
              <p className="text-muted-foreground mb-4">
                "Yada yada" skips the fluff to get to what matters—my content does the same, ensuring every word serves a clear purpose.
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
