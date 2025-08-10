import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-muted/30 to-secondary-light/10">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-up">
          <h1 className="heading-xl mb-6">
            <span className="text-gradient">Ibrahim Amin</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Mechanical Engineering Student & Research Assistant
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Texas A&M University • 4.0 GPA • AI Research • Lean Six Sigma
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="#projects" 
              className="btn-hero"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="btn-outline"
            >
              Get In Touch
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.0</div>
              <div className="text-sm text-muted-foreground">GPA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3rd</div>
              <div className="text-sm text-muted-foreground">LSS Place</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2028</div>
              <div className="text-sm text-muted-foreground">Graduating</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;