import type { Metadata } from 'next'
import { contactContent } from '@/content/contact'
import { ContactCard } from '@/components/contact/ContactCard'
import { GeneralContactForm } from '@/components/contact/GeneralContactForm'
import { CompanyInfo } from '@/components/contact/CompanyInfo'

export const metadata: Metadata = {
  title: 'Contact Us · AutoCap Group',
  description: 'Get in touch with AutoCap Group - whether you are an investor, workshop owner, or have a general inquiry.',
}

export default function ContactPage() {
  const { hero, specializedCards, generalInquiry, companyInfo } = contactContent

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-[#1C1C1E] md:text-5xl">
            {hero.title}
          </h1>
          <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
            {hero.description}
          </p>
        </div>
      </section>

      {/* Specialized Contact Cards */}
      <section className="px-6 pb-16 md:px-8 md:pb-20">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {specializedCards.map((card, index) => (
            <ContactCard key={index} {...card} />
          ))}
        </div>
      </section>

      {/* General Inquiry Form */}
      <section className="px-6 pb-16 md:px-8 md:pb-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#1C1C1E]">
            {generalInquiry.title}
          </h2>
          <GeneralContactForm successMessage={generalInquiry.successMessage} />
        </div>
      </section>

      {/* Company Contact Info */}
      <section className="px-6 pb-20 md:px-8">
        <div className="mx-auto max-w-2xl">
          <CompanyInfo {...companyInfo} />
        </div>
      </section>
    </main>
  )
}
