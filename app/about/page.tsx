export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">About Me</h1>

        <div className="space-y-8 text-lg text-foreground/70 leading-relaxed">
          <p>
            I'm a Software Engineer and UX Designer passionate about creating intuitive digital experiences that solve
            real-world problems. With a background in both design and engineering, I bridge the gap between beautiful
            interfaces and robust backend systems.
          </p>

          <p>
            My focus areas are healthcare technology, educational platforms, and startup ecosystems. I believe that
            great software is the intersection of thoughtful design, solid engineering, and a deep understanding of user
            needs.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">My Journey</h2>

          <p>
            I started my career as a frontend developer, deeply invested in creating pixel-perfect interfaces. Over
            time, I realized that truly impactful work requires understanding the entire system – from database design
            to user research to deployment strategies.
          </p>

          <p>
            This led me to develop expertise across the full stack, allowing me to make informed decisions about
            technical architecture while keeping user experience at the forefront. I've worked with teams in healthcare,
            education, and various startup environments, each teaching me valuable lessons about building products that
            matter.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">What I Value</h2>

          <ul className="space-y-4 list-disc list-inside">
            <li>
              <strong>User-Centered Design:</strong> Every pixel, every interaction, every feature should serve the user
            </li>
            <li>
              <strong>Accessibility:</strong> Building for everyone, not just the majority
            </li>
            <li>
              <strong>Clean Code:</strong> Writing maintainable, well-documented code that others (and future me) can
              understand
            </li>
            <li>
              <strong>Continuous Learning:</strong> Technology moves fast; staying curious is essential
            </li>
            <li>
              <strong>Collaboration:</strong> The best ideas come from diverse perspectives working together
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">When I'm Not Coding</h2>

          <p>
            I'm an avid reader, passionate about design systems and developer tools. I enjoy contributing to open-source
            projects, mentoring junior developers, and exploring how technology can positively impact education and
            healthcare systems. When I need a break, you'll find me hiking, exploring new coffee shops, or working on
            creative side projects.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Let's Connect</h2>

          <p>
            I'm always interested in discussing interesting projects, collaborating on challenges, or just grabbing
            coffee (virtual or otherwise) to chat about tech, design, or ideas. Feel free to reach out through any of
            the channels below.
          </p>

          <div className="flex gap-6 text-primary font-semibold pt-4">
            <a
              href="https://github.com/Verah-Mokaya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary/80 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/verah-mokaya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary/80 transition-colors"
            >
              LinkedIn
            </a>
            <a href="mailto:verahmokaya475@gmail.com" className="hover:text-primary/80 transition-colors">
              Email
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
