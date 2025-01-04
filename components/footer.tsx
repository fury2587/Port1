'use client'

import { motion } from 'framer-motion'
import { useScrollSection } from '@/hooks/use-scroll-section'

export function Footer() {
  const scrollToSection = useScrollSection()

  return (
    <motion.footer
      className="py-6 border-t"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Arun Yadav. All rights reserved.
          </div>
          <nav className="flex gap-4 text-sm">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-muted-foreground hover:text-foreground capitalize"
              >
                {section}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </motion.footer>
  )
}

