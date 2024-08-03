import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const resend = new Resend("re_cXKNbxuQ_LbjDzhdd32ThuJSXjHCqzxTr");
  const recipient = process.env.PROFESSIONAL_EMAIL_ADDRESS || "";
  const sender = process.env.RESEND_API_DOMAIN || "";

  try {
    const data = await request.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: `${email} <noreply@${sender}>`,
      to: recipient,
      subject: `Message from ${name}`,
      text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON input" }, { status: 400 });
  }
}
