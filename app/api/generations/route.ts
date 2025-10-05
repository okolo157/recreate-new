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

    const { data: generations, error } = await supabase
      .from("generations")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("[v0] Error fetching generations:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ generations })
  } catch (error) {
    console.error("[v0] Error in generations GET:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const supabase = await getSupabaseServerClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { prompt, code, language, image_url } = await req.json()

    if (!prompt || !code) {
      return NextResponse.json({ error: "Prompt and code are required" }, { status: 400 })
    }

    const { data: generation, error } = await supabase
      .from("generations")
      .insert({
        user_id: user.id,
        prompt,
        code,
        language: language || "tsx",
        image_url,
      })
      .select()
      .single()

    if (error) {
      console.error("[v0] Error creating generation:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ generation })
  } catch (error) {
    console.error("[v0] Error in generations POST:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
