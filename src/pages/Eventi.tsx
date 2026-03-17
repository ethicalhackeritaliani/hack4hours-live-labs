import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Terminal,
  Search,
  Database,
  AlertTriangle,
  Bug,
  Lock,
  FileText,
  Zap,
  Shield,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Euro,
  Server,
  Key,
  Network,
  ScanEye,
  ShieldAlert,
  ChevronLeft,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import PurchaseWarningDialog from "@/components/PurchaseWarningDialog";

interface EventData {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  description: string;
  missions: { icon: React.ElementType; title: string; description: string }[];
  tools: string[];
  details: { icon: React.ElementType; label: string; value: string }[];
  accentHsl: string;
  registrationLink: string;
  icon: React.ElementType;
}

const eventsData: EventData[] = [
  {
    id: "mission-root",
    badge: "LABORATORIO #1",
    badgeColor: "bg-accent/10 text-accent",
    title: "Mission Root",
    subtitle: "Colpisci, Analizza, Proteggi",
    shortDescription: "6 missioni pratiche: dalla scansione rete all'exploitation su target realistici.",
    description:
      "Scendi in campo e prova cosa significa davvero trovare, sfruttare e mitigare una vulnerabilità. In 4 ore intense affronterai 6 missioni pratiche su target realistici.",
    missions: [
      { icon: Search, title: "Scansione Rete", description: "Scansionerai una rete e identificherai servizi e versioni." },
      { icon: Database, title: "Enumerazione", description: "Enumererai un servizio potenzialmente vulnerabile." },
      { icon: AlertTriangle, title: "Vulnerability Assessment", description: "Condurrai un vulnerability assessment e interpreterai i risultati." },
      { icon: Bug, title: "Exploitation", description: "Eseguirai tecniche di exploitation automatizzate e non." },
      { icon: Lock, title: "Brute Force", description: "Testerai attacchi di tipo brute force." },
      { icon: FileText, title: "Attacco a macchine reali", description: "Metterai in pratica tutte le tecniche apprese su target realistici." },
    ],
    tools: ["Nmap", "Nessus", "Metasploit", "Hydra"],
    details: [
      { icon: Clock, label: "Durata", value: "4 ore" },
      { icon: Calendar, label: "Quando", value: "Un sabato al mese" },
      { icon: MapPin, label: "Dove", value: "Online – Google Meet" },
      { icon: Euro, label: "Costo", value: "€97" },
    ],
    accentHsl: "hsl(280 100% 60% / 0.08)",
    registrationLink: "https://prenotazioni.scuolaperhacker.it",
    icon: Search,
  },
  {
    id: "active-directory",
    badge: "LABORATORIO #2",
    badgeColor: "bg-secondary/10 text-secondary",
    title: "Attacco ad Active Directory",
    subtitle: "Domina il Dominio",
    shortDescription: "Dalla ricognizione AD al Domain Controller: Kerberoasting, Lateral Movement, DCSync.",
    description:
      "Impara le metodologie di attacco più utilizzate contro ambienti Active Directory. Dalla ricognizione iniziale all'escalation dei privilegi fino al completo dominio del domain controller.",
    missions: [
      { icon: ScanEye, title: "Ricognizione AD", description: "Enumererai utenti, gruppi, GPO e relazioni di trust nel dominio." },
      { icon: Key, title: "Credential Harvesting", description: "Estrarrai credenziali con tecniche di Kerberoasting e AS-REP Roasting." },
      { icon: Network, title: "Lateral Movement", description: "Ti sposterai lateralmente sfruttando Pass-the-Hash e Pass-the-Ticket." },
      { icon: ShieldAlert, title: "Privilege Escalation", description: "Escalerai i privilegi sfruttando misconfigurazioni e ACL vulnerabili." },
      { icon: Server, title: "Domain Dominance", description: "Otterrai il controllo completo del Domain Controller con DCSync e Golden Ticket." },
      { icon: FileText, title: "Post-Exploitation & Report", description: "Documenterai le vulnerabilità trovate e proporrai le remediation." },
    ],
    tools: ["BloodHound", "Impacket", "Mimikatz", "Rubeus", "CrackMapExec", "ldapsearch"],
    details: [
      { icon: Clock, label: "Durata", value: "4 ore" },
      { icon: Calendar, label: "Quando", value: "Un sabato al mese" },
      { icon: MapPin, label: "Dove", value: "Online – Google Meet" },
      { icon: Euro, label: "Costo", value: "€97" },
    ],
    accentHsl: "hsl(180 100% 45% / 0.08)",
    registrationLink: "https://prenotazioni.scuolaperhacker.it",
    icon: Server,
  },
];

const EventDetail = ({ event, onBack }: { event: EventData; onBack: () => void }) => {
  const [showWarning, setShowWarning] = useState(false);

  return (
    <div className="animate-fade-up">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="text-sm font-mono">TORNA AGLI EVENTI</span>
      </button>

      <div className="rounded-3xl border border-border bg-card overflow-hidden">
        {/* Header */}
        <div
          className="p-8 md:p-12"
          style={{ background: `linear-gradient(135deg, ${event.accentHsl} 0%, hsl(var(--card)) 70%)` }}
        >
          <span className={`inline-block px-4 py-1 rounded-full text-sm font-mono mb-4 ${event.badgeColor}`}>
            {event.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">{event.title}</span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground font-semibold mb-2">{event.subtitle}</p>
          <p className="text-muted-foreground text-lg max-w-3xl">{event.description}</p>
        </div>

        <div className="p-8 md:p-12 space-y-10">
          {/* Details */}
          <div className="flex flex-wrap gap-6">
            {event.details.map((d, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <d.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{d.label}</div>
                  <div className="text-sm font-semibold text-foreground">{d.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-sm font-mono text-muted-foreground mb-3">STRUMENTI UTILIZZATI</h4>
            <div className="flex flex-wrap gap-2">
              {event.tools.map((tool) => (
                <span key={tool} className="px-3 py-1.5 rounded-lg bg-muted border border-border font-mono text-sm text-foreground">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Missions */}
          <div>
            <h4 className="text-sm font-mono text-muted-foreground mb-4">MISSIONI</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {event.missions.map((mission, index) => (
                <div key={index} className="group p-5 rounded-xl bg-background border border-border hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <mission.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">MISSION 0{index + 1}</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{mission.title}</h4>
                  <p className="text-sm text-muted-foreground">{mission.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-4">
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
                <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                  <Shield className="w-5 h-5" />
                  Registrati Ora (Gratis)
                </a>
              </Button>
              <Button variant="hero" size="xl" className="group" onClick={(e) => { e.preventDefault(); setShowWarning(true); }}>
                <Zap className="w-5 h-5 group-hover:animate-pulse" />
                Acquista Ticket – €97
              </Button>
            </div>
            <PurchaseWarningDialog open={showWarning} onOpenChange={setShowWarning} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Eventi = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const activeEvent = eventsData.find((e) => e.id === selectedEvent);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 cyber-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-card" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />

        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-primary">LABORATORI PRATICI</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              I Nostri <span className="gradient-text">Eventi</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Laboratori intensivi di hacking etico, 100% pratici. Scegli il tuo prossimo campo di battaglia.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            {activeEvent ? (
              <EventDetail event={activeEvent} onBack={() => setSelectedEvent(null)} />
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {eventsData.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => { setSelectedEvent(event.id); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className="group text-left p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.1)]"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <event.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-mono ${event.badgeColor}`}>
                        {event.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{event.title}</h3>
                    <p className="text-primary font-semibold mb-3">{event.subtitle}</p>
                    <p className="text-muted-foreground text-sm mb-5">{event.shortDescription}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {event.tools.slice(0, 3).map((tool) => (
                        <span key={tool} className="px-2 py-1 rounded bg-muted border border-border font-mono text-xs text-muted-foreground">
                          {tool}
                        </span>
                      ))}
                      {event.tools.length > 3 && (
                        <span className="px-2 py-1 rounded bg-muted border border-border font-mono text-xs text-muted-foreground">
                          +{event.tools.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-primary font-mono group-hover:gap-3 transition-all">
                      Scopri di più <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Coming soon */}
      {!activeEvent && (
        <section className="py-16 md:py-24 bg-card">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-muted text-muted-foreground text-sm font-mono mb-4">
                PROSSIMAMENTE
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Molti altri laboratori in arrivo</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Stiamo preparando nuovi eventi su Web Application Hacking, Wi-Fi Security, OSINT e molto altro. Resta connesso!
              </p>
              <Button variant="cyber" size="lg" asChild>
                <Link to="/">
                  <Terminal className="w-4 h-4" />
                  Torna alla Home
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Eventi;
