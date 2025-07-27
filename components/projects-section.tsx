"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Play } from "lucide-react";

const projects = [
  {
    title: "Lask AI - Your Personal Coding Assistant",
    description: "An AI-powered vs code extension that acts as a coding assistant that helps you write code faster and more efficiently.",
    tags: ["Python", "Fast API", "MongoDB", "Gemini Flash 1.5", "text-ada-002 embeddings", "Faiss Index", "Code RAG", "AST", "Prompt Engineering"],
    liveUrl: "https://www.youtube.com/watch?v=k4iQQNLz0FE&ab_channel=21siddharthverma",
    githubUrl: "https://github.com/siddharth1201/LaskAI",
    videoId: "iRfluvbTNaA"
  },
  {
    title: "HRMS chat bot: An HR chatbot for enterprises",
    description: "A chatbot that provides HR services to employees, managers, and HR managers. Integrated with Keka HR portal for leave application and attendace logging. Integrated with Slack and MS Teams for seamless communication.",
    tags: ["Azure Open AI", "Microsoft Bot Builder", "Azure Bot Service", "Python", "FastAPI", "Chroma DB", "Langchain"],
    liveUrl: "https://www.youtube.com/watch?v=E9OLF7G16ZA",
    githubUrl: "https://github.com/siddharth1201/hrms-on-chat",
    videoId: "E9OLF7G16ZA"
  },
  {
    title: "Shopify Chatbot",
    description: "An AI-powered chatbot for Shopify stores that helps customers find products, answer queries, and order products. Integrated with Shopify API for seamless communication.",
    tags: ["Streamlit", "Shopify GraphQL APIs", "Python FastAPIs", "OpenAI", "Langgraph", "Langsmith", "Chroma DB"],
    liveUrl: "https://www.youtube.com/watch?v=XBV5vPF5Ba8",
    githubUrl: "https://github.com/siddharth1201/shopify-chat",
    videoId: "XBV5vPF5Ba8"
  },
  {
    title: "SAGE - Speech Analysis And Guidance Engine",
    description: "A call analysis system that anlyze the customer call for problem faced, emotional tone, resolution satisfaction and 140+ such parameters.",
    tags: ["Whisper AI", "GPT 4o-mini", "Prompt Engineering", "LLm Parallelization"],
    liveUrl: "Private",
    githubUrl: "Private",
    videoId: ""
  },
];

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents different skills and technologies I've mastered.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
                <div className="relative h-72 w-full bg-black">
                  {playingVideo === index ? (
                    <div className="absolute inset-0">
                      <iframe
                        src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&modestbranding=1&rel=0`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={`${project.title} Video`}
                      />
                    </div>
                  ) : project.videoId ? (
                    <div 
                      className="relative w-full h-full cursor-pointer"
                      onClick={() => setPlayingVideo(index)}
                    >
                      <Image 
                        src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`} 
                        alt={project.title}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-10 transition-all duration-300">
                        <div className="bg-white bg-opacity-80 rounded-full p-3 flex items-center justify-center">
                          <Play className="w-8 h-8 text-black" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                      <span className="text-gray-400">No preview available</span>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {/* <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button> */}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}