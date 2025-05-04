
import { useState, useEffect } from "react";
import CountdownTimer from "@/components/CountdownTimer";
import SocialLinks from "@/components/SocialLinks";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Separator } from "@/components/ui/separator";

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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            1Keeper
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl">
            A brand new platform coming soon
          </p>
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
