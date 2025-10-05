import { Card } from "@/components/ui/card"
import { FolderKanban, Sparkles, Clock, TrendingUp } from "lucide-react"

export function DashboardStats() {
  const stats = [
    {
      name: "Total Projects",
      value: "12",
      change: "+2 this week",
      icon: FolderKanban,
    },
    {
      name: "AI Generations",
      value: "48",
      change: "+12 this week",
      icon: Sparkles,
    },
    {
      name: "Time Saved",
      value: "24h",
      change: "+6h this week",
      icon: Clock,
    },
    {
      name: "Productivity",
      value: "+45%",
      change: "vs last month",
      icon: TrendingUp,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
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
