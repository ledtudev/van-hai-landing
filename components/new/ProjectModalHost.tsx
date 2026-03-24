"use client"

import React, { useState } from 'react'
import ProjectModal from '@/components/new/ProjectModal'

export default function ProjectModalHost() {
  // Show popup whenever user enters a `/new/*` page.
  const [open, setOpen] = useState(true)

  return open ? <ProjectModal onClose={() => setOpen(false)} /> : null
}

