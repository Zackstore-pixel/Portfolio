'use client'

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a192f] text-slate-400">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}

