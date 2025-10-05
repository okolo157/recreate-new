import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Lead Designer at TechCorp",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "This tool has completely transformed our workflow. We're shipping features 3x faster and our developers love the clean code it generates.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Frontend Developer",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "The AI-generated code is surprisingly good. It follows best practices and is actually maintainable. Saves me hours every week.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Product Manager at StartupXYZ",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Game changer for our small team. We can prototype and iterate so much faster now. The quality is consistently high.",
      rating: 5,
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
          Loved by developers and designers
        </h2>
        <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground leading-relaxed">
          Join thousands of teams who are building faster with AI-powered development.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border-border/50 bg-card/50 p-6 backdrop-blur-sm">
            <div className="mb-4 flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="mb-6 text-pretty text-sm leading-relaxed">{testimonial.content}</p>
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
