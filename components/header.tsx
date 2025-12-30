"use client"

import { useState, Suspense } from "react"
import Link from "next/link"
import { LanguageToggle, type Language } from "./language-toggle"
import { translations } from "@/data/i18n"
import { CLINIC } from "@/data/clinic"
import Image from "next/image"

interface HeaderProps {
  language?: Language
}

export function Header({ language = "en" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: translations[language].home, href: "/" },
    { label: translations[language].about, href: "/about" },
    { label: translations[language].services, href: "/services" },
    { label: translations[language].team, href: "/team" },
    { label: translations[language].contact, href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900">
              <span className="text-lg font-bold text-white">
                <Image
                  src="/NLPC logo.png"
                  className="rounded-full w-full h-full"
                  alt="NLPC Logo"
                  width={24}
                  height={24}
                />
              </span>
            </div>
            <div className="hidden flex-col sm:flex">
              <span className="text-sm font-bold text-blue-900">NLPC</span>
              <span className="text-xs text-gray-600">Physiotherapy</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side - Language toggle and CTA */}
          <div className="flex items-center gap-4">
            <Suspense fallback={<div className="h-8 w-16 bg-gray-200 rounded animate-pulse" />}>
              <LanguageToggle currentLanguage={language} />
            </Suspense>
            <a
              href={`tel:${CLINIC.phone}`}
              className="hidden rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 sm:inline-block"
            >
              {translations[language].callNow}
            </a>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a href={`tel:${CLINIC.phone}`} className="text-sm font-medium text-green-600">
                {translations[language].callNow}
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
