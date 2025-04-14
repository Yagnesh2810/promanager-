import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus } from "lucide-react"

export function DashboardProjects() {
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
    },
  ]

  return (
    <Card className="col-span-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle>Recent Projects</CardTitle>
          <CardDescription>You have {projects.length} active projects</CardDescription>
        </div>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="flex items-center justify-between space-x-4 rounded-md border p-4">
              <div className="space-y-1">
                <Link href={`/dashboard/projects/${project.id}`} className="font-medium hover:underline">
                  {project.name}
                </Link>
                <div className="text-sm text-muted-foreground">{project.description}</div>
                <div className="flex items-center pt-2">
                  <Badge
                    variant={
                      project.status === "Completed"
                        ? "success"
                        : project.status === "In Progress"
                          ? "default"
                          : "secondary"
                    }
                    className="rounded-sm px-1 py-0 text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>
              <div className="flex -space-x-2">
                {project.members.map((member, i) => (
                  <Avatar key={i} className="h-8 w-8 border-2 border-background">
                    <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
