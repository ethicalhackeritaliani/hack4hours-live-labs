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
            <div className="bg-muted/50 border border-amber-400/30 rounded-xl p-4 mb-6 max-w-lg mx-auto">
              <p className="text-amber-400 font-bold text-base mb-1">
                ⚠️ IMPORTANTE – Leggi prima di acquistare:
              </p>
              <ul className="text-amber-300/90 text-sm space-y-1 text-left list-disc list-inside">
                <li><strong>1.</strong> Clicca su <strong>"Registrati Ora"</strong> per scoprire le <strong>date disponibili</strong> e prenotare il tuo posto</li>
                <li><strong>2.</strong> Solo dopo la registrazione potrai procedere con il <strong>pagamento</strong></li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cyber" size="xl" className="group border-amber-400 text-amber-400 hover:bg-amber-400/10 hover:shadow-[0_0_20px_hsl(45_100%_50%/0.3)]" asChild>
                <a 
                  href="https://calendar.ethicalhackeritaliani.it" 
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
