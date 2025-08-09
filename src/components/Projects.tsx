import { ExternalLink, Github, Brain, Bot, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "NeuroBridge - AI Communication Coach",
      description: "An AI-assisted coach designed to improve workplace communication for neurodivergent learners using tone-detection prompts and adaptive feedback loops.",
      tags: ["AI/ML", "NLP", "Python", "API Development", "In Progress"],
      icon: <Brain className="w-6 h-6" />,
      features: [
        "Tone-detection algorithms for communication analysis",
        "Feedback loops for personalized learning",
        "API endpoints for progress tracking",
        "Dashboard integration planning"
      ],
      status: "In Progress"
    },
    {
      title: "Jarvis - Python Chatbot",
      description: "A rule-based AI assistant with intent handling and modular functions, featuring clean beginner-friendly code and comprehensive unit testing.",
      tags: ["Python", "Chatbot", "AI", "Unit Testing"],
      icon: <Bot className="w-6 h-6" />,
      features: [
        "Rule-based conversation handling",
        "Modular function architecture",
        "Comprehensive unit testing",
        "Beginner-friendly codebase"
      ],
      status: "Completed"
    },
    {
      title: "Web Portfolio Development",
      description: "Built personal portfolio website and restored the Este2mDreamers community site with modern web technologies and responsive design.",
      tags: ["React", "Web Development", "Portfolio", "Community"],
      icon: <Globe className="w-6 h-6" />,
      features: [
        "Personal portfolio showcase",
        "Community site restoration",
        "Responsive design implementation",
        "Modern web technologies"
      ],
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="heading-lg mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects spanning AI, web development, and engineering solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-glow animate-scale-in group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-secondary/10 group-hover:text-secondary transition-all duration-300">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === 'In Progress' 
                      ? 'bg-accent/10 text-accent' 
                      : 'bg-secondary/10 text-secondary'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="space-y-3 mb-6">
                {project.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <button className="flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  View Details
                </button>
                <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-4 h-4" />
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;