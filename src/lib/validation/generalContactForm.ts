import { z } from 'zod'

export const generalContactFormSchema = z.object({
  name: z
    .string()
    .min(1, 'This field is required')
    .max(100, 'Name must be 100 characters or less'),
  email: z.string().min(1, 'This field is required').email('Please enter a valid email address'),
  subject: z
    .string()
    .min(1, 'This field is required')
    .max(200, 'Subject must be 200 characters or less'),
  message: z
    .string()
    .min(1, 'This field is required')
    .max(2000, 'Message must be 2000 characters or less'),
  gdprConsent: z
    .boolean()
    .refine((val) => val === true, 'You must agree to the privacy policy'),
})

export type GeneralContactFormData = z.infer<typeof generalContactFormSchema>
