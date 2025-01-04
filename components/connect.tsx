'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Github, Linkedin, Mail, Twitter, Youtube, Instagram, Globe, Calendar } from 'lucide-react'
import Link from 'next/link'

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/fury2587',
    label: 'GitHub',
    description: 'Check out my open source projects',
    color: 'hover:bg-[#333333]',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/arun-yadav-fury0007/',
    label: 'LinkedIn',
    description: 'Connect with me professionally',
    color: 'hover:bg-[#0077B5]',
  },
  {
    icon: Twitter,
    href: 'https://x.com/arunydv2587',
    label: 'Twitter',
    description: 'Follow me for updates',
    color: 'hover:bg-[#1DA1F2]',
  },
  {
    icon: Youtube,
    href: 'https://www.youtube.com/@ArunYadav-tv6jb',
    label: 'YouTube',
    description: 'Watch my tech tutorials',
    color: 'hover:bg-[#FF0000]',
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/the_arunyadav_/',
    label: 'Instagram',
    description: 'Behind the scenes content',
    color: 'hover:bg-[#E4405F]',
  },
  {
    icon: Globe,
    href: 'https://www.instagram.com/the_arunyadav_/',
    label: 'Blog',
    description: 'Read my technical articles',
    color: 'hover:bg-primary',
  },
  {
    icon: Mail,
    href: 'mailto:arunydv2587@gmail.com',
    label: 'Email',
    description: 'Send me a message directly',
    color: 'hover:bg-primary',
  },
  {
    icon: Calendar,
    href: 'https://calendly.com/arunydv2587',
    label: 'Schedule a Call',
    description: 'Book a meeting with me',
    color: 'hover:bg-[#006BFF]',
  },
]

export function Connect() {
  return (
    <section id="connect" className="py-20">
      <div className="container px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-muted-foreground">
            Choose your preferred platform to connect with me. I&apos;m always excited to meet new people,
            collaborate on projects, or just chat about technology.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={social.href} target="_blank" rel="noopener noreferrer">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <motion.div
                      className="group flex flex-col items-center text-center gap-4"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div
                        className={`p-4 rounded-full transition-colors ${social.color} group-hover:text-white`}
                      >
                        <social.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{social.label}</h3>
                        <p className="text-sm text-muted-foreground">{social.description}</p>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            size="lg"
            className="rounded-full"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

