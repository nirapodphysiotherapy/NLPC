"use client"

import type React from "react"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import type { Language } from "@/data/i18n"

interface SearchParamsProviderProps {
  children: (language: Language) => React.ReactNode
}

function SearchParamsContent({ children }: SearchParamsProviderProps) {
  const searchParams = useSearchParams()
  const language = (searchParams.get("lang") as Language) || "en"
  return <>{children(language)}</>
}

export function SearchParamsProvider({ children }: SearchParamsProviderProps) {
  return (
    <Suspense fallback={<div>{children("en")}</div>}>
      <SearchParamsContent>{children}</SearchParamsContent>
    </Suspense>
  )
}
