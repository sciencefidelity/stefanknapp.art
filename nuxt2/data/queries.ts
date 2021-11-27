import groq from "groq"

export const artQuery = groq`*[_type == "page"] | order(_createdAt) [0]{
  mainImage, ogDescription, ogTitle, title, slug
}`

export const artworkQuery = groq`*[_type == "artwork" && display] | order(date) {
  _id, date, mainImage, "meta": mainImage.asset->metadata, medium[0]->, title
}`

export const bioQuery = groq`*[_type == "bio"][0]{ biography, exhibitions }`

export const estateQuery = groq`*[_type == "page"] | order(_createdAt) [2]{
  mainImage, ogDescription, ogTitle, title, slug
}`

export const exhibitionQuery = groq`*[_type == "exhibition"] | order(year) {
  _id, gallery, location, solo, year
}`

export const lifeQuery = groq`*[_type == "page"] | order(_createdAt) [1]{
  mainImage, ogDescription, ogTitle, title, slug
}`

export const metaQuery = groq`*[_type == "meta"][0]{
  contact, description, ogDescription, ogImage, ogTitle, title
}`

export const pageQuery = groq`*[_type == "page"] | order(_createdAt) {
  _id, title, slug
}`

export const photoQueryOne = groq`*[_type == "photography"] | order(date) [4]{
  date, mainImage, "meta": mainImage.asset->metadata, title
}`

export const photoQueryTwo = groq`*[_type == "photography"] | order(date) [5] {
  date, mainImage, "meta": mainImage.asset->metadata, title
}`

export const photoQueryThree = groq`*[_type == "photography"] | order(date) [3] {
  date, mainImage, "meta": mainImage.asset->metadata, title
}`

export const videoQuery = groq`*[_type == "video"]{
  "imageUrl": mainImage.asset->url,
  "mp4Url": mp4.asset->url,
  "webmUrl": webm.asset->url,
  title
}`
