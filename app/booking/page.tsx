import { Metadata } from "next"
import BookingClient from "./booking-client"

export const metadata: Metadata = {
  title: "Book Appointment | Nirapod Laser Physiotherapy Center",
  description: "Schedule your physiotherapy appointment online with our expert doctors.",
}

export default function BookingPage() {
  return <BookingClient />
}
