import 'server-only'
import type { Dictionary } from '@/types/dictionary'

// Import dictionaries statically to ensure they are available
import ca from './dictionaries/ca.json'
import es from './dictionaries/es.json'
import en from './dictionaries/en.json'

const dictionaries: Record<string, Dictionary> = {
  ca,
  es,
  en,
}

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  if (!(locale in dictionaries)) {
    throw new Error(`Dictionary not found for locale: ${locale}`)
  }
  return dictionaries[locale]
}
