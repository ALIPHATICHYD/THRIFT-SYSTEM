"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Users, Calendar, BarChart, Settings, Bell, HelpCircle } from "lucide-react"

export function AdminSidebar() {
  const pathname = usePathname()

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin/dashboard",
      active: pathname === "/admin/dashboard",
    },
    {
      label: "Members",
      icon: Users,
      href: "/admin/members",
      active: pathname === "/admin/members",
    },
    {
      label: "Schedule",
      icon: Calendar,
      href: "/admin/schedule",
      active: pathname === "/admin/schedule",
    },
    {
      label: "Reports",
      icon: BarChart,
      href: "/admin/reports",
      active: pathname === "/admin/reports",
    },
    {
      label: "Notifications",
      icon: Bell,
      href: "/admin/notifications",
      active: pathname === "/admin/notifications",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/admin/settings",
      active: pathname === "/admin/settings",
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
              <p className="text-xs text-gray-500 dark:text-gray-400">Check our documentation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

