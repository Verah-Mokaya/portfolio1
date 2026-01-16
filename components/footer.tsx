export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-sm text-foreground/60">© {currentYear} verahmokaya. All rights reserved.</div>
          <div className="flex gap-6 items-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://github.com/Verah-Mokaya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/verah-mokaya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a href="mailto:verahmokaya475@gmail.com" className="text-foreground/60 hover:text-primary transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
