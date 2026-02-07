import { Button } from "@/components/ui/button";
import { Terminal, Shield, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-card" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary">ETHICAL HACKER ITALIANI</span>
          </div>
          
          {/* Main title */}
          <h1 className="animate-fade-up-delay-1 text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Hack4Hours</span>
            <br />
            <span className="text-foreground">4 Ore di Hacking Reale</span>
          </h1>
          
          {/* Subtitle */}
          <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground mb-4 font-mono">
            Un Sabato al Mese • Online • Hands-On
          </p>
          
          <p className="animate-fade-up-delay-2 text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Sei stanco di corsi che ti lasciano solo con la teoria?
            <span className="text-primary font-semibold"> Entra nel vivo dell'hacking etico.</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-3 bg-muted/50 border border-amber-400/30 rounded-xl p-4 mb-6 max-w-lg mx-auto">
            <p className="text-amber-400 font-bold text-base mb-1">
              ⚠️ IMPORTANTE – Leggi prima di acquistare:
            </p>
            <ul className="text-amber-300/90 text-sm space-y-1 text-left list-disc list-inside">
              <li><strong>1.</strong> Clicca su <strong>"Registrati Ora"</strong> per scoprire le <strong>date disponibili</strong> e prenotare il tuo posto</li>
              <li><strong>2.</strong> Solo dopo la registrazione potrai procedere con il <strong>pagamento</strong></li>
            </ul>
          </div>
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
          
          {/* Stats */}
          <div className="animate-fade-up-delay-3 grid grid-cols-3 gap-4 md:gap-8 max-w-xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary font-mono">4h</div>
              <div className="text-xs md:text-sm text-muted-foreground">Di Pratica</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary font-mono">6</div>
              <div className="text-xs md:text-sm text-muted-foreground">Missioni</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent font-mono">100%</div>
              <div className="text-xs md:text-sm text-muted-foreground">Hands-On</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
