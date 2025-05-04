"use client"

import type { LanguageToolType } from "@/types/language-tool"
import { useLanguage } from "@/contexts/language-context"

interface LanguageToolCardProps {
  tool: LanguageToolType
}

export function LanguageToolCard({ tool }: LanguageToolCardProps) {
  const { language } = useLanguage()

  return (
    <div className={`p-4 rounded-lg shadow-md ${getCategoryClass(tool.category)}`}>
      <h3 className="font-bold text-lg mb-1">{tool.name}</h3>
      <p className="text-sm mb-2">{tool.description[language]}</p>
      <div className="text-xs font-medium bg-white bg-opacity-50 inline-block px-2 py-1 rounded">
        {tool.pricingModel[language]}
      </div>
    </div>
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
    case "writing":
      return "bg-[#f8d7da]"
    case "gamification":
      return "bg-[#e0cffc]"
    case "other":
    default:
      return "bg-[#e2e3e5]"
  }
}
