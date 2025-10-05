"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Sparkles, Send, Copy, Download, Code2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  code?: string
  language?: string
}

export function AIGenerator() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm your AI assistant. Describe what you'd like to build, and I'll generate the code for you.",
    },
  ])
  const [input, setInput] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isGenerating) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsGenerating(true)

    // Simulate AI generation
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I've generated a component based on your request. Here's the code:",
        code: `import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function GeneratedComponent() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Generated Component
      </h2>
      <p className="text-muted-foreground mb-4">
        This is a sample component generated based on your prompt.
      </p>
      <Button>Click Me</Button>
    </Card>
  )
}`,
        language: "tsx",
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsGenerating(false)
    }, 2000)
  }

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    toast({
      title: "Copied",
      description: "Code copied to clipboard",
    })
  }

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      <div className="border-b border-border bg-card px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
            <Sparkles className="h-5 w-5 text-accent" />
          </div>
          <div>
            <h1 className="text-xl font-semibold">AI Code Generator</h1>
            <p className="text-sm text-muted-foreground">Describe what you want to build</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="mx-auto max-w-4xl space-y-6">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] ${message.role === "user" ? "order-2" : "order-1"}`}>
                <div
                  className={`rounded-lg p-4 ${
                    message.role === "user" ? "bg-primary text-primary-foreground" : "bg-card border border-border"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
                {message.code && (
                  <Card className="mt-3 overflow-hidden">
                    <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-2">
                      <div className="flex items-center gap-2">
                        <Code2 className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs font-medium text-muted-foreground">{message.language}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-8" onClick={() => handleCopyCode(message.code!)}>
                          <Copy className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8">
                          <Download className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="bg-muted/30 p-4">
                      <pre className="overflow-x-auto text-sm">
                        <code>{message.code}</code>
                      </pre>
                    </div>
                  </Card>
                )}
              </div>
            </div>
          ))}
          {isGenerating && (
            <div className="flex justify-start">
              <div className="max-w-[80%]">
                <div className="rounded-lg border border-border bg-card p-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 animate-spin text-accent" />
                    <span className="text-sm text-muted-foreground">Generating code...</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-border bg-card p-6">
        <form onSubmit={handleSubmit} className="mx-auto max-w-4xl">
          <div className="flex gap-3">
            <Textarea
              placeholder="Describe what you want to build... (e.g., 'Create a login form with email and password')"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSubmit(e)
                }
              }}
              disabled={isGenerating}
              className="min-h-[60px] resize-none"
            />
            <Button type="submit" size="icon" className="h-[60px] w-[60px] shrink-0" disabled={isGenerating}>
              <Send className="h-5 w-5" />
            </Button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">Press Enter to send, Shift + Enter for new line</p>
        </form>
      </div>
    </div>
  )
}
