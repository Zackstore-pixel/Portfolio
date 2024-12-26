'use client'

import { motion } from "framer-motion"
import { Mail, Phone, Linkedin } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-200">
            <span className="text-[#64ffda]">04.</span> Get In Touch
          </h2>
          <p>
            I&apos;m currently looking for new opportunities in the field of Industrial Engineering 
            and Process Optimization. Whether you have a question or just want to say hi, 
            I&apos;ll try my best to get back to you!
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="mailto:soubai1250@gmail.com"
              className="flex items-center space-x-2 text-slate-400 hover:text-[#64ffda]"
            >
              <Mail className="h-5 w-5" />
              <span>soubai1250@gmail.com</span>
            </a>
            <a
              href="tel:+212662049210"
              className="flex items-center space-x-2 text-slate-400 hover:text-[#64ffda]"
            >
              <Phone className="h-5 w-5" />
              <span>+212 662 049 210</span>
            </a>
            <a
              href="https://www.linkedin.com/in/soubai-zakaria"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-slate-400 hover:text-[#64ffda]"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
          </div>
          <p className="text-sm text-slate-400 mt-20">
            Built with Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </section>
  )
}

