'use client'

import { DefaultSeo } from 'next-seo'
import seoConfig from '../next-seo.config'

export function NextSEOProvider() {
  return <DefaultSeo {...seoConfig} />
}
