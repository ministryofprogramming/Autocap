'use client'

import { useCookieConsent } from '@/hooks/useCookieConsent'

export function CookieSettingsButton() {
  const { openPreferences } = useCookieConsent()

  return (
    <button
      onClick={openPreferences}
      className="text-left text-sm text-gray-400 transition-colors hover:text-white"
    >
      Cookie Settings
    </button>
  )
}
