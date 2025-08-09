import { Code, Wrench, Award, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5" />,
      color: "primary",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 88 },
        { name: "React", level: 80 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-5 h-5" />,
      color: "secondary",
      skills: [
        { name: "SolidWorks CAD", level: 85 },
        { name: "Git", level: 80 },
        { name: "AWS", level: 75 },
        { name: "API Development", level: 82 }
      ]
    },
    {
      title: "Methodologies",
      icon: <Brain className="w-5 h-5" />,
      color: "accent",
      skills: [
        { name: "Lean Six Sigma (DMAIC)", level: 88 },
        { name: "NLP Basics", level: 78 },
        { name: "Data Analysis", level: 85 },
        { name: "Debugging & Testing", level: 87 }
      ]
    },
    {
      title: "Certifications",
      icon: <Award className="w-5 h-5" />,
      color: "primary",
      skills: [
        { name: "SolidWorks 2024 Essential Training", level: 100 },
        { name: "AWS Cloud Essentials", level: 100 },
        { name: "OpenEDG Python Professional", level: 100 },
        { name: "LinkedIn Learning Verified", level: 100 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="heading-lg mb-6">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, certifications, and methodologies 
            gained through academic projects and professional experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-elevated animate-scale-in group">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg ${
                  category.color === 'primary' ? 'bg-primary/10 text-primary' :
                  category.color === 'secondary' ? 'bg-secondary/10 text-secondary' :
                  category.color === 'accent' ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'
                } group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${
                          category.color === 'primary' ? 'bg-gradient-to-r from-primary to-primary-light' :
                          category.color === 'secondary' ? 'bg-gradient-to-r from-secondary to-secondary-light' :
                          category.color === 'accent' ? 'bg-gradient-to-r from-accent to-accent-light' : 'bg-gradient-to-r from-primary to-primary-light'
                        }`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="card-glow max-w-2xl mx-auto">
            <h3 className="font-semibold text-lg mb-4">Honors & Activities</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-medium">IEOM Lean Six Sigma Competition</div>
                  <div className="text-sm text-muted-foreground">Achieved 3rd place certificate in IEOM LSS competition</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-medium">Angel League Volunteer</div>
                  <div className="text-sm text-muted-foreground">Supported inclusive softball camps for children with Down Syndrome</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;