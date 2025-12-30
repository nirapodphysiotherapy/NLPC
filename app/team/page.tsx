import { Metadata } from "next"
import TeamClient from "./team-client"

export const metadata: Metadata = {
  title: "Our Team | Nirapod Laser Physiotherapy Center",
  description: "Meet our experienced physiotherapists and consultants dedicated to your care.",
}

export default function TeamPage() {
  return <TeamClient />
}
