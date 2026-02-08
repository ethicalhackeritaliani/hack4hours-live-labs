import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Euro, Users, Zap, Shield } from "lucide-react";

const PracticalInfo = () => {
  const info = [
    {
      icon: Calendar,
      label: "Quando",
      value: "Un sabato al mese",
      detail: "09:00 - 13:00",
    },
    {
      icon: Clock,
      label: "Registrazione",
      value: "Dalle 08:45",
      detail: "Per iniziare puntuali",
    },
    {
      icon: MapPin,
      label: "Dove",
      value: "Online su Google Meet",
      detail: "Link personale dopo l'iscrizione",
    },
    {
      icon: Euro,
      label: "Costo",
      value: "€97 a partecipante",
      detail: "Una tantum per 1 sabato",
    },
    {
      icon: Users,
      label: "Posti",
      value: "Limitati",
      detail: "Gruppi piccoli per qualità",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-card relative">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4">
              DETTAGLI
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Informazioni <span className="gradient-text">Pratiche</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {info.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-background border border-border hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                <div className="text-xl font-semibold text-foreground mb-1">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.detail}</div>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-background to-secondary/10 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto a mettere le mani in pasta?
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Unisciti alla community di Ethical Hacker Italiani e inizia il tuo percorso pratico nella cybersecurity.
            </p>
            <div className="relative max-w-lg mx-auto mb-6 rounded-2xl border-2 border-amber-400/40 bg-gradient-to-br from-amber-400/10 via-amber-500/5 to-transparent p-5 backdrop-blur-sm shadow-[0_0_30px_hsl(45_100%_50%/0.08)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-background font-bold text-xs px-4 py-1 rounded-full tracking-wider uppercase">
                Leggi prima di acquistare
              </div>
              <div className="mt-2 space-y-3">
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
            <p className="text-sm text-muted-foreground mt-6">
              Posti limitati • Registrazione inclusa • Supporto community
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticalInfo;
