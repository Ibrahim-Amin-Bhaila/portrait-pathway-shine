import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="heading-lg mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate mechanical engineering student with a focus on AI research, 
            optimization, and innovative problem-solving.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <h3 className="heading-md mb-6">Education & Background</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Currently pursuing a Bachelor of Science in Mechanical Engineering at Texas A&M University 
              with a perfect 4.0 GPA. My academic journey combines traditional engineering principles 
              with cutting-edge AI research and data optimization techniques.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Beyond academics, I'm actively involved in research projects that bridge the gap between 
              mechanical engineering and artificial intelligence, focusing on communication tools for 
              neurodivergent learners and optimization in healthcare systems.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Bachelor of Science in Mechanical Engineering</div>
                  <div className="text-sm text-muted-foreground">Texas A&M University • GPA: 4.0/4.0</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <Calendar className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold">Expected Graduation</div>
                  <div className="text-sm text-muted-foreground">May 2028</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-sm text-muted-foreground">Allen, TX</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-scale-in">
            <div className="card-elevated">
              <h4 className="font-semibold mb-4">Key Highlights</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Academic Excellence</span>
                  <span className="font-semibold text-primary">4.0 GPA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Research Experience</span>
                  <span className="font-semibold text-secondary">2+ Years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Competition Ranking</span>
                  <span className="font-semibold text-accent">3rd Place LSS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Sales Achievement</span>
                  <span className="font-semibold text-primary">$2000/day</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;