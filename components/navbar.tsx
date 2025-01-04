'use client'

import { motion } from 'framer-motion'
import { useScrollSection } from '@/hooks/use-scroll-section'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const scrollToSection = useScrollSection()
  const { theme, setTheme } = useTheme()

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div
          className="text-xl font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Arun | Portfolio
        </motion.div>
        <div className="flex items-center gap-6">
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <motion.button
              key={section}
              onClick={() => scrollToSection(section)}
              className="capitalize hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {section}
            </motion.button>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </nav>
    </motion.header>
  )
}

