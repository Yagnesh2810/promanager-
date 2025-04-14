"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Calendar,
  FolderKanban,
  Github,
  Home,
  MessageSquare,
  Settings,
  Users,
  Video,
  FileText,
  FolderTree,
} from "lucide-react"

const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Projects",
    href: "/dashboard/projects",
    icon: FolderKanban,
  },
  {
    title: "Tasks",
    href: "/dashboard/tasks",
    icon: Calendar,
  },
  {
    title: "GitHub",
    href: "/dashboard/github",
    icon: Github,
  },
  {
    title: "Chat",
    href: "/dashboard/chat",
    icon: MessageSquare,
  },
  {
    title: "Meetings",
    href: "/dashboard/meetings",
    icon: Video,
  },
  {
    title: "Notes",
    href: "/dashboard/notes",
    icon: FileText,
  },
  {
    title: "Files",
    href: "/dashboard/files",
    icon: FolderTree,
  },
  {
    title: "Team",
    href: "/dashboard/team",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:flex w-64 flex-col border-r bg-background">
      <div className="flex flex-col gap-2 p-4">
        {sidebarLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === link.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
            )}
          >
            <link.icon className="h-4 w-4" />
            {link.title}
          </Link>
        ))}
      </div>
    </aside>
  )
}
