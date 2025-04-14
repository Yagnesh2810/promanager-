import { TasksList } from "@/components/tasks-list"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function TasksPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Tasks</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Task
        </Button>
      </div>
      <TasksList />
    </div>
  )
}
