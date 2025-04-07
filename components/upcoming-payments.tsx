"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function UpcomingPayments() {
  // Mock data for upcoming payments
  const upcomingPayments = [
    { id: 1, month: "April 2025", amount: 1000, dueDate: "Apr 30, 2025", status: "Pending", daysLeft: 5 },
    { id: 2, month: "May 2025", amount: 1000, dueDate: "May 31, 2025", status: "Upcoming", daysLeft: 36 },
    { id: 3, month: "June 2025", amount: 1000, dueDate: "Jun 30, 2025", status: "Upcoming", daysLeft: 66 },
    { id: 4, month: "July 2025", amount: 1000, dueDate: "Jul 31, 2025", status: "Upcoming", daysLeft: 97 },
    { id: 5, month: "August 2025", amount: 1000, dueDate: "Aug 31, 2025", status: "Upcoming", daysLeft: 128 },
    { id: 6, month: "September 2025", amount: 1000, dueDate: "Sep 30, 2025", status: "Upcoming", daysLeft: 158 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Payments</CardTitle>
        <CardDescription>Your scheduled contributions for the next 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <div className="grid grid-cols-5 bg-muted/50 p-3 text-sm font-medium">
            <div>Month</div>
            <div>Amount</div>
            <div>Due Date</div>
            <div>Status</div>
            <div>Action</div>
          </div>
          <div className="divide-y">
            {upcomingPayments.map((payment) => (
              <div
                key={payment.id}
                className={`grid grid-cols-5 p-3 text-sm ${payment.status === "Pending" ? "bg-muted/20" : ""}`}
              >
                <div>{payment.month}</div>
                <div>${payment.amount}</div>
                <div>{payment.dueDate}</div>
                <div>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      payment.status === "Pending" ? "bg-orange-100 text-orange-800" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {payment.status}
                  </span>
                </div>
                <div>
                  {payment.status === "Pending" ? (
                    <Button size="sm" variant="outline">
                      Pay Now
                    </Button>
                  ) : (
                    <span className="text-gray-500">In {payment.daysLeft} days</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="text-sm text-gray-500">Note: Payments are due within the last 7 days of each month.</div>
      </CardFooter>
    </Card>
  )
}
