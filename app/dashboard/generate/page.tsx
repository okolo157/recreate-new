import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { AIGenerator } from "@/components/ai/ai-generator"

export default function GeneratePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1">
        <AIGenerator />
      </main>
    </div>
  )
}
