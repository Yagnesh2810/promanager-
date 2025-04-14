import { GitBranch, MessageSquare, FolderKanban, Video, FileText, Bell, Github, FolderTree } from "lucide-react"

export function LandingFeatures() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need in One Place</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              ProManage+ combines powerful project management tools with developer-centric features to streamline your
              workflow.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <FolderKanban className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Project & Task Management</h3>
            <p className="text-sm text-muted-foreground text-center">
              Create projects, assign tasks, set deadlines, and track progress with Kanban and List views.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Github className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">GitHub Integration</h3>
            <p className="text-sm text-muted-foreground text-center">
              Connect with GitHub, view repositories, edit code, create pull requests, and link issues to tasks.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Real-time Chat</h3>
            <p className="text-sm text-muted-foreground text-center">
              Communicate with your team through project-based chat rooms, 1:1 messaging, and file sharing.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Video className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Video Calling</h3>
            <p className="text-sm text-muted-foreground text-center">
              Hold meetings with screen sharing, recording capabilities, and call history tracking.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Notes & Documents</h3>
            <p className="text-sm text-muted-foreground text-center">
              Create and share project notes with markdown support, autosave, and collaborative editing.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <FolderTree className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Folder Management</h3>
            <p className="text-sm text-muted-foreground text-center">
              Organize files and notes in folders with permissions, hierarchies, and drag-and-drop support.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Bell className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Daily Reminders</h3>
            <p className="text-sm text-muted-foreground text-center">
              Get automated task summaries, notifications, and standup-style reports.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <GitBranch className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Role-based Access</h3>
            <p className="text-sm text-muted-foreground text-center">
              Manage permissions with Admin, Manager, and Member roles for secure collaboration.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-3">
              <Bell className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Notification System</h3>
            <p className="text-sm text-muted-foreground text-center">
              Stay updated with real-time alerts for task updates, new messages, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
