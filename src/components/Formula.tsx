import { BookOpen, Eye, MousePointer, RotateCcw } from "lucide-react";

const Formula = () => {
  const steps = [
    {
      icon: BookOpen,
      title: "Spiegazione Teorica",
      description: "Introduzione ai concetti fondamentali, spiegata in modo diretto e concreto.",
      color: "primary",
    },
    {
      icon: Eye,
      title: "Dimostrazione Live",
      description: "Ti mostriamo come applicare subito la teoria in un ambiente reale.",
      color: "secondary",
    },
    {
      icon: MousePointer,
      title: "Replica Guidata",
      description: "Ogni partecipante si connette alla VPN e replica i passaggi sul proprio ambiente, mentre tutti seguono e fanno domande.",
      color: "accent",
    },
    {
      icon: RotateCcw,
      title: "Ripeti & Consolida",
      description: "Questo ciclo si ripete più volte per fissare ogni passaggio in modo pratico e progressivo.",
      color: "primary",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/10",
          border: "border-primary/30",
          text: "text-primary",
          glow: "group-hover:shadow-[0_0_30px_hsl(142_100%_50%/0.2)]",
        };
      case "secondary":
        return {
          bg: "bg-secondary/10",
          border: "border-secondary/30",
          text: "text-secondary",
          glow: "group-hover:shadow-[0_0_30px_hsl(180_100%_45%/0.2)]",
        };
      case "accent":
        return {
          bg: "bg-accent/10",
          border: "border-accent/30",
          text: "text-accent",
          glow: "group-hover:shadow-[0_0_30px_hsl(280_100%_60%/0.2)]",
        };
      default:
        return {
          bg: "bg-primary/10",
          border: "border-primary/30",
          text: "text-primary",
          glow: "group-hover:shadow-[0_0_30px_hsl(142_100%_50%/0.2)]",
        };
    }
  };

  return (
    <section className="py-20 md:py-32 bg-background relative cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-transparent to-card" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4">
              METODOLOGIA
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              La Formula di <span className="gradient-text">Hack4Hours</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Un approccio semplice, chiaro ed efficace per apprendere le tecniche di hacking etico
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => {
              const colors = getColorClasses(step.color);
              return (
                <div
                  key={index}
                  className={`group p-6 md:p-8 rounded-2xl border ${colors.border} ${colors.bg} transition-all duration-300 ${colors.glow}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center shrink-0`}>
                      <step.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`font-mono text-sm ${colors.text}`}>0{index + 1}</span>
                        <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formula;
