import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative container mx-auto px-4 pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-muted/30 via-background to-background" />
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-block">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-background/60 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-foreground/80 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground/40 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground/60"></span>
            </span>
            AI-Powered Code Generation
          </span>
        </div>
        <h1 className="mb-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
          Transform designs into production-ready code
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-pretty text-base leading-[1.7] text-muted-foreground/90 md:text-lg">
          Convert screenshots and mockups into clean, semantic code across any framework. Ship features faster with intelligent AI that understands design patterns and best practices.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row mb-12">
          <Link href="/signup">
            <Button size="lg" className="group h-11 rounded-full px-7 text-sm font-medium shadow-sm transition-all hover:shadow-md">
              Start for free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Link>
          <Link href="/features">
            <Button size="lg" variant="outline" className="h-11 rounded-full px-7 text-sm font-medium border-border/60 bg-background/60 backdrop-blur-sm transition-all hover:bg-muted/50 hover:border-border">
              Explore features
            </Button>
          </Link>
        </div>
        <p className="text-xs text-muted-foreground/60">No credit card required · Free 14-day trial · Cancel anytime</p>
      </div>
    </section>
  )
}
