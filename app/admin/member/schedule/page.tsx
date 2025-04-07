"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MemberHeader } from "@/components/member-header"
import { MemberSidebar } from "@/components/member-sidebar"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { AlertCircle } from "lucide-react"

export default function MemberSchedule() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [view, setView] = useState<"calendar" | "list">("calendar")

  // Mock data for the schedule
  const schedule = [
    {
      month: "January 2025",
      recipient: "Sarah Johnson",
      status: "Completed",
      amount: 12000,
      paymentWindow: "Jan 24-31, 2025",
    },
    {
      month: "February 2025",
      recipient: "Michael Brown",
      status: "Completed",
      amount: 12000,
      paymentWindow: "Feb 22-28, 2025",
    },
    {
      month: "March 2025",
      recipient: "Emily Davis",
      status: "Completed",
      amount: 12000,
      paymentWindow: "Mar 25-31, 2025",
    },
    {
      month: "April 2025",
      recipient: "John Doe",
      status: "In Progress",
      amount: 12000,
      paymentWindow: "Apr 24-30, 2025",
    },
    {
      month: "May 2025",
      recipient: "Lisa Wilson",
      status: "Upcoming",
      amount: 12000,
      paymentWindow: "May 25-31, 2025",
    },
    {
      month: "June 2025",
      recipient: "Robert Taylor",
      status: "Upcoming",
      amount: 12000,
      paymentWindow: "Jun 24-30, 2025",
    },
    {
      month: "July 2025",
      recipient: "Jennifer Martinez",
      status: "Upcoming",
      amount: 12000,
      paymentWindow: "Jul 25-31, 2025",
    },
    { month: "August 2025", recipient: "You", status: "Upcoming", amount: 12000, paymentWindow: "Aug 25-31, 2025" },
    {
      month: "September 2025",
      recipient: "David Anderson",
      status: "Upcoming",
      amount: 12000,
      paymentWindow: "Sep 24-30, 2025",
    },
    {
      month: "October 2025",
      recipient: "Patricia Thomas",
      status: "Upcoming",
      amount: 12000,
      paymentWindow: "Oct 25-31, 2025",
    },
    {
      month: "November 2025",
      recipient: "James Wilson",
      status: "Upcoming",
      amount: 12000,
      paymentWindow: "Nov 24-30, 2025",
    },
    {
      month: "December 2025",
      recipient: "Susan Miller",
      status: "Upcoming",
      amount: 12000,
      paymentWindow: "Dec 25-31, 2025",
    },
  ]

  // Find the current month's schedule
  const currentMonth = new Date().toLocaleString("default", { month: "long", year: "numeric" })
  const currentSchedule = schedule.find((item) => item.month === currentMonth) || schedule[0]

  // Important dates for highlighting in the calendar
  const importantDates = [
    { date: new Date(2025, 3, 24), type: "payment-start", label: "Payment Window Starts" },
    { date: new Date(2025, 3, 30), type: "payment-end", label: "Payment Window Ends" },
    { date: new Date(2025, 7, 31), type: "receiving", label: "Your Receiving Month" },
  ]

  // Function to check if a date is important
  const isImportantDate = (date: Date) => {
    return importantDates.find(
      (d) =>
        d.date.getDate() === date.getDate() &&
        d.date.getMonth() === date.getMonth() &&
        d.date.getFullYear() === date.getFullYear(),
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <MemberHeader />
      <div className="flex flex-1">
        <MemberSidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Payment Schedule</h1>
            <div className="flex items-center gap-2">
              <Button
                variant={view === "calendar" ? "default" : "outline"}
                size="sm"
                onClick={() => setView("calendar")}
              >
                Calendar View
              </Button>
              <Button variant={view === "list" ? "default" : "outline"} size="sm" onClick={() => setView("list")}>
                List View
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Current Month</CardTitle>
                <CardDescription>{currentSchedule.month} payment details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border p-4 bg-muted/20">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Recipient</p>
                      <p className="text-lg font-semibold">{currentSchedule.recipient}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Amount</p>
                      <p className="text-lg font-semibold">${currentSchedule.amount.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Payment Window</p>
                      <p className="text-lg font-semibold">{currentSchedule.paymentWindow}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Status</p>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          currentSchedule.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : currentSchedule.status === "In Progress"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {currentSchedule.status}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Your Turn</CardTitle>
                <CardDescription>When you'll receive funds</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center space-y-2 py-4">
                  <div className="text-3xl font-bold">August 2025</div>
                  <div className="text-sm text-gray-500">4 months from now</div>
                  <div className="mt-2 text-center">
                    <p className="text-sm font-medium">Expected amount:</p>
                    <p className="text-2xl font-bold text-primary">$12,000</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {view === "calendar" ? (
            <Card>
              <CardHeader>
                <CardTitle>Schedule Calendar</CardTitle>
                <CardDescription>Important dates for your thrift contributions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-4">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border mx-auto"
                    modifiers={{
                      important: (date) => !!isImportantDate(date),
                    }}
                    modifiersStyles={{
                      important: {
                        fontWeight: "bold",
                        backgroundColor: "rgba(var(--primary), 0.1)",
                        color: "var(--primary)",
                        borderRadius: "0.25rem",
                      },
                    }}
                  />
                  <div className="mt-6 space-y-2">
                    <h3 className="font-medium">Important Dates</h3>
                    <div className="space-y-2">
                      {importantDates.map((date, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Badge
                            variant={
                              date.type === "payment-start"
                                ? "outline"
                                : date.type === "payment-end"
                                  ? "secondary"
                                  : "default"
                            }
                          >
                            {date.date.toLocaleDateString()}
                          </Badge>
                          <span className="text-sm">{date.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Full Schedule</CardTitle>
                <CardDescription>Complete rotation schedule for the year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-4 bg-muted/50 p-3 text-sm font-medium">
                    <div>Month</div>
                    <div>Recipient</div>
                    <div>Payment Window</div>
                    <div>Status</div>
                  </div>
                  <div className="divide-y">
                    {schedule.map((item, index) => (
                      <div
                        key={index}
                        className={`grid grid-cols-4 p-3 text-sm ${
                          item.status === "In Progress" ? "bg-muted/20" : item.recipient === "You" ? "bg-primary/5" : ""
                        }`}
                      >
                        <div>{item.month}</div>
                        <div className="font-medium">{item.recipient}</div>
                        <div>{item.paymentWindow}</div>
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
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="mt-6">
            <Card>
              <CardHeader className="flex flex-row items-center">
                <AlertCircle className="h-5 w-5 text-orange-500 mr-2" />
                <div>
                  <CardTitle>Important Reminders</CardTitle>
                  <CardDescription>Key information about the thrift schedule</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md bg-muted/20 p-4">
                    <h3 className="font-medium mb-2">Payment Window</h3>
                    <p className="text-sm text-gray-500">
                      All contributions must be made within the last seven days of each month. Late payments may delay
                      fund distribution.
                    </p>
                  </div>
                  <div className="rounded-md bg-muted/20 p-4">
                    <h3 className="font-medium mb-2">Distribution Date</h3>
                    <p className="text-sm text-gray-500">
                      Funds are distributed to the designated recipient on the last day of each month, after all
                      contributions have been collected.
                    </p>
                  </div>
                  <div className="rounded-md bg-muted/20 p-4">
                    <h3 className="font-medium mb-2">Rotation Order</h3>
                    <p className="text-sm text-gray-500">
                      The rotation order is fixed for the year. Your turn to receive funds is in August 2025.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

