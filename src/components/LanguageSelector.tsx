'use client'

import { useRouter, usePathname } from 'next/navigation'
import React from 'react'

export default function LanguageSelector({ lang }: { lang: string }) {
  const router = useRouter()
  const pathname = usePathname()

  const languages = [
    { code: 'ca', name: 'Català' },
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' },
  ]

  const redirectedPathname = (locale: string) => {
    if (!pathname) return '/'
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className="relative inline-block text-left">
      <select
        value={lang}
        onChange={(e) => router.push(redirectedPathname(e.target.value))}
        className="block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
    </div>
  )
}
