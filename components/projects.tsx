'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, Globe } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: 'Carepluss',
    description: 'A modern web application built with Next.js and TypeScript which helps in scheduling the appointment for the doctor.',
    image: '/careplus.png?height=400&width=600',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/fury2587/Patient-Care',
    demo: 'https://carepluss.netlify.app/',
  },
  {
    title: 'RBAC UI',
    description: 'An application built with React and Tailwind CSS which helps in managing the role-based access control.',
    image: '/rbac.png?height=500&width=600',
    tags: ['React', 'Next.Js','Tailwind CSS'],
    github: 'https://github.com/fury2587',
    demo: 'https://rabcui.netlify.app/',
  },
  {
    title: 'Eventify',
    description: 'A modern web application built with Next.js and TypeScript which helps in managing the events.',
    image: '/eventify.png?height=400&width=600',
    tags: ['React',  'Material-UI', 'next.js'],
    github: 'https://github.com/fury2587',
    demo: 'https://eventify99.netlify.app/',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group">
                <motion.div
                  className="relative h-48 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.github} target="_blank">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Link>
                    </Button>
                    <Button asChild size="sm">
                      <Link href={project.demo} target="_blank">
                        <Globe className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

