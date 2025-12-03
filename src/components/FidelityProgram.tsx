import { Gift, Star, Trophy } from "lucide-react";

const FidelityProgram = () => {
  return (
    <section className="py-20 md:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-8">
            <Gift className="w-4 h-4 text-accent" />
            <span className="text-sm font-mono text-accent">PROGRAMMA FEDELTÀ</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Partecipa a <span className="text-accent">3 Laboratori</span>, Ottieni un Regalo
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ogni laboratorio HACK4HOURS ha una numerazione progressiva. Raccogli 3 partecipazioni (anche non consecutive) 
            e sblocca una sorpresa esclusiva!
          </p>

          {/* Progress visualization */}
          <div className="flex justify-center items-center gap-4 mb-12">
            {[1, 2, 3].map((num) => (
              <div key={num} className="relative">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-background border-2 border-accent/30 flex items-center justify-center group hover:border-accent transition-all duration-300 hover:shadow-[0_0_30px_hsl(280_100%_60%/0.3)]">
                  <span className="text-2xl md:text-3xl font-bold font-mono text-accent">#{num}</span>
                </div>
                {num < 3 && (
                  <div className="absolute top-1/2 -right-4 w-4 h-0.5 bg-accent/30" />
                )}
              </div>
            ))}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-accent/10 border-2 border-accent flex items-center justify-center animate-pulse-glow">
              <Trophy className="w-8 h-8 md:w-10 md:h-10 text-accent" />
            </div>
          </div>

          {/* Rewards hints */}
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="p-4 rounded-xl bg-background border border-border">
              <Star className="w-6 h-6 text-accent/60 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Corsi gratis</p>
            </div>
            <div className="p-4 rounded-xl bg-background border border-border">
              <Star className="w-6 h-6 text-accent/60 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Manuali esclusivi</p>
            </div>
            <div className="p-4 rounded-xl bg-background border border-border">
              <Star className="w-6 h-6 text-accent/60 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Contenuti inediti</p>
            </div>
          </div>

          <p className="text-muted-foreground mt-8 text-sm italic">
            Non ti diciamo cosa... altrimenti ti roviniamo la sorpresa! 🎁
          </p>
        </div>
      </div>
    </section>
  );
};

export default FidelityProgram;
