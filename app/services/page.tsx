import { Metadata } from "next"
import ServicesClient from "./services-client"

export const metadata: Metadata = {
  title: "Services | Nirapod Laser Physiotherapy Center",
  description: "Comprehensive physiotherapy services including Laser Therapy, Orthopedic, and Neurological rehabilitation.",
}

export default function ServicesPage() {
  return <ServicesClient />
}
