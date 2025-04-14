import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  FileText,
  Github,
  Linkedin,
  Twitter,
  Edit,
  MessageSquare,
} from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Profile</h1>
        <Button>
          <Edit className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg" alt="John Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h2 className="mt-4 text-xl font-bold">John Doe</h2>
              <p className="text-sm text-muted-foreground">Project Manager</p>
              <div className="mt-2">
                <Badge variant="success">Online</Badge>
              </div>

              <div className="mt-6 space-y-4 w-full">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">john.doe@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">New York, USA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Joined January 2022</span>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <Button variant="outline" size="icon">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>About</CardTitle>
            <CardDescription>Professional information and bio</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium">Bio</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Experienced Project Manager with a demonstrated history of working in the software industry. Skilled
                  in Agile Methodologies, Software Development, and Team Leadership. Strong engineering professional
                  with a Bachelor's degree focused in Computer Science.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium">Work Experience</h3>
                <div className="mt-2 space-y-4">
                  <div className="flex items-start gap-4">
                    <Briefcase className="h-5 w-5 mt-1 text-muted-foreground" />
                    <div>
                      <div className="font-medium">Project Manager</div>
                      <div className="text-sm text-muted-foreground">ProManage+ • 2022 - Present</div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Leading software development projects and managing cross-functional teams.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Briefcase className="h-5 w-5 mt-1 text-muted-foreground" />
                    <div>
                      <div className="font-medium">Senior Developer</div>
                      <div className="text-sm text-muted-foreground">Tech Solutions Inc. • 2018 - 2022</div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Developed and maintained web applications using React and Node.js.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium">Education</h3>
                <div className="mt-2 space-y-4">
                  <div className="flex items-start gap-4">
                    <FileText className="h-5 w-5 mt-1 text-muted-foreground" />
                    <div>
                      <div className="font-medium">Bachelor of Science in Computer Science</div>
                      <div className="text-sm text-muted-foreground">University of Technology • 2014 - 2018</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium">Skills</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge variant="outline">Project Management</Badge>
                  <Badge variant="outline">Agile</Badge>
                  <Badge variant="outline">Scrum</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Team Leadership</Badge>
                  <Badge variant="outline">Problem Solving</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="activity" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
        </TabsList>

        <TabsContent value="activity" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your recent actions and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="relative mt-1">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                        <activity.icon className="h-4 w-4 text-primary" />
                      </div>
                      {index < activities.length - 1 && (
                        <div className="absolute top-8 bottom-0 left-1/2 -translate-x-1/2 w-px bg-border h-full" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">{activity.action}</span>
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                      {activity.details && <p className="mt-1 text-sm text-muted-foreground">{activity.details}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Projects</CardTitle>
              <CardDescription>Projects you're currently working on</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.id} className="flex items-center justify-between rounded-md border p-4">
                    <div>
                      <div className="font-medium">{project.name}</div>
                      <div className="text-sm text-muted-foreground">{project.description}</div>
                      <div className="mt-2">
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
                    </div>
                    <Button variant="outline" size="sm">
                      View Project
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tasks" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Tasks</CardTitle>
              <CardDescription>Tasks assigned to you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between rounded-md border p-4">
                    <div>
                      <div className="font-medium">{task.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {task.project} • Due {new Date(task.dueDate).toLocaleDateString()}
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
                    <Button variant="outline" size="sm">
                      View Task
                    </Button>
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
const activities = [
  {
    icon: Calendar,
    action: "Created a new task: Design homepage mockup",
    time: "2 hours ago",
    details: "Added to Website Redesign project with High priority",
  },
  {
    icon: FileText,
    action: "Updated project documentation",
    time: "Yesterday",
    details: "Made changes to API Integration documentation",
  },
  {
    icon: MessageSquare,
    action: "Commented on a task",
    time: "2 days ago",
    details: "Left feedback on the mobile navigation design",
  },
  {
    icon: Github,
    action: "Pushed code to repository",
    time: "3 days ago",
    details: "Merged pull request #42: Fix authentication bug",
  },
  {
    icon: Briefcase,
    action: "Completed project milestone",
    time: "1 week ago",
    details: "Finished the first phase of the Mobile App Development project",
  },
]

const projects = [
  {
    id: 1,
    name: "Website Redesign",
    description: "Redesign the company website with new branding",
    status: "In Progress",
  },
  {
    id: 2,
    name: "Mobile App Development",
    description: "Create a new mobile app for iOS and Android",
    status: "Planning",
  },
  {
    id: 3,
    name: "API Integration",
    description: "Integrate with third-party payment API",
    status: "Completed",
  },
]

const tasks = [
  {
    id: 1,
    title: "Design homepage mockup",
    project: "Website Redesign",
    priority: "High",
    dueDate: "2023-08-15",
  },
  {
    id: 2,
    title: "Implement authentication",
    project: "Mobile App Development",
    priority: "Medium",
    dueDate: "2023-08-18",
  },
  {
    id: 3,
    title: "Write API documentation",
    project: "API Integration",
    priority: "Low",
    dueDate: "2023-08-20",
  },
]
