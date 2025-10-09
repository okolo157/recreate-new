import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out Recreate AI",
      features: [
        "10 generations per month",
        "Basic component library",
        "React & Next.js support",
        "Community support",
        "Public projects only",
      ],
      cta: "Get Started",
      href: "/signup",
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      description: "For professional developers and small teams",
      features: [
        "Unlimited generations",
        "All frameworks supported",
        "Private projects",
        "Advanced component library",
        "Priority support",
        "Custom design tokens",
        "Export to GitHub",
        "Team collaboration (up to 5)",
      ],
      cta: "Start Free Trial",
      href: "/signup",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large teams and organizations",
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "SSO & SAML",
        "Advanced security features",
        "Dedicated account manager",
        "Custom integrations",
        "SLA & priority support",
        "On-premise deployment option",
      ],
      cta: "Contact Sales",
      href: "/contact",
      popular: false,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 pt-32 pb-20 md:pt-44 md:pb-32">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h1 className="mb-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              Choose the plan that works best for you. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden p-8 transition-all ${
                  plan.popular
                    ? "border-2 border-foreground shadow-2xl scale-105"
                    : "border-border/50 hover:border-accent/30 hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-foreground text-background px-3 py-1 text-xs font-semibold">
                    POPULAR
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-muted-foreground ml-2">/month</span>}
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={plan.href} className="block">
                  <Button
                    className={`w-full ${
                      plan.popular ? "shadow-lg" : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
