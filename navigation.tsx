'use client'

import * as React from "react"
import { motion } from "framer-motion"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#64ffda] text-2xl font-bold"
          >
            Z
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <a
                  href={item.href}
                  className="text-slate-400 hover:text-[#64ffda] transition-colors"
                >
                  <span className="text-[#64ffda]">0{i + 1}. </span>
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-slate-400" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-[#0a192f] border-slate-800">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item, i) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-slate-400 hover:text-[#64ffda] transition-colors"
                  >
                    <span className="text-[#64ffda]">0{i + 1}. </span>
                    {item.name}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </motion.header>
  )
}

