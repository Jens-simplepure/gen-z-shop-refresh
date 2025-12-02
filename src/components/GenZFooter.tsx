import { Instagram, Twitter, Youtube, Music2, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const GenZFooter = () => {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#", color: "hover:text-secondary" },
    { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-accent" },
    { icon: Youtube, label: "YouTube", href: "#", color: "hover:text-destructive" },
    { icon: Music2, label: "TikTok", href: "#", color: "hover:text-primary" },
  ];

  const footerLinks = {
    Shop: ["New Arrivals", "Best Sellers", "Sale", "Gift Cards"],
    Help: ["Shipping & Returns", "FAQ", "Size Guide", "Contact Us"],
    About: ["Our Story", "Sustainability", "Careers", "Press"],
  };

  return (
    <footer className="relative bg-gradient-dark border-t border-border/50 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section - Newsletter */}
        <div className="text-center mb-16 animate-fade-in">
          <h3 className="font-display text-4xl md:text-5xl mb-3 tracking-wide">
            JOIN THE <span className="text-gradient-primary">MOVEMENT</span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Get early access to drops, exclusive deals, and behind-the-scenes content.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1 group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 pl-12 pr-4 bg-muted border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <Button variant="gradient" size="lg" className="group">
              Subscribe
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </div>

        {/* Middle Section - Links & Social */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display text-lg text-foreground mb-4 tracking-wide">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Links */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4 tracking-wide">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  onMouseEnter={() => setIsHovered(label)}
                  onMouseLeave={() => setIsHovered(null)}
                  className={`p-3 bg-muted rounded-xl text-muted-foreground transition-all duration-300 hover:scale-110 ${color} ${
                    isHovered === label ? "shadow-lg" : ""
                  }`}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-accent text-xl text-foreground">Whatever Man</span>
            <span className="text-muted-foreground">© 2024</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Accessibility
            </a>
          </div>

          {/* Fun Gen Z Element */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Made with</span>
            <span className="text-secondary animate-pulse">♥</span>
            <span className="text-muted-foreground">for the culture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GenZFooter;
