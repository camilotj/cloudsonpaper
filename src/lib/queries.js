import { client } from './sanityClient'

export const categoryToType = {
  'articles-and-essays': 'article',
  photography: 'photography',
  film: 'film',
}

const typeToCategory = {
  article: 'articles-and-essays',
  photography: 'photography',
  film: 'film',
}

function normalize(doc) {
  return {
    _id: doc._id,
    title: doc.title,
    slug: doc.slug,
    category: typeToCategory[doc._type],
    year: doc.publishedAt ? new Date(doc.publishedAt).getFullYear() : '',
    coverImage: doc.coverImage,
    description: doc.description || '',
    tags: doc.tags || [],
    youtubeId: doc.youtubeId || null,
    body: doc.body || null,
    gallery: doc.gallery || [],
    readTime: doc.readTime || null,
    author: doc.author || '',
  }
}

const cardFields = `
  _id, _type, title,
  "slug": slug.current,
  publishedAt, coverImage, description, tags, youtubeId
`

const fullFields = `
  _id, _type, title,
  "slug": slug.current,
  publishedAt, coverImage, description, tags, youtubeId,
  body, gallery, readTime, author
`

export async function fetchAll() {
  const docs = await client.fetch(
    `*[_type in ["article", "photography", "film"]] | order(publishedAt desc) { ${cardFields} }`
  )
  return docs.map(normalize)
}

export async function fetchByType(type) {
  const docs = await client.fetch(
    `*[_type == $type] | order(publishedAt desc) { ${cardFields} }`,
    { type }
  )
  return docs.map(normalize)
}

export async function fetchBySlug(type, slug) {
  const doc = await client.fetch(
    `*[_type == $type && slug.current == $slug][0] { ${fullFields} }`,
    { type, slug }
  )
  return doc ? normalize(doc) : null
}
