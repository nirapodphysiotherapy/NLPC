import { Metadata } from "next"
import AboutClient from "./about-client"

export const metadata: Metadata = {
  title: "About Us | Nirapod Laser Physiotherapy Center",
  description: "Learn about our mission, vision, and expert team at Nirapod Laser Physiotherapy Center.",
}

export default function AboutPage() {
  return <AboutClient />
}
