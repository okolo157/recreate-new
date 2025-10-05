"use client"

import { Card } from "@/components/ui/card"
import { FolderKanban, Sparkles, Clock, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"

interface Stats {
  totalGenerations: number
  weekGenerations: number
  lastMonthGenerations: number
}

export function DashboardStats() {
  const [stats, setStats] = useState<Stats>({
    totalGenerations: 0,
    weekGenerations: 0,
    lastMonthGenerations: 0,
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch("/api/stats")
        if (response.ok) {
          const data = await response.json()
          setStats(data)
        }
      } catch (error) {
        console.error("[v0] Error fetching stats:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStats()
  }, [])

  const displayStats = [
    {
      name: "Total Generations",
      value: isLoading ? "..." : stats.totalGenerations.toString(),
      change: `+${stats.weekGenerations} this week`,
      icon: Sparkles,
    },
    {
      name: "This Week",
      value: isLoading ? "..." : stats.weekGenerations.toString(),
      change: "generations created",
      icon: FolderKanban,
    },
    {
      name: "Time Saved",
      value: isLoading ? "..." : `${Math.round(stats.totalGenerations * 0.5)}h`,
      change: "estimated hours",
      icon: Clock,
    },
    {
      name: "Growth",
      value: isLoading
        ? "..."
        : stats.lastMonthGenerations > 0
          ? `+${Math.round(((stats.weekGenerations - stats.lastMonthGenerations) / stats.lastMonthGenerations) * 100)}%`
          : "+100%",
      change: "vs last period",
      icon: TrendingUp,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {displayStats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.name} className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Icon className="h-5 w-5 text-accent" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
              <p className="mt-2 text-3xl font-bold">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.change}</p>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
