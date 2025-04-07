"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MemberHeader } from "@/components/member-header"
import { MemberSidebar } from "@/components/member-sidebar"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Mail, Phone, Shield, CreditCard, HelpCircle } from "lucide-react"

export default function MemberSettings() {
  const [isUpdating, setIsUpdating] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Mock user data
  const userData = {
    name: "Member User",
    email: "member@example.com",
    phone: "+1234567890",
    address: "123 Main St, Anytown, USA",
    preferredPaymentMethod: "card",
    emailNotifications: true,
    smsNotifications: true,
    reminderDays: 3,
  }

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    setIsUpdating(true)

    // Simulate API call
    setTimeout(() => {
      setIsUpdating(false)
      setIsSuccess(true)

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <MemberHeader />
      <div className="flex flex-1">
        <MemberSidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Account Settings</h1>
          </div>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="payment">Payment Methods</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleUpdate} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" defaultValue={userData.name} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue={userData.email} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" defaultValue={userData.phone} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" defaultValue={userData.address} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">About</Label>
                      <Textarea id="bio" placeholder="Tell us a little about yourself" className="min-h-[100px]" />
                    </div>

                    {isSuccess && (
                      <div className="rounded-md bg-green-50 p-4 text-sm text-green-800">
                        Profile updated successfully!
                      </div>
                    )}

                    <Button type="submit" disabled={isUpdating}>
                      {isUpdating ? "Updating..." : "Update Profile"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Manage how you receive notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-500" />
                        <div>
                          <p className="font-medium">Email Notifications</p>
                          <p className="text-sm text-gray-500">Receive payment reminders via email</p>
                        </div>
                      </div>
                      <Switch defaultChecked={userData.emailNotifications} />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <div>
                          <p className="font-medium">SMS Notifications</p>
                          <p className="text-sm text-gray-500">Receive payment reminders via SMS</p>
                        </div>
                      </div>
                      <Switch defaultChecked={userData.smsNotifications} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reminder-days">Reminder Days</Label>
                    <p className="text-sm text-gray-500">How many days before the payment deadline to send reminders</p>
                    <Select defaultValue={userData.reminderDays.toString()}>
                      <SelectTrigger id="reminder-days" className="w-full">
                        <SelectValue placeholder="Select days" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 day before</SelectItem>
                        <SelectItem value="3">3 days before</SelectItem>
                        <SelectItem value="5">5 days before</SelectItem>
                        <SelectItem value="7">7 days before</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Notification Types</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Switch defaultChecked id="payment-reminders" />
                        <Label htmlFor="payment-reminders">Payment Reminders</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch defaultChecked id="payment-confirmations" />
                        <Label htmlFor="payment-confirmations">Payment Confirmations</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch defaultChecked id="fund-distributions" />
                        <Label htmlFor="fund-distributions">Fund Distributions</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch defaultChecked id="schedule-changes" />
                        <Label htmlFor="schedule-changes">Schedule Changes</Label>
                      </div>
                    </div>
                  </div>

                  <Button>Save Notification Settings</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="payment">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>Manage your payment options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Default Payment Method</Label>
                    <Select defaultValue={userData.preferredPaymentMethod}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="card">Credit/Debit Card</SelectItem>
                        <SelectItem value="bank">Bank Transfer</SelectItem>
                        <SelectItem value="mobile">Mobile Payment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <div className="font-medium">Saved Payment Methods</div>

                    <div className="rounded-md border p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <CreditCard className="h-6 w-6 text-gray-500" />
                        <div>
                          <p className="font-medium">Visa ending in 4242</p>
                          <p className="text-sm text-gray-500">Expires 12/25</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              Remove
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This will remove this payment method from your account.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction>Remove</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>

                    <div className="rounded-md border p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <CreditCard className="h-6 w-6 text-gray-500" />
                        <div>
                          <p className="font-medium">Mastercard ending in 5555</p>
                          <p className="text-sm text-gray-500">Expires 10/26</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          Remove
                        </Button>
                      </div>
                    </div>

                    <Button className="w-full">Add New Payment Method</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage your account security</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="font-medium">Change Password</div>
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                    <Button>Update Password</Button>
                  </div>

                  <div className="border-t pt-6">
                    <div className="space-y-4">
                      <div className="font-medium">Two-Factor Authentication</div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Shield className="h-4 w-4 text-gray-500" />
                          <div>
                            <p className="font-medium">Enable 2FA</p>
                            <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                          </div>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <div className="space-y-4">
                      <div className="font-medium">Account Actions</div>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive">Deactivate Account</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action will deactivate your account and remove you from the thrift group. This may
                              affect the group's operation and your ability to receive funds.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction className="bg-destructive text-destructive-foreground">
                              Deactivate
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-6">
            <Card>
              <CardHeader className="flex flex-row items-center">
                <HelpCircle className="h-5 w-5 text-primary mr-2" />
                <div>
                  <CardTitle>Need Help?</CardTitle>
                  <CardDescription>Contact the administrator for assistance</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md bg-muted/20 p-4">
                    <h3 className="font-medium mb-2">Administrator Contact</h3>
                    <p className="text-sm text-gray-500">
                      If you need help with your account or have questions about the thrift group, please contact the
                      administrator:
                    </p>
                    <div className="mt-2">
                      <p className="text-sm">
                        <span className="font-medium">Email:</span> admin@example.com
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Phone:</span> +1234567000
                      </p>
                    </div>
                  </div>

                  <div className="rounded-md bg-muted/20 p-4">
                    <h3 className="font-medium mb-2">Frequently Asked Questions</h3>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-medium">How do I update my payment information?</p>
                        <p className="text-sm text-gray-500">
                          You can update your payment information in the Payment Methods tab.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">What happens if I miss a payment?</p>
                        <p className="text-sm text-gray-500">
                          If you miss a payment, you will receive reminders. Continued missed payments may affect your
                          standing in the group.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Can I change my receiving month?</p>
                        <p className="text-sm text-gray-500">
                          Changing your receiving month requires administrator approval and agreement from other
                          members.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Contact Administrator
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

