import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Code2, Zap, Shield, Users, Smartphone, Globe, Database, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function FeaturesPage() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Generation",
      description:
        "Generate production-ready code in seconds. Our AI analyzes your designs and outputs clean, optimized code instantly.",
    },
    {
      icon: Code2,
      title: "Multiple Frameworks",
      description:
        "Support for React, Vue, Angular, Next.js, and more. Choose your preferred framework and let AI handle the rest.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "SOC 2 compliant with role-based access control, audit logs, and end-to-end encryption for your code and data.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Work together seamlessly with your team. Share components, iterate faster, and maintain consistency across projects.",
    },
    {
      icon: Smartphone,
      title: "Responsive by Default",
      description:
        "Generated code is fully responsive and mobile-optimized, following modern design principles and best practices.",
    },
    {
      icon: Globe,
      title: "Accessibility First",
      description:
        "WCAG 2.1 compliant code generation. Semantic HTML, ARIA labels, and keyboard navigation built-in automatically.",
    },
    {
      icon: Database,
      title: "Component Library",
      description:
        "Build and maintain your own component library. Reuse components across projects and maintain design consistency.",
    },
    {
      icon: Sparkles,
      title: "AI-Powered Refinement",
      description:
        "Continuously improve generated code with AI suggestions, optimizations, and best practice recommendations.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 pt-32 pb-20 md:pt-44 md:pb-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              Powerful Features for Modern Development
            </h1>
            <p className="mx-auto mb-12 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              Everything you need to transform designs into production-ready code with AI-powered precision and speed.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-border/50 bg-card/30 p-8 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-card/50 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 transition-all group-hover:bg-accent/20 group-hover:scale-110">
                    <Icon className="h-7 w-7 text-foreground transition-transform group-hover:scale-110" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
