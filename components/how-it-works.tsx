import { Upload, Sparkles, Download, CheckCircle } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Design",
      description: "Upload screenshots, mockups, or wireframes. Support for Figma, Sketch, and image files.",
      step: "01",
    },
    {
      icon: Sparkles,
      title: "AI Generates Code",
      description: "Our AI analyzes your design and generates clean, production-ready code in seconds.",
      step: "02",
    },
    {
      icon: CheckCircle,
      title: "Review & Customize",
      description: "Review the generated code, make adjustments, and customize to match your needs.",
      step: "03",
    },
    {
      icon: Download,
      title: "Export & Deploy",
      description: "Export your code in React, Vue, or HTML. Deploy directly or integrate with your workflow.",
      step: "04",
    },
  ]

  return (
    <section className="relative bg-muted/30 border-y border-border/50">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">How it works</h2>
          <p className="mx-auto max-w-2xl text-pretty text-base text-muted-foreground/90 leading-[1.7]">
            Transform your designs into code in four simple steps. From upload to deployment in minutes.
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="mb-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-background border border-border/60">
                    <Icon className="h-5 w-5 text-foreground/70" />
                  </div>
                  <div className="text-sm font-mono text-muted-foreground/50 mb-2">Step {step.step}</div>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground/80 leading-[1.6]">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="absolute left-[calc(100%+1.5rem)] top-6 hidden h-px w-12 bg-border/60 lg:block">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-1 w-1 rounded-full bg-border/60" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
