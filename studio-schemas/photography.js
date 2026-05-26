export default {
  name: 'photography',
  title: 'Photography Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
    { name: 'coverImage', title: 'Cover Image', type: 'image' },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'description', title: 'Description / Project Text', type: 'text' },
    { name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'image' }] },
  ],
}
