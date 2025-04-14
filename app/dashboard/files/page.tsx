"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Plus,
  Search,
  MoreHorizontal,
  FolderOpen,
  File,
  FileText,
  FileImage,
  FileCode,
  Download,
  Share,
  Trash,
  Upload,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"

export default function FilesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredFiles = files.filter((file) => file.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Files</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Upload
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Folder
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle>Storage</CardTitle>
              <CardDescription>You've used 65% of your storage</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              Upgrade Plan
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Progress value={65} className="h-2" />
              <div className="text-xs text-muted-foreground">6.5 GB of 10 GB used</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="px-4 py-3 flex flex-row items-center justify-between space-y-0">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search files..."
                className="w-full pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Recent
              </Button>
              <Button variant="outline" size="sm">
                Name
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All Files</TabsTrigger>
                <TabsTrigger value="shared">Shared</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="starred">Starred</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="p-0">
                <div className="grid grid-cols-1 divide-y">
                  {folders.map((folder) => (
                    <div key={folder.id} className="flex items-center justify-between p-4 hover:bg-accent">
                      <div className="flex items-center gap-3">
                        <FolderOpen className="h-5 w-5 text-blue-500" />
                        <div>
                          <div className="font-medium">{folder.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {folder.files} files • Updated {folder.updated}
                          </div>
                        </div>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">More options</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Rename</DropdownMenuItem>
                          <DropdownMenuItem>Share</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  ))}

                  {filteredFiles.map((file) => (
                    <div key={file.id} className="flex items-center justify-between p-4 hover:bg-accent">
                      <div className="flex items-center gap-3">
                        {file.type === "document" && <FileText className="h-5 w-5 text-blue-500" />}
                        {file.type === "image" && <FileImage className="h-5 w-5 text-green-500" />}
                        {file.type === "code" && <FileCode className="h-5 w-5 text-yellow-500" />}
                        {file.type === "other" && <File className="h-5 w-5 text-gray-500" />}
                        <div>
                          <div className="font-medium">{file.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {file.size} • Updated {file.updated}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                          <span className="sr-only">Download</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Share className="h-4 w-4" />
                          <span className="sr-only">Share</span>
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">More options</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Rename</DropdownMenuItem>
                            <DropdownMenuItem>Move</DropdownMenuItem>
                            <DropdownMenuItem>Share</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="shared" className="p-4">
                <div className="text-center py-8">
                  <Share className="mx-auto h-8 w-8 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">No shared files</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Files shared with you will appear here</p>
                </div>
              </TabsContent>

              <TabsContent value="recent" className="p-0">
                <div className="grid grid-cols-1 divide-y">
                  {filteredFiles
                    .sort((a, b) => new Date(b.updatedDate).getTime() - new Date(a.updatedDate).getTime())
                    .slice(0, 5)
                    .map((file) => (
                      <div key={file.id} className="flex items-center justify-between p-4 hover:bg-accent">
                        <div className="flex items-center gap-3">
                          {file.type === "document" && <FileText className="h-5 w-5 text-blue-500" />}
                          {file.type === "image" && <FileImage className="h-5 w-5 text-green-500" />}
                          {file.type === "code" && <FileCode className="h-5 w-5 text-yellow-500" />}
                          {file.type === "other" && <File className="h-5 w-5 text-gray-500" />}
                          <div>
                            <div className="font-medium">{file.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {file.size} • Updated {file.updated}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                            <span className="sr-only">Download</span>
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Share className="h-4 w-4" />
                            <span className="sr-only">Share</span>
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">More options</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Rename</DropdownMenuItem>
                              <DropdownMenuItem>Move</DropdownMenuItem>
                              <DropdownMenuItem>Share</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="starred" className="p-4">
                <div className="text-center py-8">
                  <Trash className="mx-auto h-8 w-8 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">No starred files</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Star files to find them quickly</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Sample data
const folders = [
  {
    id: 1,
    name: "Website Redesign",
    files: 12,
    updated: "2 hours ago",
  },
  {
    id: 2,
    name: "Mobile App Development",
    files: 8,
    updated: "Yesterday",
  },
  {
    id: 3,
    name: "API Documentation",
    files: 5,
    updated: "3 days ago",
  },
]

const files = [
  {
    id: 1,
    name: "Project Requirements.docx",
    type: "document",
    size: "245 KB",
    updated: "2 hours ago",
    updatedDate: "2023-08-15T10:30:00",
  },
  {
    id: 2,
    name: "Homepage Mockup.png",
    type: "image",
    size: "1.2 MB",
    updated: "Yesterday",
    updatedDate: "2023-08-14T15:45:00",
  },
  {
    id: 3,
    name: "API Endpoints.json",
    type: "code",
    size: "32 KB",
    updated: "3 days ago",
    updatedDate: "2023-08-12T09:15:00",
  },
  {
    id: 4,
    name: "Meeting Notes.pdf",
    type: "document",
    size: "156 KB",
    updated: "1 week ago",
    updatedDate: "2023-08-08T14:20:00",
  },
  {
    id: 5,
    name: "Database Schema.sql",
    type: "code",
    size: "18 KB",
    updated: "2 weeks ago",
    updatedDate: "2023-08-01T11:10:00",
  },
]
