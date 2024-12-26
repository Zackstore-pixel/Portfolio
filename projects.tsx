'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "Value Stream Mapping (VSM)",
    description: "Developed a comprehensive VSM for PAVECO's cutting machine to identify waste sources and improve efficiency.",
    tags: ["Lean Manufacturing", "Process Optimization", "Data Analysis"],
    links: {
      github: "#",
      external: "#",
    },
  },
  {
    title: "Assembly Line Optimization",
    description: "Participated in optimizing assembly processes at SORIAC, focusing on quality and productivity improvements in the automotive sector.",
    tags: ["Industrial Engineering", "Quality Control", "Lean Manufacturing"],
    links: {
      github: "#",
      external: "#",
    },
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-200">
            <span className="text-[#64ffda]">03.</span> Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.title} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-slate-200">{project.title}</CardTitle>
                    <div className="flex space-x-4">
                      <a href={project.links.github} className="text-slate-400 hover:text-[#64ffda]">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href={project.links.external} className="text-slate-400 hover:text-[#64ffda]">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[#64ffda] text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

