import { X, Check } from "lucide-react";

const Problem = () => {
  const problems = [
    "Slide infinite che non portano a nulla",
    "Teoria astratta senza applicazione pratica",
    "Essere uno spettatore passivo",
    "Nessuna interazione con esperti",
  ];

  const solutions = [
    "Laboratori concreti e guidati passo dopo passo",
    "Scenari reali con attacchi veri",
    "Partecipazione attiva in gruppi ristretti",
    "Domande in tempo reale e supporto diretto",
  ];

  return (
    <section className="py-20 md:py-32 bg-card relative">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Impara <span className="gradient-text">davvero</span> come funziona
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-lg">
            Con Hack4Hours ti portiamo direttamente dentro l'esperienza pratica dell'hacking etico
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Problems */}
            <div className="p-6 md:p-8 rounded-2xl bg-destructive/5 border border-destructive/20">
              <h3 className="text-xl font-semibold text-destructive mb-6 flex items-center gap-2">
                <X className="w-5 h-5" />
                I corsi tradizionali
              </h3>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <X className="w-5 h-5 text-destructive/60 shrink-0 mt-0.5" />
                    {problem}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="p-6 md:p-8 rounded-2xl bg-primary/5 border border-primary/20">
              <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                <Check className="w-5 h-5" />
                Hack4Hours
              </h3>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
