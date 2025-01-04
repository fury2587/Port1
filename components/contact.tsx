'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'

const socialLinks = [
  { icon: Github, href: 'https://github.com/fury2587', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/arun-yadav-fury0007/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/arunydv2587', label: 'Twitter' },
  { icon: Mail, href: 'mailto:arunydv2587@gmail.com', label: 'Email' },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Me</CardTitle>
                <CardDescription>
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Name" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <Input placeholder="Subject" />
                  </div>
                  <div>
                    <Textarea placeholder="Message" className="min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            className="flex flex-col justify-center gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">Connect With Me</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out through any of these platforms. I&apos;m always excited
                to connect and discuss new opportunities.
              </p>
            </div>
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((social) => (
                <motion.div key={social.label} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button asChild variant="ghost" size="icon">
                    <Link href={social.href} target="_blank">
                      <social.icon className="h-5 w-5" />
                      <span className="sr-only">{social.label}</span>
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

