"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Plus, Phone, Video } from "lucide-react"

export default function ChatPage() {
  const [currentChat, setCurrentChat] = useState("team-general")
  const [message, setMessage] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      // In a real app, this would send the message to the server
      console.log("Sending message:", message)
      setMessage("")
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Chat</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Conversation
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Tabs defaultValue="channels" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="channels">Channels</TabsTrigger>
                <TabsTrigger value="direct">Direct</TabsTrigger>
              </TabsList>

              <TabsContent value="channels" className="p-0">
                <ScrollArea className="h-[400px]">
                  {channels.map((channel) => (
                    <div
                      key={channel.id}
                      className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-accent ${
                        currentChat === channel.id ? "bg-accent" : ""
                      }`}
                      onClick={() => setCurrentChat(channel.id)}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="font-medium"># {channel.name}</div>
                        <div className="text-sm text-muted-foreground truncate">{channel.lastMessage}</div>
                      </div>
                      {channel.unread > 0 && (
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                          {channel.unread}
                        </div>
                      )}
                    </div>
                  ))}
                </ScrollArea>
              </TabsContent>

              <TabsContent value="direct" className="p-0">
                <ScrollArea className="h-[400px]">
                  {directMessages.map((dm) => (
                    <div
                      key={dm.id}
                      className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-accent ${
                        currentChat === dm.id ? "bg-accent" : ""
                      }`}
                      onClick={() => setCurrentChat(dm.id)}
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={dm.user.image || "/placeholder.svg"} alt={dm.user.name} />
                        <AvatarFallback>{dm.user.initials}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium">{dm.user.name}</div>
                        <div className="text-sm text-muted-foreground truncate">{dm.lastMessage}</div>
                      </div>
                      {dm.unread > 0 && (
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                          {dm.unread}
                        </div>
                      )}
                      <div className="text-xs text-muted-foreground">{dm.time}</div>
                    </div>
                  ))}
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <CardHeader className="border-b p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" alt="Channel" />
                  <AvatarFallback>TC</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base"># Team General</CardTitle>
                  <div className="text-xs text-muted-foreground">24 members</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0 flex flex-col h-[500px]">
            <ScrollArea className="flex-1 p-4">
              {messages.map((msg, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8 mt-1">
                      <AvatarImage src={msg.user.image || "/placeholder.svg"} alt={msg.user.name} />
                      <AvatarFallback>{msg.user.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{msg.user.name}</span>
                        <span className="text-xs text-muted-foreground">{msg.time}</span>
                      </div>
                      <div className="text-sm mt-1">{msg.content}</div>
                    </div>
                  </div>
                </div>
              ))}
            </ScrollArea>
            <div className="border-t p-4">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Sample data
const channels = [
  {
    id: "team-general",
    name: "Team General",
    lastMessage: "Let's discuss the new project requirements",
    unread: 3,
  },
  {
    id: "project-website",
    name: "Website Redesign",
    lastMessage: "The new mockups are ready for review",
    unread: 0,
  },
  {
    id: "project-mobile",
    name: "Mobile App",
    lastMessage: "We need to fix the login screen",
    unread: 2,
  },
  {
    id: "random",
    name: "Random",
    lastMessage: "Check out this cool article I found",
    unread: 0,
  },
]

const directMessages = [
  {
    id: "dm-1",
    user: { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
    lastMessage: "Can you review my PR?",
    unread: 1,
    time: "10:30 AM",
  },
  {
    id: "dm-2",
    user: { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
    lastMessage: "Meeting at 2 PM today",
    unread: 0,
    time: "Yesterday",
  },
  {
    id: "dm-3",
    user: { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
    lastMessage: "I've updated the documentation",
    unread: 0,
    time: "Yesterday",
  },
  {
    id: "dm-4",
    user: { name: "Alice Williams", image: "/placeholder.svg", initials: "AW" },
    lastMessage: "Thanks for your help!",
    unread: 0,
    time: "Monday",
  },
]

const messages = [
  {
    user: { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
    content: "Hey team, I've just pushed the latest changes to the repository.",
    time: "10:30 AM",
  },
  {
    user: { name: "Jane Smith", image: "/placeholder.svg", initials: "JS" },
    content: "Great! I'll review it this afternoon.",
    time: "10:32 AM",
  },
  {
    user: { name: "Bob Johnson", image: "/placeholder.svg", initials: "BJ" },
    content: "Don't forget we have a meeting with the client at 2 PM today.",
    time: "10:35 AM",
  },
  {
    user: { name: "Alice Williams", image: "/placeholder.svg", initials: "AW" },
    content: "I've prepared the presentation for the meeting. Let me know if you want to review it before.",
    time: "10:40 AM",
  },
  {
    user: { name: "John Doe", image: "/placeholder.svg", initials: "JD" },
    content: "Thanks Alice! I'll take a look at it now.",
    time: "10:42 AM",
  },
]
