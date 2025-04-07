import { NextResponse } from "next/server"

export async function GET(request: Request) {
  // In a real app, this would fetch data from a database
  const members = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      joinDate: "Jan 10, 2025",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1234567891",
      joinDate: "Jan 12, 2025",
      status: "Active",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael@example.com",
      phone: "+1234567892",
      joinDate: "Jan 15, 2025",
      status: "Active",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      phone: "+1234567893",
      joinDate: "Jan 18, 2025",
      status: "Active",
    },
    {
      id: 5,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      phone: "+1234567894",
      joinDate: "Jan 20, 2025",
      status: "Active",
    },
    {
      id: 6,
      name: "Robert Taylor",
      email: "robert@example.com",
      phone: "+1234567895",
      joinDate: "Jan 22, 2025",
      status: "Active",
    },
    {
      id: 7,
      name: "Jennifer Martinez",
      email: "jennifer@example.com",
      phone: "+1234567896",
      joinDate: "Jan 25, 2025",
      status: "Active",
    },
    {
      id: 8,
      name: "David Anderson",
      email: "david@example.com",
      phone: "+1234567897",
      joinDate: "Jan 27, 2025",
      status: "Active",
    },
    {
      id: 9,
      name: "Lisa Wilson",
      email: "lisa@example.com",
      phone: "+1234567898",
      joinDate: "Jan 28, 2025",
      status: "Active",
    },
    {
      id: 10,
      name: "James Wilson",
      email: "james@example.com",
      phone: "+1234567899",
      joinDate: "Jan 29, 2025",
      status: "Active",
    },
    {
      id: 11,
      name: "Patricia Thomas",
      email: "patricia@example.com",
      phone: "+1234567900",
      joinDate: "Jan 30, 2025",
      status: "Active",
    },
    {
      id: 12,
      name: "Susan Miller",
      email: "susan@example.com",
      phone: "+1234567901",
      joinDate: "Jan 31, 2025",
      status: "Active",
    },
  ]

  // Get query parameters
  const { searchParams } = new URL(request.url)
  const search = searchParams.get("search")
  const status = searchParams.get("status")

  // Filter members based on query parameters
  let filteredMembers = [...members]

  if (search) {
    const searchLower = search.toLowerCase()
    filteredMembers = filteredMembers.filter(
      (m) =>
        m.name.toLowerCase().includes(searchLower) ||
        m.email.toLowerCase().includes(searchLower) ||
        m.phone.includes(search),
    )
  }

  if (status) {
    filteredMembers = filteredMembers.filter((m) => m.status === status)
  }

  return NextResponse.json({ members: filteredMembers })
}

export async function POST(request: Request) {
  try {
    const { name, email, phone } = await request.json()

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // In a real app, this would check if we already have 12 members
    // and save to a database if not
    const newMember = {
      id: Math.floor(Math.random() * 1000),
      name,
      email,
      phone,
      joinDate: new Date().toLocaleDateString(),
      status: "Active",
    }

    return NextResponse.json({
      success: true,
      message: "Member added successfully",
      member: newMember,
    })
  } catch (error) {
    console.error("Error adding member:", error)
    return NextResponse.json({ success: false, message: "Failed to add member" }, { status: 500 })
  }
}

