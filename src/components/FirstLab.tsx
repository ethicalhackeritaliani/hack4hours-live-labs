import { Button } from "@/components/ui/button";
import { 
  Search, 
  Database, 
  AlertTriangle, 
  Bug, 
  Lock, 
  FileText,
  Zap 
} from "lucide-react";

const FirstLab = () => {
  const missions = [
    {
      icon: Search,
      title: "Scansione Rete",
      description: "Scansionerai una rete e identificherai servizi e versioni.",
    },
    {
      icon: Database,
      title: "Enumerazione",
      description: "Enumererai un servizio potenzialmente vulnerabile.",
    },
    {
      icon: AlertTriangle,
      title: "Vulnerability Assessment",
      description: "Condurrai un vulnerability assessment e interpreterai i risultati.",
    },
    {
      icon: Bug,
      title: "Exploitation",
      description: "Eseguirai tecniche di exploitation automatizzate e non.",
    },
    {
      icon: Lock,
      title: "Brute Force",
      description: "Testerai attacchi di tipo brute force.",
    },
    {
      icon: FileText,
      title: "Reporting",
      description: "Redigerai un report professionale orientato alla remediation.",
    },
  ];

  const tools = ["Nmap", "Nessus", "Metasploit", "Hydra"];

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-mono mb-4">
              PRIMO LABORATORIO • MOLTI ALTRI IN ARRIVO
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Mission Root</span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground font-semibold mb-2">
              Colpisci, Analizza, Proteggi
            </p>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Scendi in campo e prova cosa significa davvero trovare, sfruttare e mitigare una vulnerabilità. 
              In 4 ore intense affronterai 6 missioni pratiche.
            </p>
          </div>

          {/* Tools badge */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-lg bg-muted border border-border font-mono text-sm text-foreground"
              >
                {tool}
              </span>
            ))}
            <span className="px-4 py-2 rounded-lg bg-muted border border-border font-mono text-sm text-muted-foreground">
              e altri...
            </span>
          </div>

          {/* Missions grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {missions.map((mission, index) => (
              <div
                key={index}
                className="group p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <mission.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    MISSION 0{index + 1}
                  </span>
                </div>
                <h4 className="font-semibold text-foreground mb-1">{mission.title}</h4>
                <p className="text-sm text-muted-foreground">{mission.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="hero" size="xl" className="group" asChild>
              <a 
                href="https://accademia.ethicalhackeritaliani.it/p/hack4hours-laboratori-live" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Zap className="w-5 h-5 group-hover:animate-pulse" />
                Acquista Ticket – €97
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstLab;
