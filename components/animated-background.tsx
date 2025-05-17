"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const particles = containerRef.current.querySelectorAll(".particle");
    
    gsap.to(particles, {
      x: "random(-20, 20)",
      y: "random(-20, 20)",
      rotation: "random(-15, 15)",
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.1,
    });
    
    return () => {
      gsap.killTweensOf(particles);
    };
  }, []);

  return (
    <motion.div 
      ref={containerRef}
      className="fixed inset-0 z-[-1] overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      
      {/* Particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="particle absolute rounded-full opacity-20 dark:opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 300 + 50}px`,
            height: `${Math.random() * 300 + 50}px`,
            background: `radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)`,
            transform: `scale(${Math.random() * 0.5 + 0.5})`,
          }}
        />
      ))}
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    </motion.div>
  );
}