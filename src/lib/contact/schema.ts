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

export const AnnualRevenue = z.enum(['<5 MSEK', '5-15 MSEK', '15-50 MSEK', '>50 MSEK'], {
  error: 'Invalid revenue range',
});

export const EntrepreneurSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  workshopName: z.string().min(1, 'Workshop name is required'),
  cityRegion: z.string().min(1, 'City/region is required'),
  revenue: AnnualRevenue,
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone is required'),
  message: z.string().optional(),
  gdprConsent: z.literal(true, { error: 'You must accept the privacy policy' }),
});

export type EntrepreneurFormData = z.infer<typeof EntrepreneurSchema>;

export const EnquiryType = z.enum(['Investment', 'Partnership', 'Media', 'Other'], {
  error: 'Invalid enquiry type',
});

export const InvestorSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  organisation: z.string().min(1, 'Organisation is required'),
  role: z.string().min(1, 'Role is required'),
  enquiryType: EnquiryType,
  email: z.string().email('Invalid email address'),
  message: z.string().optional(),
  gdprConsent: z.literal(true, { error: 'You must accept the privacy policy' }),
});

export type InvestorFormData = z.infer<typeof InvestorSchema>;
