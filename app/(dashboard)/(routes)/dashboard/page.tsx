"use client"

import { UserButton } from "@clerk/nextjs"

export default function DashboardPage() {
  return (
    <div>
        <p>Dashboard Page (Protected)</p>
        <UserButton afterSignOutUrl="/" /> {/* Bring you back to the landing page */}
    </div>
  )
}
