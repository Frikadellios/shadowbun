import type { Socials } from '@/types'

export const NAVIGATION = [
  { href: '/', title: 'nav.home' },
  { href: '/blog', title: 'nav.blog' },
  { href: '/tags', title: 'nav.tags' },
  { href: '/projects', title: 'nav.projects' },
  { href: '/about', title: 'nav.about' }
] as const

export const SOCIALS: Socials = [
  {
    NAME: 'Email',
    ICON: 'email',
    TEXT: 'devopsick@pm.me',
    HREF: 'mailto:devopsick@pm.me'
  },
  {
    NAME: 'Github',
    ICON: 'github',
    TEXT: 'GitHub',
    HREF: 'https://github.com/Frikadellios'
  },
  {
    NAME: 'Linkedin',
    ICON: 'linkedin',
    TEXT: 'Linkedin',
    HREF: 'https://linkedin.com'
  },

  {
    NAME: 'Twitter',
    ICON: 'twitter-x',
    TEXT: 'DevOpSick',
    HREF: 'https://twitter.com/devopsick'
  }
]
