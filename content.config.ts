import { defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: {
      type: 'page',
      sources: [
        {
          type: 'fs',
          base: 'content/articles'
        }
      ]
    }
  }
})