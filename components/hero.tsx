import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="container mx-auto px-4 pt-32 pb-20 md:pt-44 md:pb-32">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mb-8 inline-block">
          <span className="inline-flex items-center rounded-full border border-border/50 bg-accent/5 px-4 py-1.5 text-sm font-medium text-foreground transition-all hover:bg-accent/10">Recreate AI</span>
        </div>
        <h1 className="mb-8 text-balance text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
          Transform designs into code with AI
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-relaxed">
          Convert your design screenshots and mockups into clean, production-ready code across multiple frameworks.
          Build faster with AI-powered code generation.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/signup">
            <Button size="lg" className="h-12 rounded-full px-8 text-base shadow-lg transition-all hover:shadow-xl hover:scale-105">
              <Sparkles className="mr-2 h-5 w-5" />
              Start Creating
            </Button>
          </Link>
          <Link href="/dashboard/generate">
            <Button size="lg" variant="outline" className="h-12 rounded-full px-8 text-base transition-all hover:bg-accent/5">
              Try Demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
