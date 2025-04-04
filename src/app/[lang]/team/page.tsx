import { getDictionary } from '@/lib/dictionaries'
import Image from 'next/image';

export default async function Team({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang)

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-secondary-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {dict.team.title}
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-secondary-500 sm:mt-4">
            {dict.team.subtitle}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div className="lg:flex lg:items-start lg:space-x-8">
              <div className="flex-1 min-w-0">
                <h2 className="text-3xl font-bold text-secondary-900">
                  {dict.team.lawyer.name}
                </h2>
                <p className="text-lg font-medium text-primary-700">
                  {dict.team.lawyer.position}
                </p>
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-secondary-900 mb-2">
                      Educació
                    </h3>
                    <ul className="space-y-2">
                      {dict.team.lawyer.education.map((item: string, index: number) => (
                        <li key={index} className="text-secondary-500">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary-900 mb-2">
                      Experiència
                    </h3>
                    <ul className="space-y-2">
                      {dict.team.lawyer.experience.map((item: string, index: number) => (
                        <li key={index} className="text-secondary-500">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-secondary-500">{dict.team.lawyer.languages}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-[400px] h-[533px]">
              <Image
                src="/images/equip.jpeg"
                alt="Our Team"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="rounded-lg object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}