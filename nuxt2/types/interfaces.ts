export interface MetaProps {
  title: { en: string; pl: string }
  description: { en: string; pl: string }
  ogTitle: { en: string; pl: string }
  ogDescription: { en: string; pl: string }
  ogImage: {
    _type: string
    asset: { _ref: string; _type: string }
    crop: {
      _type: string
      bottom: number
      left: number
      right: number
      top: number
    }
    hotspot: {
      _type: string
      height: number
      width: number
      x: number
      y: number
    }
  }
}
