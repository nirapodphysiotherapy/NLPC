"use client"

import type React from "react"
import { Suspense, useState } from "react"
import { useSearchParams } from "next/navigation"
import { sendEmail } from "@/lib/email"
import { DOCTORS } from "@/data/doctors"
import { SERVICES } from "@/data/services"
import { translations, type Language } from "@/data/i18n"

function BookingForm({ language }: { language: Language }) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState("")

    const t = (key: keyof typeof translations.en) => translations[language][key]

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitMessage("")

        const formData = new FormData(e.currentTarget)
        const emailData = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            service: formData.get("service") as string,
            doctor: formData.get("doctor") as string,
            message: formData.get("message") as string,
        }

        const success = await sendEmail(emailData)

        if (success) {
            setSubmitMessage(t("bookingSuccess"))
                ; (e.target as HTMLFormElement).reset()
        } else {
            setSubmitMessage("Failed to send booking request. Please try again.")
        }
        setIsSubmitting(false)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-blue-900 py-12 text-white">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold">{t("bookTitle")}</h1>
                </div>
            </section>

            {/* Booking Form */}
            <section className="py-20">
                <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-lg bg-white p-8 shadow-md">
                        {submitMessage && <div className="mb-6 rounded-lg bg-green-100 p-4 text-green-800">{submitMessage}</div>}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Doctor Selection */}
                            <div>
                                <label className="mb-2 block font-semibold text-gray-700">{t("selectDoctor")}</label>
                                <select
                                    name="doctor"
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">{t("selectDoctor")}</option>
                                    {DOCTORS.map((doctor) => (
                                        <option key={doctor.id} value={doctor.name}>
                                            {language === "en" ? doctor.name : doctor.namebn}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Service Selection */}
                            <div>
                                <label className="mb-2 block font-semibold text-gray-700">{t("selectService")}</label>
                                <select
                                    name="service"
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">{t("selectService")}</option>
                                    {SERVICES.map((service) => (
                                        <option key={service.id} value={service.name}>
                                            {language === "en" ? service.name : service.namebn}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Personal Info */}
                            <input
                                type="text"
                                name="name"
                                placeholder={t("yourName")}
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder={t("yourEmail")}
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder={t("yourPhone")}
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            {/* Date and Time */}
                            <input
                                type="date"
                                placeholder={t("preferredDate")}
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                type="time"
                                placeholder={t("preferredTime")}
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            {/* Message */}
                            <textarea
                                name="message"
                                placeholder={t("message")}
                                rows={5}
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full rounded-lg bg-green-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-green-700 disabled:opacity-50"
                            >
                                {isSubmitting ? t("loadingMore") : t("submit")}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default function BookingClient() {
    return (
        <Suspense fallback={<BookingForm language="en" />}>
            <BookingPageWithLanguage />
        </Suspense>
    )
}

function BookingPageWithLanguage() {
    const searchParams = useSearchParams()
    const language = (searchParams.get("lang") as Language) || "en"
    return <BookingForm language={language} />
}
