"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"

export type Language = "en" | "bn"

interface LanguageToggleProps {
  currentLanguage?: Language
}

export function LanguageToggle({ currentLanguage = "en" }: LanguageToggleProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [language, setLanguage] = useState<Language>(currentLanguage)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const savedLang = localStorage.getItem("nirapod-lang") as Language | null
    if (savedLang) {
      setLanguage(savedLang)
    } else {
      setLanguage(currentLanguage)
    }
  }, [currentLanguage])

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "bn" : "en"
    setLanguage(newLanguage)

    localStorage.setItem("nirapod-lang", newLanguage)

    const params = new URLSearchParams(searchParams)
    params.set("lang", newLanguage)
    router.push(`${pathname}?${params.toString()}`)
  }

  if (!isMounted) {
    return null // Prevent hydration mismatch
  }

  return (
    <button
      onClick={toggleLanguage}
      className="rounded-md bg-emerald-500 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      aria-label="Toggle language"
    >
      {language === "en" ? "বাংলা" : "English"}
    </button>
  )
}
