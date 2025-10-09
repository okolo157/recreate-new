import { Zap, Shield, Users, Code2 } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Generate production-ready code in seconds. Ship features faster than ever before with AI-powered development.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Built with security at the core. SOC 2 compliant with role-based access control and audit logs.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Work together seamlessly. Share components, iterate faster, and maintain consistency across your organization.",
    },
    {
      icon: Code2,
      title: "Best Practices",
      description:
        "Generate code following industry standards. TypeScript, accessibility, and performance optimized by default.",
    },
  ]

  return (
    <section className="relative container mx-auto px-4 py-24 md:py-32">
      <div className="mb-20 text-center">
        <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Built for modern teams
        </h2>
        <p className="mx-auto max-w-2xl text-pretty text-base leading-[1.7] text-muted-foreground/90">
          Everything you need to transform designs into production-ready code. Secure, fast, and built for scale.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl border border-border/60 bg-background/40 backdrop-blur-sm p-8 transition-all duration-300 hover:border-border hover:bg-background/60 hover:shadow-sm">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-muted/50 transition-colors group-hover:bg-muted">
                  <Icon className="h-5 w-5 text-foreground/70" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm leading-[1.6] text-muted-foreground/80">{feature.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
