import { Card } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      title: "Email",
      content: "support@buildai.com",
      link: "mailto:support@buildai.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Office",
      content: "123 AI Street, San Francisco, CA 94102",
      link: "https://maps.google.com",
    },
  ]

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="mb-4 text-xl font-semibold">Contact Information</h3>
        <p className="mb-6 text-muted-foreground">
          Reach out to us through any of these channels. We're here to help you build amazing things with AI.
        </p>
        <div className="space-y-4">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon
            return (
              <a
                key={index}
                href={detail.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-lg p-3 transition-colors hover:bg-accent/5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">{detail.title}</p>
                  <p className="text-sm text-muted-foreground">{detail.content}</p>
                </div>
              </a>
            )
          })}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="mb-4 text-xl font-semibold">Business Hours</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Monday - Friday</span>
            <span className="font-medium">9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Saturday</span>
            <span className="font-medium">10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Sunday</span>
            <span className="font-medium">Closed</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
