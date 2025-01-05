'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function ParticlesBackground() {
  const [particles, setParticles] = useState<JSX.Element[]>([])

  useEffect(() => {
    // Create random particles
    const numberOfParticles = 50
    const newParticles = []

    for (let i = 0; i < numberOfParticles; i++) {
      const x = Math.random() * 100 // Random x position (0-100%)
      const y = Math.random() * 100 // Random y position (0-100%)
      const size = Math.random() * 3 + 1 // Random size between 1-4px
      
      newParticles.push(
        <motion.div
          key={i}
          className="absolute bg-slate-400/30 rounded-full"
          style={{
            width: size,
            height: size,
            left: `${x}%`,
            top: `${y}%`,
          }}
          animate={{
            x: [0, Math.random() * 50 - 25],
            y: [0, Math.random() * 50 - 25],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      )
    }

    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background/80" />
    </div>
  )
}