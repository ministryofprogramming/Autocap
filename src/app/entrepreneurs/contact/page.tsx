import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/entrepreneurs/Breadcrumb'
import { ContactForm } from '@/components/entrepreneurs/ContactForm'
import { entrepreneursContent } from '@/content/entrepreneurs'

export const metadata: Metadata = {
  title: 'Contact Us · For Workshop Owners',
  description: "Start a confidential conversation about your workshop's future.",
}

export default function ContactPage() {
  const { contact } = entrepreneursContent

  return (
    <main className="min-h-screen bg-[#D8E4DC]">
      {/* Page Header */}
      <section className="px-6 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Entrepreneurs', href: '/entrepreneurs' },
              { label: "Let's Talk" },
            ]}
          />
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold text-[#1C1C1E] md:text-5xl">
              {contact.title}
            </h1>
            <p className="text-lg leading-relaxed text-gray-700">{contact.subtext}</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 pb-20 md:px-8">
        <div className="mx-auto max-w-2xl">
          <ContactForm successMessage={contact.successMessage} />
        </div>
      </section>
    </main>
  )
}
