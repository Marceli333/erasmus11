"use client"

import type React from "react"

import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"

export function CategoryFilter() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const { t } = useLanguage()

  const currentCategory = searchParams.get("category") || "all"

  const setCategory = (category: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (category === "all") {
      params.delete("category")
    } else {
      params.set("category", category)
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      <FilterButton active={currentCategory === "all"} onClick={() => setCategory("all")}>
        {t("filter.all")}
      </FilterButton>
      <FilterButton active={currentCategory === "intensive-learning"} onClick={() => setCategory("intensive-learning")}>
        {t("filter.intensive-learning")}
      </FilterButton>
      <FilterButton active={currentCategory === "speaking"} onClick={() => setCategory("speaking")}>
        {t("filter.speaking")}
      </FilterButton>
      <FilterButton active={currentCategory === "immersion"} onClick={() => setCategory("immersion")}>
        {t("filter.immersion")}
      </FilterButton>
      <FilterButton active={currentCategory === "gamification"} onClick={() => setCategory("gamification")}>
        {t("filter.gamification")}
      </FilterButton>
      <FilterButton active={currentCategory === "writing"} onClick={() => setCategory("writing")}>
        {t("filter.writing")}
      </FilterButton>
      <FilterButton active={currentCategory === "other"} onClick={() => setCategory("other")}>
        {t("filter.other")}
      </FilterButton>
    </div>
  )
}

interface FilterButtonProps {
  children: React.ReactNode
  active: boolean
  onClick: () => void
}

function FilterButton({ children, active, onClick }: FilterButtonProps) {
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
