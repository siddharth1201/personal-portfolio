"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Siddharth Verma</h3>
              <p className="text-muted-foreground mb-4 max-w-md">
                A passionate full-stack developer specializing in creating exceptional digital experiences.
                Let's work together to bring your ideas to life.
              </p>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:hello@johndoe.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                Indore, Madhya Pradesh, India
              </li>
              <li>
                <a href="mailto:siddharthverma1201@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                siddharthverma1201@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+91 8839919484" className="text-muted-foreground hover:text-foreground transition-colors">
                  Phone
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm"
          >
            © {currentYear} Siddharth Verma. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex space-x-4 mt-4 md:mt-0"
          >
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}