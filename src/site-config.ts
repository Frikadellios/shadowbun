interface SiteConfig {
  author: string
  title: string
  description: string
  lang: string
  ogLocale: string
  shareMessage: string
  paginationSize: number
}

export const SITE = 'https://shadowbun.pages.dev'

export const siteConfig: SiteConfig = {
  author: 'Hrihorii Ilin <devopsick@pm.me>', // Site author
  title: 'Astro ShadowBun Theme', // Site title.
  description: 'Starter with Astro Framework and bun package manager', // Description to display in the meta tags
  shareMessage: 'Share this post', // Message to share a post on social media
  paginationSize: 6,
  lang: 'en',
  ogLocale: 'en-US'
}
