'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Button } from '@/components/ui/button'
import { ArrowDown, Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { useScrollSection } from '@/hooks/use-scroll-section'
import { ParticlesBackground } from './particles-background'
import Image from 'next/image'
import Link from 'next/link'

const socialLinks = [
  { icon: Github, href: 'https://github.com/fury2587', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/arun-yadav-fury0007/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/arunydv2587', label: 'Twitter' },
  { icon: Mail, href: 'mailto:arunydv2587@gmail.com', label: 'Email' },
]

export function Hero() {
  const scrollToSection = useScrollSection()

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <ParticlesBackground />
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background"
        style={{
          backgroundImage: 'radial-gradient(circle at center, var(--primary) 0%, transparent 70%)',
          opacity: 0.1,
        }}
      />
      <div className="container px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to my portfolio
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Hi, I&apos;m{' '}
              <span className="text-primary">
                <TypeAnimation
                  sequence={['Arun', 1000, 'a Developer', 1000, 'an Engineer', 1000]}
                  wrapper="span"
                  repeat={Infinity}
                />
              </span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              I create  and build websites🐳🐳 Also  do some things that i like the most. 
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="rounded-full"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="rounded-full"
              >
                Contact Me
              </Button>
            </motion.div>
            <motion.div
              className="mt-8 flex justify-center lg:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <Button asChild variant="ghost" size="icon" className="rounded-full">
                    <Link href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5" />
                      <span className="sr-only">{social.label}</span>
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="relative mx-auto lg:ml-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary-foreground opacity-20 blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/icon/avtaar.png?height=400&width=400"
                  alt="Profile "
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => scrollToSection('about')}
          className="rounded-full"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </section>
  )
}

