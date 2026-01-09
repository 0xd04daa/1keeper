import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wallet, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    setIsConnected(!isConnected);
  };

  return (
    <nav className="border-b border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <img
                src="/1keeper-logo.svg"
                alt="1Keeper"
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-primary">1Keeper</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Trade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Trending
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Docs
            </a>
          </div>

          {/* Wallet Button */}
          <div className="hidden md:flex items-center">
            <Button
              onClick={handleConnect}
              className={isConnected ? "bg-success hover:bg-success/90" : "bg-primary hover:bg-primary/90"}
            >
              <Wallet className="w-4 h-4 mr-2" />
              {isConnected ? "Connected" : "Connect Wallet"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Trade
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Trending
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Portfolio
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Docs
              </a>
              <Button
                onClick={handleConnect}
                className={isConnected ? "bg-success hover:bg-success/90" : "bg-primary hover:bg-primary/90"}
              >
                <Wallet className="w-4 h-4 mr-2" />
                {isConnected ? "Connected" : "Connect Wallet"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
