import { Button } from "@/components/ui/button";
import { 
  Search, 
  Database, 
  AlertTriangle, 
  Bug, 
  Lock, 
  FileText,
  Zap,
  Shield
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
      title: "Attacco a macchine reali",
      description: "Metterai in pratica tutte le tecniche apprese su target realistici.",
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
            <div className="relative max-w-lg mx-auto mb-6 rounded-2xl border-2 border-amber-400/40 bg-gradient-to-br from-amber-400/10 via-amber-500/5 to-transparent p-5 backdrop-blur-sm shadow-[0_0_30px_hsl(45_100%_50%/0.08)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-background font-bold text-xs px-4 py-1 rounded-full tracking-wider uppercase">
                Leggi prima di acquistare
              </div>
              <p className="mt-2 mb-3 text-center text-amber-400 font-bold text-sm tracking-wide">
                ⚠️ NON procedere al pagamento senza prima esserti registrato!
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-400 text-background font-bold text-sm flex items-center justify-center">1</span>
                  <p className="text-foreground text-sm leading-relaxed">
                    Clicca su <strong className="text-amber-400">"Registrati Ora"</strong> per scoprire le <strong className="text-amber-400">date disponibili</strong> e prenotare il tuo posto
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-400 text-background font-bold text-sm flex items-center justify-center">2</span>
                  <p className="text-foreground text-sm leading-relaxed">
                    Solo dopo la registrazione potrai procedere con il <strong className="text-amber-400">pagamento</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cyber" size="xl" className="group border-amber-400 text-amber-400 hover:bg-amber-400/10 hover:shadow-[0_0_20px_hsl(45_100%_50%/0.3)]" asChild>
                <a 
                  href="https://prenotazioni.scuolaperhacker.it" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Shield className="w-5 h-5" />
                  Registrati Ora (Gratis)
                </a>
              </Button>
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
      </div>
    </section>
  );
};

export default FirstLab;
