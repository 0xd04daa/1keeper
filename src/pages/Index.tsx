
import { useState, useEffect } from "react";
import CountdownTimer from "@/components/CountdownTimer";
import SocialLinks from "@/components/SocialLinks";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Separator } from "@/components/ui/separator";
import KeeperIcon from "@/components/KeeperIcon";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-10 overflow-hidden relative">
      <AnimatedBackground />
      
      <div className="max-w-4xl w-full flex flex-col items-center text-center z-10 animate-fade-in">
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <img 
              src="/1keeper-logo.svg" 
              alt="1Keeper Logo" 
              className="h-16 md:h-20 lg:h-24"
              style={{ width: 'auto' }}
            />
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold mb-3 flex items-center justify-center gap-2">
            The On-Chain Trading Terminal
            <KeeperIcon className="text-white" size={18} />
          </h1>
        </div>
        
        <div className="my-12">
          <CountdownTimer />
        </div>
        
        <div className="relative mt-4 mb-10 w-full max-w-md">
          <Separator className="bg-white/10" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background px-4 text-white/50 text-sm uppercase tracking-widest">
            Launching June 1
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-white/80 text-lg mb-6">
            Follow us for updates
          </p>
          <SocialLinks />
        </div>
      </div>
    </main>
  );
};

export default Index;
