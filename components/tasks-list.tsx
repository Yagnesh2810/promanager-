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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MoreHorizontal, Search } from "lucide-react"

export function TasksList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [priorityFilter, setPriorityFilter] = useState("all")

  const tasks = [
    {
      id: 1,
      title: "Design homepage mockup",
      description: "Create wireframes and high-fidelity mockups for the new homepage",
      project: "Website Redesign",
      priority: "High",
      status: "In Progress",
      dueDate: "2023-08-15",
      assignee: { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
    },
    {
      id: 2,
      title: "Implement authentication",
      description: "Set up user authentication with JWT and OAuth",
      project: "Mobile App Development",
      priority: "Medium",
      status: "To Do",
      dueDate: "2023-08-18",
      assignee: { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
    },
    {
      id: 3,
      title: "Write API documentation",
      description: "Document all API endpoints and parameters",
      project: "API Integration",
      priority: "Low",
      status: "To Do",
      dueDate: "2023-08-20",
      assignee: { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
    },
    {
      id: 4,
      title: "Fix navigation bug",
      description: "Fix the navigation menu not working on mobile devices",
      project: "Mobile App Development",
      priority: "High",
      status: "In Progress",
      dueDate: "2023-08-14",
      assignee: { name: "Alice Williams", image: "/placeholder.svg", initials: "AW" },
    },
    {
      id: 5,
      title: "Create database schema",
      description: "Design and implement MongoDB schema for user data",
      project: "Database Migration",
      priority: "Medium",
      status: "Completed",
      dueDate: "2023-08-10",
      assignee: { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
    },
    {
      id: 6,
      title: "Implement payment gateway",
      description: "Integrate Stripe API for payment processing",
      project: "API Integration",
      priority: "High",
      status: "To Do",
      dueDate: "2023-08-25",
      assignee: { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
    },
  ]

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesPriority = priorityFilter === "all" || task.priority === priorityFilter

    return matchesSearch && matchesPriority
  })

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex w-full items-center space-x-2 md:w-auto">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search tasks..."
              className="w-full pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Select value={priorityFilter} onValueChange={setPriorityFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Priorities</SelectItem>
              <SelectItem value="High">High</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Tasks</TabsTrigger>
          <TabsTrigger value="todo">To Do</TabsTrigger>
          <TabsTrigger value="inprogress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <div className="grid gap-4">
            {filteredTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="todo" className="mt-4">
          <div className="grid gap-4">
            {filteredTasks
              .filter((task) => task.status === "To Do")
              .map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="inprogress" className="mt-4">
          <div className="grid gap-4">
            {filteredTasks
              .filter((task) => task.status === "In Progress")
              .map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="completed" className="mt-4">
          <div className="grid gap-4">
            {filteredTasks
              .filter((task) => task.status === "Completed")
              .map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function TaskCard({ task }: { task: any }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-base">
            <Link href={`/dashboard/tasks/${task.id}`} className="hover:underline">
              {task.title}
            </Link>
          </CardTitle>
          <CardDescription className="mt-1">{task.project}</CardDescription>
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
            <DropdownMenuItem>Edit Task</DropdownMenuItem>
            <DropdownMenuItem>Change Status</DropdownMenuItem>
            <DropdownMenuItem>Reassign</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">Delete Task</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground mb-4">{task.description}</div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <div className="text-sm font-medium">Status</div>
            <Badge
              variant={
                task.status === "Completed" ? "success" : task.status === "In Progress" ? "default" : "secondary"
              }
            >
              {task.status}
            </Badge>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Priority</div>
            <Badge
              variant={task.priority === "High" ? "destructive" : task.priority === "Medium" ? "default" : "secondary"}
            >
              {task.priority}
            </Badge>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Due Date</div>
            <div className="text-sm">{new Date(task.dueDate).toLocaleDateString()}</div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm font-medium">Assignee</div>
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={task.assignee.image || "/placeholder.svg"} alt={task.assignee.name} />
              <AvatarFallback>{task.assignee.initials}</AvatarFallback>
            </Avatar>
            <span className="text-sm">{task.assignee.name}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
