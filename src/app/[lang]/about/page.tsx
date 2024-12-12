import { getDictionary } from '@/lib/dictionaries'
import React from 'react'

export default async function About({
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
            {dict.about.title}
          </h1>
        </div>

        <div className="mt-16">
          <div className="space-y-16">
            {/* Mission Section */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                {dict.about.mission}
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                {dict.about.missionText}
              </p>
            </div>

            {/* Vision Section */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                {dict.about.vision}
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                {dict.about.visionText}
              </p>
            </div>

            {/* Help Section */}
            <div className="bg-gray-100 rounded-lg px-6 py-8">
              <h2 className="text-3xl font-extrabold text-gray-900">
                {dict.about.help}
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                {dict.about.helpText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
