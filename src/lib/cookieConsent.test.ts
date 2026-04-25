import {
  getConsentData,
  saveConsentData,
  clearConsentData,
  hasValidConsent,
  getDefaultPreferences,
  getAcceptedAllPreferences,
  type ConsentData,
  type CookiePreferences,
} from './cookieConsent'

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    },
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})

describe('Cookie Consent - localStorage Helpers', () => {
  beforeEach(() => {
    localStorageMock.clear()
    jest.clearAllMocks()
  })

  describe('getConsentData', () => {
    it('returns null when no consent data exists', () => {
      expect(getConsentData()).toBeNull()
    })

    it('returns valid consent data', () => {
      const preferences: CookiePreferences = {
        necessary: true,
        analytics: true,
        marketing: false,
      }
      saveConsentData('accepted', preferences)

      const data = getConsentData()
      expect(data).not.toBeNull()
      expect(data?.state).toBe('accepted')
      expect(data?.preferences).toEqual(preferences)
    })

    it('returns null when consent has expired', () => {
      const expiredData: ConsentData = {
        state: 'accepted',
        preferences: getAcceptedAllPreferences(),
        timestamp: Date.now() - 400 * 24 * 60 * 60 * 1000, // 400 days ago
        expiresAt: Date.now() - 35 * 24 * 60 * 60 * 1000, // Expired 35 days ago
      }
      localStorage.setItem('autocap_cookie_consent', JSON.stringify(expiredData))

      expect(getConsentData()).toBeNull()
    })

    it('removes expired consent from localStorage', () => {
      const expiredData: ConsentData = {
        state: 'accepted',
        preferences: getAcceptedAllPreferences(),
        timestamp: Date.now() - 400 * 24 * 60 * 60 * 1000,
        expiresAt: Date.now() - 1,
      }
      localStorage.setItem('autocap_cookie_consent', JSON.stringify(expiredData))

      getConsentData()
      expect(localStorage.getItem('autocap_cookie_consent')).toBeNull()
    })

    it('handles corrupted localStorage data gracefully', () => {
      localStorage.setItem('autocap_cookie_consent', 'invalid json')
      expect(getConsentData()).toBeNull()
    })
  })

  describe('saveConsentData', () => {
    it('saves consent data to localStorage', () => {
      const preferences: CookiePreferences = {
        necessary: true,
        analytics: true,
        marketing: true,
      }
      saveConsentData('accepted', preferences)

      const stored = localStorage.getItem('autocap_cookie_consent')
      expect(stored).not.toBeNull()

      const data: ConsentData = JSON.parse(stored!)
      expect(data.state).toBe('accepted')
      expect(data.preferences).toEqual(preferences)
    })

    it('sets expiry to 365 days from now', () => {
      const preferences = getDefaultPreferences()
      const beforeSave = Date.now()
      saveConsentData('custom', preferences)
      const afterSave = Date.now()

      const data = getConsentData()
      expect(data).not.toBeNull()

      const expectedExpiry = 365 * 24 * 60 * 60 * 1000
      const actualExpiry = data!.expiresAt - data!.timestamp

      // Allow 1 second margin for test execution time
      expect(actualExpiry).toBeGreaterThanOrEqual(expectedExpiry - 1000)
      expect(actualExpiry).toBeLessThanOrEqual(expectedExpiry + 1000)

      expect(data!.timestamp).toBeGreaterThanOrEqual(beforeSave)
      expect(data!.timestamp).toBeLessThanOrEqual(afterSave)
    })

    it('includes timestamp', () => {
      const preferences = getDefaultPreferences()
      const before = Date.now()
      saveConsentData('accepted', preferences)
      const after = Date.now()

      const data = getConsentData()
      expect(data?.timestamp).toBeGreaterThanOrEqual(before)
      expect(data?.timestamp).toBeLessThanOrEqual(after)
    })

    it('overwrites existing consent data', () => {
      const preferences1 = getDefaultPreferences()
      saveConsentData('rejected', preferences1)

      const preferences2 = getAcceptedAllPreferences()
      saveConsentData('accepted', preferences2)

      const data = getConsentData()
      expect(data?.state).toBe('accepted')
      expect(data?.preferences).toEqual(preferences2)
    })
  })

  describe('clearConsentData', () => {
    it('removes consent data from localStorage', () => {
      saveConsentData('accepted', getAcceptedAllPreferences())
      expect(getConsentData()).not.toBeNull()

      clearConsentData()
      expect(getConsentData()).toBeNull()
    })

    it('does nothing if no consent data exists', () => {
      expect(getConsentData()).toBeNull()
      clearConsentData()
      expect(getConsentData()).toBeNull()
    })
  })

  describe('hasValidConsent', () => {
    it('returns false when no consent exists', () => {
      expect(hasValidConsent()).toBe(false)
    })

    it('returns true when valid consent exists', () => {
      saveConsentData('accepted', getAcceptedAllPreferences())
      expect(hasValidConsent()).toBe(true)
    })

    it('returns false when consent has expired', () => {
      const expiredData: ConsentData = {
        state: 'accepted',
        preferences: getAcceptedAllPreferences(),
        timestamp: Date.now() - 400 * 24 * 60 * 60 * 1000,
        expiresAt: Date.now() - 1,
      }
      localStorage.setItem('autocap_cookie_consent', JSON.stringify(expiredData))

      expect(hasValidConsent()).toBe(false)
    })
  })

  describe('getDefaultPreferences', () => {
    it('returns necessary cookies enabled, others disabled', () => {
      const prefs = getDefaultPreferences()
      expect(prefs.necessary).toBe(true)
      expect(prefs.analytics).toBe(false)
      expect(prefs.marketing).toBe(false)
    })

    it('returns a new object each time', () => {
      const prefs1 = getDefaultPreferences()
      const prefs2 = getDefaultPreferences()
      expect(prefs1).not.toBe(prefs2)
      expect(prefs1).toEqual(prefs2)
    })
  })

  describe('getAcceptedAllPreferences', () => {
    it('returns all cookies enabled', () => {
      const prefs = getAcceptedAllPreferences()
      expect(prefs.necessary).toBe(true)
      expect(prefs.analytics).toBe(true)
      expect(prefs.marketing).toBe(true)
    })

    it('returns a new object each time', () => {
      const prefs1 = getAcceptedAllPreferences()
      const prefs2 = getAcceptedAllPreferences()
      expect(prefs1).not.toBe(prefs2)
      expect(prefs1).toEqual(prefs2)
    })
  })

  describe('ConsentState Types', () => {
    it('accepts all valid consent states', () => {
      const states: Array<'pending' | 'accepted' | 'rejected' | 'custom'> = [
        'pending',
        'accepted',
        'rejected',
        'custom',
      ]

      states.forEach((state) => {
        saveConsentData(state, getDefaultPreferences())
        const data = getConsentData()
        expect(data?.state).toBe(state)
      })
    })
  })

  describe('CookiePreferences Structure', () => {
    it('saves and retrieves all preference fields', () => {
      const preferences: CookiePreferences = {
        necessary: true,
        analytics: true,
        marketing: false,
      }

      saveConsentData('custom', preferences)
      const data = getConsentData()

      expect(data?.preferences.necessary).toBe(true)
      expect(data?.preferences.analytics).toBe(true)
      expect(data?.preferences.marketing).toBe(false)
    })
  })

  describe('Edge Cases', () => {
    it('handles multiple saves in quick succession', () => {
      saveConsentData('pending', getDefaultPreferences())
      saveConsentData('custom', { necessary: true, analytics: true, marketing: false })
      saveConsentData('accepted', getAcceptedAllPreferences())

      const data = getConsentData()
      expect(data?.state).toBe('accepted')
      expect(data?.preferences).toEqual(getAcceptedAllPreferences())
    })

    it('handles clear and save in quick succession', () => {
      saveConsentData('accepted', getAcceptedAllPreferences())
      clearConsentData()
      expect(getConsentData()).toBeNull()

      saveConsentData('rejected', getDefaultPreferences())
      expect(getConsentData()).not.toBeNull()
    })
  })
})
