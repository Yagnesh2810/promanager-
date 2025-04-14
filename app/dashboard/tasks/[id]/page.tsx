"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronLeft, MoreHorizontal, Paperclip, Clock, Calendar, Edit, Trash, Send } from "lucide-react"

export default function TaskDetailPage({ params }: { params: { id: string } }) {
  const taskId = Number.parseInt(params.id)
  const task = tasks.find((t) => t.id === taskId) || tasks[0]

  const [comment, setComment] = useState("")
  const [subtasks, setSubtasks] = useState(task.subtasks)

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (comment.trim()) {
      // In a real app, this would send the comment to the server
      console.log("Submitting comment:", comment)
      setComment("")
    }
  }

  const toggleSubtask = (id: number) => {
    setSubtasks(
      subtasks.map((subtask) => (subtask.id === id ? { ...subtask, completed: !subtask.completed } : subtask)),
    )
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/dashboard/tasks">
            <Button variant="ghost" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">{task.title}</h1>
          <Badge
            variant={task.status === "Completed" ? "success" : task.status === "In Progress" ? "default" : "secondary"}
          >
            {task.status}
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Edit className="mr-2 h-4 w-4" />
            Edit Task
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Calendar className="mr-2 h-4 w-4" />
                Change Due Date
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Badge className="mr-2 h-4 w-4" />
                Change Status
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Avatar className="mr-2 h-4 w-4" />
                Reassign Task
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <Trash className="mr-2 h-4 w-4" />
                Delete Task
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Task Details</CardTitle>
            <CardDescription>
              Created by {task.creator.name} on {task.createdAt}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium">Description</h3>
                <p className="mt-2 text-sm text-muted-foreground">{task.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-medium">Subtasks</h3>
                <div className="mt-2 space-y-2">
                  {subtasks.map((subtask) => (
                    <div key={subtask.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`subtask-${subtask.id}`}
                        checked={subtask.completed}
                        onCheckedChange={() => toggleSubtask(subtask.id)}
                      />
                      <label
                        htmlFor={`subtask-${subtask.id}`}
                        className={`text-sm ${subtask.completed ? "line-through text-muted-foreground" : ""}`}
                      >
                        {subtask.title}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium">Comments</h3>
                <div className="mt-4 space-y-4">
                  {task.comments.map((comment, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={comment.user.image || "/placeholder.svg"} alt={comment.user.name} />
                        <AvatarFallback>{comment.user.initials}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{comment.user.name}</span>
                          <span className="text-xs text-muted-foreground">{comment.time}</span>
                        </div>
                        <p className="text-sm">{comment.content}</p>
                      </div>
                    </div>
                  ))}

                  <form onSubmit={handleCommentSubmit} className="flex flex-col gap-2 mt-6">
                    <Textarea
                      placeholder="Add a comment..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="min-h-[100px]"
                    />
                    <div className="flex justify-end">
                      <Button type="submit" disabled={!comment.trim()}>
                        <Send className="mr-2 h-4 w-4" />
                        Send
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Task Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Project</div>
                <Link href={`/dashboard/projects/${task.projectId}`} className="text-sm hover:underline">
                  {task.project}
                </Link>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Assignee</div>
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={task.assignee.image || "/placeholder.svg"} alt={task.assignee.name} />
                    <AvatarFallback>{task.assignee.initials}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{task.assignee.name}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Due Date</div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{new Date(task.dueDate).toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Priority</div>
                <Badge
                  variant={
                    task.priority === "High" ? "destructive" : task.priority === "Medium" ? "default" : "secondary"
                  }
                >
                  {task.priority}
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Status</div>
                <Badge
                  variant={
                    task.status === "Completed" ? "success" : task.status === "In Progress" ? "default" : "secondary"
                  }
                >
                  {task.status}
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Time Spent</div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{task.timeSpent}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm font-medium">Attachments</div>
                <div className="flex items-center gap-2">
                  <Paperclip className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{task.attachments} files</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Sample data
const tasks = [
  {
    id: 1,
    title: "Design homepage mockup",
    description:
      "Create wireframes and high-fidelity mockups for the new homepage design. The design should be responsive and follow the new brand guidelines. Include desktop, tablet, and mobile versions.",
    project: "Website Redesign",
    projectId: 1,
    priority: "High",
    status: "In Progress",
    dueDate: "2023-08-15",
    createdAt: "August 10, 2023",
    timeSpent: "4h 30m",
    attachments: 2,
    creator: { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
    assignee: { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
    subtasks: [
      { id: 1, title: "Create wireframes", completed: true },
      { id: 2, title: "Design desktop version", completed: true },
      { id: 3, title: "Design tablet version", completed: false },
      { id: 4, title: "Design mobile version", completed: false },
      { id: 5, title: "Get feedback from team", completed: false },
    ],
    comments: [
      {
        user: { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
        content: "I've added some reference designs to the project files. Please check them out for inspiration.",
        time: "August 11, 2023 at 10:30 AM",
      },
      {
        user: { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
        content: "Thanks for the references. I'll start working on the wireframes today.",
        time: "August 11, 2023 at 11:15 AM",
      },
      {
        user: { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
        content: "Make sure to follow the new color palette we discussed in the last meeting.",
        time: "August 12, 2023 at 9:45 AM",
      },
    ],
  },
  {
    id: 2,
    title: "Implement authentication",
    description:
      "Set up user authentication with JWT and OAuth. Implement login, registration, password reset, and email verification flows. Ensure security best practices are followed.",
    project: "Mobile App Development",
    projectId: 2,
    priority: "Medium",
    status: "To Do",
    dueDate: "2023-08-18",
    createdAt: "August 8, 2023",
    timeSpent: "0h 0m",
    attachments: 1,
    creator: { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
    assignee: { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
    subtasks: [
      { id: 6, title: "Set up authentication service", completed: false },
      { id: 7, title: "Implement login flow", completed: false },
      { id: 8, title: "Implement registration flow", completed: false },
      { id: 9, title: "Implement password reset", completed: false },
      { id: 10, title: "Implement email verification", completed: false },
    ],
    comments: [
      {
        user: { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
        content: "We should use Firebase Authentication for this to save time.",
        time: "August 8, 2023 at 2:30 PM",
      },
      {
        user: { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
        content: "I agree. Firebase Auth will handle most of the heavy lifting for us.",
        time: "August 9, 2023 at 9:15 AM",
      },
    ],
  },
  {
    id: 3,
    title: "Write API documentation",
    description:
      "Document all API endpoints and parameters. Include request and response examples, error codes, and authentication requirements. The documentation should be clear and comprehensive.",
    project: "API Integration",
    projectId: 3,
    priority: "Low",
    status: "Completed",
    dueDate: "2023-07-20",
    createdAt: "July 10, 2023",
    timeSpent: "6h 15m",
    attachments: 3,
    creator: { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
    assignee: { name: "Alice Williams", image: "/placeholder.svg", initials: "AW" },
    subtasks: [
      { id: 11, title: "Document authentication endpoints", completed: true },
      { id: 12, title: "Document user endpoints", completed: true },
      { id: 13, title: "Document payment endpoints", completed: true },
      { id: 14, title: "Add request/response examples", completed: true },
      { id: 15, title: "Review documentation with team", completed: true },
    ],
    comments: [
      {
        user: { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
        content: "Let's use Swagger for the API documentation.",
        time: "July 10, 2023 at 11:30 AM",
      },
      {
        user: { name: "Alice Williams", image: "/placeholder.svg", initials: "AW" },
        content: "Good idea. I'll set it up and start documenting the endpoints.",
        time: "July 11, 2023 at 9:45 AM",
      },
      {
        user: { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
        content: "The documentation looks great! Just a few minor tweaks needed.",
        time: "July 18, 2023 at 3:20 PM",
      },
      {
        user: { name: "Alice Williams", image: "/placeholder.svg", initials: "AW" },
        content: "I've made the requested changes. The documentation is now complete.",
        time: "July 19, 2023 at 10:15 AM",
      },
    ],
  },
]
