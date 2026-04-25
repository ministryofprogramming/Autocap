'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  getConsentData,
  saveConsentData,
  clearConsentData,
  getDefaultPreferences,
  getAcceptedAllPreferences,
  type ConsentState,
  type CookiePreferences,
} from '@/lib/cookieConsent'

export interface UseCookieConsentReturn {
  /** Current consent state */
  consentState: ConsentState | null
  /** Current cookie preferences */
  preferences: CookiePreferences
  /** Whether the banner should be shown */
  showBanner: boolean
  /** Accept all cookies */
  acceptAll: () => void
  /** Reject all optional cookies (keep only necessary) */
  rejectAll: () => void
  /** Set custom preferences */
  setCustomPreferences: (preferences: CookiePreferences) => void
  /** Clear all consent data */
  clearConsent: () => void
  /** Open preferences modal */
  openPreferences: () => void
  /** Close preferences modal */
  closePreferences: () => void
  /** Whether preferences modal is open */
  showPreferencesModal: boolean
}

export function useCookieConsent(): UseCookieConsentReturn {
  const [consentState, setConsentState] = useState<ConsentState | null>(null)
  const [preferences, setPreferences] = useState<CookiePreferences>(getDefaultPreferences())
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferencesModal, setShowPreferencesModal] = useState(false)

  // Initialize from localStorage on mount
  useEffect(() => {
    const data = getConsentData()

    if (data) {
      setConsentState(data.state)
      setPreferences(data.preferences)
      setShowBanner(false)
    } else {
      setConsentState(null)
      setPreferences(getDefaultPreferences())
      setShowBanner(true)
    }
  }, [])

  const acceptAll = useCallback(() => {
    const allPreferences = getAcceptedAllPreferences()
    setConsentState('accepted')
    setPreferences(allPreferences)
    setShowBanner(false)
    setShowPreferencesModal(false)
    saveConsentData('accepted', allPreferences)
  }, [])

  const rejectAll = useCallback(() => {
    const defaultPreferences = getDefaultPreferences()
    setConsentState('rejected')
    setPreferences(defaultPreferences)
    setShowBanner(false)
    setShowPreferencesModal(false)
    saveConsentData('rejected', defaultPreferences)
  }, [])

  const setCustomPreferences = useCallback((newPreferences: CookiePreferences) => {
    // Ensure necessary cookies are always enabled
    const safePreferences = {
      ...newPreferences,
      necessary: true,
    }
    setConsentState('custom')
    setPreferences(safePreferences)
    setShowBanner(false)
    setShowPreferencesModal(false)
    saveConsentData('custom', safePreferences)
  }, [])

  const clearConsent = useCallback(() => {
    setConsentState(null)
    setPreferences(getDefaultPreferences())
    setShowBanner(true)
    setShowPreferencesModal(false)
    clearConsentData()
  }, [])

  const openPreferences = useCallback(() => {
    setShowPreferencesModal(true)
  }, [])

  const closePreferences = useCallback(() => {
    setShowPreferencesModal(false)
  }, [])

  return {
    consentState,
    preferences,
    showBanner,
    acceptAll,
    rejectAll,
    setCustomPreferences,
    clearConsent,
    openPreferences,
    closePreferences,
    showPreferencesModal,
  }
}
