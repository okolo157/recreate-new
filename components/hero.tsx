import { Button } from "@/components/ui/button"
import { PlayCircle } from "lucide-react"

export function Hero() {
  return (
    <section className="container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-block">
          <span className="text-sm font-medium text-accent">BuildAI for Enterprise</span>
        </div>
        <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          AI for teams building the web
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Empower your entire organization to create at the speed of thought, while ensuring security remains at the
          forefront.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="rounded-full px-8">
            Contact Sales
          </Button>
          <Button size="lg" variant="secondary" className="rounded-full px-8">
            <PlayCircle className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
