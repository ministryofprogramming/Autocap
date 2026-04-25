import Link from 'next/link'
import Image from 'next/image'
import { COMPANY_INFO, NAVIGATION_LINKS } from '@/lib/constants'
import { CookieSettingsButton } from '@/components/cookie/CookieSettingsButton'

export function Footer() {
  const footerSections = {
    company: NAVIGATION_LINKS.slice(0, 3),
    forYou: NAVIGATION_LINKS.slice(3, 5),
    resources: NAVIGATION_LINKS.slice(5),
  }

  return (
    <footer className="bg-[#1C1C1E] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        {/* Footer content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company info */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image
                src="/logos/autocap-white.png"
                alt="AutoCap Group"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {COMPANY_INFO.tagline}
            </p>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerSections.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For You links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">For You</h3>
            <ul className="space-y-3">
              {footerSections.forYou.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerSections.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <CookieSettingsButton />
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-400 text-center md:text-left">
            {COMPANY_INFO.name} · {COMPANY_INFO.address} - {COMPANY_INFO.tagline}
          </p>
        </div>
      </div>
    </footer>
  )
}
