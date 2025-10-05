import { getSupabaseServerClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const supabase = await getSupabaseServerClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Get total generations count
    const { count: totalGenerations } = await supabase
      .from("generations")
      .select("*", { count: "exact", head: true })
      .eq("user_id", user.id)

    // Get generations from this week
    const oneWeekAgo = new Date()
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

    const { count: weekGenerations } = await supabase
      .from("generations")
      .select("*", { count: "exact", head: true })
      .eq("user_id", user.id)
      .gte("created_at", oneWeekAgo.toISOString())

    // Get generations from last month
    const oneMonthAgo = new Date()
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)

    const { count: lastMonthGenerations } = await supabase
      .from("generations")
      .select("*", { count: "exact", head: true })
      .eq("user_id", user.id)
      .gte("created_at", oneMonthAgo.toISOString())
      .lt("created_at", oneWeekAgo.toISOString())

    return NextResponse.json({
      totalGenerations: totalGenerations || 0,
      weekGenerations: weekGenerations || 0,
      lastMonthGenerations: lastMonthGenerations || 0,
    })
  } catch (error) {
    console.error("[v0] Error in stats GET:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
