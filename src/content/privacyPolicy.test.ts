import { privacyPolicyContent } from './privacyPolicy'

describe('Privacy Policy Content', () => {
  describe('Content Structure', () => {
    it('has metadata with title and description', () => {
      expect(privacyPolicyContent.metadata).toBeDefined()
      expect(privacyPolicyContent.metadata.title).toBe('Privacy Policy · AutoCap Group')
      expect(privacyPolicyContent.metadata.description).toContain('GDPR')
    })

    it('has hero section', () => {
      expect(privacyPolicyContent.hero).toBeDefined()
      expect(privacyPolicyContent.hero.title).toBe('Privacy Policy')
      expect(privacyPolicyContent.hero.lastUpdated).toBeTruthy()
      expect(privacyPolicyContent.hero.description).toBeTruthy()
    })

    it('has sections array', () => {
      expect(privacyPolicyContent.sections).toBeDefined()
      expect(Array.isArray(privacyPolicyContent.sections)).toBe(true)
    })

    it('has contact section', () => {
      expect(privacyPolicyContent.contact).toBeDefined()
      expect(privacyPolicyContent.contact.email).toBeTruthy()
    })
  })

  describe('Required Sections', () => {
    it('has 10 policy sections', () => {
      expect(privacyPolicyContent.sections).toHaveLength(10)
    })

    it('has Introduction section', () => {
      const intro = privacyPolicyContent.sections.find((s) => s.id === 'introduction')
      expect(intro).toBeDefined()
      expect(intro?.title).toContain('Introduction')
    })

    it('has Data We Collect section', () => {
      const data = privacyPolicyContent.sections.find((s) => s.id === 'data-we-collect')
      expect(data).toBeDefined()
      expect(data?.title).toContain('Data We Collect')
    })

    it('has How We Use Data section', () => {
      const usage = privacyPolicyContent.sections.find((s) => s.id === 'how-we-use-data')
      expect(usage).toBeDefined()
      expect(usage?.title).toContain('How We Use Your Data')
    })

    it('has Legal Basis section', () => {
      const legal = privacyPolicyContent.sections.find((s) => s.id === 'legal-basis')
      expect(legal).toBeDefined()
      expect(legal?.title).toContain('Legal Basis')
    })

    it('has Your Rights section', () => {
      const rights = privacyPolicyContent.sections.find((s) => s.id === 'your-rights')
      expect(rights).toBeDefined()
      expect(rights?.title).toContain('Your Rights')
      expect(rights?.content.join(' ')).toContain('right to be forgotten')
    })

    it('has Cookie Policy section', () => {
      const cookies = privacyPolicyContent.sections.find((s) => s.id === 'cookies')
      expect(cookies).toBeDefined()
      expect(cookies?.title).toContain('Cookie')
    })

    it('has Data Retention section', () => {
      const retention = privacyPolicyContent.sections.find((s) => s.id === 'data-retention')
      expect(retention).toBeDefined()
      expect(retention?.title).toContain('Data Retention')
    })

    it('has Data Security section', () => {
      const security = privacyPolicyContent.sections.find((s) => s.id === 'data-security')
      expect(security).toBeDefined()
      expect(security?.title).toContain('Security')
    })

    it('has Third-Party Services section', () => {
      const thirdParty = privacyPolicyContent.sections.find((s) => s.id === 'third-parties')
      expect(thirdParty).toBeDefined()
      expect(thirdParty?.title).toContain('Third-Party')
    })

    it('has Changes to Policy section', () => {
      const changes = privacyPolicyContent.sections.find((s) => s.id === 'changes')
      expect(changes).toBeDefined()
      expect(changes?.title).toContain('Changes')
    })
  })

  describe('Section Structure', () => {
    it('all sections have required fields', () => {
      privacyPolicyContent.sections.forEach((section) => {
        expect(section.id).toBeTruthy()
        expect(section.title).toBeTruthy()
        expect(Array.isArray(section.content)).toBe(true)
        expect(section.content.length).toBeGreaterThan(0)
      })
    })

    it('all sections are numbered', () => {
      privacyPolicyContent.sections.forEach((section, index) => {
        expect(section.title).toMatch(new RegExp(`^${index + 1}\\.`))
      })
    })

    it('sections have unique IDs', () => {
      const ids = privacyPolicyContent.sections.map((s) => s.id)
      const uniqueIds = new Set(ids)
      expect(uniqueIds.size).toBe(ids.length)
    })
  })

  describe('GDPR Compliance', () => {
    it('mentions GDPR in description', () => {
      expect(privacyPolicyContent.hero.description).toContain('GDPR')
    })

    it('includes all required GDPR rights', () => {
      const rightsSection = privacyPolicyContent.sections.find((s) => s.id === 'your-rights')
      const rightsText = rightsSection?.content.join(' ')

      expect(rightsText).toContain('access')
      expect(rightsText).toContain('rectification')
      expect(rightsText).toContain('erasure')
      expect(rightsText).toContain('restrict')
      expect(rightsText).toContain('portability')
      expect(rightsText).toContain('object')
      expect(rightsText).toContain('withdraw consent')
    })

    it('specifies legal basis for processing', () => {
      const legalBasis = privacyPolicyContent.sections.find((s) => s.id === 'legal-basis')
      const legalText = legalBasis?.content.join(' ')

      expect(legalText).toContain('GDPR Article 6')
      expect(legalText).toContain('Consent')
      expect(legalText).toContain('Legitimate interests')
    })
  })

  describe('Placeholder Notices', () => {
    it('all sections have placeholder notices', () => {
      privacyPolicyContent.sections.forEach((section) => {
        const hasPlaceholder = section.content.some(
          (paragraph) =>
            paragraph.includes('LEGAL CONTENT PENDING') || paragraph.includes('Placeholder')
        )
        expect(hasPlaceholder).toBe(true)
      })
    })

    it('placeholder notices are clear', () => {
      const allContent = privacyPolicyContent.sections.flatMap((s) => s.content).join(' ')
      expect(allContent).toContain('LEGAL CONTENT PENDING')
    })
  })

  describe('Contact Information', () => {
    it('has contact title', () => {
      expect(privacyPolicyContent.contact.title).toBe('Contact Us')
    })

    it('has contact description', () => {
      expect(privacyPolicyContent.contact.description).toContain('privacy policy')
    })

    it('email is kontakt@autocapgroup.se', () => {
      expect(privacyPolicyContent.contact.email).toBe('kontakt@autocapgroup.se')
    })
  })

  describe('Cookie Policy Section', () => {
    it('cookie section mentions cookie categories', () => {
      const cookieSection = privacyPolicyContent.sections.find((s) => s.id === 'cookies')
      const cookieText = cookieSection?.content.join(' ')

      expect(cookieText).toContain('Necessary')
      expect(cookieText).toContain('Analytics')
      expect(cookieText).toContain('Marketing')
    })

    it('cookie section references consent banner', () => {
      const cookieSection = privacyPolicyContent.sections.find((s) => s.id === 'cookies')
      const cookieText = cookieSection?.content.join(' ')

      expect(cookieText).toContain('cookie consent banner')
    })
  })

  describe('Last Updated', () => {
    it('has last updated date', () => {
      expect(privacyPolicyContent.hero.lastUpdated).toBeTruthy()
      expect(privacyPolicyContent.hero.lastUpdated).toContain('2026')
    })
  })
})
