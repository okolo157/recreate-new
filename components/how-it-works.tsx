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
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl lg:text-5xl">How It Works</h2>
        <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground leading-relaxed">
          Transform your designs into code in four simple steps. No coding required.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <div key={index} className="relative">
              <div className="mb-4 flex items-center gap-4">
                <span className="text-5xl font-bold text-accent/20">{step.step}</span>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-pretty text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-px w-full bg-gradient-to-r from-accent/50 to-transparent lg:block" />
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
