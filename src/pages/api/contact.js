import { sendMail } from "../../lib/email"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  const { name, email, subject, message, company, phone } = req.body

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "Required fields missing" })
  }

  try {
    /* ===============================
       1️⃣ EMAIL TO YOU (PORTFOLIO OWNER)
    =============================== */

   await sendMail({
  to: process.env.SMTP_USER,
  subject: `New Portfolio Contact – ${subject}`,
  html: `
<div style="background:#f1f5f9;padding:40px 20px;font-family:Inter,Segoe UI,Arial,sans-serif">
  <div style="
    max-width:640px;
    margin:auto;
    background:#ffffff;
    border-radius:12px;
    overflow:hidden;
    box-shadow:0 10px 30px rgba(0,0,0,0.08);
  ">

    <!-- Header -->
    <div style="padding:24px 28px;border-bottom:1px solid #e5e7eb">
      <h2 style="margin:0;font-size:20px;color:#0f172a">
        New Contact Message
      </h2>
      <p style="margin-top:6px;font-size:14px;color:#64748b">
        Submitted via portfolio contact form
      </p>
    </div>

    <!-- Content -->
    <div style="padding:28px;color:#0f172a;font-size:15px;line-height:1.6">

      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      ${company ? `<p><b>Company:</b> ${company}</p>` : ""}
      ${phone ? `<p><b>Phone:</b> ${phone}</p>` : ""}
      <p><b>Subject:</b> ${subject}</p>

      <div style="
        margin-top:20px;
        padding:16px;
        background:#f8fafc;
        border-left:4px solid #3b82f6;
        border-radius:6px;
      ">
        ${message}
      </div>

    </div>

    <!-- Footer -->
    <div style="
      padding:16px 28px;
      background:#f8fafc;
      border-top:1px solid #e5e7eb;
      font-size:13px;
      color:#64748b;
      text-align:center;
    ">
      Adarsh Tiwari · Full Stack Developer
    </div>

  </div>
</div>
`,
})

    /* ===============================
       2️⃣ AUTO-REPLY TO SENDER
    =============================== */

await sendMail({
  to: email,
  subject: "Thanks for reaching out – Adarsh Tiwari",
  html: `
<div style="background:#f1f5f9;padding:40px 20px;font-family:Inter,Segoe UI,Arial,sans-serif">
  <div style="
    max-width:600px;
    margin:auto;
    background:#ffffff;
    border-radius:12px;
    box-shadow:0 10px 30px rgba(0,0,0,0.08);
  ">

    <div style="padding:28px;color:#0f172a;font-size:15px;line-height:1.7">

      <p>Hi ${name},</p>

      <p>
        Thank you for reaching out through my portfolio.
        I’ve received your message regarding
        <b>${subject}</b>.
      </p>

      <p>
        I’ll review it and respond within
        <b>24–48 hours</b>.
      </p>

      <p style="margin-top:24px">
        Best regards,<br/>
        <b>Adarsh Tiwari</b><br/>
        Full Stack Developer
      </p>

    </div>

    <div style="
      padding:14px;
      text-align:center;
      font-size:13px;
      color:#64748b;
      border-top:1px solid #e5e7eb;
      background:#f8fafc;
    ">
      This is an automated response. No reply needed.
    </div>

  </div>
</div>
`,
})

    return res.status(200).json({ message: "Message sent successfully" })
  } catch (error) {
    console.error("Contact API error:", error)
    return res.status(500).json({ message: "Failed to send message" })
  }
}
