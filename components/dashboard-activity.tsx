import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DashboardActivity() {
  const activities = [
    {
      id: 1,
      user: { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
      action: "created a new task",
      target: "Design homepage mockup",
      time: "2 hours ago",
      project: "Website Redesign",
    },
    {
      id: 2,
      user: { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
      action: "commented on",
      target: "Implement authentication",
      time: "3 hours ago",
      project: "Mobile App Development",
    },
    {
      id: 3,
      user: { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
      action: "completed",
      target: "Setup project repository",
      time: "5 hours ago",
      project: "API Integration",
    },
    {
      id: 4,
      user: { name: "Alice Williams", image: "/placeholder.svg", initials: "AW" },
      action: "uploaded a file to",
      target: "Project Documentation",
      time: "1 day ago",
      project: "Mobile App Development",
    },
    {
      id: 5,
      user: { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
      action: "created a new project",
      target: "Website Redesign",
      time: "2 days ago",
      project: "",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Recent activity from you and your team</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src={activity.user.image || "/placeholder.svg"} alt={activity.user.name} />
                <AvatarFallback>{activity.user.initials}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm">
                  <span className="font-medium">{activity.user.name}</span> {activity.action}{" "}
                  <span className="font-medium">{activity.target}</span>
                  {activity.project && (
                    <>
                      {" "}
                      in <span className="font-medium">{activity.project}</span>
                    </>
                  )}
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
