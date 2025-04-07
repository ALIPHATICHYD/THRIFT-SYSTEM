"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MemberHeader } from "@/components/member-header"
import { MemberSidebar } from "@/components/member-sidebar"
import { Download, Search } from "lucide-react"

export default function MemberHistory() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [yearFilter, setYearFilter] = useState("2025")

  // Mock data for payment history
  const paymentHistory = [
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

  // Mock data for receiving history
  const receivingHistory = [
    { id: 1, month: "August 2024", amount: 12000, date: "Aug 31, 2024", status: "Received", reference: "RCV-2408-001" },
  ]

  // Filter payment history based on search, status, and year
  const filteredPayments = paymentHistory.filter((payment) => {
    const matchesSearch =
      payment.month.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.reference.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "completed" && payment.status === "Completed") ||
      (statusFilter === "pending" && payment.status === "Pending")

    const matchesYear = payment.month.includes(yearFilter)

    return matchesSearch && matchesStatus && matchesYear
  })

  // Filter receiving history based on year
  const filteredReceiving = receivingHistory.filter((payment) => {
    return payment.month.includes(yearFilter)
  })

  return (
    <div className="flex min-h-screen flex-col">
      <MemberHeader />
      <div className="flex flex-1">
        <MemberSidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Payment History</h1>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export History
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Contributed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$6,000</div>
                <p className="text-xs text-gray-500 mt-1">Across 6 months</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Received</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,000</div>
                <p className="text-xs text-gray-500 mt-1">From 1 distribution</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Next Receiving</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">August 2025</div>
                <p className="text-xs text-gray-500 mt-1">Expected amount: $12,000</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Filters</CardTitle>
              <CardDescription>Narrow down your payment history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      placeholder="Search by month or reference..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-8"
                    />
                  </div>
                </div>
                <div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select value={yearFilter} onValueChange={setYearFilter}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2024">2024</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="payments" className="space-y-6">
            <TabsList>
              <TabsTrigger value="payments">Contributions Made</TabsTrigger>
              <TabsTrigger value="received">Funds Received</TabsTrigger>
              <TabsTrigger value="summary">Annual Summary</TabsTrigger>
            </TabsList>

            <TabsContent value="payments">
              <Card>
                <CardHeader>
                  <CardTitle>Contribution History</CardTitle>
                  <CardDescription>Your monthly contributions to the thrift group</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-5 bg-muted/50 p-3 text-sm font-medium">
                      <div>Month</div>
                      <div>Amount</div>
                      <div>Date</div>
                      <div>Status</div>
                      <div>Reference</div>
                    </div>
                    <div className="divide-y">
                      {filteredPayments.length > 0 ? (
                        filteredPayments.map((payment) => (
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
                        ))
                      ) : (
                        <div className="p-4 text-center text-sm text-gray-500">
                          No payment records found matching your filters.
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="received">
              <Card>
                <CardHeader>
                  <CardTitle>Funds Received</CardTitle>
                  <CardDescription>History of funds you've received from the thrift group</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-5 bg-muted/50 p-3 text-sm font-medium">
                      <div>Month</div>
                      <div>Amount</div>
                      <div>Date</div>
                      <div>Status</div>
                      <div>Reference</div>
                    </div>
                    <div className="divide-y">
                      {filteredReceiving.length > 0 ? (
                        filteredReceiving.map((payment) => (
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
                        ))
                      ) : (
                        <div className="p-4 text-center text-sm text-gray-500">
                          No receiving records found for the selected year.
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="summary">
              <Card>
                <CardHeader>
                  <CardTitle>Annual Summary</CardTitle>
                  <CardDescription>Overview of your thrift activity for {yearFilter}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <Card className="p-4">
                        <div className="font-medium mb-2">Total Contributions</div>
                        <div className="text-2xl font-bold mb-2">${yearFilter === "2025" ? "3,000" : "3,000"}</div>
                        <p className="text-sm text-gray-500">
                          {yearFilter === "2025" ? "3" : "3"} monthly payments of $1,000
                        </p>
                      </Card>
                      <Card className="p-4">
                        <div className="font-medium mb-2">Total Received</div>
                        <div className="text-2xl font-bold mb-2">${yearFilter === "2025" ? "0" : "12,000"}</div>
                        <p className="text-sm text-gray-500">{yearFilter === "2025" ? "0" : "1"} distributions</p>
                      </Card>
                    </div>

                    <div className="rounded-md border">
                      <div className="bg-muted/50 p-3 text-sm font-medium">Monthly Breakdown</div>
                      <div className="divide-y">
                        {yearFilter === "2025" ? (
                          <>
                            <div className="grid grid-cols-3 p-3 text-sm">
                              <div>January 2025</div>
                              <div>$1,000 contributed</div>
                              <div>$0 received</div>
                            </div>
                            <div className="grid grid-cols-3 p-3 text-sm">
                              <div>February 2025</div>
                              <div>$1,000 contributed</div>
                              <div>$0 received</div>
                            </div>
                            <div className="grid grid-cols-3 p-3 text-sm">
                              <div>March 2025</div>
                              <div>$1,000 contributed</div>
                              <div>$0 received</div>
                            </div>
                            <div className="grid grid-cols-3 p-3 text-sm bg-muted/20">
                              <div>April 2025</div>
                              <div>$0 contributed (Pending)</div>
                              <div>$0 received</div>
                            </div>
                            <div className="grid grid-cols-3 p-3 text-sm">
                              <div>August 2025</div>
                              <div>$1,000 contributed (Expected)</div>
                              <div>$12,000 received (Expected)</div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="grid grid-cols-3 p-3 text-sm">
                              <div>August 2024</div>
                              <div>$1,000 contributed</div>
                              <div>$12,000 received</div>
                            </div>
                            <div className="grid grid-cols-3 p-3 text-sm">
                              <div>October 2024</div>
                              <div>$1,000 contributed</div>
                              <div>$0 received</div>
                            </div>
                            <div className="grid grid-cols-3 p-3 text-sm">
                              <div>November 2024</div>
                              <div>$1,000 contributed</div>
                              <div>$0 received</div>
                            </div>
                            <div className="grid grid-cols-3 p-3 text-sm">
                              <div>December 2024</div>
                              <div>$1,000 contributed</div>
                              <div>$0 received</div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
