"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { DoctorCard } from "@/components/doctor-card"
import { DOCTORS } from "@/data/doctors"
import { translations, type Language } from "@/data/i18n"

function TeamContent({ language }: { language: Language }) {
    const t = (key: keyof typeof translations.en) => translations[language][key]

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-blue-900 py-12 text-white">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold">{t("teamTitle")}</h1>
                    <p className="mt-4 text-xl text-blue-100">{t("teamSubtitle")}</p>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {DOCTORS.map((doctor) => (
                            <DoctorCard key={doctor.id} doctor={doctor} language={language} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default function TeamClient() {
    return (
        <Suspense fallback={<TeamContent language="en" />}>
            <TeamPageWithLanguage />
        </Suspense>
    )
}

function TeamPageWithLanguage() {
    const searchParams = useSearchParams()
    const language = (searchParams.get("lang") as Language) || "en"
    return <TeamContent language={language} />
}
