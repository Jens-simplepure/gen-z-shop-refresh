import { Button } from "@/components/ui/button";
import { ShoppingBag, ArrowRight, Heart, Zap, Star } from "lucide-react";

const ComponentShowcase = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-secondary uppercase tracking-widest">
            UI Components
          </span>
          <h2 className="font-display text-4xl md:text-6xl mt-2 mb-4">
            BUTTONS & <span className="text-gradient-secondary">INTERACTIONS</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interactive elements with glow effects, gradients, and micro-animations that Gen Z loves.
          </p>
        </div>

        {/* Button Variants */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-8">
            <h3 className="font-display text-2xl text-foreground mb-6">
              Button Variants
            </h3>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="default" size="lg">
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart
                </Button>
                <span className="text-sm text-muted-foreground">Default (Glow on hover)</span>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="glow" size="lg">
                  <Zap className="w-5 h-5" />
                  Flash Sale
                </Button>
                <span className="text-sm text-muted-foreground">Animated Glow</span>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="gradient" size="lg">
                  Shop Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <span className="text-sm text-muted-foreground">Primary Gradient</span>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="gradient-secondary" size="lg">
                  <Heart className="w-5 h-5" />
                  Wishlist
                </Button>
                <span className="text-sm text-muted-foreground">Secondary Gradient</span>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="outline-glow" size="lg">
                  Learn More
                </Button>
                <span className="text-sm text-muted-foreground">Outline with Glow</span>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="pill" size="lg">
                  <Star className="w-4 h-4" />
                  Featured
                </Button>
                <span className="text-sm text-muted-foreground">Pill Style</span>
              </div>
            </div>
          </div>

          {/* Product Card Example */}
          <div>
            <h3 className="font-display text-2xl text-foreground mb-6">
              Product Card (Hover Me)
            </h3>
            <div className="card-hover bg-muted rounded-2xl overflow-hidden cursor-pointer group">
              <div className="aspect-square bg-gradient-dark relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-6xl text-foreground/10">32</span>
                </div>
                {/* Quick actions on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex gap-2">
                    <Button variant="gradient" className="flex-1">
                      Quick Add
                    </Button>
                    <Button variant="outline-glow" size="icon">
                      <Heart className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                {/* Sale tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    SALE
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-display text-xl text-foreground mb-1">
                  "32" TEE WHITE
                </h4>
                <div className="flex items-center gap-3">
                  <span className="text-primary font-bold">$39.99</span>
                  <span className="text-muted-foreground line-through text-sm">$49.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Typography Examples */}
        <div className="border-t border-border pt-16">
          <h3 className="font-display text-2xl text-foreground mb-8">
            Typography System
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Display Font</span>
              <p className="font-display text-5xl text-foreground mt-2">Bebas Neue</p>
              <p className="text-sm text-muted-foreground mt-2">Used for headlines, titles, and impactful text</p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Body Font</span>
              <p className="font-body text-3xl text-foreground mt-2">Inter</p>
              <p className="text-sm text-muted-foreground mt-2">Clean, readable for body copy and UI elements</p>
            </div>
            <div>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Accent Font</span>
              <p className="font-accent text-3xl text-foreground mt-2">Permanent Marker</p>
              <p className="text-sm text-muted-foreground mt-2">Handwritten feel for playful accents</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentShowcase;
