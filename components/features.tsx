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
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
          The complete platform to build the web
        </h2>
        <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground leading-relaxed">
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
              className="border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-colors hover:bg-card"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-pretty text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
