"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, CreditCard, Calendar, FileText, Settings, HelpCircle } from "lucide-react"

export default function MemberSidebar() {
  const pathname = usePathname()

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/member/dashboard",
      active: pathname === "/member/dashboard",
    },
    {
      label: "Payments",
      icon: CreditCard,
      href: "/member/payments",
      active: pathname === "/member/payments",
    },
    {
      label: "Schedule",
      icon: Calendar,
      href: "/member/schedule",
      active: pathname === "/member/schedule",
    },
    {
      label: "History",
      icon: FileText,
      href: "/member/history",
      active: pathname === "/member/history",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/member/settings",
      active: pathname === "/member/settings",
    },
  ]

  return (
    <div className="hidden border-r bg-gray-50/40 lg:block dark:bg-gray-800/40 w-64">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 text-sm font-medium">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                  route.active
                    ? "bg-primary/10 text-primary"
                    : "text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800",
                )}
              >
                <route.icon className="h-4 w-4" />
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-4">
          <div className="flex items-center gap-2 rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
            <HelpCircle className="h-5 w-5 text-primary" />
            <div>
              <h5 className="font-medium">Need help?</h5>
              <p className="text-xs text-gray-500 dark:text-gray-400">Contact the administrator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

