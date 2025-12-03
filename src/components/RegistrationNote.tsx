import { User, Phone, FileWarning } from "lucide-react";

const RegistrationNote = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="p-6 md:p-8 rounded-2xl bg-muted/50 border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <FileWarning className="w-5 h-5 text-primary" />
              Note per l'Iscrizione
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Nome e Cognome reali:</span> Necessari per il certificato di completamento.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">Recapito telefonico:</span> Per comunicazioni urgenti relative al corso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationNote;
