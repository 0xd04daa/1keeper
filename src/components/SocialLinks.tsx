
import { Twitter, Discord } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialLinks = () => {
  return (
    <div className="flex gap-4 items-center justify-center mt-8">
      <a 
        href="https://x.com/1Keeper_com" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Follow us on Twitter"
      >
        <Button variant="outline" size="icon" className="rounded-full h-12 w-12 border-white/20 bg-secondary hover:bg-muted transition-all duration-300">
          <Twitter className="h-5 w-5 text-white" />
        </Button>
      </a>
      <a 
        href="https://discord.gg/USZUxpd6MC" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Join our Discord"
      >
        <Button variant="outline" size="icon" className="rounded-full h-12 w-12 border-white/20 bg-secondary hover:bg-muted transition-all duration-300">
          <Discord className="h-5 w-5 text-white" />
        </Button>
      </a>
    </div>
  );
};

export default SocialLinks;
