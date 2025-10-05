"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Sparkles, Send, Copy, ImageIcon, X, Save } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useChat } from "ai/react"
import { Code2 } from "lucide-react" // Declaring Code2 variable

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

export function AIGenerator() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [lastGeneratedCode, setLastGeneratedCode] = useState<{ code: string; language: string; prompt: string } | null>(
    null,
  )
  const [isSaving, setIsSaving] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  const { messages, input, handleInputChange, handleSubmit, isLoading, setInput } = useChat({
    api: "/api/generate",
    body: {
      imageUrl: uploadedImage,
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to generate code. Please try again.",
        variant: "destructive",
      })
    },
    onFinish: (message) => {
      // Extract code from the completed message
      const codeBlocks = extractCodeFromMessage(message.content)
      if (codeBlocks && codeBlocks.length > 0) {
        const lastUserMessage = messages.filter((m) => m.role === "user").pop()
        setLastGeneratedCode({
          code: codeBlocks[0].code,
          language: codeBlocks[0].language,
          prompt: lastUserMessage?.content || input,
        })
      }
    },
  })

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith("image/")) {
      toast({
        title: "Error",
        description: "Please upload an image file",
        variant: "destructive",
      })
      return
    }

    const reader = new FileReader()
    reader.onloadend = () => {
      setUploadedImage(reader.result as string)
      toast({
        title: "Success",
        description: "Image uploaded successfully",
      })
    }
    reader.readAsDataURL(file)
  }

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    toast({
      title: "Copied",
      description: "Code copied to clipboard",
    })
  }

  const handleSaveGeneration = async () => {
    if (!lastGeneratedCode) return

    setIsSaving(true)
    try {
      const response = await fetch("/api/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: lastGeneratedCode.prompt,
          code: lastGeneratedCode.code,
          language: lastGeneratedCode.language,
          image_url: uploadedImage,
        }),
      })

      if (response.ok) {
        toast({
          title: "Saved",
          description: "Generation saved to your dashboard",
        })
        setLastGeneratedCode(null)
      } else {
        throw new Error("Failed to save")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save generation. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const extractCodeFromMessage = (content: string) => {
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g
    const matches = [...content.matchAll(codeBlockRegex)]

    if (matches.length > 0) {
      return matches.map((match) => ({
        language: match[1] || "tsx",
        code: match[2].trim(),
      }))
    }

    return null
  }

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      <div className="border-b border-border bg-card px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
              <Sparkles className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h1 className="text-xl font-semibold">AI Code Generator</h1>
              <p className="text-sm text-muted-foreground">Describe what you want to build or upload a design</p>
            </div>
          </div>
          {lastGeneratedCode && (
            <Button onClick={handleSaveGeneration} disabled={isSaving}>
              <Save className="mr-2 h-4 w-4" />
              {isSaving ? "Saving..." : "Save Generation"}
            </Button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="mx-auto max-w-4xl space-y-6">
          {messages.length === 0 && (
            <div className="flex justify-start">
              <div className="max-w-[80%]">
                <div className="rounded-lg border border-border bg-card p-4">
                  <p className="text-sm leading-relaxed">
                    Hello! I'm your AI assistant. Describe what you'd like to build, upload a design screenshot, and
                    I'll generate the code for you.
                  </p>
                </div>
              </div>
            </div>
          )}

          {messages.map((message) => {
            const codeBlocks = message.role === "assistant" ? extractCodeFromMessage(message.content) : null
            const textContent = message.content.replace(/```(\w+)?\n[\s\S]*?```/g, "").trim()

            return (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] ${message.role === "user" ? "order-2" : "order-1"}`}>
                  {textContent && (
                    <div
                      className={`rounded-lg p-4 ${
                        message.role === "user" ? "bg-primary text-primary-foreground" : "bg-card border border-border"
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{textContent}</p>
                    </div>
                  )}
                  {codeBlocks &&
                    codeBlocks.map((block, index) => (
                      <Card key={index} className="mt-3 overflow-hidden">
                        <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-2">
                          <div className="flex items-center gap-2">
                            <Code2 className="h-4 w-4 text-muted-foreground" />
                            <span className="text-xs font-medium text-muted-foreground">{block.language}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8"
                              onClick={() => handleCopyCode(block.code)}
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="bg-muted/30 p-4">
                          <pre className="overflow-x-auto text-sm">
                            <code>{block.code}</code>
                          </pre>
                        </div>
                      </Card>
                    ))}
                </div>
              </div>
            )
          })}

          {isLoading && (
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
          {uploadedImage && (
            <div className="mb-4 relative inline-block">
              <img
                src={uploadedImage || "/placeholder.svg"}
                alt="Uploaded design"
                className="max-h-32 rounded-lg border border-border"
              />
              <Button
                type="button"
                variant="destructive"
                size="icon"
                className="absolute -top-2 -right-2 h-6 w-6 rounded-full"
                onClick={() => setUploadedImage(null)}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          )}
          <div className="flex gap-3">
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="h-[60px] w-[60px] shrink-0 bg-transparent"
              onClick={() => fileInputRef.current?.click()}
              disabled={isLoading}
            >
              <ImageIcon className="h-5 w-5" />
            </Button>
            <Textarea
              placeholder="Describe what you want to build... (e.g., 'Create a login form with email and password')"
              value={input}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSubmit(e)
                }
              }}
              disabled={isLoading}
              className="min-h-[60px] resize-none"
            />
            <Button
              type="submit"
              size="icon"
              className="h-[60px] w-[60px] shrink-0"
              disabled={isLoading || !input.trim()}
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">Press Enter to send, Shift + Enter for new line</p>
        </form>
      </div>
    </div>
  )
}
