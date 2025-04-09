export interface Member {
    id: number
    name: string
    email: string
    phone: string
    joinDate: string
    status: "Active" | "Inactive"
  }

  // Recent Payment
  export interface RecentPayment {
    id: number
    month: string
    amount: number
    date: string
    status: "Completed" | "Pending"
    reference: string
  }

  // Payment Types
  export interface PaymentHistory {
    id: number
    month: string
    amount: number
    date: string
    status: "Completed" | "Pending"
    reference: string
  }
  
  // Member Stats
  export interface MemberStats {
    contributionAmount: number
    contributionStatus: string
    nextPaymentDate: string
    receivingMonth: string
    totalContributed: number
    totalReceived: number
  }



  // Contribution types
  export interface Contribution {
    id: number
    memberId: number
    month: string
    amount: number
    date: string | null
    status: "Completed" | "Pending"
  }
  
  // Payment Schedule types
  export interface PaymentScheduleItem {
    month: string
    recipient: string
    status: "Completed" | "In Progress" | "Upcoming"
    amount: number
  }
  
  // Report types
  export interface ContributionReport {
    month: string
    year: string
    totalMembers: number
    contributedMembers: number
    pendingMembers: number
    totalAmount: number
    collectedAmount: number
    pendingAmount: number
    contributions: Array<{
      memberId: number
      name: string
      amount: number
      date: string | null
      status: "Completed" | "Pending"
    }>
  }
  
  export interface MemberStatusReport {
    month: string
    year: string
    members: Array<{
      id: number
      name: string
      totalContributed: number
      totalReceived: number
      nextReceivingMonth: string
      status: "Active" | "Inactive"
    }>
  }
  
  export interface PaymentHistoryReport {
    year: string
    payments: Array<{
      month: string
      totalCollected: number
      recipient: string
      distributionDate: string
    }>
  }
  
  export interface AnnualSummaryReport {
    year: string
    totalCollected: number
    totalDistributed: number
    pendingDistribution: number
    monthlyBreakdown: Array<{
      month: string
      collected: number
      distributed: number
    }>
  }
  
export interface ContributionStats {
    totalMembers: number
    contributedMembers: number
    pendingMembers: number
    totalAmount: number
    collectedAmount: number
    pendingAmount: number
  }

