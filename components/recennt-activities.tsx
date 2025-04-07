"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function RecentActivities() {
  // Mock data for recent activities
  const activities = [
    {
      id: 1,
      action: "Payment Received",
      description: "John Doe made a contribution of $1,000",
      timestamp: "Today, 2:30 PM",
    },
    {
      id: 2,
      action: "Payment Received",
      description: "Jane Smith made a contribution of $1,000",
      timestamp: "Today, 1:45 PM",
    },
    {
      id: 3,
      action: "Reminder Sent",
      description: "Payment reminder sent to 4 members",
      timestamp: "Today, 10:00 AM",
    },
    {
      id: 4,
      action: "Fund Distribution",
      description: "Emily Davis received $12,000 for March",
      timestamp: "Mar 31, 2025",
    },
    {
      id: 5,
      action: "Member Added",
      description: "Susan Miller was added to the group",
      timestamp: "Jan 31, 2025",
    },
    {
      id: 6,
      action: "Payment Received",
      description: "Michael Brown made a contribution of $1,000",
      timestamp: "Today, 11:20 AM",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
        <CardDescription>Latest actions and events in your thrift group</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4 rounded-lg border p-3">
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{activity.action}</p>
                <p className="text-sm text-gray-500">{activity.description}</p>
              </div>
              <div className="text-xs text-gray-500">{activity.timestamp}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

