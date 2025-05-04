
import React, { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initial sizing
    resizeCanvas();
    
    // Resize on window change
    window.addEventListener('resize', resizeCanvas);

    // Neural network nodes
    class Node {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      connections: Node[];

      constructor(x: number, y: number, radius: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.connections = [];
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x <= this.radius || this.x >= width - this.radius) {
          this.vx = -this.vx;
        }
        if (this.y <= this.radius || this.y >= height - this.radius) {
          this.vy = -this.vy;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Draw node
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();

        // Draw connections
        this.connections.forEach(node => {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(node.x, node.y);
          const distance = Math.sqrt(Math.pow(this.x - node.x, 2) + Math.pow(this.y - node.y, 2));
          const maxDistance = 150;
          const opacity = 1 - (distance / maxDistance);
          if (opacity > 0) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
            ctx.lineWidth = opacity * 1.5;
            ctx.stroke();
          }
        });
      }
    }

    // Initialize nodes
    const nodeCount = Math.floor(window.innerWidth * window.innerHeight / 15000);
    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const radius = Math.random() * 1.5 + 0.5;
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      nodes.push(new Node(x, y, radius));
    }

    // Establish connections between nodes within a certain distance
    nodes.forEach(node => {
      nodes.forEach(otherNode => {
        if (node !== otherNode) {
          const distance = Math.sqrt(Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2));
          if (distance < 150) {
            node.connections.push(otherNode);
          }
        }
      });
    });

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#000000');
      gradient.addColorStop(1, '#121212');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach(node => {
        node.update(canvas.width, canvas.height);
        node.draw(ctx);
      });

      // Continue animation
      requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full"
        style={{ opacity: 0.7 }}
      />
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-zinc-900 opacity-50" />
    </div>
  );
};

export default AnimatedBackground;
