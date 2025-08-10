import { Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "ibrahimbhaila2006@gmail.com",
      href: "mailto:ibrahimbhaila2006@gmail.com",
      color: "primary"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "737-318-8264",
      href: "tel:737-318-8264",
      color: "secondary"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Allen, TX 75002",
      href: "#",
      color: "accent"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/ibrahim-bhaila",
      color: "primary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="heading-lg mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, research collaborations, 
            or innovative engineering projects. Let's connect!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="animate-slide-in">
              <h3 className="heading-md mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Currently seeking opportunities in mechanical engineering, AI research, 
                and optimization. I'm particularly interested in roles that combine 
                traditional engineering with modern AI/ML applications.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-background transition-all duration-300 group border border-transparent hover:border-card-border"
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    <div className={`p-3 rounded-lg ${
                      contact.color === 'primary' ? 'bg-primary/10 text-primary' :
                      contact.color === 'secondary' ? 'bg-secondary/10 text-secondary' :
                      contact.color === 'accent' ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{contact.label}</div>
                      <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {contact.value}
                      </div>
                    </div>
                    {contact.href.startsWith('http') && (
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    )}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="animate-scale-in">
              <div className="card-elevated">
                <h4 className="font-semibold mb-6">Quick Facts</h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="font-medium mb-2">Current Focus</h5>
                    <p className="text-sm text-muted-foreground">
                      AI research in communication tools and healthcare optimization using Lean Six Sigma methodologies.
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-2">Availability</h5>
                    <p className="text-sm text-muted-foreground">
                      Open to internships, research opportunities, and full-time positions starting after graduation (May 2028).
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-2">Interests</h5>
                    <div className="flex flex-wrap gap-2">
                      {['AI/ML', 'Optimization', 'Research', 'Engineering', 'Healthcare Tech'].map((interest, index) => (
                        <span key={index} className="text-xs px-3 py-1 rounded-full bg-secondary/10 text-secondary">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="animate-fade-up">
            <p className="text-muted-foreground mb-6">
              Ready to discuss opportunities or collaborate on innovative projects?
            </p>
            <a 
              href="mailto:ibrahimbhaila2006@gmail.com" 
              className="btn-accent"
            >
              Send me an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;