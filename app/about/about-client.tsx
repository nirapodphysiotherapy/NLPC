"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { translations, type Language } from "@/data/i18n"
import { CLINIC } from "@/data/clinic"

function AboutContent({ language }: { language: Language }) {
    const t = (key: keyof typeof translations.en) => translations[language][key]

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-blue-900 py-20 text-white">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="mb-4 text-4xl font-bold">{t("aboutTitle")}</h1>
                    <p className="mx-auto max-w-2xl text-xl text-blue-100">{t("aboutSubtitle")}</p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 md:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-3xl font-bold text-blue-900">{t("missionValues")}</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold text-green-600">{t("ourMission")}</h3>
                                    <p className="text-gray-600">
                                        {language === "en"
                                            ? "To provide world-class physiotherapy services utilizing advanced technology and experienced professionals to help patients recover and improve their quality of life."
                                            : "উন্নত প্রযুক্তি ও অভিজ্ঞ পেশাদারদের মাধ্যমে বিশ্বমানের ফিজিওথেরাপি সেবা প্রদান করে রোগীদের দ্রুত পুনরুদ্ধারে সাহায্য করি এবং তাদের জীবনমান উন্নত করি।"}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-semibold text-green-600">{t("ourVision")}</h3>
                                    <p className="text-gray-600">
                                        {language === "en"
                                            ? "To be the leading physiotherapy center in Bangladesh, known for excellence, innovation, and patient-centric care."
                                            : "বাংলাদেশের শীর্ষস্থানীয় ফিজিওথেরাপি কেন্দ্র যা উৎকর্ষতা, উদ্ভাবন এবং রোগী-কেন্দ্রিক যত্নের জন্য পরিচিত।"}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] overflow-hidden rounded-lg">
                            <img
                                src="/NLPC bed.jpeg"
                                alt="Nirapod Laser Physiotherapy Center Interior"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-gray-50 py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-3xl font-bold text-blue-900">
                        {language === "en" ? "Why Choose Us" : "কেন আমাদের বেছে নিবেন"}
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                en: "Expert Team",
                                bn: "বিশেষজ্ঞ দল",
                                desc_en: "Highly qualified physiotherapists with years of experience",
                                desc_bn: "বহু বছরের অভিজ্ঞতা সহ অত্যন্ত যোগ্য ফিজিওথেরাপিস্টরা",
                            },
                            {
                                en: "Advanced Technology",
                                bn: "উন্নত প্রযুক্তি",
                                desc_en: "Latest laser therapy and rehabilitation equipment",
                                desc_bn: "সর্বশেষ লেজার থেরাপি এবং পুনর্বাসন সরঞ্জাম",
                            },
                            {
                                en: "Patient Care",
                                bn: "রোগীর যত্ন",
                                desc_en: "Personalized treatment plans for each patient",
                                desc_bn: "প্রতিটি রোগীর জন্য ব্যক্তিগত চিকিৎসা পরিকল্পনা",
                            },
                        ].map((item, i) => (
                            <div key={i} className="rounded-lg bg-white p-8 shadow-md">
                                <h3 className="mb-4 text-xl font-bold text-green-600">{language === "en" ? item.en : item.bn}</h3>
                                <p className="text-gray-600">{language === "en" ? item.desc_en : item.desc_bn}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default function AboutClient() {
    return (
        <Suspense fallback={<AboutContent language="en" />}>
            <AboutPageWithLanguage />
        </Suspense>
    )
}

function AboutPageWithLanguage() {
    const searchParams = useSearchParams()
    const language = (searchParams.get("lang") as Language) || "en"
    return <AboutContent language={language} />
}
