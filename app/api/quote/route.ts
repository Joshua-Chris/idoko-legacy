// import { NextResponse } from "next/server";
// import { quoteSchema } from "@/lib/validations";
// import { resend, NOTIFY_EMAIL, FROM_EMAIL } from "@/lib/resend";

// export async function POST(request: Request) {
//   const body = await request.json();
//   const result = quoteSchema.safeParse(body);

//   if (!result.success) {
//     return NextResponse.json(
//       { error: "Invalid submission.", issues: result.error.flatten().fieldErrors },
//       { status: 400 }
//     );
//   }

//   const {
//     fullName, organization, email, phone,
//     pickupAddress, deliveryAddress, shipmentType,
//     preferredPickupDate, additionalInfo,
//   } = result.data;

//   try {
//     await resend.emails.send({
//       from: FROM_EMAIL,
//       to: NOTIFY_EMAIL,
//       replyTo: email,
//       subject: `New quote request from ${fullName} (${organization})`,
//       text: [
//         `Full name: ${fullName}`,
//         `Organization: ${organization}`,
//         `Email: ${email}`,
//         `Phone: ${phone}`,
//         `Pickup address: ${pickupAddress}`,
//         `Delivery address: ${deliveryAddress}`,
//         `Shipment type: ${shipmentType}`,
//         `Preferred pickup date: ${preferredPickupDate}`,
//         additionalInfo ? `\nAdditional info:\n${additionalInfo}` : null,
//       ]
//         .filter(Boolean)
//         .join("\n"),
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Quote form email failed:", error);
//     return NextResponse.json(
//       { error: "We couldn't submit your request. Please try again or call us directly." },
//       { status: 500 }
//     );
//   }
// }
