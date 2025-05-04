"use client"

import type React from "react"

import { useState } from "react"
import { LanguageToolCard } from "@/components/language-tool-card"
import { languageTools } from "@/data/language-tools"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function LanguageToolsPage() {
  const [category, setCategory] = useState<string>("all")
  const { t } = useLanguage()

  // Filter tools based on the selected category
  const filteredTools = category === "all" ? languageTools : languageTools.filter((tool) => tool.category === category)

  return (
    <main className="min-h-screen bg-[#e0f0ff] p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold">{t("language-tools.title")}</h1>
          <LanguageSwitcher />
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-6 bg-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>{t("language-tools.back")}</span>
        </Link>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <CategoryButton active={category === "all"} onClick={() => setCategory("all")}>
            {t("language-tools.all")}
          </CategoryButton>
          <CategoryButton active={category === "intensive-learning"} onClick={() => setCategory("intensive-learning")}>
            {t("language-tools.intensive-learning")}
          </CategoryButton>
          <CategoryButton active={category === "speaking"} onClick={() => setCategory("speaking")}>
            {t("language-tools.speaking")}
          </CategoryButton>
          <CategoryButton active={category === "immersion"} onClick={() => setCategory("immersion")}>
            {t("language-tools.immersion")}
          </CategoryButton>
          <CategoryButton active={category === "gamification"} onClick={() => setCategory("gamification")}>
            {t("language-tools.gamification")}
          </CategoryButton>
          <CategoryButton active={category === "writing"} onClick={() => setCategory("writing")}>
            {t("language-tools.writing")}
          </CategoryButton>
          <CategoryButton active={category === "other"} onClick={() => setCategory("other")}>
            {t("language-tools.other")}
          </CategoryButton>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTools.map((tool) => (
            <LanguageToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      </div>
    </main>
  )
}

interface CategoryButtonProps {
  children: React.ReactNode
  active: boolean
  onClick: () => void
}

function CategoryButton({ children, active, onClick }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
        active ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-800 hover:bg-blue-200"
      }`}
    >
      {children}
    </button>
  )
}
