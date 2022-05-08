export interface Artwork {
  _key: string
  date: string
  display: string
  image: Image
  medium: LocaleString
  title: string
}

export interface Label {
  text: LocaleString
}

export interface Navigation {
  label: LocaleString
  slug: LocaleString
}

export interface Page {
  __i18n_lang: string
  __i18n_refs?: Page
  __i18n_base?: Page
  _id: String
  _type: "page"
  facebook: SocialCard
  body: PortableText
  meta: MetaData
  slug: string
  title: string
  twitter: SocialCard
}

export interface Photography {
  _key: String
  date: string
  image: Image
  title: LocaleString
}

export interface Settings {
  contact: string
  description: LocaleString
  ogDescription: LocaleString
  ogImage: LocaleString
  ogTitle: LocaleString
  title: LocaleString
}

export interface Video {
  _key: string
  image: Image
  mp4: VideoAsset
  title: LocaleString
  webm: VideoAsset
}

export interface Image {
  _type: "image"
  asset: SanityReference<SanityImageAsset>
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot
}

interface LocaleString {
  en: string
  pl?: string
}

interface MetaData {
  canonicalURL: string
  description: string
  title: string
}

interface SocialCard {
  description: string
  image: Image
  title: string
}

interface VideoAsset {
  mimeType: string
  url: string
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

interface SanityBlock {
  _type: "block"
  [key: string]: any
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

interface SanityImageMetadata {
  _type: "sanity.imageMetadata"
  dimensions: SanityImageDimensions
  hasAlpha: boolean
  isOpaque: boolean
  lqip: string
  palette: SanityImagePalette
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

interface SanityImagePaletteSwatch {
  _type: "sanity.imagePaletteSwatch"
  background: string
  foreground: string
  population: number
  title: string
}

declare type SanityKeyed<T> = T extends object ? T & {
  _key: string
} : T

declare type SanityReference<_T> = {
  _type: "reference"
  _ref: string
};

interface SanityDocument {
  _id: string
  _createdAt: string
  _rev: string
  _updatedAt: string
}

