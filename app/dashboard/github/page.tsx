import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GitBranch, GitCommit, GitPullRequest, Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GitHubPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">GitHub Integration</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Connect Repository
        </Button>
      </div>

      <Tabs defaultValue="repositories" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="repositories">Repositories</TabsTrigger>
          <TabsTrigger value="pull-requests">Pull Requests</TabsTrigger>
          <TabsTrigger value="issues">Issues</TabsTrigger>
        </TabsList>

        <TabsContent value="repositories" className="space-y-4 mt-4">
          {repositories.map((repo) => (
            <Card key={repo.id}>
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <div>
                  <CardTitle className="text-base font-bold">{repo.name}</CardTitle>
                  <CardDescription>{repo.description}</CardDescription>
                </div>
                <Badge variant={repo.private ? "secondary" : "outline"}>{repo.private ? "Private" : "Public"}</Badge>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div className="flex items-center gap-2">
                    <GitBranch className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{repo.branches} branches</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GitCommit className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Last commit {repo.lastCommit}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GitPullRequest className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{repo.pullRequests} open PRs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="w-full">
                      View Repository
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="pull-requests" className="space-y-4 mt-4">
          {pullRequests.map((pr) => (
            <Card key={pr.id}>
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <div>
                  <CardTitle className="text-base font-bold">{pr.title}</CardTitle>
                  <CardDescription>{pr.repository}</CardDescription>
                </div>
                <Badge variant={pr.status === "Open" ? "default" : pr.status === "Merged" ? "success" : "secondary"}>
                  {pr.status}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={pr.author.image || "/placeholder.svg"} alt={pr.author.name} />
                      <AvatarFallback>{pr.author.initials}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{pr.author.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Updated {pr.updatedAt}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="issues" className="space-y-4 mt-4">
          {issues.map((issue) => (
            <Card key={issue.id}>
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <div>
                  <CardTitle className="text-base font-bold">{issue.title}</CardTitle>
                  <CardDescription>{issue.repository}</CardDescription>
                </div>
                <Badge variant={issue.status === "Open" ? "destructive" : "success"}>{issue.status}</Badge>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={issue.assignee.image || "/placeholder.svg"} alt={issue.assignee.name} />
                      <AvatarFallback>{issue.assignee.initials}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">Assigned to {issue.assignee.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Created {issue.createdAt}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Sample data
const repositories = [
  {
    id: 1,
    name: "promanage-frontend",
    description: "Frontend repository for the ProManage+ application",
    private: false,
    branches: 4,
    lastCommit: "2 hours ago",
    pullRequests: 2,
  },
  {
    id: 2,
    name: "promanage-api",
    description: "Backend API for the ProManage+ application",
    private: true,
    branches: 3,
    lastCommit: "1 day ago",
    pullRequests: 1,
  },
  {
    id: 3,
    name: "promanage-docs",
    description: "Documentation for the ProManage+ application",
    private: false,
    branches: 2,
    lastCommit: "3 days ago",
    pullRequests: 0,
  },
]

const pullRequests = [
  {
    id: 1,
    title: "Implement user authentication",
    repository: "promanage-api",
    status: "Open",
    author: { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
    updatedAt: "1 hour ago",
  },
  {
    id: 2,
    title: "Fix responsive design issues",
    repository: "promanage-frontend",
    status: "Merged",
    author: { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
    updatedAt: "1 day ago",
  },
  {
    id: 3,
    title: "Update API documentation",
    repository: "promanage-docs",
    status: "Closed",
    author: { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
    updatedAt: "2 days ago",
  },
]

const issues = [
  {
    id: 1,
    title: "Login page not working on mobile",
    repository: "promanage-frontend",
    status: "Open",
    assignee: { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
    createdAt: "2 days ago",
  },
  {
    id: 2,
    title: "API rate limiting not working",
    repository: "promanage-api",
    status: "Open",
    assignee: { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
    createdAt: "3 days ago",
  },
  {
    id: 3,
    title: "Documentation missing for new endpoints",
    repository: "promanage-docs",
    status: "Closed",
    assignee: { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
    createdAt: "1 week ago",
  },
]
