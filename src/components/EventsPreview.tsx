import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Terminal, ArrowRight, Search, Server, Zap, Ghost } from "lucide-react";

const events = [
  {
    tag: "LAB #1",
    title: "Mission Root",
    subtitle: "Colpisci, Analizza, Proteggi",
    description: "6 missioni pratiche: dalla scansione rete all'exploitation su target realistici.",
    icon: Search,
  },
  {
    tag: "LAB #2",
    title: "Attacco ad Active Directory",
    subtitle: "Domina il Dominio",
    description: "Dalla ricognizione AD al Domain Controller: Kerberoasting, Lateral Movement, DCSync.",
    icon: Server,
  },
  {
    tag: "LAB #3",
    title: "Track the Ghost",
    subtitle: "Dal primo indizio alla compromissione finale",
    description: "OSINT, metadati, PCAP, SQL Injection e SSH pivoting: una vera catena di attacco su 3 macchine target.",
    icon: Ghost,
  },
];

const EventsPreview = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-mono mb-4">
              LABORATORI PRATICI
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              I Nostri <span className="gradient-text">Eventi</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Scegli il laboratorio che fa per te. Ogni evento è 100% pratico, con missioni reali e strumenti professionali.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {events.map((event, index) => (
              <div
                key={index}
                className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <event.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{event.tag}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {event.title}
                </h3>
                <p className="text-primary font-semibold mb-2">{event.subtitle}</p>
                <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                <div className="flex items-center gap-2 text-sm text-primary font-mono group-hover:gap-3 transition-all">
                  Scopri di più <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="xl" className="group" asChild>
              <Link to="/eventi">
                <Zap className="w-5 h-5 group-hover:animate-pulse" />
                Vedi Tutti gli Eventi
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4 font-mono">
              Nuovi laboratori ogni mese • Posti limitati
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;
