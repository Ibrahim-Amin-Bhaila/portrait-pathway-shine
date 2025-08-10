import { Calendar, MapPin, Award, Users, Code, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Research Assistant - Lean Six Sigma in Radiology",
      company: "Texas A&M University",
      location: "Texas A&M University, TX",
      period: "December 2024 – Present",
      icon: <TrendingUp className="w-5 h-5" />,
      description: "Leading optimization research in radiology scheduling workflows using DMAIC methodology and AI-assisted solutions.",
      achievements: [
        "Applied DMAIC methodology to map radiology scheduling workflows",
        "Designed AI-assisted slotting concepts for reduced wait times",
        "Earned 3rd position in Lean Six Sigma competition under 10th IEOM International Conference",
        "Identified bottlenecks and optimization opportunities in healthcare systems"
      ],
      color: "primary"
    },
    {
      title: "Research Assistant - NeuroBridge Project",
      company: "Texas A&M University",
      location: "Texas A&M University, TX", 
      period: "August 2024 – Present",
      icon: <Users className="w-5 h-5" />,
      description: "Conducting user research and developing NLP-based adaptive feedback systems for neurodivergent learners.",
      achievements: [
        "Conducted comprehensive user research and data analysis",
        "Developed support framework using NLP for adaptive feedback",
        "Partnered with NASA's T2U program for NEXUS Deep Dive technology integration",
        "Presented research findings at American Society of Engineering Education (ASEE 2025)"
      ],
      color: "secondary"
    },
    {
      title: "Sales Representative",
      company: "Sunglass Hut",
      location: "Allen, TX",
      period: "May 2024 – Present",
      icon: <Award className="w-5 h-5" />,
      description: "Achieved exceptional sales performance while managing academic responsibilities and enhancing customer satisfaction.",
      achievements: [
        "Achieved $1500 in daily sales through effective customer engagement",
        "Enhanced customer satisfaction and drove business growth",
        "Balanced 15 work hours/week with 13 credit hour semester",
        "Demonstrated exceptional time management and reliability"
      ],
      color: "accent"
    },
    {
      title: "Software Debugging Intern",
      company: "Glennemore Technologies",
      location: "Karachi, Pakistan",
      period: "June 2022 – August 2022",
      icon: <Code className="w-5 h-5" />,
      description: "Contributed to software development projects through testing, debugging, and workflow optimization.",
      achievements: [
        "Used Python for comprehensive testing and debugging of existing programs",
        "Collaborated with team lead to resolve complex technical issues",  
        "Documented fixes and improved small workflow steps",
        "Reduced rework through systematic debugging approaches"
      ],
      color: "primary"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="heading-lg mb-6">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of my research, professional, and academic experiences across engineering and technology.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative animate-slide-in" style={{animationDelay: `${index * 0.2}s`}}>
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-background ${
                    exp.color === 'primary' ? 'bg-primary' :
                    exp.color === 'secondary' ? 'bg-secondary' :
                    exp.color === 'accent' ? 'bg-accent' : 'bg-primary'
                  }`}></div>
                  
                  <div className="ml-20">
                    <div className="card-elevated">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${
                            exp.color === 'primary' ? 'bg-primary/10 text-primary' :
                            exp.color === 'secondary' ? 'bg-secondary/10 text-secondary' :
                            exp.color === 'accent' ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'
                          }`}>
                            {exp.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{exp.title}</h3>
                            <p className="text-primary font-medium">{exp.company}</p>
                          </div>
                        </div>
                        <div className="text-right text-sm text-muted-foreground">
                          <div className="flex items-center gap-1 mb-1">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-start gap-3">
                            <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                              exp.color === 'primary' ? 'bg-primary' :
                              exp.color === 'secondary' ? 'bg-secondary' :
                              exp.color === 'accent' ? 'bg-accent' : 'bg-primary'
                            }`}></div>
                            <span className="text-sm text-muted-foreground leading-relaxed">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;