import { BriefcaseIcon, ShieldAlertIcon, EuroIcon, HeartPulseIcon } from 'lucide-react'
import Image from 'next/image'

export type ExpertiseArea = {
  title: string
  description: string
}

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

const icons = {
  dismissal: BriefcaseIcon,
  mobbing: ShieldAlertIcon,
  claims: EuroIcon,
  accidents: HeartPulseIcon,
}

export default function ExpertiseAreas({ dict }: { dict: ExpertiseDict }) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* <h3 className="text-3xl font-bold text-secondary-900 text-center mb-12">
          {dict.home.expertise.title}
        </h3> */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dict.home.expertise.areas.map((area: ExpertiseArea, index: number) => {
            const Icon = [icons.dismissal, icons.mobbing, icons.claims, icons.accidents][index]
            
            return (
              <div key={area.title} className="relative group">
                <div className="absolute inset-0 bg-primary-700 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="flex flex-col items-center p-6 text-center space-y-4">
                  <Icon className="h-12 w-12 text-primary-700" />
                  <h3 className="text-xl font-semibold text-secondary-900">{area.title}</h3>
                  <p className="text-secondary-600">{area.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12">
          <div className="relative w-full h-[400px]">
            <Image
              src="/images/inici.jpeg"
              alt="Legal expertise background"
              fill
              className="object-cover rounded-lg object-[30_20px]"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 