"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function PaymentHistory() {
  const [searchQuery, setSearchQuery] = useState("")

  // Mock data for payment history
  const payments = [
    { id: 1, month: "March 2025", amount: 1000, date: "Mar 25, 2025", status: "Completed", reference: "TRF-2503-001" },
    {
      id: 2,
      month: "February 2025",
      amount: 1000,
      date: "Feb 26, 2025",
      status: "Completed",
      reference: "TRF-2502-001",
    },
    {
      id: 3,
      month: "January 2025",
      amount: 1000,
      date: "Jan 27, 2025",
      status: "Completed",
      reference: "TRF-2501-001",
    },
    {
      id: 4,
      month: "December 2024",
      amount: 1000,
      date: "Dec 28, 2024",
      status: "Completed",
      reference: "TRF-2412-001",
    },
    {
      id: 5,
      month: "November 2024",
      amount: 1000,
      date: "Nov 25, 2024",
      status: "Completed",
      reference: "TRF-2411-001",
    },
    {
      id: 6,
      month: "October 2024",
      amount: 1000,
      date: "Oct 26, 2024",
      status: "Completed",
      reference: "TRF-2410-001",
    },
  ]

  const filteredPayments = payments.filter(
    (payment) =>
      payment.month.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.reference.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment History</CardTitle>
        <CardDescription>Your contribution history for the thrift group</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Input
            placeholder="Search payments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-sm"
          />
        </div>
        <div className="rounded-md border">
          <div className="grid grid-cols-5 bg-muted/50 p-3 text-sm font-medium">
            <div>Month</div>
            <div>Amount</div>
            <div>Date</div>
            <div>Status</div>
            <div>Reference</div>
          </div>
          <div className="divide-y">
            {filteredPayments.map((payment) => (
              <div key={payment.id} className="grid grid-cols-5 p-3 text-sm">
                <div>{payment.month}</div>
                <div>${payment.amount}</div>
                <div>{payment.date}</div>
                <div>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">
                    {payment.status}
                  </span>
                </div>
                <div>{payment.reference}</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

