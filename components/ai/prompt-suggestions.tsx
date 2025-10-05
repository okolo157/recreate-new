"use client"

import { Card } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

interface PromptSuggestionsProps {
  onSelectPrompt: (prompt: string) => void
}

export function PromptSuggestions({ onSelectPrompt }: PromptSuggestionsProps) {
  const suggestions = [
    {
      title: "Login Form",
      prompt: "Create a login form with email and password fields, a remember me checkbox, and a submit button",
    },
    {
      title: "Dashboard Card",
      prompt: "Build a dashboard stats card showing a metric with an icon, value, and percentage change",
    },
    {
      title: "Pricing Section",
      prompt: "Design a pricing section with three tiers: Basic, Pro, and Enterprise with features list",
    },
    {
      title: "Navigation Bar",
      prompt: "Create a responsive navigation bar with logo, menu items, and a call-to-action button",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-accent" />
        <h3 className="font-semibold">Try these prompts</h3>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {suggestions.map((suggestion, index) => (
          <Card
            key={index}
            className="cursor-pointer p-4 transition-colors hover:bg-accent/5"
            onClick={() => onSelectPrompt(suggestion.prompt)}
          >
            <h4 className="mb-2 font-medium">{suggestion.title}</h4>
            <p className="text-sm text-muted-foreground line-clamp-2">{suggestion.prompt}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
