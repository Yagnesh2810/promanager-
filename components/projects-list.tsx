"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MoreHorizontal, Search } from "lucide-react"

export function ProjectsList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const projects = [
    {
      id: 1,
      name: "Website Redesign",
      description: "Redesign the company website with new branding",
      status: "In Progress",
      members: [
        { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
        { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
        { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
      ],
      tasks: { total: 24, completed: 10 },
      dueDate: "2023-09-30",
    },
    {
      id: 2,
      name: "Mobile App Development",
      description: "Create a new mobile app for iOS and Android",
      status: "Planning",
      members: [
        { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
        { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
      ],
      tasks: { total: 18, completed: 3 },
      dueDate: "2023-12-15",
    },
    {
      id: 3,
      name: "API Integration",
      description: "Integrate with third-party payment API",
      status: "Completed",
      members: [
        { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
        { name: "Alice Williams", image: "/placeholder.svg", initials: "AW" },
      ],
      tasks: { total: 12, completed: 12 },
      dueDate: "2023-07-20",
    },
    {
      id: 4,
      name: "Database Migration",
      description: "Migrate from MySQL to MongoDB",
      status: "In Progress",
      members: [
        { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
        { name: "Alice Williams", image: "/placeholder.svg", initials: "AW" },
      ],
      tasks: { total: 8, completed: 5 },
      dueDate: "2023-08-25",
    },
    {
      id: 5,
      name: "User Authentication System",
      description: "Implement OAuth and role-based access control",
      status: "Planning",
      members: [
        { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
        { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
      ],
      tasks: { total: 15, completed: 0 },
      dueDate: "2023-10-10",
    },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || project.status === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex w-full items-center space-x-2 md:w-auto">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search projects..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="Planning">Planning</SelectItem>
              <SelectItem value="In Progress">In Progress</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid gap-4">
        {filteredProjects.map((project) => (
          <Card key={project.id}>
            <CardHeader className="flex flex-row items-start justify-between space-y-0">
              <div>
                <CardTitle>
                  <Link href={`/dashboard/projects/${project.id}`} className="hover:underline">
                    {project.name}
                  </Link>
                </CardTitle>
                <CardDescription className="mt-1">{project.description}</CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">More options</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>Edit Project</DropdownMenuItem>
                  <DropdownMenuItem>View Tasks</DropdownMenuItem>
                  <DropdownMenuItem>Add Member</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">Delete Project</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium">Status</div>
                  <Badge
                    variant={
                      project.status === "Completed"
                        ? "success"
                        : project.status === "In Progress"
                          ? "default"
                          : "secondary"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Due Date</div>
                  <div className="text-sm">{new Date(project.dueDate).toLocaleDateString()}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Tasks</div>
                  <div className="text-sm">
                    {project.tasks.completed}/{project.tasks.total} completed
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">Team</div>
                  <div className="flex -space-x-2">
                    {project.members.map((member, i) => (
                      <Avatar key={i} className="h-8 w-8 border-2 border-background">
                        <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback>{member.initials}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
