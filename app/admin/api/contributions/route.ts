import { NextResponse } from "next/server"

export async function GET(request: Request) {
  // In a real app, this would fetch data from a database
  const contributions = [
    { id: 1, memberId: 1, month: "April 2025", amount: 1000, date: "Apr 25, 2025", status: "Completed" },
    { id: 2, memberId: 2, month: "April 2025", amount: 1000, date: "Apr 26, 2025", status: "Completed" },
    { id: 3, memberId: 3, month: "April 2025", amount: 1000, date: "Apr 24, 2025", status: "Completed" },
    { id: 4, memberId: 4, month: "April 2025", amount: 1000, date: "Apr 27, 2025", status: "Completed" },
    { id: 5, memberId: 5, month: "April 2025", amount: 1000, date: "Apr 28, 2025", status: "Completed" },
    { id: 6, memberId: 6, month: "April 2025", amount: 1000, date: "Apr 25, 2025", status: "Completed" },
    { id: 7, memberId: 7, month: "April 2025", amount: 1000, date: "Apr 26, 2025", status: "Completed" },
    { id: 8, memberId: 8, month: "April 2025", amount: 1000, date: "Apr 27, 2025", status: "Completed" },
    // Pending contributions
    { id: 9, memberId: 9, month: "April 2025", amount: 1000, date: null, status: "Pending" },
    { id: 10, memberId: 10, month: "April 2025", amount: 1000, date: null, status: "Pending" },
    { id: 11, memberId: 11, month: "April 2025", amount: 1000, date: null, status: "Pending" },
    { id: 12, memberId: 12, month: "April 2025", amount: 1000, date: null, status: "Pending" },
  ]

  // Get query parameters
  const { searchParams } = new URL(request.url)
  const month = searchParams.get("month")
  const status = searchParams.get("status")
  const memberId = searchParams.get("memberId")

  // Filter contributions based on query parameters
  let filteredContributions = [...contributions]

  if (month) {
    filteredContributions = filteredContributions.filter((c) => c.month === month)
  }

  if (status) {
    filteredContributions = filteredContributions.filter((c) => c.status === status)
  }

  if (memberId) {
    filteredContributions = filteredContributions.filter((c) => c.memberId === Number.parseInt(memberId))
  }

  return NextResponse.json({ contributions: filteredContributions })
}

export async function POST(request: Request) {
  try {
    const { memberId, month, amount } = await request.json()

    // Validate required fields
    if (!memberId || !month || !amount) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // In a real app, this would save to a database
    const newContribution = {
      id: Math.floor(Math.random() * 1000),
      memberId,
      month,
      amount,
      date: new Date().toLocaleDateString(),
      status: "Completed",
    }

    return NextResponse.json({
      success: true,
      message: "Contribution recorded successfully",
      contribution: newContribution,
    })
  } catch (error) {
    console.error("Error recording contribution:", error)
    return NextResponse.json({ success: false, message: "Failed to record contribution" }, { status: 500 })
  }
}

