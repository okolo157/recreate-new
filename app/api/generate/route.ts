import { streamText } from "ai"
import { google } from "@ai-sdk/google"

export const runtime = "edge"

export async function POST(req: Request) {
  try {
    const { prompt, imageUrl } = await req.json()

    if (!prompt) {
      return new Response("Prompt is required", { status: 400 })
    }

    const systemPrompt = `You are an expert frontend developer and code generator. Your task is to convert design descriptions or screenshots into clean, production-ready code.

When generating code:
1. Use modern React with TypeScript and Next.js App Router patterns
2. Use Tailwind CSS for styling with the design tokens from the project
3. Use shadcn/ui components when appropriate
4. Write clean, well-structured, and maintainable code
5. Include proper TypeScript types
6. Add helpful comments for complex logic
7. Follow best practices for accessibility and performance

Generate ONLY the code without explanations unless specifically asked. Format the code properly with correct indentation.`

    const result = streamText({
      model: google("gemini-2.0-flash-exp"),
      system: systemPrompt,
      messages: [
        {
          role: "user",
          content: imageUrl
            ? [
                { type: "text", text: prompt },
                { type: "image", image: imageUrl },
              ]
            : prompt,
        },
      ],
      temperature: 0.7,
      maxTokens: 4000,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("[v0] Error in generate API:", error)
    return new Response("Internal Server Error", { status: 500 })
  }
}
