export interface LanguageToolType {
  name: string
  description: {
    pl: string
    en: string
    fr: string
  }
  pricingModel: {
    pl: string
    en: string
    fr: string
  }
  category: "intensive-learning" | "speaking" | "immersion" | "gamification" | "writing" | "other"
}
