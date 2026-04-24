'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

interface LanguageSelectorProps {
  className?: string
}

type Language = 'en' | 'sv'

const languages = {
  en: { flag: '🇬🇧', label: 'English' },
  sv: { flag: '🇸🇪', label: 'Swedish' },
} as const

export function LanguageSelector({ className = '' }: LanguageSelectorProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en')
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language)
    setIsOpen(false)
    // Phase 1: Visual only - no actual language switching
  }

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  // Close on Escape key
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }

  return (
    <div
      ref={dropdownRef}
      role="group"
      aria-label="Language selector (coming soon)"
      className={`relative ${className}`.trim()}
      onKeyDown={handleKeyDown}
    >
      {/* Dropdown Button */}
      <button
        type="button"
        onClick={handleToggle}
        aria-label={`Current language: ${languages[selectedLanguage].label}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="flex items-center gap-2 rounded px-3 py-2 text-2xl transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2 cursor-pointer"
      >
        <span aria-hidden="true">{languages[selectedLanguage].flag}</span>
        <ChevronDown
          className={`h-4 w-4 text-gray-600 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          role="menu"
          className="absolute right-0 top-full mt-2 w-48 rounded-lg bg-white py-2 shadow-lg ring-1 ring-gray-200 z-50"
        >
          {Object.entries(languages).map(([code, { flag, label }]) => (
            <button
              key={code}
              type="button"
              role="menuitem"
              onClick={() => handleLanguageSelect(code as Language)}
              aria-label={label}
              className={`flex w-full items-center gap-3 px-4 py-2 text-left text-sm transition-colors ${
                selectedLanguage === code
                  ? 'bg-gray-50 text-[#C8102E] font-semibold'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-xl" aria-hidden="true">
                {flag}
              </span>
              <span>{label}</span>
              {selectedLanguage === code && (
                <span className="ml-auto text-[#C8102E]" aria-hidden="true">
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
