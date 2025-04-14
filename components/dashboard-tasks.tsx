import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus } from "lucide-react"

export function DashboardTasks() {
  const tasks = [
    {
      id: 1,
      title: "Design homepage mockup",
      project: "Website Redesign",
      priority: "High",
      dueDate: "2023-08-15",
      assignee: { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
    },
    {
      id: 2,
      title: "Implement authentication",
      project: "Mobile App Development",
      priority: "Medium",
      dueDate: "2023-08-18",
      assignee: { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
    },
    {
      id: 3,
      title: "Write API documentation",
      project: "API Integration",
      priority: "Low",
      dueDate: "2023-08-20",
      assignee: { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
    },
    {
      id: 4,
      title: "Fix navigation bug",
      project: "Mobile App Development",
      priority: "High",
      dueDate: "2023-08-14",
      assignee: { name: "Alice Williams", image: "/placeholder.svg", initials: "AW" },
    },
  ]

  return (
    <Card className="col-span-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <div>
          <CardTitle>Recent Tasks</CardTitle>
          <CardDescription>You have {tasks.length} tasks assigned to you</CardDescription>
        </div>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          New Task
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between space-x-4 rounded-md border p-4">
              <div className="space-y-1">
                <Link href={`/dashboard/tasks/${task.id}`} className="font-medium hover:underline">
                  {task.title}
                </Link>
                <div className="text-sm text-muted-foreground">
                  {task.project} • Due {new Date(task.dueDate).toLocaleDateString()}
                </div>
                <div className="flex items-center pt-2">
                  <Badge
                    variant={
                      task.priority === "High" ? "destructive" : task.priority === "Medium" ? "default" : "secondary"
                    }
                    className="rounded-sm px-1 py-0 text-xs"
                  >
                    {task.priority}
                  </Badge>
                </div>
              </div>
              <Avatar className="h-8 w-8">
                <AvatarImage src={task.assignee.image || "/placeholder.svg"} alt={task.assignee.name} />
                <AvatarFallback>{task.assignee.initials}</AvatarFallback>
              </Avatar>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
