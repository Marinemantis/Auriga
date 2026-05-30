import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      name, email, phone,
      heard, destination, travelling, experience,
      duration, budget, contact, unforgettable, moment,
    } = data;

    const rows = [
      ["Heard about us",        heard],
      ["Destination",           destination],
      ["Travelling with",       travelling],
      ["Experience sought",     experience],
      ["Duration",              duration],
      ["Investment range",      budget],
      ["Unforgettable because", unforgettable],
      ["Special moment",        moment],
    ];

    await resend.emails.send({
      from: "Auriga Ventures <onboarding@resend.dev>",
      to: "venturesauriga@gmail.com",
      replyTo: email,
      subject: `New Journey Discovery — ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
        <body style="margin:0;padding:0;background:#f5f5f5;font-family:Georgia,serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 20px;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#080808;">

                <!-- Header -->
                <tr>
                  <td style="padding:40px 48px 32px;border-bottom:1px solid #1e1e1e;">
                    <p style="margin:0 0 4px;font-family:Georgia,serif;font-size:22px;font-weight:400;color:#F5F0E8;letter-spacing:1px;">
                      Auriga<span style="color:#C8903A;font-weight:300;">Ventures</span>
                    </p>
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:10px;letter-spacing:4px;text-transform:uppercase;color:#C8903A;">
                      New Journey Discovery
                    </p>
                  </td>
                </tr>

                <!-- Name -->
                <tr>
                  <td style="padding:32px 48px 24px;">
                    <p style="margin:0 0 6px;font-family:Georgia,serif;font-size:28px;font-weight:400;color:#F5F0E8;line-height:1.2;">${name}</p>
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#C8903A;letter-spacing:3px;text-transform:uppercase;">has submitted an enquiry</p>
                  </td>
                </tr>

                <!-- Contact details -->
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
                          <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:13px;color:#F5F0E8;">
                            <span style="color:#888;display:inline-block;width:80px;">Phone</span>${phone}
                          </p>
                          <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:#F5F0E8;">
                            <span style="color:#888;display:inline-block;width:80px;">Reach via</span>${contact}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Journey details -->
                <tr>
                  <td style="padding:0 48px 32px;">
                    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#555;">Journey Details</p>
                    ${rows.map(([label, value]) => `
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding:11px 0;border-bottom:1px solid #1a1a1a;">
                            <span style="font-family:Arial,sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#555;display:inline-block;width:180px;">${label}</span>
                            <span style="font-family:Arial,sans-serif;font-size:13px;color:#F5F0E8;">${value}</span>
                          </td>
                        </tr>
                      </table>
                    `).join("")}
                  </td>
                </tr>

                <!-- Reply CTA -->
                <tr>
                  <td style="padding:0 48px 48px;">
                    <a href="mailto:${email}?subject=Re%3A%20Your%20Auriga%20Journey"
                      style="display:inline-block;padding:14px 32px;background:#C8903A;color:#080808;font-family:Arial,sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;text-decoration:none;font-weight:600;">
                      Reply to ${name.split(" ")[0]}
                    </a>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding:24px 48px;border-top:1px solid #1a1a1a;">
                    <p style="margin:0;font-family:Arial,sans-serif;font-size:10px;color:#333;letter-spacing:1px;">
                      © 2026 Auriga Ventures · Beyond Travel. We Curate Dreams.
                    </p>
                  </td>
                </tr>

              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
