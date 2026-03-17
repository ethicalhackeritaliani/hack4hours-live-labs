import { Link } from "react-router-dom";
import { Terminal, Calendar } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container px-4 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-primary" />
          <span className="font-bold font-mono text-foreground">Hack4Hours</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            to="/eventi"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <Calendar className="w-4 h-4" />
            Eventi
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
