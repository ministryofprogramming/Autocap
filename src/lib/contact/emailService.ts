import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactEmailParams {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail({ name, email, message }: ContactEmailParams) {
  const to = process.env.CONTACT_EMAIL_TO ?? 'kontakt@autocapgroup.se';

  await resend.emails.send({
    from: 'AutoCap Contact Form <onboarding@resend.dev>',
    to,
    subject: `New enquiry from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  });
}

interface EntrepreneurEmailParams {
  name: string;
  workshopName: string;
  cityRegion: string;
  revenue: string;
  email: string;
  phone: string;
  message?: string;
}

export async function sendEntrepreneurEmail(params: EntrepreneurEmailParams) {
  const to = process.env.ENTREPRENEUR_EMAIL_TO ?? 'amar.smajlovic@ministryofprogramming.com';
  const { name, workshopName, cityRegion, revenue, email, phone, message } = params;

  await resend.emails.send({
    from: 'AutoCap Contact Form <onboarding@resend.dev>',
    to,
    subject: `[ACQUISITION ENQUIRY] ${name} — ${workshopName} (${cityRegion})`,
    html: `
      <h2>[ACQUISITION ENQUIRY] New Workshop Owner Enquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Workshop:</strong> ${workshopName}</p>
      <p><strong>City / Region:</strong> ${cityRegion}</p>
      <p><strong>Annual Revenue:</strong> ${revenue}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      ${message ? `<p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>` : ''}
    `,
  });
}
