import { NextResponse } from "next/server";
import { Resend } from "resend";
import { pushToGHL } from "@/lib/ghl";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const {
    name, email, phone, country,
    destination, departureDate, returnDate, departureCity,
    adults, children, infants, groupType, groupTypeOther,
    hotelType, roomType, rooms, accommodationNotes,
    transport, transportNotes,
    comments,
  } = await request.json();

  const travellingAs = groupType === "Other (mention in other information)" && groupTypeOther
    ? `Other — ${groupTypeOther}`
    : groupType || "Not specified";

  const row = (label: string, value: string) =>
    `<p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:13px;color:#F5F0E8;"><span style="color:#888;display:inline-block;width:160px;">${label}</span>${value}</p>`;

  const section = (title: string, rows: string) => `
    <tr><td style="padding:16px 48px 8px;">
      <p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:#C8903A;">${title}</p>
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#111;border:1px solid #1e1e1e;">
        <tr><td style="padding:20px 24px;">${rows}</td></tr>
      </table>
    </td></tr>`;

  try {
    await resend.emails.send({
      from: "Auriga Ventures <onboarding@resend.dev>",
      to:   "venturesauriga@gmail.com",
      subject: `Journey Request — ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8" /></head>
        <body style="margin:0;padding:0;background:#f5f5f5;font-family:Georgia,serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 20px;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#080808;">

                <tr><td style="padding:40px 48px 32px;border-bottom:1px solid #1e1e1e;">
                  <p style="margin:0 0 4px;font-family:Georgia,serif;font-size:22px;color:#F5F0E8;">Auriga<span style="color:#C8903A;font-weight:300;">Ventures</span></p>
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:10px;letter-spacing:4px;text-transform:uppercase;color:#C8903A;">Journey Request</p>
                </td></tr>

                <tr><td style="padding:32px 48px 8px;">
                  <p style="margin:0 0 4px;font-family:Georgia,serif;font-size:28px;color:#F5F0E8;">${name}</p>
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#C8903A;letter-spacing:3px;text-transform:uppercase;">has submitted a journey request</p>
                </td></tr>

                ${section("Contact", `
                  ${row("Email", `<a href="mailto:${email}" style="color:#C8903A;text-decoration:none;">${email}</a>`)}
                  ${row("Phone", phone)}
                  ${row("Country", country || "Not specified")}
                `)}

                ${section("Journey Details", `
                  ${row("Destination", destination)}
                  ${row("Departure Date", departureDate)}
                  ${row("Return Date", returnDate)}
                  ${row("Departure City", departureCity || "Not specified")}
                `)}

                ${section("Group", `
                  ${row("Travelling as", travellingAs)}
                  ${row("Adults", String(adults))}
                  ${row("Children (2–11 yrs)", String(children))}
                  ${row("Infants (0–1 yr)", String(infants))}
                `)}

                ${section("Accommodation", `
                  ${row("Hotel type", hotelType)}
                  ${row("Room type", roomType)}
                  ${row("No. of rooms", String(rooms))}
                  ${accommodationNotes ? row("Notes", accommodationNotes) : ""}
                `)}

                ${section("Transport", `
                  ${row("Preference", transport)}
                  ${transportNotes ? row("Notes", transportNotes) : ""}
                `)}

                ${comments ? section("Additional Notes", `
                  <p style="margin:0;font-family:Georgia,serif;font-size:14px;color:#F5F0E8;line-height:1.7;font-style:italic;">"${comments}"</p>
                `) : ""}

                <tr><td style="padding:24px 48px 32px;">
                  <a href="mailto:${email}?subject=Re%3A%20Your%20Auriga%20Journey%20Request"
                    style="display:inline-block;padding:14px 32px;background:#C8903A;color:#080808;font-family:Arial,sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;text-decoration:none;font-weight:600;">
                    Reply to ${name.split(" ")[0]}
                  </a>
                </td></tr>

                <tr><td style="padding:24px 48px;border-top:1px solid #1a1a1a;">
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:10px;color:#333;">© 2026 Auriga Ventures · Beyond Travel. We Curate Dreams.</p>
                </td></tr>

              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
    });
  } catch (emailErr) {
    console.error("[Email] send failed:", emailErr);
  }

  await pushToGHL({
    name,
    email,
    phone,
    opportunityTitle: `Journey Request — ${name}`,
    notes: [
      `Destination: ${destination}`,
      `Travel: ${departureDate} → ${returnDate}`,
      `From: ${departureCity || "Not specified"}`,
      `Group: ${travellingAs} | Adults: ${adults} | Children: ${children} | Infants: ${infants}`,
      `Hotel: ${hotelType} | Room: ${roomType} | Rooms: ${rooms}`,
      `Transport: ${transport}`,
      accommodationNotes ? `Accommodation notes: ${accommodationNotes}` : "",
      transportNotes     ? `Transport notes: ${transportNotes}`         : "",
      comments           ? `Comments: ${comments}`                      : "",
    ].filter(Boolean).join(" | "),
  });

  return NextResponse.json({ success: true });
}
