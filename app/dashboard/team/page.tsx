import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Mail, Phone, MessageSquare, Video } from "lucide-react"

export default function TeamPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Team</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Invite Member
        </Button>
      </div>

      <Tabs defaultValue="members" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="roles">Roles</TabsTrigger>
        </TabsList>

        <TabsContent value="members" className="space-y-4 mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                    <h3 className="mt-4 text-lg font-medium">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                    <div className="mt-2">
                      <Badge variant={member.status === "Online" ? "success" : "secondary"}>{member.status}</Badge>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="icon">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Video className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="departments" className="space-y-4 mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {departments.map((department) => (
              <Card key={department.id}>
                <CardHeader>
                  <CardTitle>{department.name}</CardTitle>
                  <CardDescription>{department.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Members</span>
                      <span className="text-sm text-muted-foreground">{department.memberCount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Projects</span>
                      <span className="text-sm text-muted-foreground">{department.projectCount}</span>
                    </div>
                    <div className="flex -space-x-2">
                      {department.members.map((member, i) => (
                        <Avatar key={i} className="h-8 w-8 border-2 border-background">
                          <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                          <AvatarFallback>{member.initials}</AvatarFallback>
                        </Avatar>
                      ))}
                      {department.memberCount > 5 && (
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs">
                          +{department.memberCount - 5}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="roles" className="space-y-4 mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <Card key={role.id}>
                <CardHeader>
                  <CardTitle>{role.name}</CardTitle>
                  <CardDescription>{role.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Members</span>
                      <span className="text-sm text-muted-foreground">{role.memberCount}</span>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium">Permissions:</div>
                      <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                        {role.permissions.map((permission, i) => (
                          <li key={i}>{permission}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Sample data
const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Project Manager",
    image: "/placeholder.svg",
    initials: "JD",
    status: "Online",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Frontend Developer",
    image: "/placeholder.svg",
    initials: "JS",
    status: "Online",
  },
  {
    id: 3,
    name: "Bob Johnson",
    role: "Backend Developer",
    image: "/placeholder.svg",
    initials: "BJ",
    status: "Offline",
  },
  {
    id: 4,
    name: "Alice Williams",
    role: "UI/UX Designer",
    image: "/placeholder.svg",
    initials: "AW",
    status: "Online",
  },
  {
    id: 5,
    name: "Charlie Brown",
    role: "DevOps Engineer",
    image: "/placeholder.svg",
    initials: "CB",
    status: "Offline",
  },
  {
    id: 6,
    name: "Diana Prince",
    role: "QA Engineer",
    image: "/placeholder.svg",
    initials: "DP",
    status: "Online",
  },
]

const departments = [
  {
    id: 1,
    name: "Engineering",
    description: "Software development and technical operations",
    memberCount: 12,
    projectCount: 8,
    members: [
      { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
      { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
      { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
      { name: "Charlie Brown", image: "/placeholder.svg", initials: "CB" },
      { name: "Diana Prince", image: "/placeholder.svg", initials: "DP" },
    ],
  },
  {
    id: 2,
    name: "Design",
    description: "User interface and experience design",
    memberCount: 6,
    projectCount: 5,
    members: [
      { name: "Alice Williams", image: "/placeholder.svg", initials: "AW" },
      { name: "Diana Prince", image: "/placeholder.svg", initials: "DP" },
    ],
  },
  {
    id: 3,
    name: "Product",
    description: "Product management and strategy",
    memberCount: 4,
    projectCount: 10,
    members: [{ name: "John Doe", image: "/placeholder.svg", initials: "JD" }],
  },
  {
    id: 4,
    name: "Marketing",
    description: "Marketing and communications",
    memberCount: 3,
    projectCount: 2,
    members: [{ name: "Diana Prince", image: "/placeholder.svg", initials: "DP" }],
  },
]

const roles = [
  {
    id: 1,
    name: "Administrator",
    description: "Full system access and control",
    memberCount: 2,
    permissions: [
      "Manage users and permissions",
      "Create and delete projects",
      "Access all system settings",
      "View all data and reports",
      "Manage billing and subscriptions",
    ],
  },
  {
    id: 2,
    name: "Project Manager",
    description: "Manage projects and team members",
    memberCount: 4,
    permissions: [
      "Create and edit projects",
      "Assign tasks to team members",
      "View project reports",
      "Manage project settings",
      "Invite team members to projects",
    ],
  },
  {
    id: 3,
    name: "Developer",
    description: "Work on assigned tasks and projects",
    memberCount: 10,
    permissions: [
      "View assigned projects",
      "Create and edit tasks",
      "Upload files",
      "Comment on tasks",
      "View project documentation",
    ],
  },
  {
    id: 4,
    name: "Viewer",
    description: "View-only access to projects",
    memberCount: 5,
    permissions: ["View assigned projects", "View tasks and comments", "Download files", "View project documentation"],
  },
]
