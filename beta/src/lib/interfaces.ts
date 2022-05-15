interface SanityBlock {
  _type: "block"
  [key: string]: any
}

interface SanityDocument {
  __i18n_lang: string
  _id: string
  _createdAt: string
  _rev: string
  _updatedAt: string
}

interface SanityImageCrop {
  _type: "sanity.imageCrop"
  bottom: number
  left: number
  right: number
  top: number
}

interface SanityImageDimensions {
  _type: "sanity.imageDimensions"
  aspectRatio: number
  height: number
  width: number
}

interface SanityImageHotspot {
  _type: "sanity.imageHotspot"
  height: number
  width: number
  x: number
  y: number
}

interface SanityImagePaletteSwatch {
  _type: "sanity.imagePaletteSwatch"
  background: string
  foreground: string
  population: number
  title: string
}

interface SanityImagePalette {
  _type: "sanity.imagePalette"
  darkMuted: SanityImagePaletteSwatch
  darkVibrant: SanityImagePaletteSwatch
  dominant: SanityImagePaletteSwatch
  lightMuted: SanityImagePaletteSwatch
  lightVibrant: SanityImagePaletteSwatch
  muted: SanityImagePaletteSwatch
  vibrant: SanityImagePaletteSwatch
}

interface SanityImageMetadata {
  _type: "sanity.imageMetadata"
  dimensions: SanityImageDimensions
  hasAlpha: boolean
  isOpaque: boolean
  lqip: string
  palette: SanityImagePalette
}

interface SanityImageAsset extends SanityDocument {
  _type: "sanity.imageAsset"
  assetId: string
  extension: string
  metadata: SanityImageMetadata
  mimeType: string
  originalFilename: string
  path: string
  sha1hash: string
  size: number
  uploadId: string
  url: string
}

declare type SanityKeyed<T> = T extends object ? T & {
  _key: string
} : T

declare type SanityReference<_T> = {
  _type: "reference"
  _ref: string
}

type PortableText = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image"
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export interface Image {
  _key?: string
  _type: "image"
  asset: SanityReference<SanityImageAsset>
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot
}

interface LocaleString {
  en: string
  pl: string
}

interface MetaData {
  canonicalURL: string
  description: string
  title: string
}

export interface SocialCard {
  description: string
  image: Image
  title: string
}

export interface Media {
  _key: string
  date?: number
  image: Image
}

export interface Artwork {
  display: boolean
  medium: LocaleString
  title: string
}

export interface Label {
  key: string
  text: LocaleString
}

export interface Navigation {
  en: NavItem
  pl: NavItem
}

export interface NavItem {
  label: string
  url: string
}

export interface Page extends SanityDocument {
  __i18n_refs: Page
  body: PortableText
  facebook: SocialCard
  meta: MetaData
  slug: string
  title: string
  twitter: SocialCard
}

export interface photography extends Media {
  title: LocaleString
}

export interface Settings {
  en: LocaleSettings
  pl: LocaleSettings
}

export interface LocaleSettings {
  contact: string
  description: string
  ogDescription: string
  ogImage: Image
  ogTitle: string
  title: string
}

export interface Videos extends Media {
  mp4: string
  title: LocaleString
  webm: string
}

export interface HeadProps {
  description: string
  ogDescription: string
  ogImage: Image
  ogSiteName?: string
  ogTitle: string
  ogURL: string
  title: string
  twitterCreator?: string
  twitterDescription: string
  twitterImage: Image
  twitterTitle: string
}
