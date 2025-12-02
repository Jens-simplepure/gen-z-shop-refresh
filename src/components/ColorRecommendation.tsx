import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ColorSwatchProps {
  name: string;
  hsl: string;
  hex: string;
  usage: string;
}

const ColorSwatch = ({ name, hsl, hex, usage }: ColorSwatchProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative">
      <div
        className="aspect-square rounded-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl cursor-pointer"
        style={{ backgroundColor: `hsl(${hsl})` }}
        onClick={() => copyToClipboard(hex)}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          {copied ? (
            <Check className="w-8 h-8 text-white drop-shadow-lg" />
          ) : (
            <Copy className="w-6 h-6 text-white drop-shadow-lg" />
          )}
        </div>
      </div>
      <div className="mt-3">
        <h4 className="font-display text-lg text-foreground">{name}</h4>
        <p className="text-sm text-muted-foreground font-mono">{hex}</p>
        <p className="text-xs text-muted-foreground mt-1">{usage}</p>
      </div>
    </div>
  );
};

const ColorRecommendation = () => {
  const primaryColors = [
    {
      name: "Electric Lime",
      hsl: "82, 100%, 50%",
      hex: "#AAFF00",
      usage: "CTAs, highlights, accent text",
    },
    {
      name: "Hot Coral",
      hsl: "12, 100%, 64%",
      hex: "#FF6B47",
      usage: "Secondary actions, sales, alerts",
    },
    {
      name: "Cyber Cyan",
      hsl: "180, 100%, 50%",
      hex: "#00FFFF",
      usage: "Links, interactive elements",
    },
  ];

  const neutralColors = [
    {
      name: "Void Black",
      hsl: "0, 0%, 4%",
      hex: "#0A0A0A",
      usage: "Primary background",
    },
    {
      name: "Carbon",
      hsl: "0, 0%, 7%",
      hex: "#121212",
      usage: "Cards, elevated surfaces",
    },
    {
      name: "Smoke",
      hsl: "0, 0%, 60%",
      hex: "#999999",
      usage: "Muted text, placeholders",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Color System
          </span>
          <h2 className="font-display text-4xl md:text-6xl mt-2 mb-4">
            RECOMMENDED <span className="text-gradient-primary">PALETTE</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bold, energetic colors that resonate with Gen Z. Click any swatch to copy the hex code.
          </p>
        </div>

        {/* Accent Colors */}
        <div className="mb-16">
          <h3 className="font-display text-2xl mb-6 text-foreground">
            Accent Colors
          </h3>
          <div className="grid grid-cols-3 gap-6">
            {primaryColors.map((color) => (
              <ColorSwatch key={color.name} {...color} />
            ))}
          </div>
        </div>

        {/* Neutral Colors */}
        <div className="mb-16">
          <h3 className="font-display text-2xl mb-6 text-foreground">
            Background & Neutrals
          </h3>
          <div className="grid grid-cols-3 gap-6">
            {neutralColors.map((color) => (
              <ColorSwatch key={color.name} {...color} />
            ))}
          </div>
        </div>

        {/* Gradient Examples */}
        <div>
          <h3 className="font-display text-2xl mb-6 text-foreground">
            Gradient Options
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-32 rounded-2xl bg-gradient-primary flex items-center justify-center">
              <span className="font-display text-xl text-primary-foreground">
                Primary Gradient
              </span>
            </div>
            <div className="h-32 rounded-2xl bg-gradient-secondary flex items-center justify-center">
              <span className="font-display text-xl text-secondary-foreground">
                Secondary Gradient
              </span>
            </div>
            <div className="h-32 rounded-2xl bg-gradient-accent flex items-center justify-center">
              <span className="font-display text-xl text-accent-foreground">
                Accent Gradient
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorRecommendation;
