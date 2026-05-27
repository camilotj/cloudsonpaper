export default {
  name: 'film',
  title: 'Film',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'author', title: 'Author', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
    { name: 'coverImage', title: 'Cover Image', type: 'image' },
    {
      name: 'youtubeId',
      title: 'YouTube Video ID',
      type: 'string',
      description: 'Just the ID — e.g. dQw4w9WgXcQ, not the full URL',
    },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
    { name: 'description', title: 'Description', type: 'text' },
    {
      name: 'body',
      title: 'Body Text (shown under video)',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
    {
      name: 'gallery',
      title: 'Additional Images (optional)',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
}
