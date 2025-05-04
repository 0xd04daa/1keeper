
import { Github, Twitter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialLinks = () => {
  return (
    <div className="flex gap-6 items-center justify-center mt-8">
      <a 
        href="https://x.com/1Keeper_com" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Follow us on Twitter"
        className="group"
      >
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full h-12 w-12 border-white/20 bg-secondary hover:bg-accent hover:border-white/30 transition-all duration-300 overflow-hidden group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          <Twitter className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
        </Button>
      </a>
      <a 
        href="https://discord.gg/USZUxpd6MC" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Join our Discord"
        className="group"
      >
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full h-12 w-12 border-white/20 bg-secondary hover:bg-accent hover:border-white/30 transition-all duration-300 overflow-hidden group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
          <MessageCircle className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
        </Button>
      </a>
    </div>
  );
};

export default SocialLinks;
