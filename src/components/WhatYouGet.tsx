import { Video, Key, Award, FileText, Clock, ShieldAlert } from "lucide-react";

const WhatYouGet = () => {
  const items = [
    {
      icon: Video,
      title: "Link Google Meet",
      description: "Accesso alla parte teorica, 15 minuti prima dell'inizio del corso.",
    },
    {
      icon: Key,
      title: "Accesso VPN Completo",
      description: "File OpenVPN, utente e password per la parte pratica sul laboratorio.",
    },
    {
      icon: Clock,
      title: "VPN Attiva Tutto il Giorno",
      description: "Dopo il corso, la VPN resta attiva fino alle 24:00 per continuare a testare.",
    },
    {
      icon: Award,
      title: "Diploma di Partecipazione",
      description: "Certificato ufficiale con il tuo nome al completamento del laboratorio.",
    },
    {
      icon: FileText,
      title: "Slide della Giornata",
      description: "Tutto il materiale didattico presentato durante il corso.",
    },
    {
      icon: ShieldAlert,
      title: "Policy di Riservatezza",
      description: "Puoi registrare per uso personale, ma vige un patto di non divulgazione.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-mono mb-4">
              INCLUSO NEL TICKET
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cosa <span className="text-secondary">riceverai</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tutto ciò di cui hai bisogno per partecipare al laboratorio
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-background border border-border hover:border-secondary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
