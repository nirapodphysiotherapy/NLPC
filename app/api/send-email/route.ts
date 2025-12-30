import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    console.log("Sending email to:", body.to)

    const { data, error } = await resend.emails.send({
      from: "NSPRC <onboarding@resend.dev>", // Default to onboarding for safety, user can change if verified
      to: body.to,
      subject: body.subject,
      html: body.html,
    })

    if (error) {
      console.error("Resend error:", error)
      return Response.json({ success: false, error }, { status: 500 })
    }

    return Response.json({
      success: true,
      data,
    })
  } catch (error) {
    console.error("API Error:", error)
    return Response.json({ success: false, error: "Failed to send email" }, { status: 500 })
  }
}
