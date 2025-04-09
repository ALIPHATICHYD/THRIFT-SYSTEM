"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AdminHeader } from "@/components/admin-header"
import { AdminSidebar } from "@/components/admin-sidebar"
import { ContributionStatusCard } from "@/components/contribution-status-card"
import { MembersList } from "@/components/members-list"
import { PaymentSchedule } from "@/components/payment-schedule"
import { RecentActivities } from "@/components/recent-activities"
import { contributionStats } from "../../../utils"

export default function AdminDashboard() {
  const [currentMonth] = useState(
    new Date().toLocaleString("default", { month: "long", year: "numeric" }),
  )

  return (
    <div className="flex min-h-screen flex-col">
      <AdminHeader />
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <div className="text-sm font-medium">Current Period: {currentMonth}</div>
              <Button>Send Reminders</Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Members</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{contributionStats.totalMembers}</div>
                <p className="text-xs text-gray-500 mt-1">Maximum capacity reached</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Contributed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {contributionStats.contributedMembers} / {contributionStats.totalMembers}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {((contributionStats.contributedMembers / contributionStats.totalMembers) * 100).toFixed(0)}% of
                  members
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Collected Amount</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${contributionStats.collectedAmount}</div>
                <p className="text-xs text-gray-500 mt-1">${contributionStats.pendingAmount} pending</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Current Recipient</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">John Doe</div>
                <p className="text-xs text-gray-500 mt-1">Scheduled for {currentMonth}</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="members">Members</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <ContributionStatusCard />
                <RecentActivities />
              </div>
            </TabsContent>

            <TabsContent value="members">
              <MembersList />
            </TabsContent>

            <TabsContent value="schedule">
              <PaymentSchedule />
            </TabsContent>

            <TabsContent value="reports">
              <Card>
                <CardHeader>
                  <CardTitle>Reports</CardTitle>
                  <CardDescription>Generate and download reports for your thrift group</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="p-4">
                      <div className="font-medium mb-2">Contribution Report</div>
                      <p className="text-sm text-gray-500 mb-4">Summary of all contributions for the current period</p>
                      <Button variant="outline" size="sm">
                        Generate Report
                      </Button>
                    </Card>
                    <Card className="p-4">
                      <div className="font-medium mb-2">Member Status Report</div>
                      <p className="text-sm text-gray-500 mb-4">Detailed status of each member's contributions</p>
                      <Button variant="outline" size="sm">
                        Generate Report
                      </Button>
                    </Card>
                    <Card className="p-4">
                      <div className="font-medium mb-2">Payment History</div>
                      <p className="text-sm text-gray-500 mb-4">Complete history of all payments made</p>
                      <Button variant="outline" size="sm">
                        Generate Report
                      </Button>
                    </Card>
                    <Card className="p-4">
                      <div className="font-medium mb-2">Annual Summary</div>
                      <p className="text-sm text-gray-500 mb-4">Year-to-date summary of all thrift activities</p>
                      <Button variant="outline" size="sm">
                        Generate Report
                      </Button>
                    </Card>
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
