'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ResponsiveImageProps {
  src: string
  alt: string
  className?: string
}

export default function ResponsiveImage({ src, alt, className = '' }: ResponsiveImageProps) {
  const [error, setError] = useState(false)

  if (error) {
    return <div className={`bg-gray-200 ${className}`}>{alt}</div>
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={`object-cover ${className}`}
      onError={() => setError(true)}
      sizes="100vw"
      priority
    />
  )
}
