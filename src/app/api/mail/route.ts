import { NextRequest, NextResponse } from "next/server";
import { createTransport } from "nodemailer";

type Feedback = {
  name: string;
  email: string;
  message: string;
};

export async function POST(req: NextRequest) {
  try {
    const { name, email, message }: Feedback = await req.json();

    const transporter = createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      secure: true,
    });

    // Set up the email options
    const mailOptions = {
      from: process.env.EMAIL,
      to: "soumiksilco@gmail.com",
      subject: "Feedback on Portfolio",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a success response
    return NextResponse.json({ error: false, message: "Feedback sent!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: true, message: "Failed to send feedback." });
  }
}
