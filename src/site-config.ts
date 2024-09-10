interface SiteConfig {
  author: string
  title: string
  description: string
  lang: string
  ogLocale: string
  shareMessage: string
  paginationSize: number
}

export const SITE = 'https://adminflare.pages.dev'

export const siteConfig: SiteConfig = {
  author: 'Hrihorii Ilin', // Site author
  title: 'Astro Theme OpenBlog', // Site title.
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // Description to display in the meta tags
  shareMessage: 'Share this post', // Message to share a post on social media
  paginationSize: 6,
  lang: '',
  ogLocale: ''
}
