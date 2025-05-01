"use client"

import { useSearchParams } from "next/navigation"
import { AppCard } from "@/components/app-card"
import { CategoryFilter } from "@/components/category-filter"
import { apps } from "@/data/apps"

export default function Home() {
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category") || "all"

  // Filter apps based on the selected category
  const filteredApps = currentCategory === "all" ? apps : apps.filter((app) => app.category === currentCategory)

  return (
    <main className="min-h-screen bg-[#e0f0ff] p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Układ Okresowy Aplikacji</h1>

        <CategoryFilter />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {filteredApps.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>
      </div>
    </main>
  )
}
