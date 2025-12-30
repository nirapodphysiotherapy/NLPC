"use client"

import Link from "next/link"
import { CLINIC } from "@/data/clinic"
import { translations, type Language } from "@/data/i18n"
import { FaFacebook, FaWhatsapp } from "react-icons/fa"

interface FooterProps {
  language?: Language
}

export function Footer({ language = "en" }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-blue-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-lg font-bold">{CLINIC.name}</h3>
            <p className="text-sm text-gray-300">{CLINIC.address}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold">{translations[language].quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors">
                  {translations[language].home}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-300 hover:text-white transition-colors">
                  {translations[language].services}
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-gray-300 hover:text-white transition-colors">
                  {translations[language].team}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                  {translations[language].contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold">{translations[language].contact}</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href={`tel:${CLINIC.phone}`} className="hover:text-white transition-colors">
                  {CLINIC.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CLINIC.email}`} className="hover:text-white transition-colors">
                  {CLINIC.email}
                </a>
              </li>
              <li>{CLINIC.hours}</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-semibold">{translations[language].followUs}</h4>
            <div className="flex gap-4">
              <a
                href={CLINIC.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <span className="text-xl">
                  <FaFacebook className="h-6 w-6" />
                </span>
              </a>
              <a
                href={CLINIC.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <span className="text-xl">
                  <FaWhatsapp className="h-6 w-6" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-300">
          <p>
            &copy; {currentYear} {CLINIC.name} | {translations[language].allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  )
}
