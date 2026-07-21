import { NextResponse } from "next/server";
import { Resend } from "resend";
import { pushToGHL } from "@/lib/ghl";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, phone, subject, message } = await request.json();

    const { error: emailError } = await resend.emails.send({
      from: "Auriga Ventures <onboarding@resend.dev>",
      to: "venturesauriga@gmail.com",
      reply_to: email,
      subject: `Contact: ${subject || "New Message"} — ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8" /></head>
        <body style="margin:0;padding:0;background:#f5f5f5;font-family:Georgia,serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 20px;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#080808;">

                <tr>
                  <td style="padding:40px 48px 32px;border-bottom:1px solid #1e1e1e;">
                    <p style="margin:0 0 4px;font-family:Georgia,serif;font-size:22px;color:#F5F0E8;">Auriga<span style="color:#C8903A;font-weight:300;">Ventures</span></p>
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:10px;letter-spacing:4px;text-transform:uppercase;color:#C8903A;">New Contact Message</p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:32px 48px 24px;">
                    <p style="margin:0 0 6px;font-family:Georgia,serif;font-size:28px;color:#F5F0E8;">${name}</p>
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#C8903A;letter-spacing:3px;text-transform:uppercase;">sent you a message</p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:0 48px 24px;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background:#111;border:1px solid #1e1e1e;">
                      <tr>
                        <td style="padding:20px 24px;">
                          <p style="margin:0 0 10px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#C8903A;">Contact Details</p>
                          <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:13px;color:#F5F0E8;">
                            <span style="color:#888;display:inline-block;width:80px;">Email</span>
                            <a href="mailto:${email}" style="color:#C8903A;text-decoration:none;">${email}</a>
                          </p>
                          ${phone ? `<p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:13px;color:#F5F0E8;"><span style="color:#888;display:inline-block;width:80px;">Phone</span>${phone}</p>` : ""}
                          ${subject ? `<p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:#F5F0E8;"><span style="color:#888;display:inline-block;width:80px;">Subject</span>${subject}</p>` : ""}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding:0 48px 32px;">
                    <p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#555;">Message</p>
                    <p style="margin:0;font-family:Georgia,serif;font-size:15px;color:#F5F0E8;line-height:1.8;font-style:italic;">"${message}"</p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:0 48px 48px;">
                    <a href="mailto:${email}?subject=Re%3A%20${encodeURIComponent(subject || "Your Message")}"
                      style="display:inline-block;padding:14px 32px;background:#C8903A;color:#080808;font-family:Arial,sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;text-decoration:none;font-weight:600;">
                      Reply to ${name.split(" ")[0]}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="padding:24px 48px;border-top:1px solid #1a1a1a;">
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:10px;color:#333;">© 2026 Auriga Ventures · Beyond Travel. We Curate Dreams.</p>
                  </td>
                </tr>

              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
    });
    if (emailError) throw new Error(`Resend error: ${JSON.stringify(emailError)}`);

    await pushToGHL({
      name:             name,
      email:            email,
      phone:            phone,
      opportunityTitle: `Contact — ${name}`,
      notes:            `Subject: ${subject || "General"} | Message: ${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact page email error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
