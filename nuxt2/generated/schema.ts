import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Artwork
 *
 *
 */
export interface Artwork extends SanityDocument {
  _type: "artwork";

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Date — `number`
   *
   *
   */
  date?: number;

  /**
   * Dimensions — `string`
   *
   *
   */
  dimensions?: string;

  /**
   * Location — `localeString`
   *
   *
   */
  location?: LocaleString;

  /**
   * Display on website — `boolean`
   *
   *
   */
  display?: boolean;

  /**
   * Medium — `array`
   *
   *
   */
  medium?: Array<SanityKeyedReference<Medium>>;

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Biography
 *
 *
 */
export interface Bio extends SanityDocument {
  _type: "bio";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Born — `date`
   *
   *
   */
  born?: string;

  /**
   * Died — `date`
   *
   *
   */
  died?: string;

  /**
   * Biography Part 1 — `localeRichText`
   *
   *
   */
  biography?: LocaleRichText;

  /**
   * Biography Part 2 — `localeRichText`
   *
   *
   */
  exhibitions?: LocaleRichText;
}

/**
 * Exhibition
 *
 *
 */
export interface Exhibition extends SanityDocument {
  _type: "exhibition";

  /**
   * Gallery — `string`
   *
   *
   */
  gallery?: string;

  /**
   * Year — `number`
   *
   *
   */
  year?: number;

  /**
   * Location — `localeString`
   *
   *
   */
  location?: LocaleString;

  /**
   * Solo — `boolean`
   *
   *
   */
  solo?: boolean;
}

/**
 * Page Meta
 *
 *
 */
export interface Meta extends SanityDocument {
  _type: "meta";

  /**
   * Meta title — `localeString`
   *
   * Site title, shown on browser tabs and search engines
   */
  title?: LocaleString;

  /**
   * Meta description — `localeString`
   *
   * Site description, shown in search engine results
   */
  description?: LocaleString;

  /**
   * Contact email — `string`
   *
   * Displayed on the estate page
   */
  contact?: string;

  /**
   * Social title — `localeString`
   *
   * Displayed on Facebook and Twitter shares (max 60 characters)
   */
  ogTitle?: LocaleString;

  /**
   * Social description — `localeString`
   *
   * Displayed on Facebook and Twitter shares (max 65 characters)
   */
  ogDescription?: LocaleString;

  /**
   * Social image — `image`
   *
   * Image displayed when link to home is posted on Facebook and Twitter
   */
  ogImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Social title — `localeString`
   *
   * Displayed on Facebook and Twitter shares (max 60 characters)
   */
  ogTitle?: LocaleString;

  /**
   * Social description — `localeString`
   *
   * Displayed on Facebook and Twitter shares (max 65 characters)
   */
  ogDescription?: LocaleString;

  /**
   * Main image — `captionImage`
   *
   *
   */
  mainImage?: CaptionImage;
}

/**
 * Photography
 *
 *
 */
export interface Photography extends SanityDocument {
  _type: "photography";

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Date — `number`
   *
   *
   */
  date?: number;

  /**
   * Main image — `captionImage`
   *
   *
   */
  mainImage?: CaptionImage;
}

/**
 * Video
 *
 *
 */
export interface Video extends SanityDocument {
  _type: "video";

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * mp4 Video — `file`
   *
   * Upload a video file in .mp4 format
   */
  mp4?: { _type: "file"; asset: SanityReference<any> };

  /**
   * WebM Video — `file`
   *
   * Upload a video file in .webm format
   */
  webm?: { _type: "file"; asset: SanityReference<any> };

  /**
   * Video thumbnail — `image`
   *
   * Should be the same dimensions as the video file
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Medium
 *
 *
 */
export interface Medium extends SanityDocument {
  _type: "medium";

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;
}

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export type CaptionImage = {
  _type: "captionImage";
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * Caption — `localeString`
   *
   *
   */
  caption?: LocaleString;

  /**
   * Attribution — `string`
   *
   *
   */
  Caption?: string;
};

export type LocaleRichText = {
  _type: "localeRichText";
  /**
   * English — `blockContent`
   *
   *
   */
  en?: BlockContent;

  /**
   * Polish — `blockContent`
   *
   *
   */
  pl?: BlockContent;
};

export type LocaleSlug = {
  _type: "localeSlug";
  /**
   * English — `slug`
   *
   *
   */
  en?: { _type: "en"; current: string };

  /**
   * Polish — `slug`
   *
   *
   */
  pl?: { _type: "pl"; current: string };
};

export type LocaleString = {
  _type: "localeString";
  /**
   * English — `string`
   *
   *
   */
  en?: string;

  /**
   * Polish — `string`
   *
   *
   */
  pl?: string;
};

export type Documents =
  | Artwork
  | Bio
  | Exhibition
  | Meta
  | Page
  | Photography
  | Video
  | Medium;
