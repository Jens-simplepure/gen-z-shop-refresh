import { ShoppingBag, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const GenZNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Whateverwear", href: "#" },
    { label: "Headware", href: "#" },
    { label: "Stuff", href: "#" },
    { label: "Drops", href: "#", isNew: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground p-2 hover:text-primary transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Left Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link text-sm font-medium tracking-wide uppercase relative group"
              >
                {link.label}
                {link.isNew && (
                  <span className="absolute -top-2 -right-4 text-[10px] font-bold text-primary animate-bounce-subtle">
                    NEW
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <a href="#" className="block group">
              <h1 className="font-accent text-2xl md:text-3xl text-foreground transition-all duration-300 group-hover:text-primary group-hover:glow-text">
                Whatever Man
              </h1>
            </a>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button className="p-2 text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-110">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden md:block p-2 text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-110">
              <User className="w-5 h-5" />
            </button>
            <button className="relative p-2 text-foreground/70 hover:text-primary transition-all duration-300 hover:scale-110">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-lg font-medium uppercase tracking-wide text-foreground/70 hover:text-primary transition-colors py-2"
            >
              {link.label}
              {link.isNew && (
                <span className="ml-2 text-xs font-bold text-primary">NEW</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default GenZNavbar;
