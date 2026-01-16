import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-4">Hello, I'm Vera</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Software Engineer & UX Designer
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                I craft digital experiences for healthcare, education, and startup systems. Passionate about creating
                intuitive, accessible interfaces backed by clean code.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/projects">View Projects</Link>
              </Button>
              <Button size="lg" variant="outline">
                <a href="/resume.pdf" download>
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Placeholder */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div className="text-center">
                <p className="text-foreground/40 text-sm">Dashboard Illustration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-foreground/70 text-lg">
            Showcasing my work across healthcare, education, and startup systems
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Sample Project Cards */}
          {[
            {
              title: "Healthcare Platform",
              description: "Patient management system with intuitive data visualization",
              tech: ["React", "TypeScript", "Tailwind"],
            },
            {
              title: "EdTech Dashboard",
              description: "Learning analytics platform for educational institutions",
              tech: ["Next.js", "PostgreSQL", "D3.js"],
            },
            {
              title: "Startup SaaS",
              description: "Scalable collaboration tool for growing teams",
              tech: ["React", "Node.js", "MongoDB"],
            },
          ].map((project, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-border overflow-hidden bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col"
            >
              <div className="w-full h-40 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-6" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-sm text-foreground/70 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
