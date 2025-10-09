import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Lead Designer",
      company: "TechCorp",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "This tool has completely transformed our workflow. We're shipping features 3x faster and our developers love the clean code it generates.",
    },
    {
      name: "Michael Rodriguez",
      role: "Frontend Developer",
      company: "Stripe",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "The AI-generated code is surprisingly good. It follows best practices and is actually maintainable. Saves me hours every week.",
    },
    {
      name: "Emily Watson",
      role: "Product Manager",
      company: "StartupXYZ",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Game changer for our small team. We can prototype and iterate so much faster now. The quality is consistently high.",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-24 md:py-32">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          Trusted by teams worldwide
        </h2>
        <p className="mx-auto max-w-2xl text-pretty text-base text-muted-foreground/90 leading-[1.7]">
          Join thousands of developers and designers building faster with AI-powered code generation.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="group relative rounded-2xl border border-border/60 bg-background/40 backdrop-blur-sm p-8 transition-all duration-300 hover:border-border hover:bg-background/60 hover:shadow-sm">
            <Quote className="h-8 w-8 text-muted-foreground/20 mb-4" />
            <p className="mb-6 text-sm leading-[1.7] text-foreground/80">{testimonial.content}</p>
            <div className="flex items-center gap-3 pt-4 border-t border-border/40">
              <Avatar className="h-10 w-10 border border-border/60">
                <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                <AvatarFallback className="text-xs bg-muted">{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground/70">{testimonial.role} at {testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
