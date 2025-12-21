'use client'

import dynamic from 'next/dynamic'
import React from 'react'

const Newsletter = dynamic(
  () => import('@/components/newsletter').then((mod) => mod.Newsletter),
  {
    ssr: false,
    loading: () => <div className="h-32 w-full animate-pulse bg-muted rounded" />,
  }
)

export default function NewsletterClient() {
  return <Newsletter />
}
