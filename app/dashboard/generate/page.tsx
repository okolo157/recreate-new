'use client'

import dynamic from 'next/dynamic'
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

const AIGenerator = dynamic(() => import("@/components/ai/ai-generator").then(mod => ({ default: mod.AIGenerator })), {
  ssr: false,
})

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
