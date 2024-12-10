import Link from 'next/link'
import LanguageSelector from './LanguageSelector'
import { getDictionary } from '@/lib/dictionaries'

export default async function Header({ lang }: { lang: string }) {
  const dict = await getDictionary(lang)

  const navigation = [
    { name: dict.navigation.home, href: `/${lang}` },
    { name: dict.navigation.about, href: `/${lang}/about` },
    { name: dict.navigation.team, href: `/${lang}/team` },
    { name: dict.navigation.blog, href: `/${lang}/blog` },
    { name: dict.navigation.contact, href: `/${lang}/contact` },
  ]

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href={`/${lang}`} className="text-2xl font-bold text-primary-800">
                Castori Laboral
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-secondary-700 hover:text-primary-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <LanguageSelector lang={lang} />
          </div>
        </div>
      </nav>
    </header>
  )
}
