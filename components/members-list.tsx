"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus, MoreHorizontal, Mail, Phone } from "lucide-react"

export default function MembersList() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data for members
  const members = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      joinDate: "Jan 10, 2025",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1234567891",
      joinDate: "Jan 12, 2025",
      status: "Active",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael@example.com",
      phone: "+1234567892",
      joinDate: "Jan 15, 2025",
      status: "Active",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      phone: "+1234567893",
      joinDate: "Jan 18, 2025",
      status: "Active",
    },
    {
      id: 5,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      phone: "+1234567894",
      joinDate: "Jan 20, 2025",
      status: "Active",
    },
    {
      id: 6,
      name: "Robert Taylor",
      email: "robert@example.com",
      phone: "+1234567895",
      joinDate: "Jan 22, 2025",
      status: "Active",
    },
    {
      id: 7,
      name: "Jennifer Martinez",
      email: "jennifer@example.com",
      phone: "+1234567896",
      joinDate: "Jan 25, 2025",
      status: "Active",
    },
    {
      id: 8,
      name: "David Anderson",
      email: "david@example.com",
      phone: "+1234567897",
      joinDate: "Jan 27, 2025",
      status: "Active",
    },
    {
      id: 9,
      name: "Lisa Wilson",
      email: "lisa@example.com",
      phone: "+1234567898",
      joinDate: "Jan 28, 2025",
      status: "Active",
    },
    {
      id: 10,
      name: "James Wilson",
      email: "james@example.com",
      phone: "+1234567899",
      joinDate: "Jan 29, 2025",
      status: "Active",
    },
    {
      id: 11,
      name: "Patricia Thomas",
      email: "patricia@example.com",
      phone: "+1234567900",
      joinDate: "Jan 30, 2025",
      status: "Active",
    },
    {
      id: 12,
      name: "Susan Miller",
      email: "susan@example.com",
      phone: "+1234567901",
      joinDate: "Jan 31, 2025",
      status: "Active",
    },
  ]

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.phone.includes(searchQuery),
  )

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Members</CardTitle>
          <CardDescription>Manage your thrift group members</CardDescription>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" className="h-8">
              <Plus className="mr-2 h-4 w-4" />
              Add Member
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Member</DialogTitle>
              <DialogDescription>
                Add a new member to your thrift group. The group is limited to 12 members.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input id="email" type="email" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone" className="text-right">
                  Phone
                </Label>
                <Input id="phone" type="tel" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Add Member</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Input
            placeholder="Search members..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-sm"
          />
        </div>
        <div className="rounded-md border">
          <div className="grid grid-cols-6 bg-muted/50 p-3 text-sm font-medium">
            <div>Name</div>
            <div>Email</div>
            <div>Phone</div>
            <div>Join Date</div>
            <div>Status</div>
            <div className="text-right">Actions</div>
          </div>
          <div className="divide-y">
            {filteredMembers.map((member) => (
              <div key={member.id} className="grid grid-cols-6 p-3 text-sm">
                <div>{member.name}</div>
                <div>{member.email}</div>
                <div>{member.phone}</div>
                <div>{member.joinDate}</div>
                <div>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">
                    {member.status}
                  </span>
                </div>
                <div className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Mail className="mr-2 h-4 w-4" />
                        <span>Send Email</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Phone className="mr-2 h-4 w-4" />
                        <span>Call</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Remove</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

