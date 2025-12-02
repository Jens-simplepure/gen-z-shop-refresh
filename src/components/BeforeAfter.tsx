import { ArrowRight } from "lucide-react";

const BeforeAfter = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">
            Transformation
          </span>
          <h2 className="font-display text-4xl md:text-6xl mt-2 mb-4">
            BEFORE VS <span className="text-gradient-primary">AFTER</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See the difference a Gen Z-focused redesign can make.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Before */}
          <div className="relative">
            <div className="absolute -top-3 left-4 z-10">
              <span className="bg-muted text-muted-foreground text-xs font-bold px-4 py-1 rounded-full">
                BEFORE
              </span>
            </div>
            <div className="bg-[#0a0a0a] rounded-2xl p-6 border border-border/30">
              {/* Simulated old navbar */}
              <div className="flex items-center justify-between py-4 border-b border-white/10">
                <div className="flex gap-6 text-sm text-white/70">
                  <span>Whateverwear</span>
                  <span>Headware</span>
                  <span>Stuff</span>
                </div>
                <span className="font-serif text-xl text-white italic">Whatever Man</span>
                <div className="flex gap-4 text-white/70">
                  <span>🔍</span>
                  <span>👤</span>
                  <span>🛒</span>
                </div>
              </div>
              {/* Simulated old footer */}
              <div className="pt-8 mt-8 border-t border-white/10 text-center">
                <p className="text-white/50 text-sm">© 2024 Whatever Man</p>
                <div className="flex justify-center gap-4 mt-4 text-white/30 text-sm">
                  <span>Privacy</span>
                  <span>Terms</span>
                  <span>Contact</span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground text-center">
              Basic, corporate, lacks personality
            </p>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center animate-pulse">
              <ArrowRight className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>

          {/* After */}
          <div className="relative lg:col-start-2 lg:row-start-1">
            <div className="absolute -top-3 left-4 z-10">
              <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full animate-glow-pulse">
                AFTER
              </span>
            </div>
            <div className="bg-background rounded-2xl p-6 border border-primary/30 shadow-[0_0_30px_hsl(82,100%,50%,0.1)]">
              {/* New navbar preview */}
              <div className="flex items-center justify-between py-4 border-b border-border/50">
                <div className="flex gap-6 text-sm">
                  <span className="text-foreground/70 hover:text-primary cursor-pointer transition-colors">
                    Whateverwear
                  </span>
                  <span className="text-foreground/70 hover:text-primary cursor-pointer transition-colors">
                    Headware
                  </span>
                  <span className="text-foreground/70 hover:text-primary cursor-pointer transition-colors">
                    Stuff
                  </span>
                  <span className="text-primary relative">
                    Drops
                    <span className="absolute -top-2 -right-6 text-[10px] font-bold animate-bounce-subtle">
                      NEW
                    </span>
                  </span>
                </div>
                <span className="font-accent text-xl text-foreground">Whatever Man</span>
                <div className="flex gap-3 text-foreground/70">
                  <span className="hover:text-primary cursor-pointer transition-colors">🔍</span>
                  <span className="hover:text-primary cursor-pointer transition-colors">👤</span>
                  <span className="relative hover:text-primary cursor-pointer transition-colors">
                    🛒
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                      0
                    </span>
                  </span>
                </div>
              </div>
              {/* New footer preview */}
              <div className="pt-8 mt-8 border-t border-border/50">
                <div className="text-center mb-4">
                  <span className="font-display text-2xl">
                    JOIN THE <span className="text-gradient-primary">MOVEMENT</span>
                  </span>
                </div>
                <div className="flex justify-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-secondary cursor-pointer transition-colors">
                    📷
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-accent cursor-pointer transition-colors">
                    🐦
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    🎵
                  </div>
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  Made with <span className="text-secondary">♥</span> for the culture
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-primary text-center font-medium">
              Bold, energetic, speaks to Gen Z
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
