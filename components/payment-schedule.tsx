"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Edit2 } from "lucide-react"

export function PaymentSchedule() {
  // Mock data for payment schedule
  const schedule = [
    { month: "January 2025", recipient: "Sarah Johnson", status: "Completed", amount: 12000 },
    { month: "February 2025", recipient: "Michael Brown", status: "Completed", amount: 12000 },
    { month: "March 2025", recipient: "Emily Davis", status: "Completed", amount: 12000 },
    { month: "April 2025", recipient: "John Doe", status: "In Progress", amount: 12000 },
    { month: "May 2025", recipient: "Lisa Wilson", status: "Upcoming", amount: 12000 },
    { month: "June 2025", recipient: "Robert Taylor", status: "Upcoming", amount: 12000 },
    { month: "July 2025", recipient: "Jennifer Martinez", status: "Upcoming", amount: 12000 },
    { month: "August 2025", recipient: "David Anderson", status: "Upcoming", amount: 12000 },
    { month: "September 2025", recipient: "Patricia Thomas", status: "Upcoming", amount: 12000 },
    { month: "October 2025", recipient: "James Wilson", status: "Upcoming", amount: 12000 },
    { month: "November 2025", recipient: "Susan Miller", status: "Upcoming", amount: 12000 },
    { month: "December 2025", recipient: "Jane Smith", status: "Upcoming", amount: 12000 },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Payment Schedule</CardTitle>
          <CardDescription>Monthly rotation schedule for fund distribution</CardDescription>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Edit2 className="mr-2 h-4 w-4" />
              Edit Schedule
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Payment Schedule</DialogTitle>
              <DialogDescription>Modify the rotation order for fund distribution</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="month" className="text-right">
                  Month
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select month" />
                  </SelectTrigger>
                  <SelectContent>
                    {schedule.map((item) => (
                      <SelectItem key={item.month} value={item.month}>
                        {item.month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="recipient" className="text-right">
                  Recipient
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select recipient" />
                  </SelectTrigger>
                  <SelectContent>
                    {schedule.map((item) => (
                      <SelectItem key={item.recipient} value={item.recipient}>
                        {item.recipient}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save Changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <div className="grid grid-cols-4 bg-muted/50 p-3 text-sm font-medium">
            <div>Month</div>
            <div>Recipient</div>
            <div>Status</div>
            <div>Amount</div>
          </div>
          <div className="divide-y">
            {schedule.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-4 p-3 text-sm ${item.status === "In Progress" ? "bg-muted/20" : ""}`}
              >
                <div>{item.month}</div>
                <div>{item.recipient}</div>
                <div>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      item.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : item.status === "In Progress"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <div>${item.amount.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

