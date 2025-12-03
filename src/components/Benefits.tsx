import { Users, Zap, Target, Video } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Users,
      title: "Interazione Vera",
      description: "Non sei uno tra tanti, ma parte attiva di un gruppo ristretto dove la tua voce conta.",
    },
    {
      icon: Zap,
      title: "Apprendimento Immediato",
      description: "Studi, vedi, fai. Tutto nella stessa mattinata, senza aspettare settimane per la pratica.",
    },
    {
      icon: Target,
      title: "Contenuti Realistici",
      description: "Niente teoria astratta, ma scenari e tecniche che rispecchiano il mondo reale della cybersecurity.",
    },
    {
      icon: Video,
      title: "Registrazione Inclusa",
      description: "A fine evento ricevi il video completo del laboratorio per rivederlo e rifare gli esercizi con calma.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-mono mb-4">
              VANTAGGI
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perché Hack4Hours è <span className="text-secondary">diverso</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Un'esperienza di apprendimento unica nel panorama italiano della cybersecurity
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-6 md:p-8 rounded-2xl bg-background border border-border hover:border-secondary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(180_100%_45%/0.1)]"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
