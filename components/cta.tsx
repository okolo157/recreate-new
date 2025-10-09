import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="container mx-auto px-4">
      <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-muted/50 to-background p-12 md:p-16 lg:p-20">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Ready to ship faster?
          </h2>
          <p className="mb-10 text-pretty text-base leading-[1.7] text-muted-foreground/90 md:text-lg">
            Join thousands of developers and designers who are building production-ready code with AI. Start your free trial today.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row mb-6">
            <Button asChild size="lg" className="group h-11 gap-2 rounded-full px-7 text-sm font-medium shadow-sm transition-all hover:shadow-md">
              <Link href="/signup" className="cursor-pointer">
                Start for free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-11 rounded-full px-7 text-sm font-medium border-border/60 bg-background/60 backdrop-blur-sm transition-all hover:bg-muted/50 hover:border-border">
              <Link href="/contact">Talk to sales</Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground/60">No credit card required · 14-day free trial · Cancel anytime</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
