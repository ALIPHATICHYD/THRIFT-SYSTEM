"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MemberHeader } from "@/components/member-header"
import { MemberSidebar } from "@/components/member-sidebar"
import {
  CreditCard,
  BanknoteIcon,
  Smartphone,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  Download,
  Calendar,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function MemberPayments() {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [amount, setAmount] = useState("1000")
  const [paymentStep, setPaymentStep] = useState<"details" | "review" | "success" | "receipt">("details")
  const [isProcessing, setIsProcessing] = useState(false)

  // Mock data for payment history
  const pendingPayment = {
    month: "April 2025",
    amount: 1000,
    dueDate: "April 30, 2025",
    status: "Pending",
    daysLeft: 5,
  }


  // Payment form data
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    accountName: "",
    accountNumber: "",
    bankName: "",
    mobileNumber: "",
    mobileProvider: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleReviewPayment = (e: React.FormEvent) => {
    e.preventDefault()
    setPaymentStep("review")
  }

  const handleProcessPayment = () => {
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setPaymentStep("success")
    }, 2000)
  }

  const handleViewReceipt = () => {
    setPaymentStep("receipt")
  }

  const handleNewPayment = () => {
    setPaymentStep("details")
    setFormData({
      cardNumber: "",
      cardExpiry: "",
      cardCvc: "",
      accountName: "",
      accountNumber: "",
      bankName: "",
      mobileNumber: "",
      mobileProvider: "",
    })
  }

  // Calculate progress for payment deadline
  const daysInMonth = 30
  const progressPercentage = ((daysInMonth - pendingPayment.daysLeft) / daysInMonth) * 100

  return (
    <div className="flex min-h-screen flex-col">
      <MemberHeader />
      <div className="flex flex-1">
        <MemberSidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
            <div>
              <h1 className="text-3xl font-bold">Make a Payment</h1>
              <p className="text-gray-500 mt-1">Manage your monthly contribution</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href="/member/history">View Payment History</a>
              </Button>
              <Button variant="outline" size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                Payment Schedule
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Current Payment Due</CardTitle>
                <CardDescription>Your contribution for the current month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-md border p-4 bg-muted/20">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Month</p>
                      <p className="text-lg font-semibold">{pendingPayment.month}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Amount</p>
                      <p className="text-lg font-semibold">${pendingPayment.amount}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Due Date</p>
                      <p className="text-lg font-semibold">{pendingPayment.dueDate}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Status</p>
                      <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-semibold text-orange-800">
                        {pendingPayment.status}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-orange-500" />
                        <span>{pendingPayment.daysLeft} days left to pay</span>
                      </div>
                      <div className="font-medium">{Math.round(progressPercentage)}% of time elapsed</div>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                  </div>
                </div>

                <div className="text-sm text-gray-500">
                  <p>
                    Please make your contribution before the due date to ensure timely distribution of funds to this
                    month's recipient.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={() => document.getElementById("payment-form")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Make Payment Now
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Summary</CardTitle>
                <CardDescription>Your contribution status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-col items-center justify-center py-4">
                    <div className="text-3xl font-bold">$3,000</div>
                    <p className="text-sm text-gray-500">Total contributed in 2025</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Payments made:</span>
                      <span className="font-medium">3 of 12</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Next receiving month:</span>
                      <span className="font-medium">August 2025</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Expected to receive:</span>
                      <span className="font-medium">$12,000</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div id="payment-form" className="mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Make Your Payment</CardTitle>
                <CardDescription>Complete your monthly contribution</CardDescription>
              </CardHeader>
              <CardContent>
                {paymentStep === "details" && (
                  <form onSubmit={handleReviewPayment} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label className="text-base">Select Payment Method</Label>
                        <RadioGroup
                          defaultValue="card"
                          value={paymentMethod}
                          onValueChange={setPaymentMethod}
                          className="grid grid-cols-3 gap-4 mt-2"
                        >
                          <div>
                            <RadioGroupItem value="card" id="card" className="peer sr-only" />
                            <Label
                              htmlFor="card"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <CreditCard className="mb-3 h-6 w-6" />
                              Card
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem value="bank" id="bank" className="peer sr-only" />
                            <Label
                              htmlFor="bank"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <BanknoteIcon className="mb-3 h-6 w-6" />
                              Bank
                            </Label>
                          </div>
                          <div>
                            <RadioGroupItem value="mobile" id="mobile" className="peer sr-only" />
                            <Label
                              htmlFor="mobile"
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <Smartphone className="mb-3 h-6 w-6" />
                              Mobile
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="amount">Amount</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-2.5">$</span>
                          <Input
                            id="amount"
                            type="text"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="pl-7"
                            readOnly
                          />
                        </div>
                      </div>

                      <Tabs defaultValue={paymentMethod} value={paymentMethod} onValueChange={setPaymentMethod}>
                        <TabsContent value="card" className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input
                              id="cardNumber"
                              placeholder="1234 5678 9012 3456"
                              value={formData.cardNumber}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="cardExpiry">Expiry Date</Label>
                              <Input
                                id="cardExpiry"
                                placeholder="MM/YY"
                                value={formData.cardExpiry}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cardCvc">CVC</Label>
                              <Input
                                id="cardCvc"
                                placeholder="123"
                                value={formData.cardCvc}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                          </div>
                        </TabsContent>
                        <TabsContent value="bank" className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="accountName">Account Name</Label>
                            <Input
                              id="accountName"
                              placeholder="John Doe"
                              value={formData.accountName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="accountNumber">Account Number</Label>
                            <Input
                              id="accountNumber"
                              placeholder="0123456789"
                              value={formData.accountNumber}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="bankName">Bank Name</Label>
                            <Select
                              value={formData.bankName}
                              onValueChange={(value) => handleSelectChange("bankName", value)}
                            >
                              <SelectTrigger id="bankName">
                                <SelectValue placeholder="Select bank" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="bank1">National Bank</SelectItem>
                                <SelectItem value="bank2">City Bank</SelectItem>
                                <SelectItem value="bank3">Metro Bank</SelectItem>
                                <SelectItem value="bank4">Global Bank</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </TabsContent>
                        <TabsContent value="mobile" className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="mobileNumber">Mobile Number</Label>
                            <Input
                              id="mobileNumber"
                              placeholder="+1234567890"
                              value={formData.mobileNumber}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="mobileProvider">Provider</Label>
                            <Select
                              value={formData.mobileProvider}
                              onValueChange={(value) => handleSelectChange("mobileProvider", value)}
                            >
                              <SelectTrigger id="mobileProvider">
                                <SelectValue placeholder="Select provider" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="provider1">MobilePay</SelectItem>
                                <SelectItem value="provider2">PayMobile</SelectItem>
                                <SelectItem value="provider3">QuickCash</SelectItem>
                                <SelectItem value="provider4">InstantPay</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </TabsContent>
                      </Tabs>

                      <Button type="submit" className="w-full mt-4">
                        Review Payment
                      </Button>
                    </div>
                  </form>
                )}

                {paymentStep === "review" && (
                  <div className="space-y-6">
                    <div className="rounded-md border p-4">
                      <h3 className="font-medium text-lg mb-4">Payment Review</h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium text-gray-500">Payment For</p>
                            <p className="font-medium">{pendingPayment.month}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">Amount</p>
                            <p className="font-medium">${amount}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">Payment Method</p>
                            <p className="font-medium flex items-center">
                              {paymentMethod === "card" && <CreditCard className="h-4 w-4 mr-1" />}
                              {paymentMethod === "bank" && <BanknoteIcon className="h-4 w-4 mr-1" />}
                              {paymentMethod === "mobile" && <Smartphone className="h-4 w-4 mr-1" />}
                              {paymentMethod === "card" && "Credit/Debit Card"}
                              {paymentMethod === "bank" && "Bank Transfer"}
                              {paymentMethod === "mobile" && "Mobile Payment"}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">Date</p>
                            <p className="font-medium">{new Date().toLocaleDateString()}</p>
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-2">Payment Details</p>
                          {paymentMethod === "card" && (
                            <div className="space-y-1">
                              <p className="text-sm">Card Number: •••• •••• •••• {formData.cardNumber.slice(-4)}</p>
                              <p className="text-sm">Expiry Date: {formData.cardExpiry}</p>
                            </div>
                          )}
                          {paymentMethod === "bank" && (
                            <div className="space-y-1">
                              <p className="text-sm">Account Name: {formData.accountName}</p>
                              <p className="text-sm">Account Number: •••••{formData.accountNumber.slice(-4)}</p>
                              <p className="text-sm">
                                Bank:{" "}
                                {formData.bankName === "bank1"
                                  ? "National Bank"
                                  : formData.bankName === "bank2"
                                    ? "City Bank"
                                    : formData.bankName === "bank3"
                                      ? "Metro Bank"
                                      : formData.bankName === "bank4"
                                        ? "Global Bank"
                                        : ""}
                              </p>
                            </div>
                          )}
                          {paymentMethod === "mobile" && (
                            <div className="space-y-1">
                              <p className="text-sm">Mobile Number: {formData.mobileNumber}</p>
                              <p className="text-sm">
                                Provider:{" "}
                                {formData.mobileProvider === "provider1"
                                  ? "MobilePay"
                                  : formData.mobileProvider === "provider2"
                                    ? "PayMobile"
                                    : formData.mobileProvider === "provider3"
                                      ? "QuickCash"
                                      : formData.mobileProvider === "provider4"
                                        ? "InstantPay"
                                        : ""}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="rounded-md bg-muted/20 p-4 flex items-start">
                      <AlertCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Please confirm your payment</p>
                        <p className="text-sm text-gray-500">
                          By proceeding, you confirm that the payment details are correct and authorize the transaction.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" onClick={() => setPaymentStep("details")} className="flex-1">
                        Back
                      </Button>
                      <Button onClick={handleProcessPayment} disabled={isProcessing} className="flex-1">
                        {isProcessing ? "Processing..." : "Confirm Payment"}
                      </Button>
                    </div>
                  </div>
                )}

                {paymentStep === "success" && (
                  <div className="space-y-6">
                    <div className="flex flex-col items-center justify-center py-6">
                      <div className="rounded-full bg-green-100 p-3 mb-4">
                        <CheckCircle2 className="h-12 w-12 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold">Payment Successful!</h3>
                      <p className="text-gray-500 text-center mt-2">
                        Your contribution of ${amount} for {pendingPayment.month} has been processed successfully.
                      </p>
                      <div className="mt-4">
                        <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                          Transaction ID: TRF-2504-001
                        </Badge>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" onClick={handleViewReceipt} className="flex-1">
                        View Receipt
                      </Button>
                      <Button onClick={handleNewPayment} className="flex-1">
                        Done
                      </Button>
                    </div>
                  </div>
                )}

                {paymentStep === "receipt" && (
                  <div className="space-y-6">
                    <div className="rounded-md border p-6">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-xl font-bold">Payment Receipt</h3>
                          <p className="text-gray-500">Thrift Contribution System</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>

                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium text-gray-500">Transaction ID</p>
                            <p className="font-medium">TRF-2504-001</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">Date & Time</p>
                            <p className="font-medium">{new Date().toLocaleString()}</p>
                          </div>
                        </div>

                        <Separator />

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium text-gray-500">Payment For</p>
                            <p className="font-medium">{pendingPayment.month} Contribution</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">Amount</p>
                            <p className="font-medium">${amount}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">Payment Method</p>
                            <p className="font-medium">
                              {paymentMethod === "card" && "Credit/Debit Card"}
                              {paymentMethod === "bank" && "Bank Transfer"}
                              {paymentMethod === "mobile" && "Mobile Payment"}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">Status</p>
                            <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                              Completed
                            </Badge>
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-2">Payment Details</p>
                          {paymentMethod === "card" && (
                            <p className="text-sm">Card ending in {formData.cardNumber.slice(-4)}</p>
                          )}
                          {paymentMethod === "bank" && (
                            <p className="text-sm">
                              Bank Account: {formData.accountName} (•••{formData.accountNumber.slice(-4)})
                            </p>
                          )}
                          {paymentMethod === "mobile" && <p className="text-sm">Mobile: {formData.mobileNumber}</p>}
                        </div>

                        <div className="mt-6 pt-4 border-t">
                          <p className="text-sm text-center text-gray-500">
                            Thank you for your contribution. This receipt serves as proof of your payment.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button onClick={handleNewPayment} className="w-full">
                      Done
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Payments</CardTitle>
                <CardDescription>Your last 3 contributions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <div className="grid grid-cols-4 bg-muted/50 p-3 text-xs font-medium">
                    <div>Month</div>
                    <div>Amount</div>
                    <div>Date</div>
                    <div>Status</div>
                  </div>
                  <div className="divide-y">
                    {recentPayments.map((payment) => (
                      <div key={payment.id} className="grid grid-cols-4 p-3 text-xs">
                        <div>{payment.month}</div>
                        <div>${payment.amount}</div>
                        <div>{payment.date}</div>
                        <div>
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800">
                            {payment.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <Button variant="link" size="sm" asChild>
                    <a href="/member/history">
                      View Full History <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Instructions</CardTitle>
                <CardDescription>Follow these steps to complete your payment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          1
                        </div>
                        <div>
                          <h3 className="font-medium">Select Payment Method</h3>
                          <p className="text-sm text-gray-500 mt-1">
                            Choose your preferred payment method from the options above.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          2
                        </div>
                        <div>
                          <h3 className="font-medium">Enter Details</h3>
                          <p className="text-sm text-gray-500 mt-1">Fill in the required payment details accurately.</p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          3
                        </div>
                        <div>
                          <h3 className="font-medium">Confirm Payment</h3>
                          <p className="text-sm text-gray-500 mt-1">
                            Review your details and click "Confirm Payment" to complete.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-md bg-muted/20 p-4 mt-4">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">Important Note</p>
                        <p className="text-sm text-gray-500 mt-1">
                          All payments must be made within the last seven days of each month. Late payments may affect
                          the timely distribution of funds.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
                <CardDescription>Frequently asked questions about payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md border p-4">
                    <h3 className="font-medium mb-1">What happens if I miss a payment?</h3>
                    <p className="text-sm text-gray-500">
                      If you miss a payment, you'll receive reminders. Continued missed payments may affect your
                      standing in the group and your ability to receive funds when it's your turn.
                    </p>
                  </div>
                  <div className="rounded-md border p-4">
                    <h3 className="font-medium mb-1">Can I make a partial payment?</h3>
                    <p className="text-sm text-gray-500">
                      No, all contributions must be made in full. The system is designed to ensure equal contributions
                      from all members.
                    </p>
                  </div>
                  <div className="rounded-md border p-4">
                    <h3 className="font-medium mb-1">How do I get a receipt for my payment?</h3>
                    <p className="text-sm text-gray-500">
                      A receipt is automatically generated after each successful payment. You can view and download it
                      from the payment confirmation page or access it later in your payment history.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      Contact Support
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Contact Support</DialogTitle>
                      <DialogDescription>
                        If you're experiencing issues with payments, please contact the administrator.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="support-name">Your Name</Label>
                        <Input id="support-name" placeholder="Enter your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="support-issue">Describe the Issue</Label>
                        <Input id="support-issue" placeholder="What problem are you experiencing?" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Send Message</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
