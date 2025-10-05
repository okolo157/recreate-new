"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreVertical, ExternalLink, Code2, Plus } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

interface Generation {
  id: string
  prompt: string
  code: string
  language: string
  image_url: string | null
  created_at: string
}

export function ProjectList({ showAll = false }: { showAll?: boolean }) {
  const [generations, setGenerations] = useState<Generation[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    async function fetchGenerations() {
      try {
        const response = await fetch("/api/generations")
        if (response.ok) {
          const data = await response.json()
          setGenerations(data.generations || [])
        }
      } catch (error) {
        console.error("[v0] Error fetching generations:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchGenerations()
  }, [])

  const displayedGenerations = showAll ? generations : generations.slice(0, 6)

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    toast({
      title: "Copied",
      description: "Code copied to clipboard",
    })
  }

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)

    if (seconds < 60) return "just now"
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`
    if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`
    return date.toLocaleDateString()
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Recent Generations</h2>
          <Link href="/dashboard/generate">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Generation
            </Button>
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-6 animate-pulse">
              <div className="h-4 bg-muted rounded w-3/4 mb-2" />
              <div className="h-3 bg-muted rounded w-full mt-2" />
            </Card>
          ))}
        </div>
      </div>
    )
  }

  if (generations.length === 0) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Recent Generations</h2>
          <Link href="/dashboard/generate">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Generation
            </Button>
          </Link>
        </div>
        <Card className="p-12 text-center">
          <Code2 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">No generations yet</h3>
          <p className="text-muted-foreground mb-4">Start creating code with AI to see your generations here</p>
          <Link href="/dashboard/generate">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Your First Generation
            </Button>
          </Link>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Recent Generations</h2>
        <Link href="/dashboard/generate">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Generation
          </Button>
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {displayedGenerations.map((generation) => (
          <Card key={generation.id} className="p-6 transition-colors hover:bg-accent/5">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {generation.language}
                  </Badge>
                </div>
                <p className="mt-2 text-sm font-medium line-clamp-2">{generation.prompt}</p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleCopyCode(generation.code)}>
                    <Code2 className="mr-2 h-4 w-4" />
                    Copy Code
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Details
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              <span>{generation.code.split("\n").length} lines</span>
              <span>{formatTimeAgo(generation.created_at)}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
