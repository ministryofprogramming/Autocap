import { ContactSchema } from './schema';

const validPayload = {
  name: 'Anna Lindqvist',
  email: 'anna@example.com',
  message: 'Hello, I would like more information.',
  gdprConsent: true,
};

describe('ContactSchema', () => {
  it('accepts a valid payload', () => {
    const result = ContactSchema.safeParse(validPayload);
    expect(result.success).toBe(true);
  });

  it('rejects when gdprConsent is false', () => {
    const result = ContactSchema.safeParse({ ...validPayload, gdprConsent: false });
    expect(result.success).toBe(false);
  });

  it('rejects when gdprConsent is missing', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { gdprConsent, ...rest } = validPayload;
    const result = ContactSchema.safeParse(rest);
    expect(result.success).toBe(false);
  });

  it('rejects an invalid email', () => {
    const result = ContactSchema.safeParse({ ...validPayload, email: 'not-an-email' });
    expect(result.success).toBe(false);
    if (!result.success) {
      const emailIssue = result.error.issues.find(i => i.path[0] === 'email');
      expect(emailIssue).toBeDefined();
    }
  });

  it('rejects an empty name', () => {
    const result = ContactSchema.safeParse({ ...validPayload, name: '' });
    expect(result.success).toBe(false);
  });

  it('rejects an empty message', () => {
    const result = ContactSchema.safeParse({ ...validPayload, message: '' });
    expect(result.success).toBe(false);
  });
});
