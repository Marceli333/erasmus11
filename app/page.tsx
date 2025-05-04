"use client"

import { useSearchParams } from "next/navigation"
import { AppCard } from "@/components/app-card"
import { CategoryFilter } from "@/components/category-filter"
import { LanguageSwitcher } from "@/components/language-switcher"
import { apps } from "@/data/apps"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

export default function Home() {
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category") || "all"
  const { t } = useLanguage()

  // Filter apps based on the selected category
  const filteredApps = currentCategory === "all" ? apps : apps.filter((app) => app.category === currentCategory)

  return (
    <main className="min-h-screen bg-[#e0f0ff] p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold">{t("app.title")}</h1>
          <LanguageSwitcher />
        </div>

        {/* Welcome message */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6 text-center">
          <h2 className="text-xl font-semibold">{t("app.welcome")}</h2>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md mb-6 text-center">
          <Link
            href="/language-tools"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            {t("language-tools.link")}
          </Link>
        </div>

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
