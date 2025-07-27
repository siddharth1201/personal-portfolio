"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AirVent } from "lucide-react";

const technologies = {
  genai: [
    { name: "Langchain", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/langchain-color.png" },
    { name: "HuggingFace", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
    { name: "CrewAI", icon: "https://blog.crewai.com/content/images/2024/10/crewai_logo.png" },
    { name: "OpenAI", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/openai.png" },
    { name: "Google Generative AI", icon: "https://wp-socialnation-assets.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/04/15165935/Google-Generative-AI.png" },
    { name: "AWS Bedrock", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Azure Cognitive Services", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg" },
    { name: "Vertex AI", icon: "https://techcrunch.com/wp-content/uploads/2021/05/VertexAI-512-color.png" }
  ],  
  frontend: [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Tailwind CSS", icon: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Redux Toolkit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", icon: "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000" },
    { name: "Python (FastAPI)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java (Spring Boot)", icon: "https://img.icons8.com/?size=100&id=A3Ulk2RcONKs&format=png&color=000000" },
    { name: "REST / GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
    { name: "CI/CD", icon: "https://img.icons8.com/?size=100&id=12599&format=png&color=000000" },
    { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "JWT / OAuth", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  ],
  tools: [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "AWS", icon: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000" },
    { name: "Azure", icon: "https://img.icons8.com/?size=100&id=VLKafOkk3sBX&format=png&color=000000" },
    { name: "GCP", icon: "https://img.icons8.com/?size=100&id=WHRLQdbEXQ16&format=png&color=000000" },
    { name: "Kafka", icon: "https://img.icons8.com/?size=100&id=fOhLNqGJsUbJ&format=png&color=000000" },
    { name: "Claude", icon: "https://img.icons8.com/?size=100&id=H5H0mqCCr5AV&format=png&color=000000" },
    { name: "Copilot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" },
  ],
};

export function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-accent/30"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I've worked with a variety of technologies across the full stack development spectrum.
            Here are some of the key technologies I specialize in.
          </p>
        </motion.div>

        <Tabs defaultValue="frontend" className="w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <TabsList className="grid grid-cols-4 w-full max-w-md">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="genai">GenAI</TabsTrigger>
            </TabsList>
          </motion.div>

          {Object.entries(technologies).map(([category, techs]) => (
            <TabsContent key={category} value={category}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
              >
                {techs.map((tech) => (
                  <motion.div key={tech.name} variants={itemVariants}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 flex flex-col items-center">
                        <div className="w-16 h-16 mb-4 relative">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <h3 className="font-medium text-center">{tech.name}</h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}