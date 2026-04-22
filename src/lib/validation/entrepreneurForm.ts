import { z } from 'zod'

/**
 * Entrepreneur Contact Form Validation Schema
 * Used for workshop owner enquiries
 */

export const entrepreneurFormSchema = z.object({
  name: z.string().min(1, 'Name is required').min(2, 'Name must be at least 2 characters'),

  workshopName: z
    .string()
    .min(1, 'Workshop name is required')
    .min(2, 'Workshop name must be at least 2 characters'),

  cityRegion: z
    .string()
    .min(1, 'City/region is required')
    .min(2, 'City/region must be at least 2 characters'),

  revenue: z.enum(['<5 MSEK', '5-15 MSEK', '15-50 MSEK', '>50 MSEK'], {
    message: 'Please select your approximate annual revenue',
  }),

  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),

  phone: z
    .string()
    .min(1, 'Phone number is required')
    .min(7, 'Please enter a valid phone number')
    .regex(
      /^[\d\s\-+()]+$/,
      'Phone number can only contain numbers, spaces, dashes, and parentheses',
    ),

  message: z.string().optional(),

  gdprConsent: z
    .boolean()
    .refine((val) => val === true, {
      message: 'You must accept the privacy policy to continue',
    }),
})

export type EntrepreneurFormData = z.infer<typeof entrepreneurFormSchema>
