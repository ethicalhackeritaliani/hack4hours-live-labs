import { AlertTriangle, CheckCircle2, Monitor } from "lucide-react";

const VPNSetup = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-transparent to-card" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-mono mb-4">
              ⚠️ IMPORTANTE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Configura la VPN <span className="text-destructive">Prima</span> del Corso
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Il giorno del corso non ci sarà tempo per sistemare problemi di connessione. Testa tutto in anticipo!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Instructions */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Monitor className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Macchina Richiesta</h3>
                    <p className="text-sm text-muted-foreground">
                      Ti connetterai al laboratorio con la tua macchina <span className="text-primary font-mono">Kali Linux</span> o <span className="text-primary font-mono">Windows</span> a seconda delle indicazioni del laboratorio.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Test di Connessione</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Una volta connesso alla VPN, riceverai un indirizzo di classe <span className="font-mono text-primary">192.168.113.x</span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Verifica con un ping all'indirizzo <span className="font-mono text-primary">192.168.30.1</span>. Se funziona, sei pronto!
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-destructive shrink-0" />
                  <div>
                    <h3 className="font-semibold text-destructive mb-2">Attenzione</h3>
                    <p className="text-sm text-muted-foreground">
                      Gli account VPN scadranno alle <span className="font-semibold text-foreground">ore 24:00</span> del giorno del corso. Sfrutta tutto il tempo disponibile!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal mockup */}
            <div className="rounded-2xl overflow-hidden border border-border bg-[#0d1117]">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-2">Terminal — kali@kali</span>
              </div>
              <div className="p-4 font-mono text-sm overflow-x-auto">
                <div className="text-muted-foreground">
                  <span className="text-[#8be9fd]">┌──(</span>
                  <span className="text-[#50fa7b]">kali㉿kali</span>
                  <span className="text-[#8be9fd]">)-[~]</span>
                </div>
                <div className="text-muted-foreground">
                  <span className="text-[#8be9fd]">└─</span>
                  <span className="text-[#50fa7b]">$</span>
                  <span className="text-foreground"> ping 192.168.30.1</span>
                </div>
                <div className="text-muted-foreground mt-2">
                  PING 192.168.30.1 (192.168.30.1) 56(84) bytes of data.
                </div>
                <div className="text-foreground">
                  64 bytes from 192.168.30.1: icmp_seq=1 ttl=64 time=<span className="text-[#50fa7b]">55.6</span> ms
                </div>
                <div className="text-foreground">
                  64 bytes from 192.168.30.1: icmp_seq=2 ttl=64 time=<span className="text-[#50fa7b]">30.0</span> ms
                </div>
                <div className="text-foreground">
                  64 bytes from 192.168.30.1: icmp_seq=3 ttl=64 time=<span className="text-[#50fa7b]">29.7</span> ms
                </div>
                <div className="text-foreground">
                  64 bytes from 192.168.30.1: icmp_seq=4 ttl=64 time=<span className="text-[#50fa7b]">27.5</span> ms
                </div>
                <div className="text-muted-foreground mt-2">
                  ^C
                </div>
                <div className="text-muted-foreground">
                  --- 192.168.30.1 ping statistics ---
                </div>
                <div className="text-[#50fa7b]">
                  4 packets transmitted, 4 received, <span className="font-bold">0% packet loss</span>
                </div>
                <div className="text-muted-foreground mt-3">
                  <span className="text-[#50fa7b]">✓</span> Connessione riuscita! Sei pronto per il laboratorio.
                </div>
              </div>
            </div>
          </div>

          {/* Video link placeholder */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              📹 Video tutorial per configurare la VPN disponibile dopo l'iscrizione
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VPNSetup;
