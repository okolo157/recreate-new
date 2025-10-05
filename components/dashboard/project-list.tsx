"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreVertical, ExternalLink, Trash2, Edit, Plus } from "lucide-react"
import { CreateProjectDialog } from "./create-project-dialog"

interface Project {
  id: string
  name: string
  description: string
  status: "active" | "archived"
  lastModified: string
  components: number
}

export function ProjectList({ showAll = false }: { showAll?: boolean }) {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      name: "E-commerce Dashboard",
      description: "Admin dashboard for managing products and orders",
      status: "active",
      lastModified: "2 hours ago",
      components: 12,
    },
    {
      id: "2",
      name: "Landing Page",
      description: "Marketing landing page with hero and features",
      status: "active",
      lastModified: "1 day ago",
      components: 8,
    },
    {
      id: "3",
      name: "Blog Platform",
      description: "Content management system for blog posts",
      status: "active",
      lastModified: "3 days ago",
      components: 15,
    },
    {
      id: "4",
      name: "Authentication System",
      description: "Login, signup, and password reset flows",
      status: "archived",
      lastModified: "1 week ago",
      components: 6,
    },
  ])

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)

  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Recent Projects</h2>
        <Button onClick={() => setIsCreateDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {displayedProjects.map((project) => (
          <Card key={project.id} className="p-6 transition-colors hover:bg-accent/5">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{project.name}</h3>
                  <Badge variant={project.status === "active" ? "default" : "secondary"} className="text-xs">
                    {project.status}
                  </Badge>
                </div>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{project.description}</p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Open
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive" onClick={() => handleDeleteProject(project.id)}>
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              <span>{project.components} components</span>
              <span>{project.lastModified}</span>
            </div>
          </Card>
        ))}
      </div>
      <CreateProjectDialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen} />
    </div>
  )
}
