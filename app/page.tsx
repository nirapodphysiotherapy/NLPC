"use client"

import { Suspense } from "react"
import Link from "next/link"
import { DoctorCard } from "@/components/doctor-card"
import { ServiceGrid } from "@/components/service-grid"
import { YouTubeVideo } from "@/components/youtube-video"
import { DOCTORS } from "@/data/doctors"
import { getServicesByCategory } from "@/data/services"
import { translations, type Language } from "@/data/i18n"
import { CLINIC } from "@/data/clinic"
import { useSearchParams } from "next/navigation"

function HomeContent({ language }: { language: Language }) {
  const neurologicalServices = getServicesByCategory("neurological")
  const orthopedicServices = getServicesByCategory("orthopedic")

  const t = (key: keyof typeof translations.en) => translations[language][key]

  return (
    <>
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* LEFT: TEXT CONTENT */}
            <div className="space-y-6 order-1 lg:order-1">
              <h1 className="text-3xl lg:text-5xl font-bold text-[#003087] leading-tight text-balance">
                Advanced Physiotherapy & Laser Treatment
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 max-w-lg">
                Expert care for neurological, orthopedic, paediatric conditions
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/booking"
                  className="bg-[#00A651] hover:bg-[#00A651]/90 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-colors inline-block text-center"
                >
                  Book Now
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-[#003087] text-[#003087] px-8 py-3 text-lg font-semibold rounded-lg hover:bg-[#003087] hover:text-white transition-colors inline-block text-center"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* RIGHT: YOUTUBE VIDEO */}
            <div className="order-2 lg:order-2">
              <YouTubeVideo
                videoId="Dzag99t6ugM"
                className="w-full h-[300px] lg:h-[400px] rounded-lg shadow-xl"
                config={{ lazyLoad: true, mute: true, showControls: true, modestBranding: true }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-blue-900">{t("teamTitle")}</h2>
            <p className="text-gray-600">{t("teamSubtitle")}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {DOCTORS.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} language={language} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-blue-900">{t("servicesTitle")}</h2>
            <p className="text-gray-600">{t("servicesSubtitle")}</p>
          </div>

          {/* Neurological Services */}
          <div className="mb-16">
            <h3 className="mb-6 text-2xl font-bold text-green-600">{t("neurological")}</h3>
            <ServiceGrid services={neurologicalServices} language={language} />
          </div>

          {/* Orthopedic Services */}
          <div className="mb-8">
            <h3 className="mb-6 text-2xl font-bold text-green-600">{t("orthopedic")}</h3>
            <ServiceGrid services={orthopedicServices} language={language} />
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-block rounded-lg bg-blue-900 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-800"
            >
              {t("servicesTitle")}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold">
            {language === "en" ? "Ready to Start Your Recovery?" : "রিকভারি শুরু করার জন্য প্রস্তুত?"}
          </h2>
          <p className="mb-8 text-lg text-gray-200">
            {language === "en"
              ? "Book an appointment with our expert physiotherapists today"
              : "আজই আমাদের বিশেষজ্ঞ ফিজিওথেরাপিস্টদের সাথে একটি অ্যাপয়েন্টমেন্ট বুক করুন"}
          </p>
          <a
            href={`tel:${CLINIC.phone}`}
            className="inline-block rounded-lg bg-green-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-green-700"
          >
            {t("callNow")}
          </a>
        </div>
      </section>
    </>
  )
}

export default function Home() {
  return (
    <Suspense fallback={<HomeContent language="en" />}>
      <HomePageWithLanguage />
    </Suspense>
  )
}

function HomePageWithLanguage() {
  const searchParams = useSearchParams()
  const language = (searchParams.get("lang") as Language) || "en"
  return <HomeContent language={language} />
}
