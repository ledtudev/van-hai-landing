'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const presets: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 48 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1 },
  },
}

type Props = {
  children: ReactNode
  direction?: keyof typeof presets
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

export function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className,
  once = true,
}: Props) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      variants={presets[direction]}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
