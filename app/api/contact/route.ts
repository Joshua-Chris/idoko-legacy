import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ message: 'Coming soon' }, { status: 501 });
}
// import { NextResponse } from "next/server";
// import { contactSchema } from "@/lib/validations";
// import { resend, NOTIFY_EMAIL, FROM_EMAIL } from "@/lib/resend";

// export async function POST(request: Request) {
//   const body = await request.json();
//   const result = contactSchema.safeParse(body);

//   if (!result.success) {
//     return NextResponse.json(
//       { error: "Invalid submission.", issues: result.error.flatten().fieldErrors },
//       { status: 400 }
//     );
//   }

//   const { name, organization, email, phone, message } = result.data;

//   try {
//     await resend.emails.send({
//       from: FROM_EMAIL,
//       to: NOTIFY_EMAIL,
//       replyTo: email,
//       subject: `New contact form message from ${name}`,
//       text: [
//         `Name: ${name}`,
//         organization ? `Organization: ${organization}` : null,
//         `Email: ${email}`,
//         phone ? `Phone: ${phone}` : null,
//         "",
//         message,
//       ]
//         .filter(Boolean)
//         .join("\n"),
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Contact form email failed:", error);
//     return NextResponse.json(
//       { error: "We couldn't send your message. Please try again or call us directly." },
//       { status: 500 }
//     );
//   }
// }
