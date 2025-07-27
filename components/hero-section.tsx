"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current) return;
    
    const tl = gsap.timeline();
    
    tl.from(imageRef.current, {
      rotation: -5,
      duration: 2,
      ease: "elastic.out(1, 0.3)",
    });
    
    gsap.to(imageRef.current, {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    
    return () => {
      tl.kill();
      gsap.killTweensOf(imageRef.current);
    };
  }, []);

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Open PDF in new tab
    window.open('/resume.pdf', '_blank');
    
    // Download PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'siddharth-verma-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-xl font-medium text-primary">Hello, I'm</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              Siddharth Verma
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              Full Stack + Gen AI Developer
            </h3>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-lg text-muted-foreground max-w-lg"
          >
            I use AI to eliminate the repetitive, so I can engineer what truly matters—scalable, intelligent systems.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="gap-2">
              <Link href="#projects" className="flex items-center">
                View My Work
                <ArrowDown className="h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleResumeClick}
            >
              View Resume
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="flex gap-4 pt-4"
          >
            <motion.a
              href="https://github.com/siddharth1201"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-card hover:bg-accent p-3 rounded-full"
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/siddharthverma7952a31a9"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-card hover:bg-accent p-3 rounded-full"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-card hover:bg-accent p-3 rounded-full"
            >
              <Twitter className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.5,
            type: "spring",
            stiffness: 50
          }}
          className="flex justify-center w-full mt-12 lg:mt-0 lg:pl-8 xl:pl-16"
        >
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
            <Image
              src="/myimg.jpg"
              alt="Siddharth Verma"
              fill
              sizes="(max-width: 640px) 14rem, (max-width: 768px) 16rem, (max-width: 1024px) 20rem, 24rem"
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}