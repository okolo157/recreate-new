import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Documentation", href: "/docs" },
      { name: "API", href: "/api" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    resources: [
      { name: "Community", href: "/community" },
      { name: "Help Center", href: "/help" },
      { name: "Status", href: "/status" },
      { name: "Changelog", href: "/changelog" },
    ],
    legal: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Security", href: "/security" },
      { name: "Cookies", href: "/cookies" },
    ],
  }

  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 inline-flex items-center gap-2 transition-opacity hover:opacity-80">
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-foreground"
              >
                <defs>
                  <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#footerLogoGradient)" />
                <path
                  d="M9 12L16 8L23 12M9 20L16 24L23 20M9 16L16 20L23 16"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <circle cx="16" cy="12" r="1.5" fill="white" />
              </svg>
              <span className="text-lg font-bold">Recreate<span className="text-accent">AI</span></span>
            </Link>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-muted-foreground">Transform designs into production-ready code with AI.</p>
            <div className="flex gap-4">
              <Link
                href="https://github.com"
                className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground transition-all hover:bg-accent/10 hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com"
                className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground transition-all hover:bg-accent/10 hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com"
                className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground transition-all hover:bg-accent/10 hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-all hover:translate-x-0.5 hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-all hover:translate-x-0.5 hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-all hover:translate-x-0.5 hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-all hover:translate-x-0.5 hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} RecreateAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
