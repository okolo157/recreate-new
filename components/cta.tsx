import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-accent/10 via-background to-background p-10 shadow-xl md:p-16 lg:p-20">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Ready to transform your workflow?
          </h2>
          <p className="mb-10 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Join thousands of developers and designers who are building faster with AI. Start your free trial today.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-12 gap-2 rounded-full px-8 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              <Link href="/signup">
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-full px-8 transition-all hover:bg-accent/5">
              <Link href="/contact">Talk to Sales</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">No credit card required • 14-day free trial</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
    </section>
  )
}
