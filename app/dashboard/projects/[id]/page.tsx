"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  ChevronLeft,
  MoreHorizontal,
  Plus,
  Calendar,
  Users,
  MessageSquare,
  FileText,
  Settings,
  Edit,
  Trash,
} from "lucide-react"

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const projectId = Number.parseInt(params.id)
  const project = projects.find((p) => p.id === projectId) || projects[0]

  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/dashboard/projects">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">{project.name}</h1>
          <Badge
            variant={
              project.status === "Completed" ? "success" : project.status === "In Progress" ? "default" : "secondary"
            }
          >
            {project.status}
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Task
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Edit className="mr-2 h-4 w-4" />
                Edit Project
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Users className="mr-2 h-4 w-4" />
                Manage Team
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Project Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <Trash className="mr-2 h-4 w-4" />
                Delete Project
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium">Start Date</div>
                  <div className="text-sm text-muted-foreground">{project.startDate}</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Due Date</div>
                  <div className="text-sm text-muted-foreground">{project.dueDate}</div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium">Progress</div>
                  <div className="text-sm text-muted-foreground">
                    {project.tasks.completed}/{project.tasks.total} tasks completed
                  </div>
                </div>
                <Progress value={(project.tasks.completed / project.tasks.total) * 100} className="h-2" />
              </div>

              <div>
                <div className="text-sm font-medium mb-2">Team Members</div>
                <div className="flex flex-wrap gap-2">
                  {project.members.map((member, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-md border p-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback>{member.initials}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{member.name}</span>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="rounded-md p-2 h-10">
                    <Plus className="h-4 w-4 mr-1" />
                    Add Member
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Project Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center rounded-md border p-4">
                  <Calendar className="h-5 w-5 text-muted-foreground mb-2" />
                  <div className="text-2xl font-bold">{project.tasks.total}</div>
                  <div className="text-xs text-muted-foreground">Total Tasks</div>
                </div>
                <div className="flex flex-col items-center justify-center rounded-md border p-4">
                  <Users className="h-5 w-5 text-muted-foreground mb-2" />
                  <div className="text-2xl font-bold">{project.members.length}</div>
                  <div className="text-xs text-muted-foreground">Team Members</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center rounded-md border p-4">
                  <MessageSquare className="h-5 w-5 text-muted-foreground mb-2" />
                  <div className="text-2xl font-bold">{project.comments}</div>
                  <div className="text-xs text-muted-foreground">Comments</div>
                </div>
                <div className="flex flex-col items-center justify-center rounded-md border p-4">
                  <FileText className="h-5 w-5 text-muted-foreground mb-2" />
                  <div className="text-2xl font-bold">{project.files}</div>
                  <div className="text-xs text-muted-foreground">Files</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 max-w-2xl">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="files">Files</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Project Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{project.fullDescription}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {project.recentTasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between rounded-md border p-4">
                    <div>
                      <div className="font-medium">{task.title}</div>
                      <div className="text-sm text-muted-foreground">
                        Due {new Date(task.dueDate).toLocaleDateString()}
                      </div>
                      <div className="mt-2">
                        <Badge
                          variant={
                            task.priority === "High"
                              ? "destructive"
                              : task.priority === "Medium"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {task.priority}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={task.assignee.image || "/placeholder.svg"} alt={task.assignee.name} />
                        <AvatarFallback>{task.assignee.initials}</AvatarFallback>
                      </Avatar>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tasks" className="space-y-4 mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>All Tasks</CardTitle>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Task
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {project.allTasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between rounded-md border p-4">
                    <div>
                      <div className="font-medium">{task.title}</div>
                      <div className="text-sm text-muted-foreground">
                        Due {new Date(task.dueDate).toLocaleDateString()}
                      </div>
                      <div className="mt-2 flex gap-2">
                        <Badge
                          variant={
                            task.priority === "High"
                              ? "destructive"
                              : task.priority === "Medium"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {task.priority}
                        </Badge>
                        <Badge
                          variant={
                            task.status === "Completed"
                              ? "success"
                              : task.status === "In Progress"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {task.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={task.assignee.image || "/placeholder.svg"} alt={task.assignee.name} />
                        <AvatarFallback>{task.assignee.initials}</AvatarFallback>
                      </Avatar>
                      <Link href={`/dashboard/tasks/${task.id}`}>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="files" className="space-y-4 mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Project Files</CardTitle>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Upload File
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {project.files === 0 ? (
                  <div className="text-center py-8">
                    <FileText className="mx-auto h-8 w-8 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">No files yet</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Upload files to share with your team</p>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <FileText className="mx-auto h-8 w-8 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">Files coming soon</h3>
                    <p className="mt-2 text-sm text-muted-foreground">This feature is under development</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Project Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {project.activity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={activity.user.image || "/placeholder.svg"} alt={activity.user.name} />
                      <AvatarFallback>{activity.user.initials}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user.name}</span> {activity.action}
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Sample data
const projects = [
  {
    id: 1,
    name: "Website Redesign",
    description: "Redesign the company website with new branding",
    fullDescription:
      "This project involves a complete overhaul of the company website to align with our new brand identity. The redesign will focus on improving user experience, increasing conversion rates, and ensuring mobile responsiveness. The project will be completed in phases, starting with the homepage and key landing pages, followed by the product pages and blog.",
    status: "In Progress",
    startDate: "July 15, 2023",
    dueDate: "September 30, 2023",
    tasks: { total: 24, completed: 10 },
    members: [
      { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
      { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
      { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
    ],
    comments: 32,
    files: 15,
    recentTasks: [
      {
        id: 1,
        title: "Design homepage mockup",
        priority: "High",
        dueDate: "2023-08-15",
        assignee: { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
      },
      {
        id: 2,
        title: "Implement responsive navigation",
        priority: "Medium",
        dueDate: "2023-08-18",
        assignee: { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
      },
      {
        id: 3,
        title: "Create product page template",
        priority: "Low",
        dueDate: "2023-08-22",
        assignee: { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
      },
    ],
    allTasks: [
      {
        id: 1,
        title: "Design homepage mockup",
        priority: "High",
        status: "In Progress",
        dueDate: "2023-08-15",
        assignee: { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
      },
      {
        id: 2,
        title: "Implement responsive navigation",
        priority: "Medium",
        status: "To Do",
        dueDate: "2023-08-18",
        assignee: { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
      },
      {
        id: 3,
        title: "Create product page template",
        priority: "Low",
        status: "To Do",
        dueDate: "2023-08-22",
        assignee: { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
      },
      {
        id: 4,
        title: "Set up analytics tracking",
        priority: "Medium",
        status: "Completed",
        dueDate: "2023-08-10",
        assignee: { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
      },
      {
        id: 5,
        title: "Optimize images for web",
        priority: "Low",
        status: "Completed",
        dueDate: "2023-08-08",
        assignee: { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
      },
    ],
    activity: [
      {
        user: { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
        action: "created the project",
        time: "July 15, 2023",
      },
      {
        user: { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
        action: "added task: Design homepage mockup",
        time: "July 16, 2023",
      },
      {
        user: { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
        action: "completed task: Set up analytics tracking",
        time: "August 10, 2023",
      },
      {
        user: { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
        action: "uploaded new files",
        time: "August 12, 2023",
      },
      {
        user: { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
        action: "commented on task: Design homepage mockup",
        time: "August 14, 2023",
      },
    ],
  },
  {
    id: 2,
    name: "Mobile App Development",
    description: "Create a new mobile app for iOS and Android",
    fullDescription:
      "This project involves developing a new mobile application for both iOS and Android platforms. The app will provide users with access to our core services, including account management, product browsing, and customer support. The development will follow an agile methodology with bi-weekly sprints and regular stakeholder reviews.",
    status: "Planning",
    startDate: "August 1, 2023",
    dueDate: "December 15, 2023",
    tasks: { total: 18, completed: 3 },
    members: [
      { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
      { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
    ],
    comments: 15,
    files: 8,
    recentTasks: [
      {
        id: 6,
        title: "Create app wireframes",
        priority: "High",
        dueDate: "2023-08-20",
        assignee: { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
      },
      {
        id: 7,
        title: "Set up development environment",
        priority: "Medium",
        dueDate: "2023-08-10",
        assignee: { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
      },
    ],
    allTasks: [
      {
        id: 6,
        title: "Create app wireframes",
        priority: "High",
        status: "In Progress",
        dueDate: "2023-08-20",
        assignee: { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
      },
      {
        id: 7,
        title: "Set up development environment",
        priority: "Medium",
        status: "Completed",
        dueDate: "2023-08-10",
        assignee: { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
      },
      {
        id: 8,
        title: "Design user authentication flow",
        priority: "Medium",
        status: "To Do",
        dueDate: "2023-08-25",
        assignee: { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
      },
    ],
    activity: [
      {
        user: { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
        action: "created the project",
        time: "August 1, 2023",
      },
      {
        user: { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
        action: "added task: Create app wireframes",
        time: "August 2, 2023",
      },
      {
        user: { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
        action: "completed task: Set up development environment",
        time: "August 10, 2023",
      },
    ],
  },
  {
    id: 3,
    name: "API Integration",
    description: "Integrate with third-party payment API",
    fullDescription:
      "This project focuses on integrating our platform with a third-party payment API to enable secure and seamless payment processing. The integration will support multiple payment methods, including credit cards, digital wallets, and bank transfers. The project will also include comprehensive testing to ensure reliability and security.",
    status: "Completed",
    startDate: "June 1, 2023",
    dueDate: "July 20, 2023",
    tasks: { total: 12, completed: 12 },
    members: [
      { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
      { name: "Alice Williams", image: "/placeholder.svg", initials: "AW" },
    ],
    comments: 28,
    files: 10,
    recentTasks: [
      {
        id: 9,
        title: "Implement payment gateway",
        priority: "High",
        dueDate: "2023-07-10",
        assignee: { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
      },
      {
        id: 10,
        title: "Write API documentation",
        priority: "Medium",
        dueDate: "2023-07-15",
        assignee: { name: "Alice Williams", image: "/placeholder.svg", initials: "AW" },
      },
    ],
    allTasks: [
      {
        id: 9,
        title: "Implement payment gateway",
        priority: "High",
        status: "Completed",
        dueDate: "2023-07-10",
        assignee: { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
      },
      {
        id: 10,
        title: "Write API documentation",
        priority: "Medium",
        status: "Completed",
        dueDate: "2023-07-15",
        assignee: { name: "Alice Williams", image: "/placeholder.svg", initials: "AW" },
      },
      {
        id: 11,
        title: "Test payment processing",
        priority: "High",
        status: "Completed",
        dueDate: "2023-07-18",
        assignee: { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
      },
    ],
    activity: [
      {
        user: { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
        action: "created the project",
        time: "June 1, 2023",
      },
      {
        user: { name: "Alice Williams", image: "/placeholder.svg", initials: "AW" },
        action: "added task: Write API documentation",
        time: "June 5, 2023",
      },
      {
        user: { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
        action: "completed task: Implement payment gateway",
        time: "July 10, 2023",
      },
      {
        user: { name: "Alice Williams", image: "/placeholder.svg", initials: "AW" },
        action: "completed task: Write API documentation",
        time: "July 15, 2023",
      },
      {
        user: { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
        action: "completed task: Test payment processing",
        time: "July 18, 2023",
      },
      {
        user: { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
        action: "marked the project as completed",
        time: "July 20, 2023",
      },
    ],
  },
]
