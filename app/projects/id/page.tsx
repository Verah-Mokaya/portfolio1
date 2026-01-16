"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const projectDetails = {
  "healthcare-platform": {
    title: "Healthcare Patient Management",
    shortDescription: "Comprehensive patient data management system",
    description: "A full-featured patient management platform for healthcare providers.",
    problemStatement:
      "Healthcare providers needed a streamlined way to manage patient records, appointments, and medical history in one accessible location.",
    solution:
      "Built an intuitive platform with secure patient data management, appointment scheduling, and seamless integration with medical workflows.",
    keyFeatures: [
      "Patient record management with searchable medical history",
      "Appointment scheduling with automated reminders",
      "Prescription and medication tracking",
      "Real-time notifications and alerts",
      "HIPAA-compliant data encryption",
      "Multi-user role-based access control",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "JWT Auth"],
    challengesAndLessons:
      "The main challenge was implementing HIPAA compliance while maintaining excellent UX. I learned the importance of security-first design and how regulatory requirements can actually drive better architecture decisions.",
    images: ["/healthcare-dashboard.jpg", "/patient-records.jpg", "/appointment-scheduling.png"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  "edtech-dashboard": {
    title: "EdTech Learning Analytics",
    shortDescription: "Educational platform with learning analytics",
    description: "An educational technology platform providing comprehensive learning analytics.",
    problemStatement:
      "Educators struggled to track student progress and identify learning gaps across multiple dimensions of the curriculum.",
    solution:
      "Created a data-driven platform that visualizes student performance, engagement metrics, and learning patterns in an accessible way.",
    keyFeatures: [
      "Real-time student progress tracking",
      "Customizable learning paths and assessments",
      "Advanced analytics with predictive insights",
      "Parent-teacher communication portal",
      "Automated performance reports",
      "Integration with existing LMS systems",
    ],
    techStack: ["Next.js", "TypeScript", "D3.js", "PostgreSQL", "Redis"],
    challengesAndLessons:
      "Visualizing complex educational data in an understandable way was challenging. This taught me about information hierarchy and how important it is to involve end-users in the design process.",
    images: ["/analytics-dashboard.png", "/student-progress-tracking.png", "/reports-stacked.png"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
}

export default function ProjectDetailPage() {
  const params = useParams()
  const id = params.id as string
  const project = projectDetails[id as keyof typeof projectDetails]

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project not found</h1>
          <Button asChild>
            <a href="/projects">Back to Projects</a>
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Button variant="outline" asChild className="mb-8 bg-transparent">
          <a href="/projects">← Back to Projects</a>
        </Button>

        <div className="mb-12">
          <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-4">Project</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{project.title}</h1>
          <p className="text-xl text-foreground/70">{project.shortDescription}</p>
        </div>

        {/* Hero Image */}
        <div className="rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 aspect-video mb-16 w-full" />

        {/* Problem Statement */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">Problem Statement</h2>
          <p className="text-lg text-foreground/70 leading-relaxed">{project.problemStatement}</p>
        </section>

        {/* Solution */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">Solution</h2>
          <p className="text-lg text-foreground/70 leading-relaxed">{project.solution}</p>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
          <ul className="space-y-3">
            {project.keyFeatures.map((feature, idx) => (
              <li key={idx} className="flex gap-4 text-foreground/70">
                <span className="text-primary font-bold flex-shrink-0">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Screenshots Gallery */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Gallery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.images.map((image, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden bg-muted aspect-video">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Screenshot ${idx + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Challenges & Lessons */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">Challenges & Lessons Learned</h2>
          <p className="text-lg text-foreground/70 leading-relaxed">{project.challengesAndLessons}</p>
        </section>

        {/* CTA Buttons */}
        <section className="flex gap-4 flex-wrap mb-12">
          {project.liveUrl && (
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                View Live Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button size="lg" variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </Button>
          )}
        </section>
      </section>
    </main>
  )
}
