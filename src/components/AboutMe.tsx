import image1 from "/assets/Maeve.png";
import image2 from "/assets/Skydiving.png";
import image3 from "/assets/Treetop.jpg";

export function AboutMe() {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <h2>About Me</h2>
          <div className="p-6 rounded-lg border-l-4 mb-6" style={{ 
            borderLeftColor: '#7ed9c3',
            backgroundColor: '#e8f9f5'
          }}>
            <p className="text-muted-foreground mb-3">
              In storytelling, "yada yada" removes unnecessary words to jump straight to what matters. 
              My content strategy follows the same principle—eliminating fluff and ensuring every word serves a clear purpose.
            </p>
            <p className="text-muted-foreground">
              Users don't read walls of text. They scan, they skim, and they leave when content gets complicated. 
              That's why I focus on creating content that's <strong>clear</strong>, <strong>simple</strong>, and <strong>actionable</strong>—
              cutting through the noise to deliver exactly what users need, nothing more.
            </p>
          </div>
          <p className="text-muted-foreground">
            I'm a content strategist with over 10 years of experience in educational content and technology.
            I have over 5 years in content strategy helping companies find their voice and tone and creating and identifying tools for writers to stick to the voice and tone. My approach combines strategic thinking 
            with creative problem-solving to create content that users understand and appreciate.
          </p>
          <p className="text-muted-foreground">
            I believe that great content starts with understanding your users. Whether 
            I'm developing a comprehensive content strategy or crafting microcopy, I focus 
            on creating experiences that are clear, engaging, and authentic.
          </p>
          <p className="text-muted-foreground">
            When I'm not working, you'll find me traveling, paddleboarding, playing boardgames (while admiring or critiquing their written instructions), 
            speaking at content strategy conferences, or mentoring aspiring content professionals.
          </p>
        <h3 className="mb-4">Life Beyond Content</h3>
        <p className="text-muted-foreground mb-4">
          I believe that the best content strategists bring diverse experiences to their work. 
          My adventurous spirit and love for new challenges directly influence how I approach content problems—
          with courage, creativity, and a willingness to take calculated risks.
        </p>
        <p className="text-muted-foreground mb-4">
          Whether I'm jumping out of a plane at 16,000 feet, navigating a challenging ropes course, 
          or spending quality time with my family, I'm constantly learning lessons about trust, clarity, 
          and communication. These experiences remind me that great content, like great adventures, 
          requires careful planning, clear direction, and the confidence to leap when the moment is right.
        </p>
        <p className="text-muted-foreground">
          Family is my anchor and my inspiration. The same patience, understanding, and adaptability 
          I bring to family life translates into how I collaborate with teams and craft content that 
          resonates with diverse audiences. After all, whether you're explaining why we need to jump 
          now or why a user needs to click here, it's all about clear, compassionate communication.
        </p>
          
        </div>
        
        <div className="space-y-4">
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src={image1}
              alt="Family time"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src={image2}
              alt="Skydiving adventure"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src={image3}
              alt="Ropes course"
              className="w-full h-full object-cover"
            />
          </div>
          

      
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="p-6 rounded-lg border-2" style={{ 
          backgroundColor: '#e8f9f5',
          borderColor: '#7ed9c3'
        }}>
          <div className="mb-2" style={{ color: '#2d9d7f' }}>10</div>
          <p className="text-muted-foreground">Years of Content Experience</p>
        </div>
        <div className="p-6 rounded-lg border-2" style={{ 
          backgroundColor: '#e8f9f5',
          borderColor: '#7ed9c3'
        }}>
          <div className="mb-2" style={{ color: '#2d9d7f' }}>2</div>
          <p className="text-muted-foreground">Conference Talks</p>
        </div>
      </div>

      
    </div>
  );
}
