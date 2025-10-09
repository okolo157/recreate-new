import { Zap, Shield, Users, Code2 } from "lucide-react"
import { Card } from "@/components/ui/card"

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
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="mb-16 text-center">
        <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          The complete platform to build the web
        </h2>
        <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          Your team's toolkit to stop configuring and start innovating. Securely build, deploy, and scale the best web
          experiences.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Card
              key={index}
              className="group relative overflow-hidden border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-card/50 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-all group-hover:bg-accent/20 group-hover:scale-110">
                <Icon className="h-6 w-6 text-accent transition-transform group-hover:scale-110" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
