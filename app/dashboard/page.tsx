import { DashboardOverview } from "@/components/dashboard-overview"
import { DashboardProjects } from "@/components/dashboard-projects"
import { DashboardTasks } from "@/components/dashboard-tasks"
import { DashboardActivity } from "@/components/dashboard-activity"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <DashboardOverview />
      <div className="grid gap-6 md:grid-cols-2">
        <DashboardProjects />
        <DashboardTasks />
      </div>
      <DashboardActivity />
    </div>
  )
}
