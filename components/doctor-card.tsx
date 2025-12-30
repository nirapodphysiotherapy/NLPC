"use client"

import Image from "next/image"
import type { Doctor } from "@/data/doctors"
import type { Language } from "@/data/i18n"

interface DoctorCardProps {
  doctor: Doctor
  language?: Language
}

export function DoctorCard({ doctor, language = "en" }: DoctorCardProps) {
  const name = language === "en" ? doctor.name : doctor.namebn
  const title = language === "en" ? doctor.title : doctor.titlebn
  const bio = language === "en" ? doctor.bio : doctor.biobn
  const specialties = language === "en" ? doctor.specialties : doctor.specialtiesbn

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
      <div className="relative h-64 w-full bg-gray-200">
        <Image src={doctor.image || "/placeholder.svg"} alt={name} fill className="object-cover" priority />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-blue-900">{name}</h3>
        <p className="mb-4 text-sm text-green-600 font-semibold">{title}</p>
        <p className="mb-4 text-sm text-gray-700">{bio}</p>
        <div className="mb-4 space-y-1">
          {specialties.map((specialty) => (
            <p key={specialty} className="text-xs text-gray-600">
              • {specialty}
            </p>
          ))}
        </div>
        <p className="text-xs text-gray-500">{doctor.registration}</p>
      </div>
    </div>
  )
}
