/**
 * Cookie Consent - localStorage Helpers
 * GDPR-compliant cookie consent management
 */

export type ConsentState = 'pending' | 'accepted' | 'rejected' | 'custom'

export interface CookiePreferences {
  necessary: boolean // Always true, cannot be disabled
  analytics: boolean
  marketing: boolean
}

export interface ConsentData {
  state: ConsentState
  preferences: CookiePreferences
  timestamp: number // Unix timestamp
  expiresAt: number // Unix timestamp
}

const STORAGE_KEY = 'autocap_cookie_consent'
const CONSENT_EXPIRY_DAYS = 365

/**
 * Get cookie consent data from localStorage
 * Returns null if no consent found or if consent has expired
 */
export function getConsentData(): ConsentData | null {
  if (typeof window === 'undefined') {
    return null // SSR safety
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      return null
    }

    const data: ConsentData = JSON.parse(stored)
    const now = Date.now()

    // Check if consent has expired
    if (data.expiresAt < now) {
      localStorage.removeItem(STORAGE_KEY)
      return null
    }

    return data
  } catch (error) {
    console.error('Failed to read cookie consent data:', error)
    return null
  }
}

/**
 * Save cookie consent data to localStorage
 * Sets expiry to 365 days from now
 */
export function saveConsentData(state: ConsentState, preferences: CookiePreferences): void {
  if (typeof window === 'undefined') {
    return // SSR safety
  }

  try {
    const now = Date.now()
    const expiresAt = now + CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000

    const data: ConsentData = {
      state,
      preferences,
      timestamp: now,
      expiresAt,
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (error) {
    console.error('Failed to save cookie consent data:', error)
  }
}

/**
 * Clear cookie consent data from localStorage
 */
export function clearConsentData(): void {
  if (typeof window === 'undefined') {
    return // SSR safety
  }

  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.error('Failed to clear cookie consent data:', error)
  }
}

/**
 * Check if user has valid consent
 * Returns true if consent exists and hasn't expired
 */
export function hasValidConsent(): boolean {
  return getConsentData() !== null
}

/**
 * Get default cookie preferences
 * Necessary cookies always enabled, others disabled by default
 */
export function getDefaultPreferences(): CookiePreferences {
  return {
    necessary: true,
    analytics: false,
    marketing: false,
  }
}

/**
 * Get accepted-all preferences
 */
export function getAcceptedAllPreferences(): CookiePreferences {
  return {
    necessary: true,
    analytics: true,
    marketing: true,
  }
}
