"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function ContributionStatusCard() {
  // Mock data for contribution status
  const members = [
    { id: 1, name: "John Doe", status: "Paid", amount: 1000, date: "Apr 25, 2025" },
    { id: 2, name: "Jane Smith", status: "Paid", amount: 1000, date: "Apr 26, 2025" },
    { id: 3, name: "Michael Brown", status: "Paid", amount: 1000, date: "Apr 24, 2025" },
    { id: 4, name: "Emily Davis", status: "Paid", amount: 1000, date: "Apr 27, 2025" },
    { id: 5, name: "Sarah Johnson", status: "Paid", amount: 1000, date: "Apr 28, 2025" },
    { id: 6, name: "Robert Taylor", status: "Paid", amount: 1000, date: "Apr 25, 2025" },
    { id: 7, name: "Jennifer Martinez", status: "Paid", amount: 1000, date: "Apr 26, 2025" },
    { id: 8, name: "David Anderson", status: "Paid", amount: 1000, date: "Apr 27, 2025" },
    { id: 9, name: "Lisa Wilson", status: "Pending", amount: 1000, date: "-" },
    { id: 10, name: "James Wilson", status: "Pending", amount: 1000, date: "-" },
    { id: 11, name: "Patricia Thomas", status: "Pending", amount: 1000, date: "-" },
    { id: 12, name: "Susan Miller", status: "Pending", amount: 1000, date: "-" },
  ]

  const paidCount = members.filter((member) => member.status === "Paid").length
  const progressPercentage = (paidCount / members.length) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contribution Status</CardTitle>
        <CardDescription>April 2025 payment status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div>Progress</div>
              <div className="font-medium">{progressPercentage.toFixed(0)}%</div>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
          <div className="rounded-md border">
            <div className="grid grid-cols-4 bg-muted/50 p-2 text-xs font-medium">
              <div>Member</div>
              <div>Status</div>
              <div>Amount</div>
              <div>Date</div>
            </div>
            <div className="divide-y max-h-[300px] overflow-auto">
              {members.map((member) => (
                <div key={member.id} className="grid grid-cols-4 p-2 text-xs">
                  <div>{member.name}</div>
                  <div>
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${
                        member.status === "Paid" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"
                      }`}
                    >
                      {member.status}
                    </span>
                  </div>
                  <div>${member.amount}</div>
                  <div>{member.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

