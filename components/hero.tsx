import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-block">
          <span className="text-sm font-medium text-accent">Recreate AI</span>
        </div>
        <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Transform designs into code with AI
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Convert your design screenshots and mockups into clean, production-ready code across multiple frameworks.
          Build faster with AI-powered code generation.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/signup">
            <Button size="lg" className="rounded-full px-8">
              <Sparkles className="mr-2 h-5 w-5" />
              Start Creating
            </Button>
          </Link>
          <Link href="/dashboard/generate">
            <Button size="lg" variant="secondary" className="rounded-full px-8">
              Try Demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
