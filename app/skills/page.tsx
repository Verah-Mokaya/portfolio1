export default function SkillsPage() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Web Components"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Firebase", "Redis", "Prisma ORM", "Supabase"],
    },
    {
      category: "DevOps",
      skills: ["Docker", "GitHub Actions", "AWS", "Vercel", "CI/CD", "Linux"],
    },
    {
      category: "UX/Design",
      skills: ["Figma", "User Research", "Accessibility (WCAG)", "Design Systems", "Prototyping"],
    },
  ]

  return (
    <main className="min-h-screen">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Skills & Expertise</h1>
          <p className="text-xl text-foreground/70">A comprehensive overview of my technical and design capabilities</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="rounded-lg border border-border bg-card p-8 hover:shadow-lg transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">{cat.category}</h2>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 rounded-lg border border-border bg-card p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Core Competencies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">Development</h3>
              <p className="text-foreground/70 leading-relaxed">
                Full-stack development with emphasis on user-centric design. Experienced in building scalable
                applications for healthcare, education, and startup ecosystems.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Design Thinking</h3>
              <p className="text-foreground/70 leading-relaxed">
                Problem-solving approach combining UX research, accessibility best practices, and technical
                implementation to create intuitive digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
