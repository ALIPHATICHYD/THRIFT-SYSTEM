import { ContributionStats, Member, Contribution, PaymentScheduleItem, ContributionReport } from "../lib/types";

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

