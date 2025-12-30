"use client"

import type { Service } from "@/data/services"
import type { Language } from "@/data/i18n"

interface ServiceGridProps {
  services: Service[]
  language?: Language
}

export function ServiceGrid({ services, language = "en" }: ServiceGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service) => {
        const name = language === "en" ? service.name : service.namebn
        const description = language === "en" ? service.description : service.descriptionbn

        return (
          <div
            key={service.id}
            className="rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-green-500 hover:shadow-lg"
          >
            <div className="mb-4 text-4xl">{service.icon}</div>
            <h3 className="mb-2 text-base font-bold text-blue-900">{name}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        )
      })}
    </div>
  )
}
