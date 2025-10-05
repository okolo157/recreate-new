import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-accent/10 via-background to-background p-8 md:p-12 lg:p-16">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Ready to transform your workflow?
          </h2>
          <p className="mb-8 text-pretty text-lg text-muted-foreground leading-relaxed">
            Join thousands of developers and designers who are building faster with AI. Start your free trial today.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link href="/signup">
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Talk to Sales</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">No credit card required • 14-day free trial</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
    </section>
  )
}
