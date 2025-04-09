import { RecentPayment, PaymentHistory, MemberStats, ContributionStats, Member, Contribution, PaymentScheduleItem, ContributionReport } from "../lib/types";


export const recentPayment: RecentPayment[] = [
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
    }
]

export const paymentHistory: PaymentHistory[] = [
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

export const memberStats: MemberStats[] =[
    {
        contributionAmount: 1000,
        contributionStatus: "Pending",
        nextPaymentDate: "April 25, 2025",
        receivingMonth: "August 2025",
        totalContributed: 3000,
        totalReceived: 0,
    }
]

export const contributionStats: ContributionStats[] = [
    {
        totalMembers: 12,
        contributedMembers: 8,
        pendingMembers: 4,
        totalAmount: 12000,
        collectedAmount: 8000,
        pendingAmount: 4000,
    }
]

export const member: Member[] = [
    {
        id: 1,
        name: "John Doe",
        email: "",
        phone: "",
        joinDate: "",
        status: "Active",
    },
]

export const contribution: Contribution[] = [
    {
        id: 1,
        memberId: 1,
        month: "January",
        amount: 100,
        date: "2023-01-01",
        status: "Completed",
    },
]

export const paymentScheduleItem: PaymentScheduleItem[] = [
    {
        month: "January",
        recipient: "John Doe",
        status: "Completed",
        amount: 100,
    }
]

export const contributionReport: ContributionReport[] = [
    {
        month: "January",
        year: "2023",
        totalMembers: 12,
        contributedMembers: 8,
        pendingMembers: 4,
        totalAmount: 12000,
        collectedAmount: 8000,
        pendingAmount: 4000,
        contributions: [
            {
                memberId: 1,
                name: "John Doe",
                amount: 100,
                date: "2023-01-01",
                status: "Completed",
            },
        ],
    },
]

