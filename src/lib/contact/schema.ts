import { z } from 'zod';

export const ContactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
  gdprConsent: z.literal(true, {
    error: 'You must accept the privacy policy',
  }),
});

export type ContactFormData = z.infer<typeof ContactSchema>;
