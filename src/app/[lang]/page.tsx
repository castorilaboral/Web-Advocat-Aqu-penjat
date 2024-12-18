import { getDictionary } from '@/lib/dictionaries'
import Link from 'next/link'
import Image from 'next/image'

export default async function Home({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang)

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        {/* Grid container */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl tracking-tight font-extrabold text-secondary-900 sm:text-5xl md:text-6xl">
                <span className="block">{dict.home.title}</span>
                <span className="block text-primary-700 mt-3">{dict.home.subtitle}</span>
              </h1>
              <p className="mt-3 text-base text-secondary-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
                {dict.home.description}
              </p>
              <div className="mt-5 sm:mt-8">
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
          </div>

          {/* Right column */}
          <div className="flex items-center justify-center">
            <div className="relative w-[700px] h-[533px]">
              <Image
                src="/images/inici.jpeg"
                alt="Hero image"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
