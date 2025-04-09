"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { MemberHeader } from "@/components/member-header"
import { MemberSidebar } from "@/components/member-sidebar"
import { PaymentHistory } from "@/components/payment-history"
import { UpcomingPayments } from "@/components/upcoming-payments"
import { memberStats } from "../../../../utils"

export default function MemberDashboard() {
  const [currentMonth, setCurrentMonth] = useState(
    new Date().toLocaleString("default", { month: "long", year: "numeric" }),
  )

  // Mock data for group progress
  const groupProgress = {
    totalMembers: 12,
    contributedMembers: 8,
    contributionPercentage: 67,
  }

  return (
    <div className="flex min-h-screen flex-col">
      <MemberHeader />
      <div className="flex flex-1">
        <MemberSidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Member Dashboard</h1>
            <div className="text-sm font-medium">Current Period: {currentMonth}</div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
            <Card className={memberStats.contributionStatus === "Pending" ? "border-orange-300" : "border-green-300"}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">This Month's Contribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${memberStats.contributionAmount}</div>
                <div
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold mt-2 ${
                    memberStats.contributionStatus === "Pending"
                      ? "bg-orange-100 text-orange-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {memberStats.contributionStatus}
                </div>
              </CardContent>
              {memberStats.contributionStatus === "Pending" && (
                <CardFooter>
                  <Button size="sm" className="w-full">
                    Make Payment
                  </Button>
                </CardFooter>
              )}
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Next Payment Due</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{memberStats.nextPaymentDate}</div>
                <p className="text-xs text-gray-500 mt-1">Payment window: April 24-30, 2025</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Your Receiving Month</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{memberStats.receivingMonth}</div>
                <p className="text-xs text-gray-500 mt-1">Expected amount: $12,000</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Group Contribution Progress</CardTitle>
                <CardDescription>Current month's contribution status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div>Progress</div>
                      <div className="font-medium">{groupProgress.contributionPercentage}%</div>
                    </div>
                    <Progress value={groupProgress.contributionPercentage} className="h-2" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div>Members Contributed</div>
                    <div>
                      {groupProgress.contributedMembers} of {groupProgress.totalMembers}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div>Amount Collected</div>
                    <div>
                      ${groupProgress.contributedMembers * memberStats.contributionAmount} of $
                      {groupProgress.totalMembers * memberStats.contributionAmount}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Your Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Total Contributed</span>
                    <span className="font-medium">${memberStats.totalContributed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Total Received</span>
                    <span className="font-medium">${memberStats.totalReceived}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Balance</span>
                    <span className="font-medium">${memberStats.totalReceived - memberStats.totalContributed}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="history" className="space-y-6">
            <TabsList>
              <TabsTrigger value="history">Payment History</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming Payments</TabsTrigger>
              <TabsTrigger value="schedule">Group Schedule</TabsTrigger>
            </TabsList>

            <TabsContent value="history">
              <PaymentHistory />
            </TabsContent>

            <TabsContent value="upcoming">
              <UpcomingPayments />
            </TabsContent>

            <TabsContent value="schedule">
              <Card>
                <CardHeader>
                  <CardTitle>Group Payment Schedule</CardTitle>
                  <CardDescription>The rotation schedule for receiving the thrift contribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-3 bg-muted/50 p-3 font-medium">
                      <div>Month</div>
                      <div>Recipient</div>
                      <div>Status</div>
                    </div>
                    <div className="divide-y">
                      <div className="grid grid-cols-3 p-3">
                        <div>January 2025</div>
                        <div>Sarah Johnson</div>
                        <div className="text-green-600">Completed</div>
                      </div>
                      <div className="grid grid-cols-3 p-3">
                        <div>February 2025</div>
                        <div>Michael Brown</div>
                        <div className="text-green-600">Completed</div>
                      </div>
                      <div className="grid grid-cols-3 p-3">
                        <div>March 2025</div>
                        <div>Emily Davis</div>
                        <div className="text-green-600">Completed</div>
                      </div>
                      <div className="grid grid-cols-3 p-3 bg-muted/20">
                        <div>April 2025</div>
                        <div>John Doe</div>
                        <div className="text-orange-600">In Progress</div>
                      </div>
                      <div className="grid grid-cols-3 p-3">
                        <div>May 2025</div>
                        <div>Lisa Wilson</div>
                        <div className="text-gray-400">Upcoming</div>
                      </div>
                      <div className="grid grid-cols-3 p-3">
                        <div>June 2025</div>
                        <div>Robert Taylor</div>
                        <div className="text-gray-400">Upcoming</div>
                      </div>
                      <div className="grid grid-cols-3 p-3">
                        <div>July 2025</div>
                        <div>Jennifer Martinez</div>
                        <div className="text-gray-400">Upcoming</div>
                      </div>
                      <div className="grid grid-cols-3 p-3 bg-primary/5">
                        <div>August 2025</div>
                        <div>You</div>
                        <div className="text-gray-400">Upcoming</div>
                      </div>
                      <div className="grid grid-cols-3 p-3">
                        <div>September 2025</div>
                        <div>David Anderson</div>
                        <div className="text-gray-400">Upcoming</div>
                      </div>
                      <div className="grid grid-cols-3 p-3">
                        <div>October 2025</div>
                        <div>Patricia Thomas</div>
                        <div className="text-gray-400">Upcoming</div>
                      </div>
                      <div className="grid grid-cols-3 p-3">
                        <div>November 2025</div>
                        <div>James Wilson</div>
                        <div className="text-gray-400">Upcoming</div>
                      </div>
                      <div className="grid grid-cols-3 p-3">
                        <div>December 2025</div>
                        <div>Susan Miller</div>
                        <div className="text-gray-400">Upcoming</div>
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

