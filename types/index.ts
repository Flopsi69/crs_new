export interface CaseStudy {
  id: number
  url: string
  title: string
  description: string | null
  metaDescription: string | null
  metaKeywords: string | null
  clientId: number
  preview1: object
  preview2: object
  status: 'ACTIVE' | 'INACTIVE'
  location: object
  createdAt: string
  updatedAt: string
  client: {
    id: number
    name: string
    siteUrl: string
    logo: string
    type: string
    baseInfo: string
    status: 'ACTIVE' | 'INACTIVE'
    createdAt: string
    updatedAt: string
    assets: any
  }
}
