"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Video, Users } from "lucide-react"

export default function MeetingsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Meetings</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Schedule Meeting
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>Select a date to view meetings</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Meetings</CardTitle>
            <CardDescription>
              {date ? `Meetings for ${date.toLocaleDateString()}` : "Select a date to view meetings"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="past">Past</TabsTrigger>
                <TabsTrigger value="recurring">Recurring</TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming" className="space-y-4 mt-4">
                {upcomingMeetings.map((meeting) => (
                  <MeetingCard key={meeting.id} meeting={meeting} />
                ))}
              </TabsContent>

              <TabsContent value="past" className="space-y-4 mt-4">
                {pastMeetings.map((meeting) => (
                  <MeetingCard key={meeting.id} meeting={meeting} isPast />
                ))}
              </TabsContent>

              <TabsContent value="recurring" className="space-y-4 mt-4">
                {recurringMeetings.map((meeting) => (
                  <MeetingCard key={meeting.id} meeting={meeting} isRecurring />
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function MeetingCard({
  meeting,
  isPast = false,
  isRecurring = false,
}: {
  meeting: any
  isPast?: boolean
  isRecurring?: boolean
}) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="font-medium">{meeting.title}</h3>
            <div className="text-sm text-muted-foreground">{meeting.time}</div>
            {isRecurring && <div className="text-sm text-muted-foreground">{meeting.recurrence}</div>}
            <div className="flex items-center gap-2 mt-2">
              <Badge variant={meeting.type === "Video" ? "default" : "secondary"}>
                {meeting.type === "Video" ? <Video className="h-3 w-3 mr-1" /> : <Users className="h-3 w-3 mr-1" />}
                {meeting.type}
              </Badge>
              {meeting.project && <Badge variant="outline">{meeting.project}</Badge>}
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex -space-x-2">
              {meeting.participants.map((participant: any, i: number) => (
                <Avatar key={i} className="h-6 w-6 border-2 border-background">
                  <AvatarImage src={participant.image || "/placeholder.svg"} alt={participant.name} />
                  <AvatarFallback>{participant.initials}</AvatarFallback>
                </Avatar>
              ))}
              {meeting.participants.length > 3 && (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-[10px]">
                  +{meeting.participants.length - 3}
                </div>
              )}
            </div>
            {!isPast && (
              <Button size="sm" variant={isRecurring ? "outline" : "default"}>
                {isRecurring ? "View Series" : "Join"}
              </Button>
            )}
            {isPast && (
              <Button size="sm" variant="outline">
                View Recording
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Sample data
const upcomingMeetings = [
  {
    id: 1,
    title: "Weekly Team Standup",
    time: "Today, 10:00 AM - 10:30 AM",
    type: "Video",
    project: "Team",
    participants: [
      { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
      { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
      { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
      { name: "Alice Williams", image: "/placeholder.svg", initials: "AW" },
      { name: "Charlie Brown", image: "/placeholder.svg", initials: "CB" },
    ],
  },
  {
    id: 2,
    title: "Website Redesign Planning",
    time: "Today, 2:00 PM - 3:00 PM",
    type: "Video",
    project: "Website Redesign",
    participants: [
      { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
      { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
      { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
    ],
  },
  {
    id: 3,
    title: "Client Demo",
    time: "Tomorrow, 11:00 AM - 12:00 PM",
    type: "Video",
    project: "Mobile App Development",
    participants: [
      { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
      { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
      { name: "Client User", image: "/placeholder.svg", initials: "CU" },
    ],
  },
]

const pastMeetings = [
  {
    id: 4,
    title: "API Integration Discussion",
    time: "Yesterday, 3:00 PM - 4:00 PM",
    type: "Video",
    project: "API Integration",
    participants: [
      { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
      { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
      { name: "Alice Williams", image: "/placeholder.svg", initials: "AW" },
    ],
  },
  {
    id: 5,
    title: "Database Migration Planning",
    time: "Monday, 1:00 PM - 2:00 PM",
    type: "In Person",
    project: "Database Migration",
    participants: [
      { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
      { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
      { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
      { name: "Alice Williams", image: "/placeholder.svg", initials: "AW" },
    ],
  },
]

const recurringMeetings = [
  {
    id: 6,
    title: "Weekly Team Standup",
    time: "Every Monday, 10:00 AM - 10:30 AM",
    recurrence: "Weekly on Mondays",
    type: "Video",
    project: "Team",
    participants: [
      { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
      { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
      { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
      { name: "Alice Williams", image: "/placeholder.svg", initials: "AW" },
      { name: "Charlie Brown", image: "/placeholder.svg", initials: "CB" },
    ],
  },
  {
    id: 7,
    title: "Sprint Planning",
    time: "Every other Tuesday, 2:00 PM - 3:00 PM",
    recurrence: "Bi-weekly on Tuesdays",
    type: "Video",
    project: "Team",
    participants: [
      { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
      { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
      { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
    ],
  },
]
