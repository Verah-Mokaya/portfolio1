"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
}

export default function ProjectCard({
  id,
  title,
  description,
  image,
  techStack,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`}>
      <div className="group rounded-lg border border-border overflow-hidden bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full flex flex-col">
        {/* Project Image */}
        <div className="relative w-full h-48 bg-muted overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Project Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-foreground/70 mb-4 flex-grow line-clamp-2">{description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {techStack.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            {liveUrl && (
              <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                  Live Demo
                </a>
              </Button>
            )}
            {githubUrl && (
              <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                  GitHub
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
