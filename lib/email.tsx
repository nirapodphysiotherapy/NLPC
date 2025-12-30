export const sendEmail = async (formData: {
  name: string
  email: string
  phone: string
  service: string
  doctor: string
  message?: string
}) => {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "Nirapod <noreply@nirapodlaser.com>",
        to: "nirapodphysiotherapy508@gmail.com",
        subject: "New Appointment Request from " + formData.name,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h2 style="color: #003087;">New Booking Request</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Service:</strong> ${formData.service}</p>
            <p><strong>Doctor:</strong> ${formData.doctor}</p>
            <p><strong>Message:</strong> ${formData.message || "N/A"}</p>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 12px;">This email was sent from Nirapod Laser Physiotherapy Center website.</p>
          </div>
        `,
      }),
    })

    const result = await response.json()
    return result.success
  } catch (error) {
    console.error("Email send error:", error)
    return false
  }
}
