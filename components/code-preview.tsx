"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function CodePreview() {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => setIsGenerating(false), 2000)
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="grid gap-0 lg:grid-cols-2">
          <div className="flex flex-col justify-center gap-6 p-8 lg:p-12">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Sparkles className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Generate UI with AI</h3>
            </div>
            <p className="text-pretty text-muted-foreground leading-relaxed">
              Create a sign up modal that has a form. When submitting the form, show a success toast. I'll use
              shadcn/ui, React and Tailwind.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-accent"
                >
                  <path d="M12 2L2 19.5h20L12 2z" fill="currentColor" />
                </svg>
              </div>
              <p className="text-sm text-muted-foreground">
                I'll create a modal that contains a form, and show a toast when the contents have been submitted.
              </p>
            </div>
            <div className="mt-2">
              <Button onClick={handleGenerate} disabled={isGenerating} className="rounded-lg">
                {isGenerating ? (
                  <>
                    <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  "Generate Component"
                )}
              </Button>
            </div>
          </div>
          <div className="border-l border-border/50 bg-muted/30 p-8 lg:p-12">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-muted-foreground">modal.tsx</span>
            </div>
            <pre className="overflow-x-auto text-sm">
              <code className="text-muted-foreground">
                <span className="text-accent">{"import"}</span> <span className="text-foreground">{"{ Button }"}</span>{" "}
                <span className="text-accent">from</span> <span className="text-green-400">"@/components/ui"</span>
                {"\n"}
                <span className="text-accent">{"import"}</span> <span className="text-foreground">{"{ Input }"}</span>{" "}
                <span className="text-accent">from</span> <span className="text-green-400">"@/components/ui"</span>
                {"\n\n"}
                <span className="text-accent">export function</span> <span className="text-blue-400">SignUpModal</span>
                {"() {"}
                {"\n  "}
                <span className="text-accent">return</span> ({"\n    "}
                <span className="text-muted-foreground">{'<div className="modal">'}</span>
                {"\n      "}
                <span className="text-muted-foreground">{"<form>"}</span>
                {"\n        "}
                <span className="text-muted-foreground">{'<Input placeholder="Email" />'}</span>
                {"\n        "}
                <span className="text-muted-foreground">{"<Button>Sign Up</Button>"}</span>
                {"\n      "}
                <span className="text-muted-foreground">{"</form>"}</span>
                {"\n    "}
                <span className="text-muted-foreground">{"</div>"}</span>
                {"\n  "}
                {")"}
                {"\n}"}
              </code>
            </pre>
          </div>
        </div>
      </Card>
    </section>
  )
}
