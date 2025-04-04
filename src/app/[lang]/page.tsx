import { getDictionary } from '@/lib/dictionaries'
import Link from 'next/link'
import ExpertiseAreas from '@/components/ExpertiseAreas'
import type { ExpertiseArea } from '@/components/ExpertiseAreas'

type ExpertiseDict = {
  home: {
    title: string
    subtitle: string
    description: string
    cta: string
    expertise: {
      title: string
      areas: ExpertiseArea[]
    }
  }
}

export default async function Home({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang)

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        {/* Hero section */}
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-secondary-900 sm:text-5xl md:text-6xl">
            <span className="block">{dict.home.title}</span>
            <span className="block text-primary-700 mt-3">{dict.home.subtitle}</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-secondary-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {dict.home.description}
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link
                href={`/${lang}/contact`}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-700 hover:bg-primary-800 md:py-4 md:text-lg md:px-10"
              >
                {dict.home.cta}
              </Link>
            </div>
          </div>
        </div>

        {/* Expertise Areas */}
        <ExpertiseAreas dict={dict as unknown as ExpertiseDict} />
      </div>
    </div>
  )
}
