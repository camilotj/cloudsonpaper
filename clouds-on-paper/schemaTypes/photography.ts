export default {
  name: 'photography',
  title: 'Photography Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'author', title: 'Author', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
    { name: 'coverImage', title: 'Cover Image', type: 'image' },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'description', title: 'Description (shown in cards)', type: 'text' },
    {
      name: 'body',
      title: 'Body Text',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
    { name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'image' }] },
  ],
}
