import { getDictionary } from '@/lib/dictionaries'
import ContactForm from './ContactForm'

export default async function Contact({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang)

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {dict.contact.title}
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            {dict.contact.subtitle}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <ContactForm dict={dict.contact.form} />
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {dict.contact.info.title}
              </h2>

              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {dict.contact.info.phone}
                </h3>
                <p className="mt-2">
                  <a
                    href="tel:603603283"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    603 603 283
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {dict.contact.info.email}
                </h3>
                <p className="mt-2">
                  <a
                    href="mailto:castorilaboral@icab.cat"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    castorilaboral@icab.cat
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {dict.contact.info.schedule}
                </h3>
                <p className="mt-2 text-gray-600">
                  {dict.contact.info.scheduleText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
