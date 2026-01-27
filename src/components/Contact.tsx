import { portfolioData } from "@/data/portfolioData";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

export const Contact = () => {
  const { contact, personal } = portfolioData;

  const contactInfo = [
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone}` },
    { icon: MapPin, label: "Location", value: contact.location, href: null },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: contact.github },
    { icon: Linkedin, label: "LinkedIn", href: contact.linkedin },
  ];

  return (
    <section id="contact" className="bg-secondary/30">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-4">
          <Send size={24} />
          <h2 className="section-title mb-0">Get in Touch</h2>
        </div>
        <p className="section-subtitle">Let's connect and build something amazing</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="p-3 bg-primary text-primary-foreground rounded-lg">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="font-medium hover:text-muted-foreground transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-border">
              <h4 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">
                Connect with me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border rounded-lg hover:bg-secondary transition-colors"
                    aria-label={label}
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Message Card */}
          <div className="p-8 bg-card border border-border rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Ready to work together?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new opportunities, interesting projects, or collaborations. 
              Feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <a
                href={`mailto:${contact.email}`}
                className="btn-primary w-full justify-center"
              >
                <Mail size={18} />
                Send an Email
              </a>
              <a
                href={personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full justify-center"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
