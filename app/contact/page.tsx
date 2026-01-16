"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <main className="min-h-screen">
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h1>
          <p className="text-lg text-foreground/70">
            I'm always interested in hearing about interesting projects and collaboration opportunities. Feel free to
            reach out!
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="rounded-lg border border-border bg-card p-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Email</h3>
            <a
              href="mailto:verahmokaya475@gmail.com"
              className="text-primary hover:text-primary/80 transition-colors font-semibold"
            >
              verahmokaya475@gmail.com
            </a>
          </div>

          <div className="rounded-lg border border-border bg-card p-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Social</h3>
            <div className="flex gap-6">
              <a
                href="https://github.com/Verah-Mokaya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-semibold"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/verah-mokaya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-semibold"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-lg border border-border bg-card p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Send me a message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Tell me about your project or idea..."
                required
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </main>
  )
}
