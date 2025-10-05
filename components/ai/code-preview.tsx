"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Download, Eye, Code2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface CodePreviewProps {
  code: string
  language: string
  preview?: React.ReactNode
}

export function CodePreview({ code, language, preview }: CodePreviewProps) {
  const [activeTab, setActiveTab] = useState<"code" | "preview">("code")
  const { toast } = useToast()

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    toast({
      title: "Copied",
      description: "Code copied to clipboard",
    })
  }

  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `component.${language}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    toast({
      title: "Downloaded",
      description: "Code file downloaded successfully",
    })
  }

  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-2">
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "code" | "preview")} className="flex-1">
          <TabsList className="h-8">
            <TabsTrigger value="code" className="text-xs">
              <Code2 className="mr-2 h-3 w-3" />
              Code
            </TabsTrigger>
            {preview && (
              <TabsTrigger value="preview" className="text-xs">
                <Eye className="mr-2 h-3 w-3" />
                Preview
              </TabsTrigger>
            )}
          </TabsList>
        </Tabs>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="h-8" onClick={handleCopy}>
            <Copy className="h-3 w-3" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8" onClick={handleDownload}>
            <Download className="h-3 w-3" />
          </Button>
        </div>
      </div>
      <Tabs value={activeTab}>
        <TabsContent value="code" className="m-0">
          <div className="bg-muted/30 p-4">
            <pre className="overflow-x-auto text-sm">
              <code>{code}</code>
            </pre>
          </div>
        </TabsContent>
        {preview && (
          <TabsContent value="preview" className="m-0">
            <div className="bg-background p-8">{preview}</div>
          </TabsContent>
        )}
      </Tabs>
    </Card>
  )
}
