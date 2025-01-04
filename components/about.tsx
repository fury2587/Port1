'use client'

import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaJs } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si'

const skills = [
  { name: 'React', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'JavaScript', icon: FaJs },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-6">
              I&apos;m a passionate web developer with a keen eye for design and a love for creating
              seamless user experiences. With years of experience in modern web technologies,
              I bring ideas to life through clean code and creative solutions.
            </p>
            <p className="text-muted-foreground">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing my knowledge through technical writing.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-3 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center p-4 bg-background rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl text-primary mb-2">
                  <skill.icon />
                </div>
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
