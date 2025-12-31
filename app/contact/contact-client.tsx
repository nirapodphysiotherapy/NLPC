"use client"

import type React from "react"
import { Suspense, useState } from "react"
import { GoogleMapEmbed } from "@/components/google-map-embed"
import { sendEmail } from "@/lib/email"
import { translations, type Language } from "@/data/i18n"
import { CLINIC } from "@/data/clinic"
import { DOCTORS } from "@/data/doctors"
import { useSearchParams } from "next/navigation"

function ContactForm({ language }: { language: Language }) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState("")
    const [submitError, setSubmitError] = useState("")

    const t = (key: keyof typeof translations.en) => translations[language][key]

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitError("")
        setSubmitMessage("")

        try {
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
                setSubmitMessage("Your message has been sent successfully! We will contact you soon.")
                    ; (e.target as HTMLFormElement).reset()
            } else {
                setSubmitError("Failed to send message. Please try again.")
            }
        } catch (error) {
            setSubmitError("An error occurred. Please try again later.")
            console.error("Form submission error:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-blue-900 py-12 text-white">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold">{t("contactTitle")}</h1>
                </div>
            </section>

            {/* Google Map - Full Width */}
            <section className="w-full">
                <GoogleMapEmbed embedUrl={CLINIC.mapEmbedUrl} height="500px" className="w-full rounded-none" />
            </section>

            {/* শাখাসমূহের তথ্য */}
            <section className="py-16 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-2">

                        {/* খিলগাঁও শাখা */}
                        <div className="rounded-lg bg-white p-6 shadow-sm">
                            <h3 className="mb-3 text-xl font-bold text-green-600">খিলগাঁও শাখা</h3>
                            <p className="text-gray-700 leading-relaxed">
                                হাউজ # ১০৬, রোড # ১৬, মুক্তা বিরিয়ানির বিপরীতে, তিলপাপাড়া ডেন্টালের পার্শ্বে, খিলগাঁও, ঢাকা-১২১৯।
                            </p>
                            <p className="mt-3 text-gray-700">
                                <strong>রোগী দেখার সময়:</strong><br />
                                শনি থেকে বৃহস্পতি<br />
                                সকাল ৯.০০ – ৩.০০টা
                            </p>
                        </div>

                        {/* বনশ্রী শাখা */}
                        <div className="rounded-lg bg-white p-6 shadow-sm">
                            <h3 className="mb-3 text-xl font-bold text-green-600">বনশ্রী শাখা</h3>
                            <p className="text-gray-700 leading-relaxed">
                                বাড়ি # ০৬, রোড # ০৪, ব্লক # এইচ, রামপুরা, মেয়াদিয়া অটো স্ট্যান্ডের সামনে, হলিক্রিসেন স্কুলের পার্শ্বে।
                            </p>
                            <p className="mt-3 text-gray-700">
                                <strong>রোগী দেখার সময়:</strong><br />
                                শনি থেকে বৃহস্পতি<br />
                                বিকাল ৩টা – রাত ৯টা
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* Contact Content */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 md:grid-cols-2">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="mb-4 text-xl font-bold text-green-600 flex items-center gap-2">📍 {t("location")}</h3>
                                <p className="text-gray-600">{language === "en" ? CLINIC.address : CLINIC.addressbn}</p>
                                <a
                                    href={CLINIC.mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 text-blue-600 hover:underline"
                                >
                                    {t("getDirections")}
                                </a>
                            </div>

                            <div>
                                <h3 className="mb-4 text-xl font-bold text-green-600 flex items-center gap-2">📞 {t("phone")}</h3>
                                <a href={`tel:${CLINIC.phone}`} className="text-gray-600 hover:text-blue-600 font-semibold">
                                    {CLINIC.phone}
                                </a>
                            </div>

                            <div>
                                <h3 className="mb-4 text-xl font-bold text-green-600 flex items-center gap-2">✉️ {t("email")}</h3>
                                <a href={`mailto:${CLINIC.email}`} className="text-gray-600 hover:text-blue-600">
                                    {CLINIC.email}
                                </a>
                            </div>

                            <div>
                                <h3 className="mb-4 text-xl font-bold text-green-600 flex items-center gap-2">🕒 {t("hours")}</h3>
                                <p className="text-gray-600">{language === "en" ? CLINIC.hours : CLINIC.hoursbn}</p>
                            </div>
                        </div>

                        {/* Contact Form - Resend API */}
                        <div className="rounded-lg bg-gray-50 p-8">
                            <h3 className="mb-6 text-xl font-bold text-blue-900">{t("sendMessage")}</h3>
                            {submitMessage && <div className="mb-4 rounded-lg bg-green-100 p-4 text-green-800">{submitMessage}</div>}
                            {submitError && <div className="mb-4 rounded-lg bg-red-100 p-4 text-red-800">{submitError}</div>}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder={t("yourName")}
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
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={t("yourEmail")}
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <select
                                    name="service"
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select a Service *</option>
                                    <option value="Neurological">Neurological Treatment</option>
                                    <option value="Orthopedic">Orthopedic Treatment</option>
                                    <option value="Pediatric">Pediatric Treatment</option>
                                    <option value="Geriatric">Geriatric Treatment</option>
                                    <option value="Laser Therapy">Laser Therapy</option>
                                </select>
                                <select
                                    name="doctor"
                                    required
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">{t("selectDoctor")} *</option>
                                    {DOCTORS.map((doctor) => (
                                        <option key={doctor.id} value={doctor.name}>
                                            {language === "en" ? doctor.name : doctor.namebn}
                                        </option>
                                    ))}
                                </select>
                                <textarea
                                    name="message"
                                    placeholder={t("message")}
                                    rows={5}
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full rounded-lg bg-green-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-green-700 disabled:opacity-50"
                                >
                                    {isSubmitting ? "Scheduling..." : "Schedule Appointment"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default function ContactClient() {
    return (
        <Suspense fallback={<ContactForm language="en" />}>
            <ContactPageWithLanguage />
        </Suspense>
    )
}

function ContactPageWithLanguage() {
    const searchParams = useSearchParams()
    const language = (searchParams.get("lang") as Language) || "en"
    return <ContactForm language={language} />
}
