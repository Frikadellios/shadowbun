// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import { toString } from 'mdast-util-to-string'
// src/lib/readTime.ts
import { calculateReadingTime } from './calculateReadingTime'

export function remarkReadingTime() {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  return (tree: unknown, { data }: any) => {
    const textOnPage = toString(tree)
    const readingTime = calculateReadingTime(textOnPage)
    data.astro.frontmatter.minutesRead = readingTime
  }
}
