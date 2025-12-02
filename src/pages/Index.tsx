import GenZNavbar from "@/components/GenZNavbar";
import GenZFooter from "@/components/GenZFooter";
import ColorRecommendation from "@/components/ColorRecommendation";
import ComponentShowcase from "@/components/ComponentShowcase";
import BeforeAfter from "@/components/BeforeAfter";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Zap, Heart, TrendingUp } from "lucide-react";

const Index = () => {
  const recommendations = [
    {
      icon: Zap,
      title: "Electric Accent Colors",
      description: "Replace neutral tones with vibrant lime green and coral accents that pop against the dark background.",
    },
    {
      icon: Sparkles,
      title: "Glow & Animation",
      description: "Add subtle glow effects on hover, micro-interactions, and smooth transitions throughout the UI.",
    },
    {
      icon: Heart,
      title: "Personality & Voice",
      description: "Inject brand personality with playful copy, handwritten accent fonts, and relatable messaging.",
    },
    {
      icon: TrendingUp,
      title: "Social Proof",
      description: "Feature UGC, reviews, and social feeds prominently. Gen Z trusts peers over brands.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Live Preview Navigation */}
      <GenZNavbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="animate-slide-up">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4 animate-glow-pulse px-4 py-1 rounded-full border border-primary/30">
              Gen Z Design Recommendations
            </span>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl leading-none mb-6">
              MAKE YOUR SHOP
              <br />
              <span className="text-gradient-primary">UNFORGETTABLE</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Design recommendations for{" "}
              <span className="text-foreground font-medium">Whatever Man</span> to connect with Gen Z through bold colors, engaging interactions, and authentic vibes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="xl" className="group">
                View Recommendations
                <ArrowDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
              </Button>
              <Button variant="outline-glow" size="xl">
                Live Components Preview
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary/50" />
        </div>
      </section>

      {/* Key Recommendations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-secondary uppercase tracking-widest">
              Key Changes
            </span>
            <h2 className="font-display text-4xl md:text-6xl mt-2 mb-4">
              TOP <span className="text-gradient-secondary">RECOMMENDATIONS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendations.map((rec, index) => (
              <div
                key={rec.title}
                className="group p-8 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <rec.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">
                  {rec.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {rec.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <BeforeAfter />

      {/* Color Recommendations */}
      <ColorRecommendation />

      {/* Component Showcase */}
      <ComponentShowcase />

      {/* Live Footer Preview */}
      <GenZFooter />
    </div>
  );
};

export default Index;
