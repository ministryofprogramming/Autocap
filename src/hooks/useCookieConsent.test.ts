import { renderHook, act } from '@testing-library/react'
import { useCookieConsent } from './useCookieConsent'
import {
  saveConsentData,
  getAcceptedAllPreferences,
  getDefaultPreferences,
} from '@/lib/cookieConsent'

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

describe('useCookieConsent Hook', () => {
  beforeEach(() => {
    localStorageMock.clear()
  })

  describe('Initialization', () => {
    it('shows banner when no consent exists', () => {
      const { result } = renderHook(() => useCookieConsent())
      expect(result.current.showBanner).toBe(true)
      expect(result.current.consentState).toBeNull()
    })

    it('hides banner when valid consent exists', () => {
      saveConsentData('accepted', getAcceptedAllPreferences())
      const { result } = renderHook(() => useCookieConsent())
      expect(result.current.showBanner).toBe(false)
      expect(result.current.consentState).toBe('accepted')
    })

    it('loads existing consent state', () => {
      saveConsentData('custom', { necessary: true, analytics: true, marketing: false })
      const { result } = renderHook(() => useCookieConsent())

      expect(result.current.consentState).toBe('custom')
      expect(result.current.preferences.analytics).toBe(true)
      expect(result.current.preferences.marketing).toBe(false)
    })

    it('initializes with default preferences when no consent', () => {
      const { result } = renderHook(() => useCookieConsent())

      expect(result.current.preferences).toEqual(getDefaultPreferences())
    })
  })

  describe('acceptAll', () => {
    it('accepts all cookies', () => {
      const { result } = renderHook(() => useCookieConsent())

      act(() => {
        result.current.acceptAll()
      })

      expect(result.current.consentState).toBe('accepted')
      expect(result.current.preferences).toEqual(getAcceptedAllPreferences())
      expect(result.current.showBanner).toBe(false)
    })

    it('saves consent to localStorage', () => {
      const { result } = renderHook(() => useCookieConsent())

      act(() => {
        result.current.acceptAll()
      })

      const { result: newResult } = renderHook(() => useCookieConsent())
      expect(newResult.current.consentState).toBe('accepted')
    })

    it('closes preferences modal', () => {
      const { result } = renderHook(() => useCookieConsent())

      act(() => {
        result.current.openPreferences()
      })
      expect(result.current.showPreferencesModal).toBe(true)

      act(() => {
        result.current.acceptAll()
      })
      expect(result.current.showPreferencesModal).toBe(false)
    })
  })

  describe('rejectAll', () => {
    it('rejects optional cookies', () => {
      const { result } = renderHook(() => useCookieConsent())

      act(() => {
        result.current.rejectAll()
      })

      expect(result.current.consentState).toBe('rejected')
      expect(result.current.preferences.necessary).toBe(true)
      expect(result.current.preferences.analytics).toBe(false)
      expect(result.current.preferences.marketing).toBe(false)
    })

    it('hides banner', () => {
      const { result } = renderHook(() => useCookieConsent())

      act(() => {
        result.current.rejectAll()
      })

      expect(result.current.showBanner).toBe(false)
    })

    it('saves consent to localStorage', () => {
      const { result } = renderHook(() => useCookieConsent())

      act(() => {
        result.current.rejectAll()
      })

      const { result: newResult } = renderHook(() => useCookieConsent())
      expect(newResult.current.consentState).toBe('rejected')
    })
  })

  describe('setCustomPreferences', () => {
    it('saves custom preferences', () => {
      const { result } = renderHook(() => useCookieConsent())

      const customPrefs = {
        necessary: true,
        analytics: true,
        marketing: false,
      }

      act(() => {
        result.current.setCustomPreferences(customPrefs)
      })

      expect(result.current.consentState).toBe('custom')
      expect(result.current.preferences).toEqual(customPrefs)
    })

    it('enforces necessary cookies always enabled', () => {
      const { result } = renderHook(() => useCookieConsent())

      const invalidPrefs = {
        necessary: false, // Try to disable necessary cookies
        analytics: true,
        marketing: true,
      }

      act(() => {
        result.current.setCustomPreferences(invalidPrefs)
      })

      expect(result.current.preferences.necessary).toBe(true)
    })

    it('hides banner', () => {
      const { result } = renderHook(() => useCookieConsent())

      act(() => {
        result.current.setCustomPreferences({
          necessary: true,
          analytics: false,
          marketing: true,
        })
      })

      expect(result.current.showBanner).toBe(false)
    })

    it('closes preferences modal', () => {
      const { result } = renderHook(() => useCookieConsent())

      act(() => {
        result.current.openPreferences()
      })
      expect(result.current.showPreferencesModal).toBe(true)

      act(() => {
        result.current.setCustomPreferences(getDefaultPreferences())
      })
      expect(result.current.showPreferencesModal).toBe(false)
    })
  })

  describe('clearConsent', () => {
    it('clears consent state', () => {
      const { result } = renderHook(() => useCookieConsent())

      act(() => {
        result.current.acceptAll()
      })
      expect(result.current.consentState).toBe('accepted')

      act(() => {
        result.current.clearConsent()
      })
      expect(result.current.consentState).toBeNull()
    })

    it('shows banner again', () => {
      const { result } = renderHook(() => useCookieConsent())

      act(() => {
        result.current.acceptAll()
      })
      expect(result.current.showBanner).toBe(false)

      act(() => {
        result.current.clearConsent()
      })
      expect(result.current.showBanner).toBe(true)
    })

    it('resets to default preferences', () => {
      const { result } = renderHook(() => useCookieConsent())

      act(() => {
        result.current.acceptAll()
      })

      act(() => {
        result.current.clearConsent()
      })

      expect(result.current.preferences).toEqual(getDefaultPreferences())
    })

    it('removes data from localStorage', () => {
      const { result } = renderHook(() => useCookieConsent())

      act(() => {
        result.current.acceptAll()
      })

      const { result: result1 } = renderHook(() => useCookieConsent())
      expect(result1.current.showBanner).toBe(false)

      act(() => {
        result.current.clearConsent()
      })

      const { result: result2 } = renderHook(() => useCookieConsent())
      expect(result2.current.showBanner).toBe(true)
    })
  })

  describe('Preferences Modal', () => {
    it('opens preferences modal', () => {
      const { result } = renderHook(() => useCookieConsent())
      expect(result.current.showPreferencesModal).toBe(false)

      act(() => {
        result.current.openPreferences()
      })

      expect(result.current.showPreferencesModal).toBe(true)
    })

    it('closes preferences modal', () => {
      const { result } = renderHook(() => useCookieConsent())

      act(() => {
        result.current.openPreferences()
      })
      expect(result.current.showPreferencesModal).toBe(true)

      act(() => {
        result.current.closePreferences()
      })
      expect(result.current.showPreferencesModal).toBe(false)
    })

    it('modal starts closed', () => {
      const { result } = renderHook(() => useCookieConsent())
      expect(result.current.showPreferencesModal).toBe(false)
    })
  })

  describe('State Transitions', () => {
    it('can transition from pending to accepted', () => {
      const { result } = renderHook(() => useCookieConsent())
      expect(result.current.consentState).toBeNull()

      act(() => {
        result.current.acceptAll()
      })
      expect(result.current.consentState).toBe('accepted')
    })

    it('can transition from accepted to rejected', () => {
      const { result } = renderHook(() => useCookieConsent())

      act(() => {
        result.current.acceptAll()
      })
      expect(result.current.consentState).toBe('accepted')

      act(() => {
        result.current.rejectAll()
      })
      expect(result.current.consentState).toBe('rejected')
    })

    it('can transition from accepted to custom', () => {
      const { result } = renderHook(() => useCookieConsent())

      act(() => {
        result.current.acceptAll()
      })

      act(() => {
        result.current.setCustomPreferences({
          necessary: true,
          analytics: true,
          marketing: false,
        })
      })
      expect(result.current.consentState).toBe('custom')
    })

    it('can reset from any state', () => {
      const { result } = renderHook(() => useCookieConsent())

      act(() => {
        result.current.acceptAll()
      })

      act(() => {
        result.current.clearConsent()
      })
      expect(result.current.consentState).toBeNull()
      expect(result.current.showBanner).toBe(true)
    })
  })

  describe('Edge Cases', () => {
    it('handles rapid state changes', () => {
      const { result } = renderHook(() => useCookieConsent())

      act(() => {
        result.current.acceptAll()
        result.current.rejectAll()
        result.current.acceptAll()
      })

      expect(result.current.consentState).toBe('accepted')
      expect(result.current.preferences).toEqual(getAcceptedAllPreferences())
    })

    it('handles modal open/close rapidly', () => {
      const { result } = renderHook(() => useCookieConsent())

      act(() => {
        result.current.openPreferences()
        result.current.closePreferences()
        result.current.openPreferences()
      })

      expect(result.current.showPreferencesModal).toBe(true)
    })
  })
})
