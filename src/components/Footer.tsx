import { Terminal } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Terminal className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-bold text-foreground">Hack4Hours</div>
                <div className="text-sm text-muted-foreground">by Ethical Hacker Italiani</div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Ethical Hacker Italiani
              </div>
              <div className="text-sm text-muted-foreground">
                Tutti i diritti riservati
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
