"use client"

import { Suspense, useState } from "react"
import { useSearchParams } from "next/navigation"
import { getServicesByCategory, SERVICE_CATEGORIES } from "@/data/services"
import { translations, type Language } from "@/data/i18n"

function ServicesContent({ language }: { language: Language }) {
    const t = (key: keyof typeof translations.en) => translations[language][key]
    const [activeCategory, setActiveCategory] = useState("all")

    const categories = [
        { id: "all", label: language === "en" ? "All Services" : "সব সেবা" },
        // Neurological
        { id: "neurological", label: language === "en" ? SERVICE_CATEGORIES.neurological : SERVICE_CATEGORIES.neurologicalbn },
        // Orthopedic
        { id: "orthopedic", label: language === "en" ? SERVICE_CATEGORIES.orthopedic : SERVICE_CATEGORIES.orthopedicbn },
        // Pediatric
        { id: "pediatric", label: language === "en" ? SERVICE_CATEGORIES.pediatric : SERVICE_CATEGORIES.pediatricbn },
        // Geriatric
        { id: "geriatric", label: language === "en" ? SERVICE_CATEGORIES.geriatric : SERVICE_CATEGORIES.geriatricbn },
        // Biophysical
        { id: "biophysical", label: language === "en" ? SERVICE_CATEGORIES.biophysical : SERVICE_CATEGORIES.biophysicalbn },
        // Manual Therapy
        { id: "manualtherapy", label: language === "en" ? SERVICE_CATEGORIES.manualtherapy : SERVICE_CATEGORIES.manualtherapybn },
        // Occupational Therapy
        { id: "occupational", label: language === "en" ? SERVICE_CATEGORIES.occupational : SERVICE_CATEGORIES.occupationalbn },
        // Speech Therapy
        { id: "speech", label: language === "en" ? SERVICE_CATEGORIES.speech : SERVICE_CATEGORIES.speechbn },
        // Alternative & Complementary Therapy
        {
            id: "alternative",
            label: language === "en"
                ? SERVICE_CATEGORIES.alternative
                : SERVICE_CATEGORIES.alternativebn,
        },
    ]

    const services = getServicesByCategory(activeCategory)

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-blue-900 py-12 text-white">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold">{t("servicesTitle")}</h1>
                    <p className="mt-4 text-xl text-blue-100">{t("servicesSubtitle")}</p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="border-b border-gray-200 bg-gray-50 py-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${activeCategory === category.id
                                    ? "bg-blue-900 text-white"
                                    : "bg-white text-gray-600 hover:bg-gray-100"
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
                            >
                                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                                    <img
                                        src={service.image || "/placeholder.svg"}
                                        alt={language === "en" ? service.name : service.namebn}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="mb-2 text-xl font-bold text-blue-900">
                                        {language === "en" ? service.name : service.namebn}
                                    </h3>
                                    <p className="mb-4 text-sm text-gray-600">
                                        {language === "en" ? service.description : service.descriptionbn}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {(service.conditions || []).slice(0, 3).map((condition, i) => (
                                            <span key={i} className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                                                {condition}
                                            </span>
                                        ))}
                                        {(service.conditions || []).length > 3 && (
                                            <span className="rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600">
                                                +{(service.conditions || []).length - 3} more
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default function ServicesClient() {
    return (
        <Suspense fallback={<ServicesContent language="en" />}>
            <ServicesPageWithLanguage />
        </Suspense>
    )
}

function ServicesPageWithLanguage() {
    const searchParams = useSearchParams()
    const language = (searchParams.get("lang") as Language) || "en"
    return <ServicesContent language={language} />
}
