"use client"

import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)
  const closeDropdown = () => setIsOpen(false)

  const selectLanguage = (lang: "pl" | "en" | "fr") => {
    setLanguage(lang)
    closeDropdown()
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-3 py-2 bg-white rounded-md shadow-sm hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe size={18} />
        <span>{language.toUpperCase()}</span>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={closeDropdown} aria-hidden="true"></div>
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 py-1">
            <button
              onClick={() => selectLanguage("pl")}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                language === "pl" ? "bg-blue-50 text-blue-600" : ""
              }`}
            >
              {t("language.pl")}
            </button>
            <button
              onClick={() => selectLanguage("en")}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                language === "en" ? "bg-blue-50 text-blue-600" : ""
              }`}
            >
              {t("language.en")}
            </button>
            <button
              onClick={() => selectLanguage("fr")}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                language === "fr" ? "bg-blue-50 text-blue-600" : ""
              }`}
            >
              {t("language.fr")}
            </button>
          </div>
        </>
      )}
    </div>
  )
}
