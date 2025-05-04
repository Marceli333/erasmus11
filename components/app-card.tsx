"use client"

import Image from "next/image"
import type { AppType } from "@/types/app"

interface AppCardProps {
  app: AppType
}

export function AppCard({ app }: AppCardProps) {
  return (
    <a
      href={app.url}
      className={`flex flex-col items-center p-4 rounded-lg shadow-md transition-transform hover:scale-105 ${getCategoryClass(
        app.category,
      )}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-12 h-12 relative mb-2">
        <Image src={app.icon || "/placeholder.svg"} alt={`${app.name} icon`} fill className="object-contain" />
      </div>
      <span className="text-sm font-medium text-center">{app.name}</span>
    </a>
  )
}

function getCategoryClass(category: string): string {
  switch (category) {
    case "intensive-learning":
      return "bg-[#d6e9ff]"
    case "speaking":
      return "bg-[#d4edda]"
    case "immersion":
      return "bg-[#fff3cd]"
    case "gamification":
      return "bg-[#e0cffc]"
    case "writing":
      return "bg-[#f8d7da]"
    case "other":
    default:
      return "bg-[#e2e3e5]"
  }
}
