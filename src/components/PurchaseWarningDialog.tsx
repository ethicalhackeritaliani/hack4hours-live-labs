import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle } from "lucide-react";

interface PurchaseWarningDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PurchaseWarningDialog = ({ open, onOpenChange }: PurchaseWarningDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-background border-amber-400/40 max-w-md">
        <DialogHeader className="text-center sm:text-center">
          <div className="mx-auto w-14 h-14 rounded-full bg-amber-400/15 flex items-center justify-center mb-2">
            <AlertTriangle className="w-7 h-7 text-amber-400" />
          </div>
          <DialogTitle className="text-xl text-amber-400 font-bold">
            ⚠️ Registrazione obbligatoria
          </DialogTitle>
          <DialogDescription className="text-foreground/80 text-base mt-2">
            Non è possibile acquistare il ticket senza prima essersi registrati sul sito.
            Solo dopo la registrazione potrai procedere con il pagamento.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 mt-4">
          <Button
            variant="cyber"
            size="xl"
            className="w-full border-amber-400 text-amber-400 hover:bg-amber-400/10 hover:shadow-[0_0_20px_hsl(45_100%_50%/0.3)]"
            asChild
          >
            <a
              href="https://prenotazioni.scuolaperhacker.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Shield className="w-5 h-5" />
              Registrati Ora (Gratis)
            </a>
          </Button>
          <Button
            variant="ghost"
            className="text-muted-foreground"
            onClick={() => onOpenChange(false)}
          >
            Ho capito, torna indietro
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseWarningDialog;
