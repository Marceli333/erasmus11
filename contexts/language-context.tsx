"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Language = "pl" | "en" | "fr"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  pl: {
    "app.title": "Układ Okresowy Aplikacji",
    "app.welcome": "Witaj w aplikacji układu okresowego!",
    "filter.all": "Wszystko",
    "filter.intensive-learning": "Intensywna nauka",
    "filter.speaking": "Mówienie i native speakerzy",
    "filter.immersion": "Immersja językowa",
    "filter.gamification": "Gamifikacja i zabawa",
    "filter.writing": "Pisanie i gramatyka",
    "filter.other": "Inne narzędzia",
    "language.pl": "Polski",
    "language.en": "Angielski",
    "language.fr": "Francuski",
    "language-tools.title": "Narzędzia do nauki języków",
    "language-tools.all": "Wszystkie",
    "language-tools.intensive-learning": "Intensywna nauka",
    "language-tools.speaking": "Mówienie i native speakerzy",
    "language-tools.immersion": "Immersja językowa",
    "language-tools.gamification": "Gamifikacja i zabawa",
    "language-tools.writing": "Pisanie i gramatyka",
    "language-tools.other": "Inne narzędzia",
    "language-tools.back": "Powrót do strony głównej",
    "language-tools.link": "Narzędzia do nauki języków",
    "educational-tools.title": "Narzędzia edukacyjne",
    "educational-tools.back": "Powrót do strony głównej",
    "educational-tools.link": "Narzędzia edukacyjne",
  },
  en: {
    "app.title": "Periodic Table of Applications",
    "app.welcome": "Welcome to the Periodic Table of Applications!",
    "filter.all": "All",
    "filter.intensive-learning": "Intensive Learning",
    "filter.speaking": "Speaking & Native Speakers",
    "filter.immersion": "Language Immersion",
    "filter.gamification": "Gamification & Fun",
    "filter.writing": "Writing & Grammar",
    "filter.other": "Other Tools",
    "language.pl": "Polish",
    "language.en": "English",
    "language.fr": "French",
    "language-tools.title": "Language Learning Tools",
    "language-tools.all": "All",
    "language-tools.intensive-learning": "Intensive Learning",
    "language-tools.speaking": "Speaking & Native Speakers",
    "language-tools.immersion": "Language Immersion",
    "language-tools.gamification": "Gamification & Fun",
    "language-tools.writing": "Writing & Grammar",
    "language-tools.other": "Other Tools",
    "language-tools.back": "Back to Home",
    "language-tools.link": "Language Learning Tools",
    "educational-tools.title": "Educational Tools",
    "educational-tools.back": "Back to Home",
    "educational-tools.link": "Educational Tools",
  },
  fr: {
    "app.title": "Tableau Périodique des Applications",
    "app.welcome": "Bienvenue dans le Tableau Périodique des Applications!",
    "filter.all": "Tout",
    "filter.intensive-learning": "Apprentissage Intensif",
    "filter.speaking": "Conversation & Locuteurs Natifs",
    "filter.immersion": "Immersion Linguistique",
    "filter.gamification": "Gamification & Amusement",
    "filter.writing": "Écriture & Grammaire",
    "filter.other": "Autres Outils",
    "language.pl": "Polonais",
    "language.en": "Anglais",
    "language.fr": "Français",
    "language-tools.title": "Outils d'Apprentissage des Langues",
    "language-tools.all": "Tous",
    "language-tools.intensive-learning": "Apprentissage Intensif",
    "language-tools.speaking": "Conversation & Locuteurs Natifs",
    "language-tools.immersion": "Immersion Linguistique",
    "language-tools.gamification": "Gamification & Amusement",
    "language-tools.writing": "Écriture & Grammaire",
    "language-tools.other": "Autres Outils",
    "language-tools.back": "Retour à l'Accueil",
    "language-tools.link": "Outils d'Apprentissage des Langues",
    "educational-tools.title": "Outils Éducatifs",
    "educational-tools.back": "Retour à l'Accueil",
    "educational-tools.link": "Outils Éducatifs",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pl")

  // Load saved language preference on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["pl", "en", "fr"].includes(savedLanguage)) {
      setLanguageState(savedLanguage)
    }
  }, [])

  // Save language preference when it changes
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
