import ProjectCard from "@/components/project-card"

export default function ProjectsPage() {
  const projects = [
    {
      id: "healthcare-platform",
      title: "Healthcare Patient Management",
      description: "Comprehensive patient data management system with appointment scheduling and medical records",
      image: "/healthcare-dashboard.jpg",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: "edtech-dashboard",
      title: "EdTech Learning Analytics",
      description: "Educational platform providing detailed learning analytics and student progress tracking",
      image: "/education-dashboard-analytics.jpg",
      techStack: ["Next.js", "TypeScript", "D3.js", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: "startup-saas",
      title: "Team Collaboration SaaS",
      description: "Real-time collaboration tool designed for startup teams to manage projects and workflows",
      image: "/collaboration-tool-interface.png",
      techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: "fintech-app",
      title: "Fintech Mobile App",
      description: "Financial management application with secure transactions and budget tracking",
      image: "/fintech-mobile-app.jpg",
      techStack: ["React Native", "Firebase", "Redux"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: "ai-content",
      title: "AI Content Generator",
      description: "Intelligent content generation platform powered by machine learning models",
      image: "/ai-artificial-intelligence.jpg",
      techStack: ["Next.js", "Python", "TensorFlow", "Vercel"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: "real-estate",
      title: "Real Estate Portal",
      description: "Full-featured real estate marketplace with virtual tours and property management",
      image: "/real-estate-property.png",
      techStack: ["Next.js", "GraphQL", "Mapbox", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ]

  return (
    <main className="min-h-screen">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Projects</h1>
          <p className="text-lg text-foreground/70">
            A collection of my work across healthcare, education, and startup systems
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </main>
  )
}
