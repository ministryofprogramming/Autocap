/**
 * Privacy Policy Content
 * NOTE: This is a placeholder structure. Legal content pending from AutoCap.
 */

export interface PrivacySection {
  id: string
  title: string
  content: string[]
}

export interface PrivacyPolicyContent {
  metadata: {
    title: string
    description: string
  }
  hero: {
    title: string
    lastUpdated: string
    description: string
  }
  sections: PrivacySection[]
  contact: {
    title: string
    description: string
    email: string
  }
}

export const privacyPolicyContent: PrivacyPolicyContent = {
  metadata: {
    title: 'Privacy Policy · AutoCap Group',
    description:
      'AutoCap Group privacy policy - how we collect, use, and protect your personal data in compliance with GDPR.',
  },

  hero: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: April 2026',
    description:
      'AutoCap Group is committed to protecting your privacy and personal data. This policy explains how we collect, use, and safeguard your information in compliance with GDPR.',
  },

  sections: [
    {
      id: 'introduction',
      title: '1. Introduction',
      content: [
        'LEGAL CONTENT PENDING: This section will describe AutoCap Group Sweden AB as the data controller, our commitment to privacy, and the scope of this policy.',
        'Placeholder: AutoCap Group Sweden AB (organization number: TBD) is the data controller responsible for the processing of your personal data. We are committed to protecting your privacy and ensuring transparency in how we handle your information.',
      ],
    },
    {
      id: 'data-we-collect',
      title: '2. Data We Collect',
      content: [
        'LEGAL CONTENT PENDING: This section will detail the types of personal data we collect, including:',
        '• Contact information (name, email, phone number)',
        '• Business information (company name, workshop details for entrepreneurs)',
        '• Website usage data (cookies, analytics)',
        '• Communication records (emails, form submissions)',
        'Placeholder: We collect only the data necessary to provide our services and communicate with you effectively.',
      ],
    },
    {
      id: 'how-we-use-data',
      title: '3. How We Use Your Data',
      content: [
        'LEGAL CONTENT PENDING: This section will explain the purposes for which we process personal data:',
        '• To respond to enquiries and provide information about our services',
        '• To evaluate workshop acquisition opportunities',
        '• To communicate with investors and stakeholders',
        '• To improve our website and user experience',
        '• To comply with legal obligations',
        'Placeholder: We use your data only for legitimate business purposes and with your consent where required.',
      ],
    },
    {
      id: 'legal-basis',
      title: '4. Legal Basis for Processing',
      content: [
        'LEGAL CONTENT PENDING: This section will specify the legal basis under GDPR Article 6:',
        '• Consent: For marketing communications and optional cookies',
        '• Legitimate interests: For business communications and website analytics',
        '• Contract performance: For services you have requested',
        '• Legal obligation: For compliance with Swedish and EU law',
        'Placeholder: All data processing is conducted in accordance with GDPR requirements.',
      ],
    },
    {
      id: 'your-rights',
      title: '5. Your Rights',
      content: [
        'LEGAL CONTENT PENDING: This section will detail your rights under GDPR:',
        '• Right to access your personal data',
        '• Right to rectification of incorrect data',
        '• Right to erasure ("right to be forgotten")',
        '• Right to restrict processing',
        '• Right to data portability',
        '• Right to object to processing',
        '• Right to withdraw consent',
        'Placeholder: You can exercise these rights by contacting us at kontakt@autocapgroup.se.',
      ],
    },
    {
      id: 'cookies',
      title: '6. Cookie Policy',
      content: [
        'LEGAL CONTENT PENDING: This section will provide detailed information about our use of cookies.',
        'We use cookies to improve your experience and understand how visitors use our website. You can manage your cookie preferences through our cookie consent banner.',
        'Cookie categories:',
        '• Necessary cookies: Required for website functionality (always active)',
        '• Analytics cookies: Help us understand website usage',
        '• Marketing cookies: Used for personalized advertising',
        'Placeholder: See our cookie consent banner for detailed preferences.',
      ],
    },
    {
      id: 'data-retention',
      title: '7. Data Retention',
      content: [
        'LEGAL CONTENT PENDING: This section will specify how long we retain different types of data.',
        'Placeholder: We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. General enquiries are typically retained for [X] years, while business relationships may require longer retention periods.',
      ],
    },
    {
      id: 'data-security',
      title: '8. Data Security',
      content: [
        'LEGAL CONTENT PENDING: This section will describe our security measures.',
        'Placeholder: We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes encryption, access controls, and regular security assessments.',
      ],
    },
    {
      id: 'third-parties',
      title: '9. Third-Party Services',
      content: [
        'LEGAL CONTENT PENDING: This section will list any third-party services that process data on our behalf.',
        'Placeholder: We may share your data with trusted third-party service providers who assist us in operating our website and conducting our business, subject to confidentiality obligations and GDPR compliance.',
      ],
    },
    {
      id: 'changes',
      title: '10. Changes to This Policy',
      content: [
        'LEGAL CONTENT PENDING: This section will explain how we communicate policy updates.',
        'Placeholder: We may update this privacy policy from time to time. We will notify you of significant changes by posting a notice on our website or by email. The "Last updated" date at the top of this policy indicates when it was most recently revised.',
      ],
    },
  ],

  contact: {
    title: 'Contact Us',
    description:
      'If you have questions about this privacy policy or wish to exercise your rights, please contact us:',
    email: 'kontakt@autocapgroup.se',
  },
} as const
