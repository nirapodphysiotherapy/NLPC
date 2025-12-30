import { Metadata } from "next"
import ContactClient from "./contact-client"

export const metadata: Metadata = {
  title: "Contact Us | Nirapod Laser Physiotherapy Center",
  description: "Get in touch with us for appointments, location, and inquiries.",
}

export default function ContactPage() {
  return <ContactClient />
}
