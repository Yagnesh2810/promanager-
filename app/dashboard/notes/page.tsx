"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Plus, Search, Star, Clock, Trash, MoreHorizontal, FolderOpen, FileText, Edit } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function NotesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedNote, setSelectedNote] = useState<any>(notes[0])

  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Notes</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Note
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="md:col-span-1">
          <CardHeader className="px-4 py-3">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search notes..."
                className="w-full pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="starred">Starred</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="p-0">
                <ScrollArea className="h-[500px]">
                  {filteredNotes.map((note) => (
                    <div
                      key={note.id}
                      className={`flex items-start gap-3 p-3 cursor-pointer hover:bg-accent ${
                        selectedNote?.id === note.id ? "bg-accent" : ""
                      }`}
                      onClick={() => setSelectedNote(note)}
                    >
                      <FileText className="h-4 w-4 mt-1 text-muted-foreground" />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium">{note.title}</div>
                        <div className="text-xs text-muted-foreground">
                          {note.updated} • {note.project}
                        </div>
                        <div className="text-sm text-muted-foreground truncate mt-1">{note.preview}</div>
                      </div>
                      {note.starred && <Star className="h-4 w-4 text-yellow-500" />}
                    </div>
                  ))}
                </ScrollArea>
              </TabsContent>

              <TabsContent value="recent" className="p-0">
                <ScrollArea className="h-[500px]">
                  {filteredNotes
                    .sort((a, b) => new Date(b.updatedDate).getTime() - new Date(a.updatedDate).getTime())
                    .slice(0, 5)
                    .map((note) => (
                      <div
                        key={note.id}
                        className={`flex items-start gap-3 p-3 cursor-pointer hover:bg-accent ${
                          selectedNote?.id === note.id ? "bg-accent" : ""
                        }`}
                        onClick={() => setSelectedNote(note)}
                      >
                        <FileText className="h-4 w-4 mt-1 text-muted-foreground" />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium">{note.title}</div>
                          <div className="text-xs text-muted-foreground">
                            {note.updated} • {note.project}
                          </div>
                          <div className="text-sm text-muted-foreground truncate mt-1">{note.preview}</div>
                        </div>
                        {note.starred && <Star className="h-4 w-4 text-yellow-500" />}
                      </div>
                    ))}
                </ScrollArea>
              </TabsContent>

              <TabsContent value="starred" className="p-0">
                <ScrollArea className="h-[500px]">
                  {filteredNotes
                    .filter((note) => note.starred)
                    .map((note) => (
                      <div
                        key={note.id}
                        className={`flex items-start gap-3 p-3 cursor-pointer hover:bg-accent ${
                          selectedNote?.id === note.id ? "bg-accent" : ""
                        }`}
                        onClick={() => setSelectedNote(note)}
                      >
                        <FileText className="h-4 w-4 mt-1 text-muted-foreground" />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium">{note.title}</div>
                          <div className="text-xs text-muted-foreground">
                            {note.updated} • {note.project}
                          </div>
                          <div className="text-sm text-muted-foreground truncate mt-1">{note.preview}</div>
                        </div>
                        <Star className="h-4 w-4 text-yellow-500" />
                      </div>
                    ))}
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          {selectedNote ? (
            <>
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                <div>
                  <CardTitle>{selectedNote.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <FolderOpen className="h-3 w-3" /> {selectedNote.project} • Last updated {selectedNote.updated}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Star className="mr-2 h-4 w-4" />
                        {selectedNote.starred ? "Unstar" : "Star"}
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Clock className="mr-2 h-4 w-4" />
                        View History
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: selectedNote.content }} />
                </div>
              </CardContent>
            </>
          ) : (
            <CardContent className="flex h-[500px] items-center justify-center">
              <div className="text-center">
                <FileText className="mx-auto h-8 w-8 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">No note selected</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Select a note from the sidebar to view its contents
                </p>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  )
}

// Sample data
const notes = [
  {
    id: 1,
    title: "Project Requirements",
    preview: "This document outlines the requirements for the website redesign project...",
    content: `
      <h2>Website Redesign Requirements</h2>
      <p>This document outlines the requirements for the website redesign project.</p>
      <h3>Goals</h3>
      <ul>
        <li>Improve user experience</li>
        <li>Increase conversion rates</li>
        <li>Modernize the design</li>
        <li>Ensure mobile responsiveness</li>
      </ul>
      <h3>Technical Requirements</h3>
      <ul>
        <li>Use Next.js for the frontend</li>
        <li>Implement a headless CMS</li>
        <li>Ensure accessibility compliance</li>
        <li>Optimize for performance</li>
      </ul>
      <h3>Timeline</h3>
      <p>The project is expected to be completed within 3 months, with the following milestones:</p>
      <ol>
        <li>Design phase: 3 weeks</li>
        <li>Development phase: 6 weeks</li>
        <li>Testing phase: 2 weeks</li>
        <li>Launch: 1 week</li>
      </ol>
    `,
    project: "Website Redesign",
    updated: "2 hours ago",
    updatedDate: "2023-08-15T10:30:00",
    starred: true,
  },
  {
    id: 2,
    title: "API Documentation",
    preview: "Documentation for the payment API integration...",
    content: `
      <h2>Payment API Documentation</h2>
      <p>This document provides information about the payment API integration.</p>
      <h3>Endpoints</h3>
      <pre><code>/api/payments/create</code></pre>
      <p>Creates a new payment.</p>
      <pre><code>/api/payments/{id}</code></pre>
      <p>Retrieves information about a specific payment.</p>
      <h3>Authentication</h3>
      <p>All API requests require an API key to be included in the header:</p>
      <pre><code>Authorization: Bearer YOUR_API_KEY</code></pre>
      <h3>Error Handling</h3>
      <p>The API returns standard HTTP status codes:</p>
      <ul>
        <li>200: Success</li>
        <li>400: Bad Request</li>
        <li>401: Unauthorized</li>
        <li>404: Not Found</li>
        <li>500: Server Error</li>
      </ul>
    `,
    project: "API Integration",
    updated: "Yesterday",
    updatedDate: "2023-08-14T15:45:00",
    starred: false,
  },
  {
    id: 3,
    title: "Meeting Notes: Client Kickoff",
    preview: "Notes from the initial client meeting for the mobile app project...",
    content: `
      <h2>Client Kickoff Meeting Notes</h2>
      <p><strong>Date:</strong> August 10, 2023</p>
      <p><strong>Attendees:</strong> John Doe, Jane Smith, Client Team (Mark, Sarah)</p>
      <h3>Discussion Points</h3>
      <ul>
        <li>Project scope and objectives</li>
        <li>Timeline and milestones</li>
        <li>Budget considerations</li>
        <li>Technical requirements</li>
      </ul>
      <h3>Client Requests</h3>
      <ul>
        <li>iOS and Android support</li>
        <li>Offline functionality</li>
        <li>Integration with existing systems</li>
        <li>User authentication via social media</li>
      </ul>
      <h3>Action Items</h3>
      <ul>
        <li>John: Prepare project plan by August 15</li>
        <li>Jane: Create initial wireframes by August 20</li>
        <li>Client: Provide brand guidelines by August 18</li>
      </ul>
      <h3>Next Meeting</h3>
      <p>August 24, 2023 at 10:00 AM</p>
    `,
    project: "Mobile App Development",
    updated: "5 days ago",
    updatedDate: "2023-08-10T11:00:00",
    starred: true,
  },
  {
    id: 4,
    title: "Database Schema Design",
    preview: "Design document for the MongoDB schema...",
    content: `
      <h2>MongoDB Schema Design</h2>
      <p>This document outlines the schema design for the MongoDB database.</p>
      <h3>User Collection</h3>
      <pre><code>{
  _id: ObjectId,
  name: String,
  email: String,
  password: String (hashed),
  role: String,
  createdAt: Date,
  updatedAt: Date
}</code></pre>
      <h3>Project Collection</h3>
      <pre><code>{
  _id: ObjectId,
  name: String,
  description: String,
  status: String,
  members: [{ userId: ObjectId, role: String }],
  createdAt: Date,
  updatedAt: Date
}</code></pre>
      <h3>Task Collection</h3>
      <pre><code>{
  _id: ObjectId,
  title: String,
  description: String,
  status: String,
  priority: String,
  projectId: ObjectId,
  assigneeId: ObjectId,
  dueDate: Date,
  createdAt: Date,
  updatedAt: Date
}</code></pre>
    `,
    project: "Database Migration",
    updated: "1 week ago",
    updatedDate: "2023-08-08T09:15:00",
    starred: false,
  },
  {
    id: 5,
    title: "User Authentication Flow",
    preview: "Documentation for the user authentication flow...",
    content: `
      <h2>User Authentication Flow</h2>
      <p>This document describes the authentication flow for the application.</p>
      <h3>Registration</h3>
      <ol>
        <li>User enters name, email, and password</li>
        <li>System validates input</li>
        <li>System checks if email already exists</li>
        <li>If email is unique, system creates new user account</li>
        <li>System sends verification email</li>
        <li>User clicks verification link</li>
        <li>Account is activated</li>
      </ol>
      <h3>Login</h3>
      <ol>
        <li>User enters email and password</li>
        <li>System validates credentials</li>
        <li>If valid, system generates JWT token</li>
        <li>Token is returned to client</li>
        <li>Client stores token in local storage</li>
        <li>Token is included in subsequent API requests</li>
      </ol>
      <h3>Password Reset</h3>
      <ol>
        <li>User requests password reset</li>
        <li>System sends reset link to user's email</li>
        <li>User clicks link and enters new password</li>
        <li>System updates password</li>
        <li>User is redirected to login page</li>
      </ol>
    `,
    project: "User Authentication System",
    updated: "2 weeks ago",
    updatedDate: "2023-08-01T14:20:00",
    starred: true,
  },
]
