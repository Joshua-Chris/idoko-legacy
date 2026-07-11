import { NextResponse } from 'next/server';
import { applicationSchema } from '@/lib/validations';
import { resend, NOTIFY_EMAIL, FROM_EMAIL } from '@/lib/resend';

export async function POST(request: Request) {
  const body = await request.json();
  const result = applicationSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        error: 'Invalid submission.',
        issues: result.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const { name, email, phone, role, message } = result.data;

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFY_EMAIL,
      replyTo: email,
      subject: `New job application — ${role} — ${name}`,
      text: [
        `Name: ${name}`,
        `Role applying for: ${role}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        '',
        message,
      ]
        .filter(Boolean)
        .join('\n'),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Application email failed:', error);
    return NextResponse.json(
      {
        error:
          "We couldn't send your application. Please try again or email us directly.",
      },
      { status: 500 },
    );
  }
}
