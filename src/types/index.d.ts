export type PageSEO = {
  TITLE: {
    [key: string]: string
  }
  DESCRIPTION: {
    [key: string]: string
  }
}

export type CATEGORIES = {
  TITLE: {
    [key: string]: string
  }
  DESCRIPTION: {
    [key: string]: string
  }
}

export interface Site extends PageSEO {
  AUTHOR: string
}

export type Links = {
  TEXT: {
    [key: string]: string
  }
  HREF: string
}[]

export type Socials = {
  NAME: string
  ICON: string
  TEXT: string
  HREF: string
}[]
